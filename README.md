# Privacidad · Guía de estudio y simulación oral UNSA

La aplicación está completa en **`index.html`**: datos, estilos y JavaScript. Descarga ese único archivo y ábrelo directamente en un navegador. No requiere Node.js, instalación ni servidor.

Se usa Tailwind CSS mediante su CDN e Inter mediante Google Fonts. El archivo incluye estilos de respaldo y fuentes del sistema para seguir siendo utilizable sin conexión. Los archivos `app.js`, `data.js` y `styles.css` pertenecen a la versión anterior: el HTML actual no los carga.

## Contenido

- 78 controles completos: A.1 (31), A.2 (18), A.3 (29).
- Objetivo, interpretación, quién implementa y cómo, quién audita y cómo, evidencia y 390 criterios de rúbrica.
- Texto original completo de cada control de `contenido.txt` en un desplegable, incluida la consulta SQL. Se conserva sin recortar; la ficha principal mantiene las correcciones educativas de la revisión anterior.
- A.1/A.2/A.3 son tablas del anexo A. No deben confundirse con los anexos B y C.

## Interacción

- Acceso directo a las tres tablas y resumen comparativo con acceso a las fichas completas.
- Búsqueda global instantánea por código, sistema, palabra, roles y texto original; filtro por dominio.
- Selector global: modo dual con columnas paralelas, solo implementador y solo auditor. En pantallas pequeñas las columnas se apilan.
- Rúbricas desplegables: rojo crítico, naranja bajo, ámbar medio, azul alto y esmeralda muy alto; cada insignia incluye su etiqueta textual.
- Simulación oral con pregunta, control aleatorio entre los resultados y guía de respuesta que se revela manualmente. No evalúa automáticamente el discurso.
- Modo oscuro persistente, impresión y copia de argumentos/SQL. Si el navegador impide copiar, permite seleccionar el texto manualmente.
- Evaluación y progreso locales, exportación CSV completa y respaldo/restauración JSON compatibles con los registros anteriores. Los borradores sobreviven a cambios de vista durante la sesión; se guardan al pulsar Guardar evaluación.

## Alcance

Material académico independiente, no oficial de ISO ni diagnóstico de la UNSA. `contenido.txt` contiene una conversación de IA: sus afirmaciones se conservan como fuente, diferenciadas de la versión revisada. Las asignaciones de cargos, convenios, tecnologías y plazos son propuestas que deben validarse.

Los ejemplos no autorizan pruebas en producción. Usar datos ficticios o evidencia minimizada y un alcance de auditoría autorizado. Muy bajo no determina automáticamente una no conformidad mayor; Muy alto necesita evidencia de eficacia y mejora sostenidas. No introducir datos personales reales en las notas.

Referencias: [ISO/IEC 27701](https://www.iso.org/standard/27701), [OTI UNSA](https://oti.unsa.edu.pe/equipo-de-trabajo/) y [DS 016-2024-JUS · ANPD](https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus).

## GitHub Pages

Publicar desde `main`, carpeta raíz. `index.html` es el único archivo necesario para ejecutar la guía.

## Verificación de desarrollo

`node tests/check.cjs` verifica el archivo HTML directamente: cobertura, integridad del texto original cuando está disponible en el entorno local, vistas, búsqueda, filtros, roles, simulación, persistencia, borradores, exportación, copia alternativa e importación de respaldos anteriores. El DOM simulado permite verificar lógica sin dependencias externas; no sustituye una revisión visual en navegador. Node.js solo se usa para estas pruebas, nunca para abrir la aplicación.
