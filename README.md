# Privacidad · Aula UNSA

Sitio educativo en español para sustentar ISO/IEC 27701:2025 en la Universidad Nacional de San Agustín de Arequipa. Reformulado a partir de `contenido.txt` el 6 de octubre de 2026: 31 controles de A.1, 18 de A.2 y 29 de A.3.

Cada una de las 78 fichas incluye objetivo, interpretación, quién implementa y cómo, quién audita y cómo, criterio de comprobación y cinco niveles específicos: muy bajo (crítico), bajo, medio, alto y muy alto. Son 390 criterios de rúbrica; no se asigna una calificación real a la UNSA.

## Abrir
Abre `index.html` en un navegador moderno. Para servirlo localmente, ejecuta `python3 -m http.server 8080` desde esta carpeta.

## GitHub Pages
Publica el contenido de esta carpeta en la raíz de un repositorio. En Settings → Pages, elige Deploy from a branch, rama main y carpeta /(root). Los recursos usan rutas relativas, compatibles con un sitio de proyecto. No se necesitan dependencias ni compilación.

## Funciones
- Anexos A, B y C; contexto de D, E y F.
- Acceso directo a las tablas A.1, A.2 y A.3 desde la portada.
- Buscador en todo el desarrollo; filtros de tabla, dominio y progreso.
- Ficha completa o enfoque de implementador, auditor y rúbrica; impresión de la ficha completa.
- Evaluación y progreso en localStorage.
- Matriz CSV con las 78 fichas, los dos roles, los 390 criterios y las evaluaciones; respaldo/restauración JSON compatible con registros anteriores (valores internos 0–4).
- Calculadora didáctica de riesgo y cuestionario de 12 preguntas con explicación.
- Diseño adaptable y navegación mediante teclado.

## Alcance
Material independiente, no oficial de ISO ni de la UNSA. Las prácticas institucionales no han sido verificadas. Los ejemplos, criterios de prueba, plazos de proyecto y escalas son propuestas educativas. No son reglas de certificación.
El OCR fuente contiene errores; cotejar referencias con una copia autorizada antes de una auditoría formal. Las fuentes oficiales y limitaciones están en la sección Fuentes.
No se distribuye el documento ISO completo. Las notas se guardan localmente; no ingresar datos personales reales. La tipografía carga opcionalmente desde Google Fonts; hay alternativas locales.

## Criterio editorial
Se conserva el desarrollo de la conversación aportada, con correcciones sobre bases legales, conservación, borrado, anonimización, criptografía, independencia de auditoría y clasificación de hallazgos. Los objetivos se presentan como paráfrasis, no como citas oficiales. Cada ficha identifica la línea de referencia de `contenido.txt`, que permanece como fuente de trabajo local.

OTI se denomina conforme al [sitio institucional](https://oti.unsa.edu.pe/equipo-de-trabajo/). El [DS 016-2024-JUS](https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus) es una referencia para validar condiciones peruanas; los ejemplos no sustituyen la evaluación jurídica de cada tratamiento.

Los roles de privacidad, convenios y tecnologías son escenarios propuestos. Los plazos, herramientas y tamaños de muestra no son requisitos ISO universales. Muy alto exige evidencia sostenida de eficacia y mejora; muy bajo no determina automáticamente un hallazgo mayor. Sin evidencia suficiente, dejar la madurez sin valorar.

## Verificación
Ejecutar `node --check app.js`, `node --check data.js` y `node tests/check.cjs`. La prueba revisa cobertura 31/18/29, integridad de campos y rúbricas, renderizado de fichas y secciones, filtros, persistencia, exportación CSV y restauración JSON mediante un DOM simulado. No sustituye una comprobación visual en navegador.
