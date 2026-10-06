const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const json=html.match(/<script id="guide-data" type="application\/json">([\s\S]*?)<\/script>/)[1];
const app=html.match(/<script id="guide-app">([\s\S]*?)<\/script>/)[1],controls=JSON.parse(json);
assert.equal((html.match(/<!doctype html>/gi)||[]).length,1);
assert.ok(!/<(?:script|link)[^>]+(?:src|href)="\.\//.test(html),'Sin dependencias locales');
assert.ok(html.includes('https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'));new vm.Script(app);
const expected=[];
for(const [prefix,end] of [['1.2',9],['1.3',11],['1.4',10],['1.5',5],['2.2',7],['2.3',2],['2.4',4],['2.5',9]])for(let n=2;n<=end;n++)expected.push(`A.${prefix}.${n}`);
for(let n=3;n<=31;n++)expected.push(`A.3.${n}`);
assert.deepEqual(controls.map(c=>c.id),expected);
for(const c of controls){
 for(const key of ['meaning','interpretation','implementer','implement','auditor','audit','criterion','original'])assert.ok(c[key]?.trim(),`${c.id}: ${key}`);
 assert.equal(c.rubric.length,5);assert.equal(new Set(c.rubric).size,5);
 assert.ok(c.original.startsWith('Control '+c.id+':'));assert.ok(c.original.includes('Texto del Control'));assert.ok(c.original.includes('Muy Alto:'));
}
const sourcePath=path.join(root,'..','contenido.txt');
if(fs.existsSync(sourcePath)){
 const source=fs.readFileSync(sourcePath,'utf8'),matches=[...source.matchAll(/^Control (A\.[\d.]+): .+$/gm)];
 for(let i=0;i<matches.length;i++){const block=source.slice(matches[i].index,matches[i+1]?.index),last=/^\s*Muy Alto: [^\n]+/m.exec(block);assert.equal(controls[i].original,block.slice(0,last.index+last[0].length).trim());}
}
const els=new Map(),handlers={},storage=new Map(),classes=new Set();
function el(key){if(!els.has(key))els.set(key,{value:'',innerHTML:'',textContent:'',hidden:false,checked:false,dataset:{},style:{},open:false,setAttribute(k,v){this[k]=v;},removeAttribute(k){delete this[k];},addEventListener(){},focus(){},select(){},remove(){},click(){},showModal(){this.open=true;},close(){this.open=false;}});return els.get(key);}
el('#guide-data').textContent=json;
const context=vm.createContext({document:{getElementById:id=>el('#'+id),querySelector:el,querySelectorAll:()=>[],addEventListener:(type,fn)=>handlers[type]=fn,createElement:()=>el('#temporary'),body:{appendChild(){}},execCommand:()=>false,documentElement:{classList:{toggle:(key,on)=>on?classes.add(key):classes.delete(key),contains:key=>classes.has(key)}}},window:{scrollTo(){},addEventListener(){},matchMedia:()=>({matches:false}),isSecureContext:false,print(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},navigator:{},location:{hash:''},setTimeout(){},clearTimeout(){},confirm:()=>true,console});
const run=s=>vm.runInContext(s,context);run(app);assert.equal(run('filtered().length'),31);
for(const [view,count] of [['a1',31],['a2',18],['a3',29],['resumen',78],['oral',78]]){run(`view='${view}';query='';domain='all';render()`);assert.equal(run('filtered().length'),count);assert.ok(!el('#content').innerHTML.includes('undefined'),view);}
run("view='a1';query='A.3.25';render()");assert.equal(run('filtered()[0].id'),'A.3.25');
for(const term of ['SISCAD','DUDE','Moodle','RENIEC']){run(`query='${term}'`);assert.ok(run('filtered().length')>0,term);}
run("view='a1';query='';domain='1.3'");assert.equal(run('filtered().length'),10);
run("query='noexistente_xyz';render()");assert.ok(el('#content').innerHTML.includes('No hay coincidencias'));
for(const c of controls){run(`role='dual';globalThis.card=cardHTML(CONTROLS.find(c=>c.id==='${c.id}'),true)`);assert.equal((context.card.match(/class="level level-/g)||[]).length,5);assert.ok(context.card.includes('01 · Implementador')&&context.card.includes('02 · Auditor de sistemas'));assert.ok(context.card.includes('Texto del Control'));}
run("role='implement';globalThis.roles=rolesHTML(CONTROLS[0])");assert.ok(!context.roles.includes('Auditor de sistemas'));
run("role='audit';globalThis.roles=rolesHTML(CONTROLS[0])");assert.ok(!context.roles.includes('01 · Implementador'));
run("view='resumen';query='';domain='all';render()");assert.ok(!el('#content').innerHTML.includes('Implementador · quién'));
run("view='oral';role='dual';render()");assert.ok(el('#content').innerHTML.includes('simulation-answer" hidden'));
run('revealed=true;render()');assert.ok(!el('#content').innerHTML.includes('simulation-answer" hidden'));
const c=controls[0];run("view='a1';render()");el('[data-maturity="'+c.id+'"]').value='3';el('[data-note="'+c.id+'"]').value='';assert.equal(run(`saveEvaluation('${c.id}')`),false);
el('[data-note="'+c.id+'"]').value='Muestra: finalidades aprobadas y formularios cotejados.';el('[data-done="'+c.id+'"]').checked=true;assert.equal(run(`saveEvaluation('${c.id}')`),true);assert.equal(JSON.parse(storage.get('privacidad-unsa-v1'))[c.id].maturity,'3');
handlers.input({target:{dataset:{note:c.id},value:'Borrador no guardado'}});assert.equal(run(`get('${c.id}').note`),'Muestra: finalidades aprobadas y formularios cotejados.');assert.equal(run(`drafts['${c.id}'].note`),'Borrador no guardado');
run('setTheme(true)');assert.ok(classes.has('dark'));assert.equal(storage.get('unsa-theme'),'dark');run('setTheme(false)');assert.ok(!classes.has('dark'));
const csv=run('csvText()');assert.ok(csv.includes('Texto aportado completo'));assert.ok(csv.includes('Muy bajo / crítico'));assert.ok(csv.includes('SELECT dni'));for(const id of expected)assert.ok(csv.includes('"'+id+'";'));
const backup=run('JSON.stringify({version:1,controls:saved})');context.backup={size:backup.length,text:async()=>backup};context.oldBackup={size:500,text:async()=>JSON.stringify({version:1,controls:{'A.3.3':{status:'conforme',note:'Evidencia previa',maturity:'4',done:true}}})};
(async()=>{await run("copyText('Texto de prueba')");assert.ok(el('#copy-dialog').open);assert.equal(el('#copy-text').value,'Texto de prueba');run('saved={}');await run('restore(backup)');assert.equal(run(`get('${c.id}').maturity`),'3');await run('restore(oldBackup)');assert.equal(run("get('A.3.3').maturity"),'4');run("query='';domain='all';view='a3';render()");assert.ok(el('#content').innerHTML.includes('✓ Estudiado'));console.log('OK: HTML autónomo; 78 controles y originales íntegros; 390 criterios; 5 vistas; filtros, 3 roles, simulación, tema, guardado, borradores, CSV, copia alternativa y respaldos compatibles.');})().catch(e=>{console.error(e);process.exitCode=1;});
