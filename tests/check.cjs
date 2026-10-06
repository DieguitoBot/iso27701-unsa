const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const elements = new Map();
const attributes = new Map();
const local = new Map();
function element(key) {
  if (!elements.has(key)) elements.set(key, {
    value: '', textContent: '', style: {}, dataset: {}, hidden: false, checked: false,
    focus() {}, click() {}, classList: { toggle() {} },
    setAttribute(k, v) { this[k] = v; }, removeAttribute(k) { delete this[k]; },
    showModal() { this.open = true; }, close() { this.open = false; },
    set innerHTML(html) {
      this.html = html;
      if (key === '#dialog-body') {
        attributes.set('[data-view]', [...html.matchAll(/data-view="([^"]+)"/g)].map(m => ({ dataset: { view: m[1] }, setAttribute(k,v) { this[k] = v; } })));
        attributes.set('[data-detail]', [...html.matchAll(/data-detail="([^"]+)"/g)].map(m => ({ dataset: { detail: m[1] }, hidden: false })));
      }
    }, get innerHTML() { return this.html || ''; }
  });
  return elements.get(key);
}
const context = vm.createContext({
  document: { querySelector: element, querySelectorAll: s => attributes.get(s) || [], addEventListener() {} },
  window: { scrollTo() {}, addEventListener() {}, print() {} }, location: { hash: '' },
  localStorage: { getItem: k => local.get(k) || null, setItem: (k,v) => local.set(k,v) },
  setTimeout() {}, clearTimeout() {}, confirm: () => true, console
});
const run = code => vm.runInContext(code, context);
run(fs.readFileSync(path.join(root,'data.js'),'utf8'));
run(fs.readFileSync(path.join(root,'app.js'),'utf8'));
const controls = JSON.parse(run('JSON.stringify(CONTROLS)'));
const expected = [];
for (const [prefix,end] of [['1.2',9],['1.3',11],['1.4',10],['1.5',5],['2.2',7],['2.3',2],['2.4',4],['2.5',9]])
  for(let n=2;n<=end;n++) expected.push(`A.${prefix}.${n}`);
for(let n=3;n<=31;n++) expected.push(`A.3.${n}`);
assert.deepEqual(controls.map(c=>c.id),expected);
for (const c of controls) {
  for (const key of ['title','meaning','interpretation','implementer','implement','auditor','audit','criterion']) assert.ok(c[key]?.trim().length > 0, `${c.id}: ${key}`);
  assert.equal(c.rubric.length,5);
  assert.equal(new Set(c.rubric).size,5);
  assert.ok(c.rubric.every(s=>s.length>35 && !s.includes('\nPDF')));
  assert.equal(c.b,c.id.replace(/^A/, 'B'));
  run(`showControl(${JSON.stringify(c.id)})`);
  const html=element('#dialog-body').innerHTML;
  assert.equal((html.match(/class="rubric-level/g)||[]).length,5);
  for(const label of ['Quién lo hará','Cómo lo hará','Interpretación','De qué trata','Muy bajo','Muy alto']) assert.ok(html.includes(label),`${c.id}: ${label}`);
}
assert.equal(run('PRINCIPLES.length'),11);
assert.equal(run('QUIZ.length'),12);
for (const route of ['inicio','anexo-a','anexo-b','anexo-c','unsa','auditoria','practica','fuentes']) {
  context.location.hash='#'+route;run('render(false)');
  assert.ok(element('#main').innerHTML.includes('<h1>'),route);
  assert.ok(!element('#main').innerHTML.includes('undefined'),route);
}
for(const [table,count] of [['1',31],['2',18],['3',29]]) {
  context.location.hash='#anexo-a/'+table;run('render(false)');
  assert.ok(element('#result-count').textContent.startsWith(count+' '));
}
run("role='1';domain='1.3';query='';cards()");
assert.ok(element('#result-count').textContent.startsWith('10 '));
run("role='all';domain='all';query='A.3.31';cards()");
assert.ok(element('#result-count').textContent.startsWith('1 '));
run("query='zzzz-inexistente';cards()");assert.ok(element('#controls').innerHTML.includes('No hay controles'));
run("showControl('A.1.2.2')");
attributes.get('[data-view]')[2].onclick();
assert.ok(attributes.get('[data-detail]').find(x=>x.dataset.detail==='implement').hidden);
assert.ok(!attributes.get('[data-detail]').find(x=>x.dataset.detail==='audit').hidden);
attributes.get('[data-view]')[0].onclick();
assert.ok(attributes.get('[data-detail]').every(x=>!x.hidden));
element('#assessment').value='conforme';element('#maturity').value='3';element('#evidence').value='';
element('#save-control').onclick();assert.ok(element('#control-dialog').open);
element('#evidence').value='Muestra ficticia: catálogo de finalidades aprobado y formularios cotejados.';element('#studied').checked=true;
element('#save-control').onclick();assert.equal(element('#control-dialog').open,false);
assert.equal(JSON.parse(local.get('privacidad-unsa-v1'))['A.1.2.2'].maturity,'3');
run("query='';role='all';domain='all';study='done';cards()");assert.ok(element('#result-count').textContent.startsWith('1 '));
run("showControl('A.1.2.3')");element('#assessment').value='na';element('#maturity').value='2';element('#save-control').onclick();assert.ok(element('#control-dialog').open);
run('download=(content,type,name)=>{globalThis.exported={content,type,name};};exportCsv()');
assert.equal(context.exported.content.split('\r\n').length,79);
assert.ok(context.exported.content.includes('"Quién implementa"'));
assert.ok(context.exported.content.includes('"Alto"'));
assert.ok(context.exported.content.includes('"Muy alto"'));
const backup=run('JSON.stringify({version:1,controls:saved})');
context.backup={size:backup.length,text:async()=>backup};
(async()=>{
  run('saved={}');await run('restore(backup)');
  assert.equal(run("saved['A.1.2.2'].maturity"),'3');
  assert.ok(run("saved['A.1.2.2'].done"));
  console.log('OK: 78 controles (31/18/29), 390 criterios, 8 vistas, filtros, enfoques, validación, guardado, CSV y restauración JSON.');
})().catch(e=>{console.error(e);process.exitCode=1;});
