'use strict';
const CONTROLS = [
  {
    "id": "A.1.2.2",
    "b": "B.1.2.2",
    "group": "1",
    "title": "Identificar y documentar el propósito",
    "meaning": "Explicar para qué se necesita cada dato antes de tratarlo.",
    "implement": "En cada módulo que recolecte datos (por ejemplo, el módulo de prematrícula del SISCAD o la ficha socioeconómica de comedor), se incluye un aviso de privacidad contextualizado y se elabora la Ficha Técnica de Tratamiento de Datos, donde se vincula cada campo del formulario con una finalidad específica (ej. «El tipo de sangre recopilado en DUDE se almacena exclusivamente para atención médica de urgencia en el Centro Médico UNSA»).",
    "audit": "Ejecutar una prueba de recorrido (walkthrough) sobre el flujo de matrícula en SISCAD y Admisión. Cotejar los campos almacenados en el esquema de la base de datos PostgreSQL/Oracle frente al inventario documental de propósitos. Si existen columnas en tablas (ej. religion, partido_politico, huella_biometrica) que no cuenten con una finalidad aprobada en la política, se levanta una No Conformidad.",
    "criterion": "Cada uso observado tiene una finalidad específica documentada.",
    "interpretation": "No se puede recopilar ningún dato personal bajo premisas genéricas o ambiguas (como «fines de gestión institucional»). Cada formulario web, tabla en base de datos o proceso físico debe tener un objetivo explícito, legítimo y predeterminado antes de capturar el dato (principio de finalidad).",
    "implementer": "El Oficial de Protección de Datos Personales (OPDP) junto con la Oficina de Tecnologías de la Información (OTI) y los líderes funcionales de áreas usuarias (Dirección de Admisión, Dirección Universitaria de Desarrollo Estudiantil - DUDE, Registros Académicos).",
    "auditor": "Auditor Líder de Sistemas / Auditor de TI del Órgano de Control Institucional (OCI).",
    "rubric": [
      "Los sistemas (SISCAD, Admisión) recopilan datos de estudiantes sin ninguna documentación ni advertencia sobre el propósito de uso.",
      "Existen propósitos verbales o genéricos («fines administrativos»), pero no están formalizados ni detallados por campo de datos.",
      "Existe un documento general de finalidades en Secretaría General, pero los formularios web del SISCAD y Admisión no lo exponen ni está alineado al modelo de datos técnico.",
      "Todos los sistemas principales cuentan con políticas de privacidad desplegadas y finalidades aprobadas documentalmente por el Consejo Universitario.",
      "El catálogo de finalidades está digitalizado en un repositorio central del PIMS, integrado al ciclo de desarrollo de software (SDLC) de la OTI y revisado anualmente ante cambios normativos de SUNEDU y la ANPD (Ley N° 29733). Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 17
  },
  {
    "id": "A.1.2.3",
    "b": "B.1.2.3",
    "group": "1",
    "title": "Identificar la base legal",
    "meaning": "Identificar y demostrar el fundamento aplicable a cada finalidad.",
    "implement": "Crear una matriz para matrícula, actas, carné, encuestas y atención de salud: finalidad, datos, norma y artículo aplicable, condiciones, evidencia y responsable. Asesoría Jurídica valida cada caso con la función de privacidad antes de activar el tratamiento; no asignar automáticamente una excepción a toda la información de salud.",
    "audit": "Solicitar la Matriz de Bases Legales y contrastarla contra una muestra de procesos en SISCAD, Recursos Humanos (docentes) y Convenios Internacionales. Verificar que no se alegue «consentimiento» en procesos donde el estudiante está legalmente obligado a entregar el dato para matricularse, ni «obligación legal» para actividades extracurriculares o publicitarias.",
    "criterion": "Existe fundamento aplicable y documentado para cada finalidad revisada.",
    "interpretation": "Cada finalidad necesita un fundamento válido en el marco peruano. Asesoría Jurídica determina si corresponde consentimiento o una excepción legal y documenta sus condiciones; ser universidad pública no autoriza cualquier uso.",
    "implementer": "La Oficina de Asesoría Jurídica en coordinación con el Oficial de Protección de Datos Personales (OPDP) y la OTI.",
    "auditor": "Auditor Interno de Seguridad de la Información / Auditor de Sistemas.",
    "rubric": [
      "La universidad procesa datos sin identificar qué ley o consentimiento lo ampara; no hay asesoramiento legal en los proyectos de software.",
      "Se asume de manera informal que «por ser universidad pública todo está permitido», sin sustento en actas ni resoluciones.",
      "Asesoría Jurídica cuenta con una opinión legal general, pero no existe una matriz específica por sistema de información ni por categoría de PII (datos sensibles vs. ordinarios).",
      "Matriz formal de bases legales aprobada y mapeada directamente a los repositorios de datos del SISCAD, DUDE y RRHH.",
      "Matriz automatizada y validada ante cambios legislativos periódicos, con revisión cruzada entre SUNEDU, MINEDU y la Autoridad Nacional de Protección de Datos Personales (ANPD). Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 47
  },
  {
    "id": "A.1.2.4",
    "b": "B.1.2.4",
    "group": "1",
    "title": "Determinar cuándo y cómo obtener el consentimiento",
    "meaning": "Definir cuándo corresponde solicitarlo y cómo demostrarlo.",
    "implement": "Redactar la Directiva de Captura de Consentimiento Digital. En el portal de inscripción de postulantes o matrícula SISCAD, implementar casillas de verificación (checkboxes) no marcadas por defecto, separadas por finalidad (ej. una casilla para «Envío de boletines académicos y convenios externos» y otra para «Uso de imagen en redes sociales institucionales»).",
    "audit": "Inspeccionar el código fuente del frontend y los formularios web para verificar que no existan casillas premarcadas (opt-in forzado) ni consentimiento condicionado a la prestación del servicio educativo esencial.",
    "criterion": "El mecanismo diferencia finalidades y cumple los requisitos legales identificados.",
    "interpretation": "Cuando la base legal sea el consentimiento, la universidad debe tener un procedimiento formalizado que defina el momento exacto de captura, el texto vinculante y las reglas técnicas para que sea libre, previo, expreso e informado.",
    "implementer": "El Equipo de Desarrollo de Software de la OTI y el OPDP.",
    "auditor": "Auditor de sistemas independiente del equipo que implementó el control; OCI cuando corresponda a su competencia.",
    "rubric": [
      "Los formularios web no solicitan consentimiento o asumen consentimiento tácito mediante casillas premarcadas obligatorias.",
      "Se pide consentimiento verbal en ventanilla o en formularios de papel sin procedimiento ni criterios de validez.",
      "Existe un procedimiento documentado, pero algunos portales de la UNSA (ej. Centro de Idiomas, CEPRUNSA) siguen usando modelos no estandarizados.",
      "Todo sistema nuevo o actualizado implementa el mecanismo formal de consentimiento previo e informado con opciones independientes y desmarcadas por defecto.",
      "El procedimiento incluye mecanismos diferenciados para menores de edad (postulantes escolares al CEPRUNSA con validación de tutores) y verificación de consentimiento granular por API. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 77
  },
  {
    "id": "A.1.2.5",
    "b": "B.1.2.5",
    "group": "1",
    "title": "Obtener y registrar el consentimiento",
    "meaning": "Conservar prueba verificable de la decisión de la persona.",
    "implement": "En el sistema académico y Admisión, registrar identificador interno, finalidad, momento, versión del aviso, acción afirmativa y posteriores cambios o retiros. Restringir modificaciones, registrar accesos y definir conservación; recopilar IP u otros metadatos solo si su necesidad está justificada.",
    "audit": "Con una exportación autorizada y seudonimizada de consentimientos, seleccionar casos del periodo auditado. Reconstruir el aviso aceptado, la finalidad y el momento; probar con una cuenta ficticia que un retiro actualiza el estado y que los operadores no pueden modificar registros sin trazabilidad.",
    "criterion": "Cada uso basado en consentimiento puede vincularse a evidencia válida.",
    "interpretation": "La UNSA debe poder demostrar quién consintió, para qué finalidad, cuándo y qué información recibió. El registro debe protegerse frente a alteraciones. Una IP o un hash aislado no prueban por sí solos un consentimiento válido.",
    "implementer": "Administrador de Base de Datos (DBA) e Ingenieros de Software de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "No se guarda registro alguno del consentimiento; si un alumno afirma no haber autorizado el uso de su foto, la UNSA no tiene forma de probarlo.",
      "Solo existe una bandera «aceptó», sin momento, finalidad ni versión del aviso que permitan reconstruir la autorización.",
      "Se registran fecha e IP en logs planos de servidor, pero son volátiles, no estructurados y se purgan sin respaldo formal.",
      "Los consentimientos se registran en tablas de auditoría relacionales dedicadas con estampas de tiempo confiables y versiones de políticas asociadas.",
      "Registros inmutables con firma digital o sellado de tiempo criptográfico (WORM / Write Once Read Many), con interfaz de consulta en tiempo real para el OPDP. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 107
  },
  {
    "id": "A.1.2.6",
    "b": "B.1.2.6",
    "group": "1",
    "title": "Evaluación de impacto en la privacidad",
    "meaning": "Evaluar si los cambios requieren estudiar su impacto sobre las personas.",
    "implement": "Establecer una metodología de Evaluación de Impacto en la Privacidad basada en ISO/IEC 29134. Antes de adquirir un sistema de videovigilancia biométrica o implementar un modelo de Inteligencia Artificial en el Aula Virtual, redactar el informe PIA evaluando: necesidad, proporcionalidad, riesgos de fuga de datos, impacto en el titular y medidas de mitigación.",
    "audit": "Solicitar las actas de puesta en producción de los últimos proyectos de software o infraestructura implementados en la UNSA durante el último año. Verificar si se aplicó el umbral de activación de PIA y revisar el informe técnico de riesgos de privacidad resultante, comprobando que las recomendaciones de seguridad se hayan ejecutado antes del despliegue.",
    "criterion": "La necesidad se evaluó oportunamente y los riesgos tienen tratamiento y responsables.",
    "interpretation": "Cuando la universidad introduzca una tecnología disruptiva o de alto riesgo para los derechos de los titulares (por ejemplo: reconocimiento facial en los torniquetes de las áreas de Ingenierías, Sociales y Biomédicas, o algoritmos de analítica predictiva de deserción estudiantil), debe realizar previamente un análisis formal de riesgos a la privacidad (EIPD / PIA).",
    "implementer": "El Comité de Seguridad de la Información y Privacidad de la UNSA (integrado por CISO, OPDP y Director de OTI).",
    "auditor": "Auditor Líder de Auditoría de Sistemas.",
    "rubric": [
      "Se adquieren o desarrollan sistemas con biometría o IA sin ningún análisis previo del impacto en la privacidad.",
      "Se evalúan riesgos puramente técnicos (caída de servidores, rendimiento), ignorando los riesgos sobre los derechos y libertades de los estudiantes y docentes.",
      "Se realizan análisis informales en memorandos técnicos de la OTI, pero sin metodología estandarizada ni aprobación formal del OPDP.",
      "Metodología PIA formalizada bajo ISO/IEC 29134 y aplicada obligatoriamente a todo proyecto calificado como de medio o alto riesgo.",
      "El proceso de PIA está integrado en el ciclo de compras y contrataciones de la UNSA (OSCE / Ley de Contrataciones del Estado), requiriéndose el visto bueno de privacidad para la liberación de fondos. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 139
  },
  {
    "id": "A.1.2.7",
    "b": "B.1.2.7",
    "group": "1",
    "title": "Contratos con encargados de PII",
    "meaning": "Formalizar las obligaciones de quienes procesan datos por cuenta de la universidad.",
    "implement": "Logística, OTI y Asesoría Jurídica incorporan un anexo de tratamiento en los contratos: instrucciones, confidencialidad, controles aplicables de A.2, subencargados, devolución o eliminación y facultades de verificación. Pactar un aviso temprano de incidentes —por ejemplo, menos de 24 horas— compatible con los plazos legales aplicables; es una propuesta contractual, no un plazo universal de ISO.",
    "audit": "Seleccionar una muestra aleatoria de los 5 contratos de servicios tecnológicos vigentes en la UNSA (proveedor de nube, pasarela de pagos para tasas de matrícula, software de biblioteca virtual). Inspeccionar los contratos firmados para corroborar la existencia de anexos de protección de datos personales y evaluar si se han ejercido auditorías de cumplimiento a dichos proveedores.",
    "criterion": "Contrato vigente y controles aplicables cubiertos; exclusiones justificadas.",
    "interpretation": "Si la UNSA encarga a un proveedor alojamiento, soporte o una plataforma que trata datos por su cuenta, el acuerdo escrito debe delimitar instrucciones, seguridad, asistencia y fin del servicio. Los proveedores nombrados son ejemplos por validar.",
    "implementer": "La Dirección General de Administración (Unidad de Logística y Abastecimiento) en coordinación con la OTI y Asesoría Jurídica.",
    "auditor": "Auditor de TI / OCI.",
    "rubric": [
      "Los proveedores de nube y desarrollo acceden a bases de datos con notas y DNIs sin acuerdos contractuales de privacidad ni confidencialidad.",
      "Se firman contratos estándar de compras públicas sin cláusulas específicas sobre deberes de custodia, destrucción o no reutilización de PII.",
      "Los contratos contienen una cláusula genérica de «confidencialidad», pero no hacen referencia a obligaciones técnicas de encargado ni a la Tabla A.2 de la norma.",
      "Contratos formalizados con cláusulas DPA alineadas a la Ley N° 29733 y controles exigibles de la Tabla A.2 de la norma.",
      "Sistema de monitoreo y auditoría periódica de terceros (third-party risk management), con verificación de certificaciones SOC 2 o ISO 27001/27701 de los proveedores de la UNSA. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 169
  },
  {
    "id": "A.1.2.8",
    "b": "B.1.2.8",
    "group": "1",
    "title": "Co-responsables del tratamiento",
    "meaning": "Acordar responsabilidades cuando dos entidades deciden conjuntamente el tratamiento.",
    "implement": "En cada Convenio Específico de Cooperación Interinstitucional que implique tratamiento de datos de estudiantes o investigadores, redactar el Protocolo de Co-responsabilidad de PII, delimitando quién gestionará los consentimientos, cómo se sincronizarán las bases de datos y el canal único de atención para los derechos ARCO de los alumnos involucrados.",
    "audit": "Revisar los convenios interinstitucionales que involucren intercambio masivo de datos estudiantiles. Verificar la existencia del acta de corresponsabilidad y constatar si los puntos de contacto para los estudiantes están publicados y operativos.",
    "criterion": "Roles coherentes con la operación y obligaciones asignadas sin vacíos.",
    "interpretation": "Un convenio no crea corresponsabilidad por sí mismo. Primero se verifica si UNSA y la otra entidad deciden conjuntamente finalidades y medios; si es así, se distribuyen responsabilidades y atención de titulares mediante un acuerdo. Si actúa por instrucciones, se estudia A.2.",
    "implementer": "La Oficina de Convenios y Relaciones Internacionales junto con el OPDP y la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA transfiere y comparte bases de datos con otras universidades o instituciones sin definir quién es responsable por la seguridad ni por los reclamos.",
      "Existen convenios marco académicos generales, pero carecen de estipulaciones sobre la propiedad, custodia y responsabilidad de la PII compartida.",
      "Se menciona la protección de datos en el convenio, pero no se asignan responsabilidades operativas claras (ej. no se define quién atiende una solicitud de rectificación de notas).",
      "Convenios de co-responsabilidad formalizados con matrices RACI (Responsable, Aprobador, Consultado, Informado) de privacidad adjuntas a los convenios.",
      "Procedimiento institucional automatizado que supervisa el ciclo de vida del convenio, con auditorías conjuntas de seguridad entre la UNSA y las entidades aliadas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 199
  },
  {
    "id": "A.1.2.9",
    "b": "B.1.2.9",
    "group": "1",
    "title": "Registros relacionados con el procesamiento de PII",
    "meaning": "Mantener registros que expliquen el tratamiento de datos.",
    "implement": "Crear y mantener actualizado el Registro Maestro de Bancos de Datos de la UNSA, que describa: nombre del banco (ej. Banco de Datos de Alumnos de Pregrado), finalidad, categorías de PII tratadas, servidores donde reside, medidas de seguridad técnicas aplicadas y flujo de transferencias nacionales o internacionales. Mantener este registro registrado ante el Registro Nacional de Protección de Datos Personales.",
    "audit": "Solicitar el Registro Maestro de Tratamiento y contrastarlo contra el inventario real de activos de TI y esquemas de bases de datos. Realizar una búsqueda de bases de datos huérfanas o no declaradas (ej. bases creadas por facultades para encuestas o eventos sin conocimiento de OTI).",
    "criterion": "El inventario refleja los sistemas y tratamientos observados y tiene responsable.",
    "interpretation": "Mantener un registro de actividades permite reconstruir qué datos trata la UNSA, para qué, dónde, con quién y bajo qué medidas. Este inventario operativo no sustituye el registro de bancos de datos ni equivale automáticamente a un ROPA europeo.",
    "implementer": "El Oficial de Protección de Datos Personales (OPDP) con los custodios de datos de la OTI, DUGID y Secretaría General.",
    "auditor": "Auditor de TI de OCI.",
    "rubric": [
      "No existe inventario ni registro de los bancos de datos de la universidad; la OTI desconoce qué sistemas manejan PII sensible.",
      "Se tiene una lista informal de sistemas de información, pero sin categorización de datos, finalidades ni responsables asignados.",
      "El inventario existe en una hoja de cálculo, pero no está actualizado (datos desfasados de años anteriores) y no incluye sistemas satélite de las facultades.",
      "Registro de actividades de tratamiento formalizado, completo, cubriendo sistemas centrales y periféricos, debidamente inscrito ante la ANPD.",
      "Inventario dinámico de datos gestionado mediante una herramienta de catálogo de datos de TI, sincronizado con el escaneo automático de repositorios de bases de datos de la OTI. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 229
  },
  {
    "id": "A.1.3.2",
    "b": "B.1.3.2",
    "group": "1",
    "title": "Determinar y cumplir obligaciones hacia los titulares de PII",
    "meaning": "Determinar qué derechos y obligaciones deben atenderse.",
    "implement": "Aprobar mediante Resolución de Consejo Universitario el Reglamento de Derechos de los Titulares de Datos Personales de la UNSA. Habilitar en la Mesa de Partes Virtual (MPV) un formulario oficial específico denominado «Solicitud de Ejercicio de Derechos ARCO», garantizando que el trámite sea gratuito y con plazos reglamentarios claros.",
    "audit": "Inspeccionar el portal web institucional y la MPV. Realizar un expediente de prueba (mystery shopping) solicitando información sobre el tratamiento de datos y verificar si el flujo administrativo está configurado para derivar la solicitud al OPDP dentro de los plazos de ley.",
    "criterion": "Las obligaciones aplicables tienen mecanismo de atención operativo.",
    "interpretation": "La UNSA debe tener identificadas todas las obligaciones que el marco normativo (Ley Universitaria, Ley N° 29733) le impone frente a los estudiantes y trabajadores, estableciendo canales operativos reales para hacerlas efectivas.",
    "implementer": "Secretaría General, Defensoría Universitaria y OTI.",
    "auditor": "Auditor Interno de Sistemas.",
    "rubric": [
      "La UNSA no reconoce ni tiene implementado ningún canal para que estudiantes o docentes ejerzan sus derechos de privacidad.",
      "Se exige al titular presentar cartas notariales o trámites engorrosos y de pago para atender consultas sobre sus propios datos.",
      "Existe la opción en mesa de partes general, pero los funcionarios de ventanilla desconocen el trámite y se tramita como un reclamo ordinario sin plazos de privacidad.",
      "Procedimiento específico y canal digital gratuito implementado en la MPV, con plazos definidos y personal capacitado.",
      "Sistema de autoservicio en el SISCAD donde el estudiante puede gestionar directamente sus preferencias y solicitudes de privacidad con seguimiento en línea mediante tickets. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 260
  },
  {
    "id": "A.1.3.3",
    "b": "B.1.3.3",
    "group": "1",
    "title": "Determinar la información para los titulares de PII",
    "meaning": "Definir qué se informa y en qué momento.",
    "implement": "Redactar la Política de Privacidad Institucional de la UNSA, especificando que a los ingresantes se les informará en el momento del registro de matrícula en SISCAD, y a los postulantes durante la preinscripción en el portal de Admisión (información just-in-time).",
    "audit": "Revisar documentalmente que los avisos de privacidad cubran los 13 elementos requeridos por la guía B.1.3.3 de la norma (identidad, propósito, bases legales, transferencias, retención, etc.).",
    "criterion": "La información requerida está definida para cada tratamiento.",
    "interpretation": "La universidad debe definir con anticipación qué datos comunicará al titular: identidad de la UNSA, base legal, destinatarios de transferencias (ej. SUNEDU, bancos para cobro de tasas), tiempo de retención y derechos que le asisten.",
    "implementer": "OPDP y Oficina de Comunicación e Imagen Institucional.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "No se ha determinado qué información entregar a la comunidad agustina sobre sus datos personales.",
      "La información está dispersa en reglamentos internos de disciplina o matrícula, sin un aviso de privacidad consolidado.",
      "La política de privacidad está redactada pero no define los momentos exactos de entrega ni los destinatarios de transferencias.",
      "Documento formalizado que especifica qué y cuándo se informa a cada estamento (postulantes, alumnos, docentes, administrativos).",
      "Políticas segmentadas por perfiles de usuario, con matrices de notificación en tiempo real y revisiones legales semestrales. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 290
  },
  {
    "id": "A.1.3.4",
    "b": "B.1.3.4",
    "group": "1",
    "title": "Proporcionar información a los titulares de PII",
    "meaning": "Entregar información comprensible sobre quién trata los datos y para qué.",
    "implement": "Publicar la política de privacidad en el pie de página de todos los dominios unsa.edu.pe. En el SISCAD y el Aula Virtual, colocar enlaces visibles e íconos intuitivos explicativos antes de presionar botones como «Confirmar Matrícula» o «Enviar Solicitud».",
    "audit": "Navegar por los diferentes portales web institucionales de la UNSA (sitio web principal, SISCAD, Moodle, portal CEPRUNSA). Verificar que el enlace a la política de privacidad esté operativo, que no requiera más de 2 clics para acceder y que el lenguaje utilizado sea comprensible para los estudiantes.",
    "criterion": "El aviso es accesible, comprensible y se proporciona oportunamente.",
    "interpretation": "El aviso de privacidad no puede ser un texto denso e incomprensible escondido al final de una página. Debe ser accesible, redactado en lenguaje claro y ubicado exactamente en las interfaces de usuario donde se interactúa con los datos.",
    "implementer": "Desarrolladores Web de la OTI y Área de Comunicaciones.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "La política no está publicada en la web o los enlaces devuelven errores HTTP 404.",
      "La política está enterrada en documentos PDF del portal de transparencia estándar, inaccesible desde las plataformas de uso diario.",
      "La política está visible en la web principal, pero ausente en las interfaces críticas (SISCAD, Admisión, App móvil institucional).",
      "Política de privacidad accesible de forma permanente en todas las plataformas web y móviles de la UNSA con lenguaje claro y estructurado.",
      "Información presentada en capas (resumen ejecutivo visual interactivo + texto legal completo) e inclusiva (disponible en quechua o formatos accesibles para personas con discapacidad visual). Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 320
  },
  {
    "id": "A.1.3.5",
    "b": "B.1.3.5",
    "group": "1",
    "title": "Proporcionar mecanismo para modificar o retirar el consentimiento",
    "meaning": "Facilitar la modificación de una decisión de consentimiento.",
    "implement": "En el perfil del estudiante en SISCAD, implementar la pestaña «Configuración de Privacidad», donde se visualicen los consentimientos opcionales concedidos con botones de conmutación (toggle switches) activos/inactivos. Al desactivar una opción, el sistema actualiza la base de datos de inmediato y remueve al alumno de las listas de difusión masiva.",
    "audit": "Acceder a una cuenta de prueba en SISCAD, modificar el consentimiento de un tratamiento secundario y auditar la base de datos para constatar que el cambio de estado se refleje en la tabla correspondiente y que los módulos de mensajería respeten la exclusión en tiempo real.",
    "criterion": "La retirada se registra y se aplica a los tratamientos afectados.",
    "interpretation": "Retirar o revocar el consentimiento debe ser tan fácil como otorgarlo. Si un alumno autorizó el uso de sus datos para recibir promociones de cursos extracurriculares o convenios bancarios desde el SISCAD, debe poder revocar esa autorización desde la misma plataforma sin necesidad de un trámite físico presencial.",
    "implementer": "Equipo de Desarrollo de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "No existe ningún mecanismo para retirar el consentimiento; la decisión inicial es irrevocable de facto.",
      "Se exige al titular acudir físicamente a Secretaría General con una carta notarial para dejar de recibir correos o difusión.",
      "Se ofrece la opción de revocar mediante correo electrónico genérico a mesa de partes, pero la atención tarda meses y no impacta en las listas de distribución técnica.",
      "Mecanismo digital integrado en el SISCAD que permite habilitar o deshabilitar consentimientos opcionales de forma autónoma.",
      "Sincronización automática mediante colas de eventos (webhooks/APIs) que propaga la revocación de consentimiento en milisegundos hacia todos los sistemas satélites de la universidad y terceros contratados. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 350
  },
  {
    "id": "A.1.3.6",
    "b": "B.1.3.6",
    "group": "1",
    "title": "Proporcionar mecanismo para oponerse al tratamiento de PII",
    "meaning": "Disponer de un mecanismo para recibir y resolver oposiciones.",
    "implement": "Habilitar la opción formal de «Derecho de Oposición» dentro del módulo de privacidad de la MPV. El sistema debe congelar temporalmente el tratamiento del dato controvertido mientras el OPDP evalúa si concurren motivos legítimos imperiosos para denegar o aceptar la oposición.",
    "audit": "Muestrear el libro de solicitudes de oposición. Verificar que ante una solicitud aceptada se haya ejecutado la marca de exclusión (flagging) en los registros de la base de datos y comprobar que los scripts analíticos de la OTI omitan dichos registros.",
    "criterion": "La solicitud se evalúa y responde conforme a obligaciones aplicables.",
    "interpretation": "La UNSA debe ofrecer un canal para recibir oposiciones y evaluar su procedencia según el tratamiento y la normativa aplicable. La respuesta debe quedar motivada y reflejarse en los sistemas cuando corresponda.",
    "implementer": "OPDP y Unidad de Desarrollo de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "La UNSA desestima de facto cualquier oposición de los titulares bajo el argumento de que «la universidad es la dueña de la información».",
      "Se reciben oposiciones pero quedan archivadas sin resolución técnica ni legal.",
      "Se atiende la oposición de manera manual, dependiendo de que un analista recuerde excluir al alumno de consultas SQL específicas.",
      "Flujo de oposición formalmente reglamentado, con evaluación de motivos legítimos y aplicación de marcas de exclusión automáticas en los sistemas.",
      "El sistema aplica restricciones lógicas de procesamiento a nivel de esquema de base de datos de manera inmediata tras la resolución favorable de la oposición. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 380
  },
  {
    "id": "A.1.3.7",
    "b": "B.1.3.7",
    "group": "1",
    "title": "Acceso, rectificación o supresión",
    "meaning": "Atender solicitudes sobre los datos y gestionar sus límites legales.",
    "implement": "Implementar en la MPV el flujo automatizado de Rectificación de Datos: si un alumno cambia legalmente de nombre/apellido en RENIEC, sube su DNI rectificado; el sistema valida con el servicio web de interoperabilidad de RENIEC y actualiza el registro en SISCAD sin duplicar legajos, manteniendo la pista histórica de auditoría.",
    "audit": "Realizar una prueba de trazabilidad: seleccionar 5 expedientes de cambio de datos solicitados por alumnos en el último semestre. Verificar si el cambio se propagó a SISCAD, Moodle y actas electrónicas, o si quedaron inconsistencias en bases de datos secundarias.",
    "criterion": "Las decisiones son fundadas y lo aprobado se ejecuta en los sistemas afectados.",
    "interpretation": "Este control consagra la operatividad técnica de los derechos ARCO clásicos (Acceso, Rectificación, Cancelación). Un alumno debe poder verificar qué datos tiene la UNSA sobre él, solicitar la corrección de errores (ej. apellido mal digitado en SISCAD) o la supresión de datos que ya no sean pertinentes.",
    "implementer": "Dirección Universitaria de Tecnologías de la Información y Comunicación (DUTIC/OTI) y Dirección de Asuntos Académicos.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los alumnos no pueden corregir errores en sus datos o los trámites demoran más de un año académico, impidiendo su graduación.",
      "Las correcciones se hacen mediante parches manuales directos en la base de datos (UPDATE estudiantes SET ...) sin auditoría ni sustento documental.",
      "Existe trámite administrativo formal, pero los cambios tardan meses en sincronizarse entre el SISCAD y las facultades.",
      "Flujos estructurados de acceso, rectificación y supresión con plazos máximos normados (ej. 10 días para rectificación) y trazabilidad completa.",
      "Integración de APIs con RENIEC para validación en tiempo real de rectificaciones, y supresión lógica orquestada en todos los microservicios institucionales. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 410
  },
  {
    "id": "A.1.3.8",
    "b": "B.1.3.8",
    "group": "1",
    "title": "Obligaciones del responsable de informar a terceros",
    "meaning": "Propagar a destinatarios los cambios pertinentes sobre datos compartidos.",
    "implement": "Desarrollar un servicio web o cola de sincronización (broker de eventos / API REST) que, ante cualquier evento de rectificación o supresión de PII en la base central, envíe un payload JSON cifrado a las instituciones vinculadas (ej. actualización de padrones de grados en SUNEDU).",
    "audit": "Inspeccionar los registros de comunicación con terceros. Tomar una muestra de estudiantes rectificados en 2025/2026 y solicitar las constancias de acuse de recibo o logs de transmisión SOAP/REST enviados a SUNEDU o al seguro estudiantil.",
    "criterion": "Los terceros afectados reciben las comunicaciones que corresponden.",
    "interpretation": "Tras una rectificación, supresión o retiro, determinar qué destinatarios deben recibir la actualización según las obligaciones aplicables. Dejar constancia del envío, las respuestas y cualquier excepción justificada.",
    "implementer": "Oficina de Grados y Títulos, Dirección de Admisión y OTI.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "La UNSA no comunica ninguna rectificación a terceros; los datos desfasados o erróneos persisten indefinidamente en las bases externas.",
      "Se notifica únicamente si el tercero lo exige por oficio judicial, sin procedimiento preventivo ni regular.",
      "Se envían oficios manuales en papel por mesa de partes externa cuando el estudiante reclama expresamente, sin control de seguimiento.",
      "Procedimiento formal documentado y canales electrónicos activos para notificar a los destinatarios recurrentes dentro de plazos definidos.",
      "Notificación y sincronización automatizada mediante webhooks y APIs seguras con acuses de recibo electrónicos auditables en tiempo real. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 440
  },
  {
    "id": "A.1.3.9",
    "b": "B.1.3.9",
    "group": "1",
    "title": "Proporcionar copia de la PII tratada",
    "meaning": "Poder entregar a la persona una copia de sus datos tratados.",
    "implement": "Desarrollar en el perfil de SISCAD el botón «Descargar mi Expediente Digital de Datos», el cual genera un archivo comprimido .zip que contiene un JSON estructurado con el historial académico, matrícula y datos demográficos, junto con un PDF firmado digitalmente por la Secretaría General.",
    "audit": "Solicitar la descarga del expediente de un usuario de prueba. Comprobar que el archivo se genere sin exponer datos de otros estudiantes (data leak) y que el formato sea interoperable y cumpla con estándares abiertos.",
    "criterion": "La copia corresponde a la persona y se entrega con protección adecuada.",
    "interpretation": "Facilitar al titular una copia de sus datos en el alcance y formato que corresponda a sus derechos. Verificar identidad, proteger datos de otras personas y distinguir acceso de portabilidad; no toda solicitud implica exportar toda la base universitaria.",
    "implementer": "Equipo de Arquitectura de Datos de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La universidad niega a los estudiantes la entrega de copias digitales de sus propios datos almacenados.",
      "Se entregan únicamente impresiones en papel térmico o constancias físicas con cobros indebidos por hoja.",
      "Se genera un reporte en PDF mediante solicitud por mesa de partes que tarda varias semanas en procesarse.",
      "Funcionalidad digital disponible para que el titular descargue un consolidado de sus datos en formato estructurado (JSON/PDF).",
      "Sistema de autoservicio instantáneo con API de portabilidad segura protegida con autenticación multifactor (MFA). Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 470
  },
  {
    "id": "A.1.3.10",
    "b": "B.1.3.10",
    "group": "1",
    "title": "Manejo de solicitudes",
    "meaning": "Documentar recepción, seguimiento y respuesta a solicitudes legítimas.",
    "implement": "Aprobar el Procedimiento Operativo Estandarizado de Atención de Solicitudes ARCO, configurando alertas automáticas por correo y en el sistema de gestión documental cuando un ticket de privacidad alcance el 70% del plazo máximo de respuesta legal.",
    "audit": "Extraer las métricas de tiempos de atención de solicitudes de privacidad del último ejercicio anual. Calcular el porcentaje de solicitudes respondidas fuera de plazo y evaluar si las denegatorias estuvieron fundamentadas técnicamente en la ley.",
    "criterion": "Cada caso tiene trazabilidad y respuesta conforme al plazo aplicable.",
    "interpretation": "Definir recepción, verificación de identidad, evaluación, respuesta y cierre de solicitudes. Asesoría Jurídica valida en la normativa vigente los plazos, cómputos, subsanaciones y prórrogas aplicables a cada derecho; el sistema registra vencimientos y alertas.",
    "implementer": "Oficina de Trámite Documentario, OPDP y Secretaría General.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Las solicitudes de los estudiantes se extravían o quedan sin respuesta indefinidamente (silencio administrativo negativo de facto).",
      "Se atienden de manera informal según la carga laboral del personal, sin control de plazos ni registro estadístico.",
      "Existe un procedimiento escrito pero carece de un sistema de seguimiento técnico, lo que genera retrasos frecuentes sobre los plazos normativos.",
      "Flujo de atención formalizado y monitoreado mediante un sistema de tickets con cumplimiento de plazos en más del 95% de los casos.",
      "Cuadro de mando integral (dashboard) en tiempo real para el Rectorado y el OPDP que mide tiempos de ciclo, satisfacción del titular y causas raíz de requerimientos. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 500
  },
  {
    "id": "A.1.3.11",
    "b": "B.1.3.11",
    "group": "1",
    "title": "Toma de decisiones automatizada",
    "meaning": "Identificar obligaciones derivadas de decisiones exclusivamente automatizadas.",
    "implement": "En los módulos algorítmicos de asignación de becas de comedor y turnos de matrícula, publicar la fórmula paramétrica en el reglamento. Implementar en la interfaz el botón «Solicitar Revisión Manual», que permita a una asistenta social o a un docente de la comisión académica revisar y modificar la decisión automatizada en caso de anomalías o sesgos.",
    "audit": "Auditar el algoritmo del sistema de asignación de turnos o becas. Comprobar que no opere como una «caja negra», que los pesos y variables estén documentados formalmente y que exista un registro auditable de todas las intervenciones humanas y apelaciones procesadas.",
    "criterion": "Se identificaron y atienden las obligaciones que afectan a las personas.",
    "interpretation": "Si un sistema informático toma una decisión relevante para un estudiante basada exclusivamente en algoritmos (por ejemplo: asignación automática del orden de turno de matrícula por ponderado, otorgamiento de becas de comedor mediante scoring socioeconómico en DUDE o preselección automática de postulantes), el estudiante tiene derecho a conocer la lógica aplicada y solicitar intervención humana.",
    "implementer": "Comité Técnico de la OTI y Dirección Universitaria de Desarrollo Estudiantil (DUDE).",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Se aplican algoritmos que determinan la vida académica del alumno sin que nadie en la universidad conozca ni pueda explicar cómo deciden (decisiones arbitrarias no auditables).",
      "El personal afirma que «el sistema lo hace solo» y niega la posibilidad de revisión ante reclamos fundados.",
      "La lógica del algoritmo está documentada en un manual técnico de la OTI, pero no se ha informado a los estudiantes ni existe un procedimiento claro para pedir intervención humana.",
      "Lógica de toma de decisiones automatizada publicada y explicada en reglamentos institucionales, con derecho garantizado a revisión humana.",
      "Evaluaciones periódicas de sesgo algorítmico e imparcialidad (algorithmic fairness) en los modelos automatizados de la UNSA, con registro de auditoría de cada decisión. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 530
  },
  {
    "id": "A.1.4.2",
    "b": "B.1.4.2",
    "group": "1",
    "title": "Limitar la recolección",
    "meaning": "Solicitar únicamente datos necesarios para el propósito.",
    "implement": "Realizar una purga de campos en los formularios web de inscripción y matrícula: eliminar campos innecesarios como «religión», «partido político» o «número de teléfono de todos los parientes», dejando únicamente los datos estrictamente necesarios según la directiva académica. Configurar las interfaces para que los campos opcionales no sean requeridos para continuar.",
    "audit": "Inspeccionar el código HTML y las definiciones de esquemas de bases de datos de Admisión y SISCAD. Verificar si existen campos marcados como NOT NULL o requeridos que recopilen PII excesiva o no justificada respecto al propósito del servicio.",
    "criterion": "No se recogen campos innecesarios para la finalidad.",
    "interpretation": "Principio de minimización en el punto de captura. La universidad no debe pedir datos que no sean estrictamente indispensables para el trámite. Si para rendir un examen virtual basta el usuario y contraseña, no se debe obligar al alumno a registrar su geolocalización GPS exacta ni datos familiares irrelevantes.",
    "implementer": "Analistas de Sistemas y Diseñadores UX/UI de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Los formularios recopilan datos biométricos, médicos, políticos y familiares indiscriminadamente sin ninguna justificación.",
      "Se recopilan datos en exceso «por si acaso se necesitan en el futuro», bajo una cultura de almacenamiento ilimitado.",
      "Se han retirado algunos campos obvios de formularios web, pero los esquemas de bases de datos conservan columnas históricas obsoletas que aún se solicitan en ventanilla.",
      "Todos los formularios de captura de datos han sido depurados y alineados al principio de proporcionalidad y estricta necesidad.",
      "Mecanismos automáticos de validación en la arquitectura de desarrollo (linters de esquemas y revisiones de seguridad en el pipeline CI/CD) que bloquean la creación de nuevos campos sin justificación de minimización aprobada. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 561
  },
  {
    "id": "A.1.4.3",
    "b": "B.1.4.3",
    "group": "1",
    "title": "Limitar el tratamiento",
    "meaning": "Restringir el uso, acceso y divulgación a lo necesario.",
    "implement": "Implementar control de accesos basado en roles (RBAC) y vistas restringidas en la base de datos de PostgreSQL/Oracle: los docentes solo pueden ver nombres, correos y notas de sus alumnos matriculados, sin acceso a direcciones residenciales, números telefónicos privados ni fichas socioeconómicas.",
    "audit": "Auditar los perfiles de acceso en SISCAD. Iniciar sesión con perfiles de docente, director de departamento y personal de seguridad; verificar si las interfaces exponen datos ajenos a las competencias de cada rol y revisar las consultas ejecutadas en los logs de la base de datos.",
    "criterion": "Los usos observados permanecen dentro del propósito y alcance permitido.",
    "interpretation": "Obtener datos de forma legítima no autoriza cualquier uso posterior. Por ejemplo, reutilizar fotos de carné para reconocimiento facial exige evaluar finalidad, necesidad, riesgos y fundamento aplicable antes de iniciar ese nuevo tratamiento.",
    "implementer": "DBAs y Administradores de Sistemas de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Cualquier usuario administrativo o docente con acceso a SISCAD puede ver y exportar la totalidad de los datos personales de todos los estudiantes de la universidad.",
      "Existen roles básicos pero con privilegios excesivos concedidos de manera genérica a facultades y secretarias.",
      "Las vistas web limitan ciertos datos, pero los reportes descargables en Excel contienen información no filtrada de los estudiantes.",
      "Esquema RBAC estricto implementado a nivel de base de datos y aplicación, limitando el tratamiento estrictamente a la necesidad funcional de cada usuario.",
      "Control de acceso granular a nivel de fila y columna (Row-Level Security - RLS / Column-Level Encryption) con auditoría continua de accesos y alertas ante consultas masivas anómalas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 591
  },
  {
    "id": "A.1.4.4",
    "b": "B.1.4.4",
    "group": "1",
    "title": "Exactitud y calidad",
    "meaning": "Mantener exactitud y actualización adecuadas al tratamiento.",
    "implement": "Integrar el SISCAD mediante API en tiempo real con la Plataforma Nacional de Interoperabilidad (PIDE) de RENIEC y Migraciones (para alumnos extranjeros). Al ingresar el DNI en matrícula o admisión, el sistema obtiene los datos oficiales de identidad, eliminando errores de digitación humana. Además, forzar anualmente a los estudiantes a validar y confirmar su número de celular y correo institucional en su primer inicio de sesión del semestre.",
    "audit": "Ejecutar scripts de integridad de datos en la base de datos institucional: SELECT dni, COUNT(*) FROM estudiantes GROUP BY dni HAVING COUNT(*) > 1; Verificar duplicidades, campos de DNI con caracteres no numéricos o patrones inválidos, y evaluar la tasa de éxito de la sincronización con la PIDE de RENIEC.",
    "criterion": "Los errores detectados se gestionan y los datos son aptos para su finalidad.",
    "interpretation": "La universidad debe evitar errores en datos críticos (ej. DNI erróneo, nombres mal escritos, notas duplicadas o correos desactualizados) que puedan perjudicar el historial del estudiante o provocar la emisión de títulos inválidos.",
    "implementer": "Equipo de Integración de la OTI y Oficina de Registros Académicos.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Existen múltiples registros duplicados con nombres contradictorios para un mismo alumno en SISCAD, generando notas disociadas.",
      "La calidad depende exclusivamente de lo que cada alumno o secretaria digita a mano, sin validaciones sintácticas ni cotejo externo.",
      "Se aplican expresiones regulares básicas de validación en los formularios web, pero persisten incongruencias masivas en registros históricos.",
      "Validación automatizada de identidad contra RENIEC/PIDE en los puntos de entrada y procedimientos periódicos de confirmación de datos de contacto.",
      "Monitoreo continuo automatizado de la calidad de datos (Data Quality Framework) con detección de anomalías, métricas de completitud y conciliación automática entre subsistemas académicos. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 621
  },
  {
    "id": "A.1.4.5",
    "b": "B.1.4.5",
    "group": "1",
    "title": "Objetivos de minimización de PII",
    "meaning": "Definir cómo reducir datos y grado de identificación.",
    "implement": "Redactar la Política de Anonimización y Seudonimización de Datos Institucionales. Para los conjuntos de datos entregados a docentes investigadores o analistas de acreditación, ejecutar pipelines en Python/SQL que reemplacen el DNI y nombres por un hash único irreconocible (UUIDv4) y apliquen generalización (ej. cambiar fecha de nacimiento exacta por rango de edad de 5 años).",
    "audit": "Solicitar una muestra de las bases de datos entregadas a comisiones de acreditación o grupos de investigación. Ejecutar pruebas de reidentificación (motivated intruder test) para comprobar si es posible deducir la identidad de un estudiante cruzando campos cuasi-identificadores (carrera, promedio, edad, colegio de procedencia).",
    "criterion": "Existe minimización documentada y aplicada; seudonimizar no se presenta como anonimizar.",
    "interpretation": "Para reportes o investigación, reducir los datos identificables al mínimo necesario. Agregación, seudonimización y anonimización tienen alcances diferentes: si existe una clave que permite volver a identificar a la persona, los datos siguen siendo personales.",
    "implementer": "CISO, OPDP e Ingenieros de Datos de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Se entregan volcados completos de la base de datos de alumnos (incluyendo DNI, celular y dirección) a investigadores o terceros sin ninguna protección.",
      "Se eliminan únicamente los nombres pero se dejan los números de DNI o códigos de matrícula en los datasets compartidos.",
      "Se enmascaran algunos datos de manera empírica, pero sin objetivos documentados ni técnicas matemáticas estandarizadas de desidentificación.",
      "Objetivos de minimización documentados y procedimientos técnicos de seudonimización y agregación aplicados formalmente antes de compartir datos.",
      "Empleo de técnicas avanzadas de privacidad diferencial (differential privacy) y generación de datos sintéticos validadas bajo ISO/IEC 20889 para toda investigación analítica institucional. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 653
  },
  {
    "id": "A.1.4.6",
    "b": "B.1.4.6",
    "group": "1",
    "title": "Desidentificación y eliminación de PII al finalizar el tratamiento",
    "meaning": "Eliminar o desidentificar cuando ya no se necesitan los datos originales.",
    "implement": "Programar trabajos automatizados (cron jobs / stored procedures) en las bases de datos de Admisión: pasados 60 días del examen y cerradas las actas oficiales ante la Dirección de Admisión, se anonimizan los registros de los postulantes no admitidos (se borran fotos biométricas, huellas digitales y teléfonos, conservando solo estadísticas agregadas de postulantes por carrera para fines de planificación).",
    "audit": "Inspeccionar los repositorios y servidores de admisión y encuestas correspondientes a procesos de hace 3, 5 o 7 años. Verificar si todavía existen archivos de fotos, huellas o listas en texto plano de postulantes no ingresantes que debieron ser eliminados.",
    "criterion": "Los datos innecesarios se eliminan o dejan de permitir identificación conforme al criterio adoptado.",
    "interpretation": "Una vez que un proceso ha concluido (por ejemplo: terminó el proceso de admisión extraordinaria, expiró el plazo para reclamar una beca o culminó una encuesta estudiantil), los datos identificables que ya no tengan obligación de conservación legal deben destruirse irreversiblemente o anonimizarse de forma permanente.",
    "implementer": "DBAs de la OTI y Comisiones de Procesos Temporales (Admisión / Becas).",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los servidores conservan indefinidamente fotos biométricas y datos de postulantes que postularon hace décadas sin depuración alguna.",
      "La eliminación de datos temporales se hace solo cuando el disco del servidor se llena y bajo criterios desordenados de espacio físico.",
      "Existen resoluciones que disponen la destrucción de archivos de admisión, pero la OTI no cuenta con scripts automatizados y la ejecución es esporádica.",
      "Procedimiento de anonimización y borrado programado y ejecutado formalmente tras el cierre de cada proceso temporal.",
      "Orquestación automatizada de destrucción de datos con generación de actas de borrado seguro digitalmente firmadas y verificación criptográfica de irrecuperabilidad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 683
  },
  {
    "id": "A.1.4.7",
    "b": "B.1.4.7",
    "group": "1",
    "title": "Archivos temporales",
    "meaning": "Eliminar temporales conforme a plazos definidos.",
    "implement": "Configurar tareas programadas (cron en servidores Linux CentOS/Ubuntu de la UNSA y directivas de limpieza en Windows Server) que ejecuten scripts de limpieza periódica (ej. cada 6 horas) sobre los directorios temporales de las aplicaciones (/var/tmp, /tmp, carpetas temp de Moodle y Tomcat), sobrescribiendo y eliminando cualquier archivo temporal huérfano con más de 24 horas de antigüedad.",
    "audit": "Iniciar sesión en los servidores web de SISCAD y Aula Virtual durante una prueba técnica. Ejecutar inspecciones en la terminal: ls -la /tmp /var/www/siscad/storage/temp Analizar la fecha de creación de los archivos residentes para comprobar si existen documentos con PII acumulados desde hace meses o años.",
    "criterion": "No quedan temporales vencidos respecto al plazo documentado.",
    "interpretation": "Los servidores de aplicaciones web (como los que ejecutan SISCAD o Moodle) generan constantemente archivos temporales con PII: reportes en PDF de boletas de notas en /tmp, subidas temporales de fotos de carné, archivos de sesión, volcados de memoria y logs de transacciones. Estos archivos deben ser purgados sistemáticamente para evitar que queden expuestos.",
    "implementer": "Administradores de Servidores y Redes de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los directorios temporales de los servidores contienen cientos de gigabytes de reportes y boletas de notas acumulados sin control, accesibles públicamente si el servidor web sufre una vulnerabilidad de Directory Traversal.",
      "Se borran archivos manualmente de vez en cuando solo cuando el administrador nota saturación de almacenamiento.",
      "Existen scripts de limpieza, pero fallan frecuentemente por problemas de permisos o no cubren todas las carpetas temporales de los servidores.",
      "Políticas de borrado de archivos temporales formalizadas, con tareas automatizadas funcionando en todos los servidores web institucionales con ventanas de retención no mayores a 24-48 horas.",
      "Empleo de sistemas de archivos temporales volátiles en memoria RAM (tmpfs), configurados para autodestruir el contenido al terminar la sesión del usuario o reiniciar el servicio, auditados mediante alertas de SIEM. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 713
  },
  {
    "id": "A.1.4.8",
    "b": "B.1.4.8",
    "group": "1",
    "title": "Retención",
    "meaning": "No retener datos más tiempo del necesario.",
    "implement": "Archivo, Asesoría Jurídica y OTI elaboran la tabla de retención: categoría, finalidad, fundamento, inicio del cómputo, plazo, custodio, restricciones y disposición final. Aplicarla a expedientes académicos, grabaciones y respaldos; comprobar bloqueos legales antes de cada purga. No fijar un año para todas las grabaciones sin justificarlo.",
    "audit": "Cotejar la Tabla de Retención con los repositorios de datos en la nube y servidores locales de la UNSA. Verificar que no se estén reteniendo datos secundarios cuya finalidad prescribió (ej. expedientes médicos de postulantes no ingresantes de hace una década).",
    "criterion": "Cada categoría tiene plazo justificado y se respeta; no aplicar un plazo único arbitrario.",
    "interpretation": "Cada categoría de datos requiere un plazo de conservación justificado, incluidos archivo histórico, obligaciones legales y posibles bloqueos por litigio. Finalizado el plazo, ejecutar la disposición aprobada; no conservar indefinidamente por comodidad.",
    "implementer": "Archivo Central de la UNSA, Secretaría General y OTI.",
    "auditor": "Auditor de TI de OCI.",
    "rubric": [
      "No existe ningún criterio ni política de retención; la universidad conserva absolutamente todo de manera indefinida e insegura.",
      "Se aplican plazos basados en costumbres del personal administrativo sin base técnica ni respaldo en directivas formales.",
      "La tabla de retención existe en papel para documentos físicos en el Archivo Central, pero no se aplica ni se ha trasladado a los sistemas de información digitales de la OTI.",
      "Tabla de retención digital formalizada y aplicada a las bases de datos de la UNSA, con separación clara entre archivo activo, inactivo y purga.",
      "Reglas de ciclo de vida de datos (Data Lifecycle Management - DLM) automatizadas en la nube y almacenamiento local, con flujos de aprobación digital de purgas y reportes automáticos de cumplimiento de retención. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 745
  },
  {
    "id": "A.1.4.9",
    "b": "B.1.4.9",
    "group": "1",
    "title": "Eliminación",
    "meaning": "Definir y aplicar métodos adecuados de destrucción.",
    "implement": "OTI y Archivo inventarían soportes, verifican la autorización de eliminación y seleccionan sanitización adecuada a discos, SSD, nube o papel. Validan el resultado y registran activo, método, fecha, responsable y verificador en un acta. No aplicar sobrescritura como solución universal a SSD y copias en nube.",
    "audit": "Inspeccionar el almacén de bajas de la Unidad de Control Patrimonial. Seleccionar una muestra de discos duros dados de baja listos para remate/donación; conectarlos mediante una estación forense y ejecutar herramientas de recuperación de datos (ej. Photorec, Autopsy) para verificar si es posible recuperar datos de estudiantes o personal.",
    "criterion": "La eliminación está autorizada, documentada y es eficaz para el soporte.",
    "interpretation": "Al finalizar la conservación autorizada, eliminar la información con un método adecuado al soporte y verificar el resultado. Borrar un archivo o formatear un disco no garantiza que sus datos sean irrecuperables.",
    "implementer": "Unidad de Control Patrimonial y Seguridad de TI de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los equipos de cómputo y discos con bases de datos del SISCAD se donan, venden o tiran a la basura sin formatear o con un simple formateo rápido que permite la recuperación inmediata de los datos.",
      "Se realiza formateo simple de Windows sin verificación técnica ni constancia documental de destrucción.",
      "Se documenta la baja patrimonial de los activos, pero no se verifica técnicamente la destrucción segura de la información residente en los medios magnéticos.",
      "Procedimiento de borrado seguro certificado implementado bajo NIST SP 800-88 con actas de destrucción firmadas por el responsable de seguridad de la OTI.",
      "Servicios de desmagnetización y destrucción física in situ certificados, con registros de auditoría forense y cadena de custodia completa para cada activo con PII destruido. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 775
  },
  {
    "id": "A.1.4.10",
    "b": "B.1.4.10",
    "group": "1",
    "title": "Controles de transmisión de PII",
    "meaning": "Proteger los datos que se transmiten.",
    "implement": "Forzar el uso estricto de HTTPS con TLS 1.3 y suites criptográficas robustas en todos los dominios y subdominios institucionales (*.unsa.edu.pe), configurando cabeceras de seguridad estrictas (HSTS - HTTP Strict Transport Security). Para transferencias de archivos masivos a bancos (para el pago de pensiones o matrículas), utilizar exclusivamente túneles SFTP con autenticación de clave pública o APIs seguras protegidas con tokens mTLS (mutual TLS).",
    "audit": "Ejecutar análisis de vulnerabilidades de red y auditoría SSL/TLS (utilizando herramientas como testssl.sh o Qualys SSL Labs) sobre los portales siscad.unsa.edu.pe y admision.unsa.edu.pe. Verificar que no se soporten versiones inseguras de cifrado (SSLv3, TLS 1.0, TLS 1.1) y que no se transmitan contraseñas o datos personales en texto plano por HTTP, FTP o Telnet.",
    "criterion": "El envío llega al destinatario autorizado y conserva protección y trazabilidad.",
    "interpretation": "Cuando los datos de los estudiantes o docentes viajan por redes públicas o internas (por ejemplo, comunicación entre el navegador y el SISCAD, o envío de reportes a SUNEDU y entidades bancarias), deben emplearse mecanismos de cifrado robusto y validación de puntos finales para evitar interceptaciones (Man-in-the-Middle), manipulaciones o fugas de datos.",
    "implementer": "Equipo de Redes y Telecomunicaciones de la OTI.",
    "auditor": "Auditor de TI / Especialista en Ciberseguridad.",
    "rubric": [
      "Los sistemas transmiten credenciales, notas y DNIs por canales inseguros en texto claro (HTTP/FTP); cualquier atacante en la red Wi-Fi del campus puede esnifar los datos personales.",
      "Se usa HTTPS pero con certificados vencidos, autofirmados o configuraciones débiles con algoritmos deprecados vulnerables.",
      "HTTPS implementado en los portales web principales, pero las transferencias interinstitucionales (a bancos o entidades públicas) se realizan enviando hojas de cálculo sin cifrar por correo electrónico convencional.",
      "Todo el tráfico web y de APIs institucionales está forzado mediante TLS 1.2/1.3 con certificados válidos y canales SFTP/APIs seguras para el intercambio con terceros.",
      "Implementación de cifrado extremo a extremo de extremo a extremo (E2EE), mTLS para comunicaciones máquina a máquina y prevención de pérdida de datos (DLP) en los gateways de salida de red. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 805
  },
  {
    "id": "A.1.5.2",
    "b": "B.1.5.2",
    "group": "1",
    "title": "Identificar la base para la transferencia de PII entre jurisdicciones",
    "meaning": "Documentar la base aplicable a transferencias entre jurisdicciones.",
    "implement": "Mapear ubicaciones y accesos de proveedores y subencargados, incluidos soporte remoto y respaldos. Asesoría Jurídica documenta las garantías y condiciones peruanas aplicables y las comunicaciones o registros exigibles. Incorporar compromisos verificables al contrato y aprobar el flujo antes de su habilitación.",
    "audit": "Solicitar la lista de todos los servicios cloud contratados por la UNSA y su localización geográfica física de servidores. Cotejar si las transferencias internacionales de bases de datos tienen registrada y validada su base jurídica y su registro ante la ANPD.",
    "criterion": "Cada transferencia tiene un fundamento aplicable documentado.",
    "interpretation": "Si los flujos previstos llevan datos fuera de Perú, identificar destino, destinatario, finalidad y garantías aplicables antes de transferir. Asesoría Jurídica valida el fundamento y las obligaciones del flujo transfronterizo; un contrato de nube o una cláusula europea no bastan por sí solos.",
    "implementer": "Asesoría Jurídica, OPDP y OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA almacena datos masivos de estudiantes en la nube extranjera sin saber en qué país están y sin ningún contrato ni base legal de transferencia internacional.",
      "Se usan servicios en la nube gratuitos o corporativos sin verificar las condiciones de servicio de privacidad internacional.",
      "Se conoce que los datos están en servidores extranjeros (ej. servidores de Google), pero no se ha tramitado el registro de flujo transfronterizo ante la ANPD.",
      "Bases legales documentadas e integradas formalmente en los contratos de nube corporativos mediante cláusulas contractuales estándar.",
      "Auditoría legal continua de los marcos internacionales de privacidad y garantías contractuales de los proveedores de nube, con registro actualizado ante la ANPD. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 836
  },
  {
    "id": "A.1.5.3",
    "b": "B.1.5.3",
    "group": "1",
    "title": "Países y organizaciones internacionales a los que se puede transferir PII",
    "meaning": "Conocer los países y organizaciones a los que pueden transferirse datos.",
    "implement": "Publicar en la Política de Privacidad Integral de la UNSA un anexo específico titulado «Catálogo de Destinos Internacionales de PII», donde se detalle: «Plataforma de correo institucional y almacenamiento en la nube: Estados Unidos (Google LLC); Plataforma de videoconferencias: Estados Unidos / Irlanda (Zoom Video Communications); Programas de movilidad estudiantil: Universidades receptoras de la Unión Europea y Latinoamérica según convenio específico».",
    "audit": "Revisar el portal de transparencia y la política de privacidad de la UNSA. Verificar si se listan con claridad los países receptores de datos personales y comprobar que coincidan con la infraestructura técnica real de los proveedores de TI contratados.",
    "criterion": "Los destinos posibles conocidos están documentados y actualizados.",
    "interpretation": "Transparencia con la comunidad universitaria. Los estudiantes, docentes y postulantes tienen derecho a saber exactamente a qué países (ej. Estados Unidos, Irlanda, Chile) pueden ser transferidos sus datos personales por el uso de plataformas tecnológicas o convenios de intercambio académico.",
    "implementer": "OPDP y OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "No se informa a nadie sobre la transferencia de datos al extranjero; los estudiantes desconocen que su información reside fuera del país.",
      "Se menciona ambiguamente que «los datos podrán ser alojados en la nube», sin precisar países ni entidades receptoras.",
      "Se identifican los proveedores (Google, Microsoft), pero no se documenta formalmente la lista de países donde se localizan los centros de datos.",
      "Catálogo de países y organizaciones internacionales claramente documentado en las políticas de privacidad institucionales de acceso público.",
      "El catálogo de transferencias internacionales se actualiza automáticamente ante la incorporación de nuevas herramientas SaaS/IaaS en el ecosistema universitario. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 866
  },
  {
    "id": "A.1.5.4",
    "b": "B.1.5.4",
    "group": "1",
    "title": "Registros de transferencia de PII",
    "meaning": "Registrar intercambios y permitir cooperación posterior.",
    "implement": "Diseñar e implementar el Módulo de Trazabilidad de Transferencias Externas: cada vez que se ejecute una exportación de datos o consumo de API institucional por un tercero autorizado, el sistema registra automáticamente: fecha y hora, identidad del funcionario emisor, entidad receptora, finalidad del lote, relación de DNIs transferidos y código de hash del archivo transferido.",
    "audit": "Solicitar la bitácora de transferencias de datos a entidades externas del último año. Verificar mediante muestreo aleatorio si las entregas masivas de información (ej. padrón de carné universitario) cuentan con su respectivo registro de trazabilidad y acuse de recepción técnica formal.",
    "criterion": "Los registros permiten identificar el flujo y colaborar ante solicitudes.",
    "interpretation": "Cada vez que una base de datos o lote de información personal sale de la UNSA hacia otra institución o ingresa desde un tercero (por ejemplo: envío trimestral de la nómina de graduados a SUNEDU, envío del padrón de alumnos a la entidad financiera recaudadora, o recepción del padrón de becarios de PRONABEC), debe quedar asentado en una bitácora auditable de transferencias.",
    "implementer": "Oficina de Interoperabilidad de la OTI y Mesa de Partes Institucional.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los funcionarios de la universidad comparten archivos de Excel con listas completas de alumnos por correo personal o memorias USB sin registrar qué se envió, a quién ni cuándo.",
      "Se registran únicamente las transferencias que pasan por mesa de partes tradicional con oficio físico, pero no las transferencias técnicas digitales de la OTI.",
      "Existen registros parciales en memorandos de la OTI, pero carecen del detalle de qué datos específicos fueron transmitidos y bajo qué condiciones de retención.",
      "Libro de registro de transferencias digitales y físicas formalizado, con trazabilidad completa de emisores, receptores y alcance de datos.",
      "Sistema de registro automatizado mediante tecnología de eventos inmutables (audit log stream centralizado), integrado a la pasarela de interoperabilidad universitaria. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 896
  },
  {
    "id": "A.1.5.5",
    "b": "B.1.5.5",
    "group": "1",
    "title": "Registros de divulgaciones de PII a terceros",
    "meaning": "Saber qué datos se entregaron, a quién y cuándo.",
    "implement": "Secretaría General, Asesoría Jurídica y OTI crean una bitácora de divulgaciones: tercero, finalidad, fundamento, campos entregados, autorización, canal y fecha. Para requerimientos de autoridades, verificar competencia, autenticidad y alcance antes de entregar solo la información procedente.",
    "audit": "Muestrear divulgaciones del periodo: convenios, solicitudes de autoridades y otras entregas autorizadas. Contrastar expediente, fundamento, contenido entregado y bitácora; investigar entregas sin sustento o sin registro.",
    "criterion": "Las divulgaciones examinadas tienen trazabilidad suficiente.",
    "interpretation": "Registrar las divulgaciones a terceros, tanto habituales como excepcionales, con destinatario, datos, fecha y fundamento. Las solicitudes de autoridades son un caso de aplicación, no el único.",
    "implementer": "Oficina de Asesoría Jurídica, Secretaría General y CISO/OTI.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Se entregan datos sensibles de estudiantes o trabajadores a cualquier persona o entidad que los solicite por teléfono o carta simple, sin registro ni verificación de mandato legal vinculante.",
      "Se entregan datos con base en cartas de requerimiento pero no se guarda copia ni bitácora de qué información específica fue entregada.",
      "Las divulgaciones constan en los archivos físicos de Asesoría Jurídica, pero no existe una bitácora centralizada ni comunicación con el OPDP o la OTI para registrar el evento de privacidad.",
      "Registro centralizado y formalizado de divulgaciones a terceros con detalle de qué, a quién, cuándo y bajo qué base legal vinculante.",
      "Registro digital seguro con validación previa automatizada de órdenes judiciales y trazabilidad criptográfica de las entregas de datos, auditable en tiempo real por el Comité de Privacidad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 926
  },
  {
    "id": "A.2.2.2",
    "b": "B.2.2.2",
    "group": "2",
    "title": "Acuerdo con el cliente",
    "meaning": "Precisar la asistencia del encargado a su cliente.",
    "implement": "Diseñar una plantilla contractual de Encargado de Tratamiento obligatoria para todo convenio de servicios con terceros. En el contrato con PRONABEC o MINSA, estipular expresamente que la UNSA brindará reportes técnicos de seguridad, facilitará información para auditorías y notificará formalmente incidentes para que el cliente cumpla con sus obligaciones de notificación legal.",
    "audit": "Seleccionar una muestra de los contratos de prestación de servicios y convenios interinstitucionales vigentes donde la UNSA procese datos de terceros. Verificar si el contrato estipula formalmente las obligaciones de asistencia en privacidad (gestión de brechas, PIAs y consultas ante la ANPD) conforme al control B.2.2.2 de la norma.",
    "criterion": "El acuerdo cubre las obligaciones de asistencia pertinentes.",
    "interpretation": "Cuando la UNSA presta servicios de procesamiento a una entidad externa, el contrato no puede ser un acuerdo genérico de prestación de servicios. Debe formalizarse un Acuerdo de Procesamiento de Datos (Data Processing Agreement - DPA) donde la universidad se comprometa contractualmente a asistir al cliente en la atención de brechas de seguridad, evaluaciones de impacto (PIA) y respuesta ante la autoridad de control.",
    "implementer": "La Oficina de Asesoría Jurídica en coordinación con la OTI y la unidad ejecutora del servicio (ej. Dirección de Admisión o Vicerrectorado de Investigación).",
    "auditor": "Auditor de TI del Órgano de Control Institucional (OCI).",
    "rubric": [
      "La UNSA firma contratos de servicios o convenios donde procesa miles de datos de terceros sin cláusulas de protección de datos ni compromiso de asistencia.",
      "El contrato solo contiene una línea genérica sobre «confidencialidad mutua», sin regular incidentes, PIAs ni asistencia técnica.",
      "Se estipula la asistencia técnica ante incidentes, pero no se detallan plazos de entrega ni apoyo en evaluaciones de impacto a la privacidad.",
      "Contratos formalizados con cláusulas DPA alineadas a ISO 27701 y la Ley N° 29733, delimitando claramente el alcance de la asistencia técnica.",
      "Procedimiento institucional automatizado que valida la inclusión del anexo DPA previo a la firma del Rectorado, con métricas de cumplimiento de asistencia por cliente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 982
  },
  {
    "id": "A.2.2.3",
    "b": "B.2.2.3",
    "group": "2",
    "title": "Propósitos de la organización",
    "meaning": "Procesar por cuenta ajena solo según instrucciones documentadas.",
    "implement": "Aislar de manera lógica o física las bases de datos del cliente en esquemas separados e independientes de los sistemas institucionales (SISCAD). Crear cuentas de servicio específicas y directivas técnicas que impidan que los scripts institucionales crucen datos del cliente con las bases de datos de alumnos o marketing de la UNSA.",
    "audit": "Revisar las instrucciones documentadas del contrato del cliente y auditar los scripts de bases de datos, tareas programadas (cron jobs) y procedimientos almacenados ejecutados en los servidores que procesan dicha información. Comprobar que no existan sentencias INSERT o JOIN que deriven datos del cliente hacia bases de datos agustinas.",
    "criterion": "Las operaciones se corresponden con instrucciones documentadas.",
    "interpretation": "Principio de subordinación del encargado. La UNSA tiene prohibido utilizar los datos que un tercero le confió para fines propios (por ejemplo: si una entidad encarga a la UNSA procesar un examen de selección, la universidad no puede usar esos correos y teléfonos para promocionar sus programas de posgrado o CEPRUNSA).",
    "implementer": "Administradores de Bases de Datos (DBA) y Jefes de Proyecto de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Los datos recibidos del cliente son absorbidos por el sistema de marketing de la UNSA para captar postulantes a posgrado sin autorización.",
      "No hay reutilización intencional, pero las tablas del cliente están mezcladas con datos institucionales en el mismo esquema sin segmentación.",
      "Las bases de datos están separadas lógicamente, pero los accesos de los programadores permiten consultas cruzadas sin supervisión.",
      "Aislamiento lógico estricto, accesos restringidos por rol y verificación de que el tratamiento coincide al 100% con las instrucciones del cliente.",
      "Entornos de ejecución aislados (contenedores o VPCs independientes) con políticas de cero confianza (Zero Trust), donde cualquier consulta no parametrizada bloquea la base de datos y genera una alerta automática. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1020
  },
  {
    "id": "A.2.2.4",
    "b": "B.2.2.4",
    "group": "2",
    "title": "Uso para marketing y publicidad",
    "meaning": "No reutilizar datos para publicidad sin establecer el consentimiento previo correspondiente.",
    "implement": "Implementar listas de exclusión (blocklists) automáticas en los servidores de correo institucional y plataformas de mensajería masiva (ej. Mailchimp, SendGrid o servidor SMTP interno) para impedir que dominios o correos provenientes de bases de datos de clientes externos sean agregados a listas de difusión publicitaria de la UNSA.",
    "audit": "Comparar de forma autorizada y seudonimizada los destinatarios de campañas con los padrones recibidos de clientes. Una coincidencia exige investigar procedencia, finalidad e instrucciones, además del consentimiento cuando corresponda. Documentar el incumplimiento con evidencia; clasificar su gravedad según alcance e impacto, sin automatismos.",
    "criterion": "No hay uso publicitario sin consentimiento pertinente ni condicionamiento del servicio.",
    "interpretation": "Si la UNSA tiene acceso a datos personales de estudiantes externos, postulantes de convenios o participantes de programas regionales, no puede enviarles publicidad de sus diplomados, maestrías o eventos pagados a menos que el cliente demuestre que dichos titulares autorizaron explícitamente esa finalidad comercial específica.",
    "implementer": "Oficina de Comunicación e Imagen Institucional y Área de Soporte de Redes/OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Se utiliza la base de datos del cliente sistemáticamente para enviar publicidad masiva institucional de la UNSA.",
      "Se detiene el envío publicitario solo si el cliente externo presenta un reclamo formal por escrito.",
      "Existe una prohibición verbal o directiva interna informal, pero los sistemas de envío de correo no cuentan con controles técnicos de bloqueo.",
      "Directiva expresa aprobada y filtros técnicos implementados en los servidores de correo institucional que impiden cargar listas de clientes externos a campañas comerciales.",
      "Conciliación automatizada previa a cada campaña de envío masivo que valida criptográficamente la trazabilidad de consentimiento explícito antes de despachar correos publicitarios. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1059
  },
  {
    "id": "A.2.2.5",
    "b": "B.2.2.5",
    "group": "2",
    "title": "Instrucción infractora",
    "meaning": "Informar al cliente si una instrucción se considera contraria a requisitos legales.",
    "implement": "Establecer un protocolo de «Objeción Técnica de Instrucciones». Si el cliente emite un requerimiento técnico que vulnera la Ley N° 29733 o la ISO 27701, el OPDP redacta en un plazo no mayor a 3 días hábiles un Informe Técnico-Legal fundamentado, suspendiendo la ejecución de la instrucción hasta que el cliente rectifique el requerimiento.",
    "audit": "Solicitar las actas de requerimientos técnicos y cambios de alcance (change requests) de proyectos desarrollados para terceros. Verificar si el equipo técnico evaluó el impacto normativo de las peticiones del cliente y si existen registros de observaciones remitidas al cliente ante solicitudes dudosas.",
    "criterion": "Las instrucciones cuestionadas se comunican y gestionan documentadamente.",
    "interpretation": "La UNSA no puede ampararse en la «obediencia debida». Si un cliente (ej. un gobierno local que contrató a la universidad para desarrollar un sistema) instruye a la OTI a publicar las notas de postulantes con sus historiales médicos o almacenar contraseñas en texto plano, la UNSA está obligada por norma a notificar formalmente que dicha instrucción viola la ley.",
    "implementer": "El Oficial de Protección de Datos Personales (OPDP) junto con el Líder Técnico del Proyecto en la OTI.",
    "auditor": "Auditor de Sistemas / OCI.",
    "rubric": [
      "La UNSA ejecuta cualquier orden del cliente sin cuestionar, incluso si implica publicar datos sensibles en portales abiertos o violar la ley.",
      "Los desarrolladores identifican fallas legales o de privacidad pero las implementan alegando que «el cliente lo pidió y es su responsabilidad».",
      "Se advierte al cliente verbalmente en reuniones de coordinación, pero no se deja constancia documental ni se emite una opinión técnica formal.",
      "Procedimiento documentado donde la OTI y Asesoría Jurídica formalizan mediante oficio las objeciones normativas a instrucciones del cliente.",
      "Flujo de trabajo automatizado en el sistema de gestión de requerimientos que bloquea el despliegue técnico si el OPDP emite una bandera de infracción legal (compliance flag), con escalamiento a comisiones mixtas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1093
  },
  {
    "id": "A.2.2.6",
    "b": "B.2.2.6",
    "group": "2",
    "title": "Obligaciones del cliente",
    "meaning": "Aportar información que permita al cliente acreditar sus obligaciones.",
    "implement": "Elaborar un «Dossier de Cumplimiento Técnico de Privacidad y Seguridad» para clientes. Este expediente incluye diagramas de arquitectura de red seguros, matriz de controles ISO 27001/27701 implementados, informes ejecutivos de escaneo de vulnerabilidades sin revelar datos sensibles institucionales y protocolos de respaldo de datos.",
    "audit": "Verificar que existan canales y procedimientos formales para atender solicitudes de auditoría formuladas por los clientes externos. Constatar que la información técnica suministrada sea veraz, suficiente y no comprometa la seguridad de otros sistemas internos de la universidad.",
    "criterion": "La información es suficiente y pertinente para las obligaciones del cliente.",
    "interpretation": "El cliente externo debe responder ante sus propios auditores y autoridades de control. La UNSA debe facilitarle evidencias técnicas (certificados de seguridad, registros de logs, resultados de auditorías de vulnerabilidades o arquitectura de software) que le permitan probar que el servicio contratado es seguro y cumple con la privacidad.",
    "implementer": "CISO institucional y Jefatura de Operaciones de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA se niega a entregar cualquier información sobre la seguridad de sus sistemas al cliente externo, impidiéndole auditar su servicio.",
      "Se entrega información técnica desordenada, incompleta o desactualizada solo tras reiteradas cartas notariales del cliente.",
      "Se remite información básica sobre la infraestructura física pero no se entregan evidencias sobre controles de acceso ni logs de tratamiento de PII.",
      "Provisión estructurada de informes de cumplimiento técnico y facilidades documentadas para auditorías pactadas en contrato.",
      "Portal de autoservicio de auditoría (Compliance Dashboard) donde el cliente externo puede descargar certificados de seguridad, métricas de SLA y constancias periódicas de cumplimiento normativo. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1123
  },
  {
    "id": "A.2.2.7",
    "b": "B.2.2.7",
    "group": "2",
    "title": "Registros relacionados con el procesamiento de PII",
    "meaning": "Mantener registros sobre los tratamientos realizados por cuenta del cliente.",
    "implement": "Implementar el «Libro de Registros de Tratamiento por Cuenta de Terceros», donde por cada contrato se registran: identificación del cliente (RUC/Razón Social), vigencia, tipos de PII recibidos (ej. postulantes, notas, historiales), bases de datos utilizadas, servidores de alojamiento y responsables técnicos asignados en la UNSA.",
    "audit": "Solicitar el inventario de servicios externos de procesamiento y contrastarlo contra las órdenes de servicio y convenios aprobados por Consejo Universitario. Verificar que cada contrato activo cuente con su respectiva ficha en el registro del PIMS.",
    "criterion": "Los registros cubren los encargos y se mantienen protegidos.",
    "interpretation": "Como encargado, la UNSA debe llevar su propio Registro de Actividades de Tratamiento como Procesador (ROPA de Encargado). Debe constar: qué clientes tiene, qué categorías de procesamiento realiza por cuenta de cada uno, si existen transferencias internacionales y qué medidas técnicas de seguridad se aplican.",
    "implementer": "El OPDP de la UNSA con los administradores técnicos de proyectos de la OTI.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "La OTI ejecuta proyectos y procesa datos para entidades externas sin llevar ningún registro formal institucional.",
      "Existen registros dispersos en carpetas personales de docentes investigadores o ingenieros de desarrollo sin control centralizado.",
      "El registro existe pero no se actualiza al iniciar o concluir contratos, omitiendo transferencias o categorías de datos tratadas.",
      "Registro formalizado y actualizado bajo los criterios del control B.2.2.7, articulado entre la OTI y el OPDP.",
      "Repositorio digital integrado que sincroniza automáticamente las altas y bajas de contratos administrativos con el inventario de bases de datos operativas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1153
  },
  {
    "id": "A.2.3.2",
    "b": "B.2.3.2",
    "group": "2",
    "title": "Cumplir con las obligaciones hacia los titulares de PII",
    "meaning": "Dar al cliente medios para cumplir frente a las personas.",
    "implement": "Habilitar endpoints seguros en la API del sistema (ej. /api/v1/external-client/rectify-principal o /api/v1/external-client/erasure-principal) protegidos con tokens JWT y mTLS, o entregar un panel de administración web donde el personal del cliente externo pueda ejecutar por sí mismo la rectificación o baja lógica de los datos de sus titulares.",
    "audit": "Realizar una prueba funcional: solicitar al cliente externo un ticket de prueba de supresión de datos y verificar que la herramienta provista por la UNSA permita reflejar la eliminación en la base de datos de destino en menos de 24 horas y sin dejar residuos en cachés.",
    "criterion": "La asistencia permite al cliente cumplir sus obligaciones y plazos.",
    "interpretation": "Los estudiantes o usuarios cuyos datos son procesados por la UNSA recurrirán al Cliente (ej. PRONABEC o Concytec) para ejercer sus derechos ARCO (rectificación, supresión, acceso). La UNSA no debe atender al titular directamente sin autorización del cliente, pero debe proporcionar al cliente las interfaces técnicas, APIs o mecanismos para que este pueda rectificar, borrar o exportar los datos en los sistemas de la UNSA en tiempo y forma.",
    "implementer": "Equipo de Desarrollo de Software de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los sistemas desarrollados o alojados por la UNSA no permiten modificar ni borrar datos; el cliente no puede responder ante las solicitudes de sus propios titulares.",
      "Las correcciones exigen solicitudes burocráticas por mesa de partes tradicional que demoran semanas, provocando que el cliente venza sus plazos de ley.",
      "Existen herramientas manuales (scripts ejecutados por el DBA de la OTI a pedido por correo), pero sin trazabilidad ni SLAs formales.",
      "Herramientas y procedimientos técnicos documentados que permiten al cliente externo ejecutar o solicitar modificaciones y supresiones dentro del plazo pactado.",
      "Interfaces automatizadas de autoservicio o APIs REST seguras para la gestión en tiempo real del ciclo de vida de los derechos de los titulares por parte del cliente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1184
  },
  {
    "id": "A.2.4.2",
    "b": "B.2.4.2",
    "group": "2",
    "title": "Archivos temporales",
    "meaning": "Controlar la vida de archivos intermedios.",
    "implement": "Diseñar directivas en los scripts de procesamiento (ej. en Python o bash) para que los archivos generados en /tmp/processing_client/ se procesen en memoria RAM o se destruyan automáticamente con funciones de borrado seguro (shred o eliminación post-ejecución en bloques finally). Programar un proceso daemon que purgue todo archivo temporal con más de 12 horas de creación.",
    "audit": "Inspeccionar el sistema de archivos de los servidores de procesamiento tras una jornada de ejecución masiva para el cliente externo. Verificar mediante terminal si persisten archivos temporales huérfanos con extensiones .tmp, .csv, .pdf o .swp que contengan datos personales del cliente.",
    "criterion": "Los temporales no exceden su plazo aprobado.",
    "interpretation": "Durante el procesamiento para terceros (procesamiento masivo de fichas de inscripción, generación de reportes en PDF de exámenes externos o tablas intermedias de migración ETL), se generan copias efímeras. La UNSA debe asegurar que ningún archivo temporal que contenga PII del cliente quede abandonado en discos duros, directorios compartidos o carpetas de spooler.",
    "implementer": "Ingenieros de DevOps y DBAs de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los servidores conservan gigabytes de archivos temporales con datos de postulantes o participantes externos accesibles para cualquier operador.",
      "Los desarrolladores eliminan archivos manualmente según su criterio cuando la unidad de disco se queda sin espacio.",
      "Existen rutinas de purga, pero los periodos de retención no están formalizados ni cubren los fallos anómalos de ejecución que dejan archivos abandonados.",
      "Procedimiento formal documentado con tareas programadas de eliminación periódica (periodo máximo documentado, ej. 24 horas) en todos los entornos.",
      "Uso de volúmenes efímeros en contenedores (Docker / Kubernetes ephemeral storage) que se destruyen por diseño al finalizar la tarea computacional, con auditoría de espacio en logs. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1215
  },
  {
    "id": "A.2.4.3",
    "b": "B.2.4.3",
    "group": "2",
    "title": "Retorno, transferencia o eliminación de PII",
    "meaning": "Poder retornar, transferir o eliminar los datos de forma segura.",
    "implement": "Redactar y publicar la Política de Cierre Contractual y Disposición de PII de Clientes. Al finalizar el servicio, exportar los datos en contenedores cifrados (ej. comprimidos con cifrado AES-256) mediante canal SFTP al cliente; tras el acuse de recibo, ejecutar la purga de la base de datos y la sobreescritura de los respaldos correspondientes, emitiendo un Acta Técnica de Destrucción suscrita por el Director de la OTI.",
    "audit": "Muestrear convenios terminados y comprobar entregas, actas de eliminación y restricciones de uso. En respaldos, verificar el calendario de expiración, los accesos restringidos y que una restauración reaplique las eliminaciones. Evaluar cualquier retención legal documentada.",
    "criterion": "El cierre cumple instrucciones y deja evidencia verificable.",
    "interpretation": "Al terminar un servicio, aplicar las instrucciones de devolución, transferencia o eliminación acordadas con el cliente. Documentar cualquier conservación legal, aislar los datos retenidos y gestionar la expiración de respaldos sin permitir su reutilización.",
    "implementer": "Jefatura de Infraestructura y Servidores de la OTI y OPDP.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Los datos de clientes antiguos siguen almacenados en los servidores de la UNSA indefinidamente años después de finalizados los contratos.",
      "Se entregan los datos al cliente por correo regular pero la UNSA retiene copias de las bases de datos sin autorización.",
      "Se eliminan las tablas principales pero las copias de seguridad históricas (backups) conservan los datos de los clientes sin procedimiento de retiro.",
      "Política disponible para clientes, con procedimientos ejecutados de retorno seguro o purga técnica certificada tras la conclusión contractual.",
      "Procedimiento de desaprovisionamiento totalmente orquestado, con borrado criptográfico verificado (crypto-shredding) y certificación forense de no recuperabilidad entregada al cliente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1245
  },
  {
    "id": "A.2.4.4",
    "b": "B.2.4.4",
    "group": "2",
    "title": "Controles de transmisión de PII",
    "meaning": "Asegurar que los datos llegan al destinatario autorizado.",
    "implement": "Configurar túneles de red dedicados (VPN IPsec sitio a sitio o mTLS) para la interconexión con los servidores del cliente. En transferencias batch de archivos, requerir cifrado a nivel de archivo con OpenPGP/GPG antes de transmitir por canales SFTP o HTTPS, y verificar hashes de integridad (SHA-256) antes y después de cada transferencia.",
    "audit": "Inspeccionar las configuraciones de red y los certificados digitales de las interfaces de intercambio con el cliente. Realizar una captura controlada de tráfico en el switch de borde para comprobar que ninguna trama contenga PII en texto claro.",
    "criterion": "Los envíos cumplen el acuerdo y protegen destinatario e información.",
    "interpretation": "Toda transmisión de PII procesada para el cliente (intercambio de listas por SFTP, APIs de sincronización o consumo de web services) debe estar protegida para impedir intercepciones, fugas o redireccionamientos indebidos hacia destinatarios erróneos.",
    "implementer": "Equipo de Comunicaciones y Seguridad Perimetral de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA transmite bases de datos de clientes externos por protocolos inseguros (FTP tradicional o adjuntos en correos electrónicos abiertos).",
      "Se utiliza HTTPS o SFTP pero con certificados SSL caducados o algoritmos criptográficos vulnerables.",
      "Los canales son seguros, pero no se realizan comprobaciones de integridad (hashes) ni validaciones de autenticación mutua de endpoints.",
      "Canales cifrados de extremo a extremo (TLS 1.3 / SFTP) con autenticación basada en llaves públicas y verificación estricta de destinos.",
      "Integración de inspección DLP (Data Loss Prevention) en los gateways de red institucionales y validación criptográfica automatizada de acuses de recibo extremo a extremo. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1275
  },
  {
    "id": "A.2.5.2",
    "b": "B.2.5.2",
    "group": "2",
    "title": "Base para la transferencia de PII entre jurisdicciones",
    "meaning": "Informar al cliente sobre la base de transferencia y sus cambios.",
    "implement": "Incluir en la propuesta técnica y en el contrato un acápite formal de «Jurisdicción y Localización de la Infraestructura». Si la OTI planea migrar los servidores de almacenamiento local del campus a un servicio en la nube en el extranjero, notificar al cliente con al menos 30 días calendario de anticipación mediante oficio formal.",
    "audit": "Revisar las regiones de despliegue en las consolas de nube (AWS/Azure/GCP) utilizadas para proyectos de clientes y cotejar si las ubicaciones geográficas coinciden con lo informado y aprobado en los expedientes contractuales.",
    "criterion": "El cliente recibe información oportuna conforme al acuerdo.",
    "interpretation": "Si la UNSA aloja el sistema del cliente en servidores cloud ubicados fuera del Perú (ej. en zonas de Amazon Web Services en EE.UU. o Brasil), debe advertirlo al cliente con anterioridad, especificando la base legal y dándole la facultad de oponerse o finalizar el contrato si sus directivas le impiden almacenar datos en el extranjero.",
    "implementer": "Jefatura de Proyectos de la OTI y Asesoría Jurídica.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "La UNSA migra bases de datos de clientes a servidores en el extranjero sin informarles ni contar con autorización.",
      "Se informa de manera verbal o tardía una vez que la transferencia internacional ya se ejecutó.",
      "Se menciona la existencia de servidores en el extranjero en el contrato original, pero no se notifica al cliente si se cambian los países de destino.",
      "Información previa documentada sobre la localización geográfica y bases de transferencia, notificando cambios con antelación conforme a contrato.",
      "Herramienta de gobernanza multirregión con geobloqueo estricto (data residency enforcement) que garantiza que la PII no salga del país a menos que exista aprobación digital del cliente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1306
  },
  {
    "id": "A.2.5.3",
    "b": "B.2.5.3",
    "group": "2",
    "title": "Países y organizaciones internacionales a los que se puede transferir PII",
    "meaning": "Documentar países y organizaciones posibles de destino.",
    "implement": "Elaborar el «Catálogo de Países de Destino para Servicios de Encargado de Tratamiento», detallando qué servicios operan localmente en el Data Center del campus de San Agustín (Perú) y cuáles emplean proveedores externos en países específicos (ej. Estados Unidos para SaaS, Irlanda para CDN).",
    "audit": "Solicitar la matriz de países aprobados para un proyecto de procesamiento de terceros. Verificar las tablas de ruteo y acuerdos con CDNs/Clouds para validar que los datos no transiten ni se respalden en jurisdicciones no declaradas.",
    "criterion": "La lista refleja las ubicaciones posibles del tratamiento.",
    "interpretation": "La UNSA debe tener una lista taxativa y pública/contractual de todos los países donde la información procesada para el cliente podría terminar residiendo, inclusive por causa de proveedores indirectos de infraestructura.",
    "implementer": "Área de Infraestructura Cloud de la OTI y OPDP.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La universidad desconoce en qué países residen los datos procesados para el cliente.",
      "Se asume genéricamente «en Internet» o «en la nube», sin identificar soberanía nacional ni jurisdicción.",
      "Se documentan los proveedores tecnológicos principales pero no los países donde operan sus centros de datos de respaldo.",
      "Catálogo de países formalmente documentado y anexo a los acuerdos técnicos con clientes.",
      "Monitoreo técnico en tiempo real que rastrea el enrutamiento y residencia física de los datos con alertas inmediatas si se detecta tránsito por países no autorizados. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1336
  },
  {
    "id": "A.2.5.4",
    "b": "B.2.5.4",
    "group": "2",
    "title": "Registros de divulgaciones de PII a terceros",
    "meaning": "Registrar datos revelados a terceros.",
    "implement": "Habilitar la «Bitácora Digital de Divulgaciones de Datos de Clientes»: cada entrega formal genera un registro con fecha, hora, identidad del receptor, datos específicos proporcionados y copia del sustento legal o contractual de la revelación.",
    "audit": "Auditar el libro de divulgaciones correspondiente a contratos con terceros. Verificar que cada entrega cuente con sus campos completos (qué, a quién, cuándo) y comprobar que no existan discrepancias frente a los oficios tramitados por la universidad.",
    "criterion": "Cada divulgación examinada puede reconstruirse.",
    "interpretation": "Si durante la prestación del servicio la UNSA debe divulgar datos del cliente a terceros (por orden judicial, auditoría fiscal o por necesidad de interoperabilidad pactada), debe asentar cada revelación en una bitácora detallada para respaldar cualquier indagación posterior.",
    "implementer": "Secretaría General, Asesoría Jurídica y OTI.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Se entregan datos de clientes a terceros sin dejar ningún registro en la universidad.",
      "Se archiva únicamente el oficio de salida en mesa de partes física sin detallar qué campos o registros de PII fueron extraídos.",
      "El registro existe en notas de correo o memorandos internos pero no en una bitácora centralizada auditable.",
      "Registro formalizado y completo de todas las divulgaciones de PII a terceros conforme a las especificaciones de la norma.",
      "Sistema de registro inmutable con firmas digitales y sellos de tiempo de cada transacción de divulgación accesible para consulta del cliente correspondiente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1366
  },
  {
    "id": "A.2.5.5",
    "b": "B.2.5.5",
    "group": "2",
    "title": "Notificación de solicitudes de divulgación de PII",
    "meaning": "Notificar al cliente solicitudes legalmente vinculantes, salvo prohibición aplicable.",
    "implement": "Diseñar el «Flujo de Notificación de Órdenes Judiciales sobre Datos de Clientes»: al ingresar un requerimiento judicial sobre datos de terceros, Asesoría Jurídica revisa si existe mandato de reserva legal; si no lo hay, notifica formalmente al cliente por canal seguro en un plazo máximo de 24 horas.",
    "audit": "Solicitar expedientes de órdenes judiciales que hayan recaído sobre bases de datos de clientes externos. Verificar que en los actuados conste la notificación oportuna cursada al cliente con fecha y hora comprobables.",
    "criterion": "La notificación respeta las obligaciones legales y contractuales.",
    "interpretation": "Si la Policía, Fiscalía, Sunafil o un juzgado remite un mandato a la UNSA exigiendo la entrega de datos pertenecientes a un cliente externo (ej. expedientes del PRONABEC procesados por la universidad), la UNSA debe notificar inmediatamente al cliente antes de responder, salvo que la orden judicial prohíba expresamente la notificación por secreto de investigación penal.",
    "implementer": "Oficina de Asesoría Jurídica y Mesa de Partes Institucional.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA entrega datos de clientes ante solicitudes judiciales sin avisar jamás al cliente, causándole contingencias legales.",
      "Se avisa al cliente de forma informal o tras varias semanas de haber entregado la información.",
      "Se notifica al cliente formalmente pero sin un procedimiento estandarizado, dependiendo del criterio del abogado de turno.",
      "Procedimiento formal documentado con tiempos máximos de notificación inmediata al cliente ante cualquier solicitud externa.",
      "Alertas electrónicas automatizadas y canal seguro de enlace interinstitucional para la comunicación expedita de requerimientos de autoridades judiciales. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1396
  },
  {
    "id": "A.2.5.6",
    "b": "B.2.5.6",
    "group": "2",
    "title": "Divulgaciones de PII legalmente vinculantes",
    "meaning": "Gestionar solicitudes de entrega según su fuerza legal y autorización contractual.",
    "implement": "Derivar los requerimientos recibidos por mesa de partes a Asesoría Jurídica. Verificar autenticidad, competencia, fundamento y alcance; documentar la decisión. Rechazar solicitudes no vinculantes salvo autorización del cliente y entregar únicamente lo procedente; registrar si existe una prohibición legal de informarle.",
    "audit": "Revisar las respuestas a solicitudes de información cursadas por terceros sobre bancos de datos de clientes. Comprobar que no se hayan facilitado accesos sin verificar la naturaleza vinculante de la solicitud.",
    "criterion": "No se aceptan divulgaciones sin fundamento o autorización pertinente.",
    "interpretation": "Las solicitudes de terceros deben evaluarse para determinar si son jurídicamente vinculantes. Puede existir un deber legal sin orden judicial; Asesoría Jurídica comprueba competencia, fundamento y alcance, y el encargado rechaza las solicitudes no vinculantes salvo autorización del cliente.",
    "implementer": "Asesoría Jurídica y Secretaría General.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Funcionarios de la UNSA entregan bases de datos de clientes a conocidos, periodistas o entidades externas sin mandato judicial vinculante.",
      "Se entregan datos creyendo erróneamente que cualquier oficio de una institución pública constituye una orden legal vinculante.",
      "Se rechazan solicitudes sospechosas, pero no se consulta al cliente ni se documenta formalmente el rechazo.",
      "Protocolo formalizado donde solo se aceptan requerimientos legalmente vinculantes o expresamente autorizados por el cliente, rechazando los demás.",
      "Proceso blindado con revisión cruzada técnico-legal obligatoria y registro automático de denegatorias reportado periódicamente al cliente. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1426
  },
  {
    "id": "A.2.5.7",
    "b": "B.2.5.7",
    "group": "2",
    "title": "Divulgación de subencargados utilizados para procesar PII",
    "meaning": "Comunicar al cliente si intervienen subcontratistas.",
    "implement": "En el anexo técnico del contrato del cliente, incluir la lista explícita de subencargados previstos (ej. «Proveedor IaaS: Amazon Web Services; Proveedor de correo: SendGrid»), detallando el servicio prestado, países donde operan y medidas de seguridad.",
    "audit": "Comparar los proveedores y servicios tercerizados contratados en el proyecto contra la lista informada al cliente. Verificar si existen subcontratistas ocultos o no declarados previamente.",
    "criterion": "El cliente conoce los subencargados pertinentes antes de su intervención.",
    "interpretation": "Si la UNSA fue contratada para un servicio de procesamiento y decide subcontratar a un tercero (por ejemplo, contrata a una empresa externa de desarrollo para módulos específicos, contrata un servicio de almacenamiento en AWS o terceriza la calificación electrónica), debe informar con anticipación la identidad de estos subencargados al cliente.",
    "implementer": "Dirección de Logística, Unidad Formuladora del Proyecto y OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA terceriza el tratamiento de datos del cliente a empresas privadas sin informar al cliente en ningún momento.",
      "Se menciona vagamente que «se podrán utilizar servicios externos» sin identificar nombres de empresas ni alcance.",
      "Se informa al cliente solo si este lo pregunta explícitamente en etapas avanzadas del servicio.",
      "Lista completa y detallada de subcontratistas entregada formalmente al cliente antes del inicio efectivo del tratamiento.",
      "Portal de transparencia contractual donde los clientes pueden auditar el inventario dinámico de subencargados y sus certificaciones vigentes de seguridad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1456
  },
  {
    "id": "A.2.5.8",
    "b": "B.2.5.8",
    "group": "2",
    "title": "Contratación de un subencargado para procesar PII",
    "meaning": "Subcontratar de acuerdo con el contrato del cliente.",
    "implement": "Incorporar en las bases de contratación y contratos de los subproveedores cláusulas de réplica (mirror clauses), donde el subcontratista se obliga a cumplir todos los requisitos de privacidad, seguridad y auditoría pactados entre la UNSA y el cliente original.",
    "audit": "Revisar los contratos firmados con los subproveedores vinculados al proyecto del cliente. Constatar que exista la autorización escrita previa del cliente y que el contrato del subencargado incluya la exigencia de los controles de la Tabla A.2.",
    "criterion": "La cadena de encargo está autorizada y las obligaciones se transmiten.",
    "interpretation": "No basta con informar; la UNSA debe contar con la autorización previa (expresa o general por escrito) del cliente para poder contratar al subencargado. Además, debe firmar un contrato con dicho subencargado traspasándole exactamente las mismas obligaciones de protección de datos (controles de la Tabla A.2).",
    "implementer": "Oficina de Abastecimiento/Logística y Asesoría Jurídica.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Se contratan subproveedores sin autorización del cliente y con contratos de compras ordinarias sin garantías de privacidad.",
      "Se solicita autorización verbal al cliente sin evidencia documental verificable.",
      "Se cuenta con autorización del cliente pero el contrato firmado con el subcontratista no le traslada formalmente las exigencias de la Tabla A.2.",
      "Contratación efectuada conforme a la autorización expresa del cliente y contratos con subproveedores que replican las obligaciones normativas.",
      "Evaluación de riesgos de terceros (TPRM) automatizada previa a la contratación del subencargado, con cláusulas de auditoría directa para el cliente original. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1486
  },
  {
    "id": "A.2.5.9",
    "b": "B.2.5.9",
    "group": "2",
    "title": "Cambio de subencargado para procesar PII",
    "meaning": "Comunicar cambios previstos cuando existe autorización general.",
    "implement": "Establecer un plazo de preaviso formal en los convenios (ej. 30 días hábiles de anticipación) antes de cambiar de subcontratista. Enviar una comunicación formal al cliente detallando el nuevo subencargado, su evaluación de seguridad y otorgando un periodo de 10 días para que el cliente manifieste si tiene objeciones técnicas justificadas.",
    "audit": "Inspeccionar los expedientes de migraciones o cambios de proveedores de tecnología en proyectos de clientes durante el año. Constatar si se emitieron las comunicaciones previas y verificar si algún cliente formuló observaciones y cómo fueron gestionadas.",
    "criterion": "El cambio respeta la autorización y oportunidad de oposición acordadas.",
    "interpretation": "Si la UNSA tiene una autorización amplia para usar subproveedores pero decide cambiar de proveedor (por ejemplo: migrar la base de datos de Amazon Web Services a Microsoft Azure o cambiar la empresa que brinda soporte al software), debe avisar con anticipación al cliente, dándole la oportunidad técnica y legal de objetar el cambio o rescindir el contrato.",
    "implementer": "Líder de Proyecto de la OTI y Asesoría Jurídica.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "La UNSA cambia proveedores y transfiere datos a nuevas empresas sin conocimiento del cliente.",
      "Se avisa al cliente únicamente después de haber ejecutado la migración completa.",
      "Se comunica con poca antelación sin otorgar un plazo razonable ni el derecho efectivo a objetar la sustitución.",
      "Notificaciones formalizadas con anticipación debida que otorgan el derecho formal de oposición al cliente antes de procesar PII en el nuevo subencargado.",
      "Gestión automatizada de cambios de subencargados mediante la plataforma de clientes, con flujos de aprobación digital y planes de contingencia documentados ante cualquier objeción técnica formulada. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1516
  },
  {
    "id": "A.3.3",
    "b": "B.3.3",
    "group": "3",
    "title": "Políticas para la seguridad de la información",
    "meaning": "Aprobar, comunicar y revisar políticas para datos personales.",
    "implement": "El comité propuesto de seguridad y privacidad redacta políticas general y específicas y las somete al órgano competente según la organización vigente de la UNSA. Registrar aprobación, versión y revisión; difundir al personal y comprobar comprensión mediante entrevistas y ejercicios.",
    "audit": "Revisar acto de aprobación, versión, responsable, calendario de revisión y cambios significativos. Seleccionar una muestra justificada de personal de Admisión, Bienestar y OTI; verificar recepción, comprensión y aplicación de las políticas.",
    "criterion": "La política es vigente, conocida y aplicable al tratamiento.",
    "interpretation": "La seguridad y privacidad no se gestionan por intuición; requieren directivas formales aprobadas por el máximo órgano de gobierno institucional que integren explícitamente el tratamiento de datos personales junto a la confidencialidad, integridad y disponibilidad tradicionales.",
    "implementer": "El Comité de Seguridad de la Información y Privacidad (Rectorado, CISO, OPDP y Dirección de la OTI).",
    "auditor": "Auditor Líder de Sistemas / OCI UNSA.",
    "rubric": [
      "La UNSA no cuenta con políticas de seguridad de la información aprobadas ni documentadas.",
      "Existen borradores técnicos en la OTI pero carecen de aprobación legal y no mencionan el tratamiento de PII.",
      "Políticas aprobadas por resolución antigua (más de 3 años sin revisión) y desconocidas por el personal operativo.",
      "Políticas formalizadas, aprobadas por Consejo Universitario, actualizadas anualmente y difundidas con confirmación de recepción.",
      "Sistema de gestión documental automatizado con revisión continua basada en incidentes y aceptación obligatoria integrada al inicio de sesión anual de SISCAD. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1592
  },
  {
    "id": "A.3.4",
    "b": "B.3.4",
    "group": "3",
    "title": "Roles y responsabilidades de seguridad de la información",
    "meaning": "Asignar responsabilidades de seguridad y privacidad.",
    "implement": "Rectorado y Recursos Humanos definen funciones, responsables, suplencias, recursos y líneas de reporte para seguridad y privacidad. Validan con Asesoría Jurídica las designaciones y adecuaciones organizativas que correspondan; dejan evidencia de aceptación y control de conflictos de interés.",
    "audit": "Revisar las resoluciones de designación del CISO y OPDP, entrevistar a los funcionarios para comprobar que no existan conflictos de interés (por ejemplo, que el OPDP no sea al mismo tiempo el jefe de desarrollo de software) y verificar la asignación de presupuestos y autonomía operativa.",
    "criterion": "Las funciones están asignadas y quienes las ejercen las conocen.",
    "interpretation": "Debe existir una estructura organizativa clara donde cada persona conozca su función frente a la custodia de la PII, incluyendo la designación formal de un Oficial de Protección de Datos Personales (OPDP / DPO) independiente que reporte a la alta dirección.",
    "implementer": "Dirección General de Administración (Recursos Humanos) y Rectorado.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "No hay responsables designados; ante incidentes de fuga de notas o DNIs nadie asume la titularidad.",
      "Se delega la seguridad y privacidad informalmente a un técnico de redes sin resolución ni autoridad institucional.",
      "Roles definidos en organigrama pero con conflicto de interés directo o sin tiempo asignado a sus funciones.",
      "CISO y OPDP formalizados mediante Resolución Rectoral, con funciones descritas en el ROF y reporte directo a la Alta Dirección.",
      "Responsables y enlaces de privacidad cubren las facultades y unidades dentro del alcance; revisiones periódicas demuestran que resuelven incidentes, escalamiento y conflictos de responsabilidad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1622
  },
  {
    "id": "A.3.5",
    "b": "B.3.5",
    "group": "3",
    "title": "Clasificación de la información",
    "meaning": "Clasificar según necesidades de protección y datos involucrados.",
    "implement": "Diseñar el Esquema Institucional de Clasificación de Datos de la UNSA (Nivel 1: Pública [mallas curriculares]; Nivel 2: Interna [directivas de facultad]; Nivel 3: Confidencial [notas, actas, DNIs]; Nivel 4: Sensible/Restringida [fichas socioeconómicas DUDE, historiales médicos del Centro Médico UNSA, biometría]).",
    "audit": "Muestrear tablas en la base de datos de SISCAD y expedientes de DUDE. Verificar si los activos de información cuentan con su etiqueta de clasificación en el inventario y si los controles aplicados corresponden a su criticidad.",
    "criterion": "La clasificación identifica datos personales y protección requerida.",
    "interpretation": "No toda la información universitaria tiene el mismo nivel de criticidad. Los datos deben catalogarse en niveles (Pública, Interna, Confidencial, Secreta/Sensible), considerando que los datos biométricos, médicos (DUDE) o judiciales de la comunidad son PII sensible que exige mayor protección.",
    "implementer": "CISO, OPDP y Jefatura de Sistemas de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Toda la información universitaria se trata por igual sin niveles de clasificación ni protección diferenciada.",
      "Existe una clasificación teórica genérica pero no contempla datos personales ni sensibles.",
      "Esquema de clasificación documentado pero aplicado únicamente a documentos de papel en Secretaría General y no a los sistemas informáticos.",
      "Esquema formal de clasificación implementado en bases de datos y repositorios documentales, con tratamiento riguroso para PII sensible.",
      "Clasificación automática de datos mediante herramientas de prevención de pérdida de datos (DLP) y metadatos integrados a repositorios cloud y locales. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1652
  },
  {
    "id": "A.3.6",
    "b": "B.3.6",
    "group": "3",
    "title": "Etiquetado de la información",
    "meaning": "Hacer reconocible la clasificación en el uso diario.",
    "implement": "Configurar los generadores de reportes del SISCAD (boletas de notas, padrones de estudiantes) para que inserten automáticamente al pie de página la etiqueta: «UNSA - CONFIDENCIAL / CONTIENE DATOS PERSONALES PROTEGIDOS POR LEY N° 29733», e implementar plantillas de clasificación obligatoria en el correo institucional @unsa.edu.pe.",
    "audit": "Descargar reportes generados desde SISCAD, MPV y Aula Virtual; comprobar la presencia de las etiquetas de clasificación correspondientes y verificar que las impresiones físicas de oficinas contengan las leyendas de confidencialidad.",
    "criterion": "El etiquetado corresponde a la clasificación adoptada.",
    "interpretation": "Si un dato o documento está clasificado como confidencial o sensible, debe ostentar una marca visible o técnica (marca de agua, cabecera de correo, metadato digital) para advertir a los operadores sobre su carácter restringido.",
    "implementer": "OTI y Unidad de Trámite Documentario.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Los reportes impresos o digitales con datos confidenciales de alumnos no contienen ninguna etiqueta ni advertencia.",
      "El etiquetado se aplica solo de manera informal cuando un funcionario decide escribir «confidencial» manualmente.",
      "Existen marcas de agua en algunos reportes oficiales, pero los archivos exportados en Excel carecen de advertencias.",
      "Etiquetado automatizado y consistente en todas las salidas impresas y digitales de los sistemas institucionales.",
      "Etiquetas se aplican y verifican en reportes, exportaciones y repositorios; se investigan errores. Si se necesita trazabilidad de descargas, usar identificadores internos de sesión sin exponer el DNI del operador. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1682
  },
  {
    "id": "A.3.7",
    "b": "B.3.7",
    "group": "3",
    "title": "Transferencia de información",
    "meaning": "Regular transferencias internas y externas.",
    "implement": "Emitir la Directiva de Intercambio Seguro de Datos; prohibir el uso de servicios públicos no institucionales (WeTransfer, WhatsApp personal, correos @gmail.com) para enviar padrones agustinos; configurar un servidor institucional Nextcloud cifrado para transferencias internas y canales SFTP/API con terceros.",
    "audit": "Monitorear los registros del firewall y proxy institucional; constatar que no existan transferencias masivas de bases de datos hacia servidores no autorizados y revisar los acuerdos formales de transferencia suscritos con entidades externas.",
    "criterion": "Los intercambios siguen reglas conocidas y aplicadas.",
    "interpretation": "Cada vez que se mueve información con PII (entre facultades, hacia SUNEDU, bancos recaudadores o correo institucional), deben cumplirse protocolos que impidan la interceptación o el desvío indebido de la información.",
    "implementer": "Seguridad Perimetral de la OTI y Oficina de Asesoría Jurídica.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los docentes y administrativos envían listas de notas y DNIs por WhatsApp o correos personales sin control alguno.",
      "Se recomienda usar canales institucionales pero no existen bloqueos técnicos ni procedimientos formales.",
      "Procedimiento documentado pero sin herramientas seguras corporativas, lo que orilla a los usuarios a soluciones informales.",
      "Canales oficiales seguros (SFTP, nube institucional segura) normados y obligatorios para todo intercambio de PII interna y externa.",
      "Bloqueo perimetral estricto de subidas a sitios externos no autorizados mediante inspección SSL en NGFW y trazabilidad criptográfica de envíos. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1712
  },
  {
    "id": "A.3.8",
    "b": "B.3.8",
    "group": "3",
    "title": "Gestión de identidades",
    "meaning": "Gestionar identidades desde el alta hasta su cierre.",
    "implement": "Integrar el sistema de personal de RRHH y el SISCAD con el directorio institucional: al cesar un contrato docente o administrativo, se dispara automáticamente la suspensión de la cuenta en Active Directory y Google Workspace; prohibir por configuración la reutilización de nombres de usuario o IDs de empleados dados de baja.",
    "audit": "Comparar la nómina de personal cesado en el último semestre (proporcionada por RRHH) contra las cuentas activas en SISCAD y Active Directory. Identificar cuentas huérfanas activas y verificar que ningún ID eliminado haya sido reasignado a un nuevo usuario.",
    "criterion": "Cada identidad tiene dueño y estado coherente con su relación vigente.",
    "interpretation": "Gestionar altas, cambios y bajas de identidades según la relación y función de cada persona. Al cese o egreso, retirar accesos que ya no se justifican y documentar los que continúan, como servicios de egresados; conservar trazabilidad histórica de cada identidad.",
    "implementer": "Administradores de Directorio Activo/LDAP de la OTI y RRHH.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Docentes y trabajadores que dejaron la UNSA hace años siguen con acceso activo a SISCAD y bases de notas.",
      "Las bajas de usuario se gestionan manualmente semanas o meses después tras solicitudes aisladas.",
      "Existe procedimiento de desvinculación pero la comunicación entre RRHH y OTI tiene desfases de varias semanas.",
      "Ciclo de vida de identidades automatizado: revocación inmediata tras cese y prohibición estricta de reasignación de IDs.",
      "Sistema de Gestión de Acceso e Identidad (IAM) con aprovisionamiento/desaprovisionamiento automatizado mediante protocolos SCIM y auditoría continua de cuentas inactivas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1742
  },
  {
    "id": "A.3.9",
    "b": "B.3.9",
    "group": "3",
    "title": "Derechos de acceso",
    "meaning": "Otorgar, revisar y retirar permisos según necesidad.",
    "implement": "Configurar perfiles RBAC estrictos en SISCAD y Moodle. Establecer un proceso formal de recertificación semestral de accesos: los Decanos y Directores de Escuela deben revisar y validar la lista de usuarios con privilegios en sus facultades antes del inicio de cada semestre académico.",
    "audit": "Extraer la lista de usuarios con privilegios de administrador (DBA, SUPERUSER, Admin SISCAD). Revisar las justificaciones de negocio para cada uno y verificar las actas firmadas de la última recertificación periódica de privilegios.",
    "criterion": "Los permisos se justifican, revisan y revocan según reglas aprobadas.",
    "interpretation": "Debe regir el principio del menor privilegio (least privilege). Cada usuario (alumno, docente, administrativo) solo debe acceder a la información indispensable para su función, revisando periódicamente que los privilegios no se acumulen con el tiempo.",
    "implementer": "DBAs y Administradores de Seguridad de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Cuentas genéricas compartidas con privilegios totales de administrador en las facultades.",
      "Privilegios otorgados a pedido informal sin control del principio del menor privilegio.",
      "Asignación formal de roles pero sin revisiones periódicas, permitiendo acumulación de permisos históricos.",
      "Matriz de control de acceso basada en roles implementada y revisiones semestrales documentadas de privilegios.",
      "Gestión de accesos privilegiados (PAM) con elevación temporal de privilegios justificada (Just-In-Time access) y revocación automática al concluir la tarea. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1772
  },
  {
    "id": "A.3.10",
    "b": "B.3.10",
    "group": "3",
    "title": "Abordar la seguridad de la información en los acuerdos con proveedores",
    "meaning": "Acordar requisitos de seguridad por relación contractual.",
    "implement": "Incluir en los términos de referencia y contratos los controles de seguridad adecuados al servicio, responsabilidades, notificación de incidentes y mecanismos de verificación. Evaluar evidencia de eficacia de los proveedores; las certificaciones pueden apoyarla, pero no sustituyen la revisión del alcance contratado.",
    "audit": "Muestrear 5 contratos vigentes de servicios de TI (ej. soporte de base de datos, licencias en la nube). Comprobar que incluyan formalmente los TDRs de seguridad y las cláusulas de penalidad ante brechas de PII.",
    "criterion": "Los requisitos pertinentes están acordados y se verifican.",
    "interpretation": "Todos los proveedores que den soporte, desarrollo o infraestructura a la UNSA deben obligarse contractualmente a mantener estándares estrictos de seguridad y privacidad, asumiendo auditorías y responsabilidades por incidentes.",
    "implementer": "Unidad de Abastecimiento y OTI.",
    "auditor": "Auditor de TI / OCI.",
    "rubric": [
      "Se contratan empresas de desarrollo con acceso a bases de datos del SISCAD sin requerir ningún compromiso de seguridad ni confidencialidad.",
      "Se exige solo una declaración jurada genérica sin especificaciones técnicas de protección de datos.",
      "Se incluyen cláusulas de confidencialidad estándar pero sin mecanismos de control ni facultades de auditoría sobre el proveedor.",
      "Contratos con anexos de seguridad específicos alineados a la criticidad del servicio y exigencias normativas claras.",
      "Marco formal de gestión de riesgos de terceros (TPRM) con auditorías técnicas continuas a proveedores y homologación previa en ciberseguridad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1802
  },
  {
    "id": "A.3.11",
    "b": "B.3.11",
    "group": "3",
    "title": "Planificación y preparación de la gestión de incidentes de seguridad",
    "meaning": "Definir responsabilidades y procedimientos de respuesta.",
    "implement": "Elaborar el plan de incidentes y proponer un equipo de respuesta con responsables técnicos, legales y de comunicación. Designar y probar un canal institucional de reporte, documentar contactos de escalamiento y realizar simulacros de filtración de datos con cuentas y archivos ficticios.",
    "audit": "Solicitar el Plan de Incidentes aprobado; verificar que incluya flujogramas de escalamiento, criterios de severidad para PII y comprobar la realización de al menos un simulacro anual de incidente de fuga de datos en la UNSA.",
    "criterion": "La organización puede detectar, escalar y coordinar una respuesta.",
    "interpretation": "La universidad debe contar con un plan de respuesta preestablecido, un equipo de respuesta a incidentes (CSIRT institucional) y protocolos que distingan un evento ordinario de una brecha de datos personales que deba reportarse a la ANPD.",
    "implementer": "CISO, OPDP y Comité de Ciberseguridad.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "No existe ningún plan; ante un ransomware o filtración de datos reina la improvisación.",
      "Se manejan los incidentes como fallas operativas de TI sin roles ni diferenciación para datos personales.",
      "Plan documentado pero desactualizado, sin simulacros y desconocido por el personal clave.",
      "Plan formalizado, equipo CSIRT institucional constituido y canales de reporte comunicados a la universidad.",
      "Plan articulado con el CSIRT Nacional (Centro Nacional de Seguridad Digital de la PCM), con simulación continua de crisis (tabletop exercises) y protocolos automatizados de triaje. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1832
  },
  {
    "id": "A.3.12",
    "b": "B.3.12",
    "group": "3",
    "title": "Respuesta a incidentes de seguridad de la información",
    "meaning": "Actuar y conservar registros según el procedimiento.",
    "implement": "Ante un incidente simulado en el sistema académico, activar el plan, contener el acceso comprometido, preservar evidencia y documentar el alcance sobre las personas. Asesoría Jurídica y privacidad determinan destinatarios y plazos de notificación conforme a las obligaciones aplicables, y dejan constancia de la decisión y ejecución.",
    "audit": "Revisar los registros de incidentes ocurridos en el último año. Constatar que cada caso cuente con su informe forense de cierre, lecciones aprendidas y verificar si se cumplieron los plazos legales de notificación cuando hubo impacto en PII.",
    "criterion": "La respuesta sigue el procedimiento y demuestra atención a obligaciones aplicables.",
    "interpretation": "Ejecución real del plan: contención técnica, preservación de evidencia forense, notificación a las autoridades (ANPD) y a los afectados en los plazos reglamentarios, y análisis de causa raíz.",
    "implementer": "CSIRT-UNSA, OPDP y Asesoría Jurídica.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los incidentes se ocultan o se formatean servidores destruyendo la evidencia sin investigar.",
      "Se corrigen las fallas sobre la marcha sin registrar la causa raíz ni evaluar la fuga de datos.",
      "Se documentan incidentes graves pero no se ejecutan notificaciones obligatorias a los titulares ni a las autoridades de privacidad.",
      "Respuestas ejecutadas según el protocolo formal, con preservación forense y cumplimiento de notificaciones normativas.",
      "Se miden detección, contención y recuperación; los incidentes y simulacros alimentan acciones correctivas cuya eficacia se vuelve a probar, incluyendo decisiones y tiempos de notificación. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1862
  },
  {
    "id": "A.3.13",
    "b": "B.3.13",
    "group": "3",
    "title": "Requisitos legales, estatutarios, reglamentarios y contractuales",
    "meaning": "Mantener actualizadas las obligaciones de seguridad pertinentes.",
    "implement": "Elaborar y mantener actualizada la Matriz de Cumplimiento Legal y Normativo de TI, registrando todas las normas aplicables a la educación superior pública en Arequipa y mapeando cómo la UNSA cumple técnicamente cada artículo.",
    "audit": "Revisar la matriz legal vigente; cotejarla contra las últimas directivas publicadas por la ANPD y SUNEDU, y comprobar la evidencia de cumplimiento en los sistemas institucionales.",
    "criterion": "Las obligaciones vigentes identificadas se traducen en acciones verificables.",
    "interpretation": "La universidad debe mantener una matriz legal actualizada que relacione cada norma (Ley N° 29733, Directivas de SUNEDU, Ley Universitaria, marco de confianza digital de la PCM) con los controles técnicos implementados.",
    "implementer": "Oficina de Asesoría Jurídica en coordinación con el OPDP.",
    "auditor": "Auditor Legal y de Sistemas de OCI.",
    "rubric": [
      "Desconocimiento institucional absoluto de las normas legales de privacidad y seguridad digital aplicables a la universidad.",
      "Se conocen algunas leyes pero no existe registro formal ni asignación de responsabilidades de cumplimiento.",
      "Matriz documental existente pero desfasada frente a las últimas normativas y decretos de urgencia.",
      "Matriz legal exhaustiva, actualizada y con evidencias técnicas de cumplimiento verificables.",
      "Sistema de monitoreo normativo continuo con alertas legales automatizadas y actualización proactiva de los controles del PIMS. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1892
  },
  {
    "id": "A.3.14",
    "b": "B.3.14",
    "group": "3",
    "title": "Protección de registros",
    "meaning": "Evitar pérdida, alteración o divulgación de evidencias.",
    "implement": "Definir custodios, permisos, conservación y respaldos de actas y registros. Aplicar mecanismos contra alteración y borrado, verificar integridad y mantener trazabilidad de cambios. Si se usan firmas o almacenamiento inmutable, comprobar su configuración y la recuperación de registros.",
    "audit": "Intentar modificar o eliminar registros de auditoría mediante cuentas administrativas; constatar que el sistema rechace la manipulación y verificar la integridad de los hashes de los archivos históricos.",
    "criterion": "Los registros conservan integridad, disponibilidad y confidencialidad.",
    "interpretation": "Las evidencias de auditoría, consentimientos, actas de notas electrónicas y registros de tratamiento no pueden borrarse, alterarse ni divulgarse indebidamente.",
    "implementer": "Administrador de Almacenamiento y DBAs de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los logs y registros se almacenan en texto plano en carpetas compartidas donde cualquier usuario puede editarlos o borrarlos.",
      "Se guardan registros pero sin copias de respaldo ni controles de integridad frente a modificaciones no autorizadas.",
      "Registros protegidos con permisos de sistema operativo estándar pero accesibles para cualquier administrador de TI.",
      "Registros almacenados en repositorios dedicados, con cifrado, control estricto de acceso e integridad garantizada.",
      "Pruebas periódicas demuestran integridad, disponibilidad y recuperación de registros; se detectan alteraciones y se corrigen fallas con seguimiento documentado. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1922
  },
  {
    "id": "A.3.15",
    "b": "B.3.15",
    "group": "3",
    "title": "Revisión independiente de la seguridad de la información",
    "meaning": "Revisar seguridad con independencia adecuada.",
    "implement": "Programar en el Plan Operativo Institucional (POI) y contratar anualmente un servicio externo especializado para ejecutar una auditoría integral de seguridad y privacidad basada en ISO 27001/27701 y pruebas de penetración (pentesting).",
    "audit": "Evaluar el informe de auditoría independiente del ejercicio anterior; verificar la independencia del equipo auditor respecto a la OTI y constatar el levantamiento de las observaciones planteadas.",
    "criterion": "La revisión cubre personas, procesos y tecnología y comunica resultados.",
    "interpretation": "La OTI no puede ser «juez y parte». La seguridad y privacidad deben ser evaluadas por una entidad o auditor independiente que certifique que las defensas funcionan en la práctica.",
    "implementer": "Rectorado y Oficina de Planeamiento/Presupuesto.",
    "auditor": "Auditor Externo / OCI.",
    "rubric": [
      "Nunca se ha realizado una auditoría externa o independiente sobre los sistemas institucionales.",
      "La OTI se autoevalúa y emite reportes internos sin validación de terceros.",
      "Se realizan auditorías de OCI pero con enfoque puramente contable/administrativo, sin evaluar aspectos técnicos de seguridad y PII.",
      "Auditoría independiente de sistemas y privacidad ejecutada anualmente con informe formal presentado al Consejo Universitario.",
      "Evaluaciones continuas mediante esquemas de certificación formal por entes acreditados internacionales y programas institucionales de divulgación coordinada de vulnerabilidades. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1952
  },
  {
    "id": "A.3.16",
    "b": "B.3.16",
    "group": "3",
    "title": "Cumplimiento de políticas, reglas y normas de seguridad",
    "meaning": "Comprobar regularmente el cumplimiento de reglas de seguridad.",
    "implement": "Ejecutar trimestralmente escaneos automatizados de vulnerabilidades (con herramientas como OpenVAS/Nessus) sobre los servidores de producción de SISCAD y verificar que las configuraciones sigan las guías CIS Benchmarks.",
    "audit": "Solicitar los reportes técnicos de las revisiones trimestrales de cumplimiento; verificar los planes de remediación ejecutados y auditar una muestra de servidores para validar que los parches críticos fueron aplicados.",
    "criterion": "Las revisiones se realizan y las desviaciones se gestionan.",
    "interpretation": "Auditoría técnica regular de cumplimiento (technical compliance review): escaneos de configuración, análisis de vulnerabilidades y verificación de que los servidores cumplan los estándares de configuración segura (hardening).",
    "implementer": "Área de Ciberseguridad de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "No se realiza ninguna verificación técnica; los servidores operan con configuraciones por defecto y puertos inseguros abiertos.",
      "Revisiones técnicas esporádicas únicamente tras sufrir una caída de servicio o infección de virus.",
      "Se ejecutan escaneos de vulnerabilidades pero los hallazgos críticos no se subsanan por falta de seguimiento.",
      "Revisiones técnicas programadas periódicamente con matriz de seguimiento de hallazgos y tiempos de remediación estandarizados.",
      "Auditoría de configuración continua mediante agentes de gestión de postura de seguridad (CSPM) con remediación automatizada de desvíos en tiempo real. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 1982
  },
  {
    "id": "A.3.17",
    "b": "B.3.17",
    "group": "3",
    "title": "Concientización, educación y capacitación en seguridad",
    "meaning": "Capacitar según el trabajo y riesgos del personal.",
    "implement": "Diseñar el Programa Anual de Capacitación en Seguridad y Privacidad de la UNSA, implementando cursos virtuales obligatorios en Moodle con evaluación de salida y campañas de simulación controlada de phishing para todo el personal.",
    "audit": "Revisar los reportes de participación de Moodle; verificar que al menos el 80% de la planilla universitaria completó la capacitación y evaluar los resultados estadísticos de las campañas de simulación de phishing.",
    "criterion": "El personal relevante recibe formación adecuada y demuestra comprensión.",
    "interpretation": "El eslabón humano es crítico. Los docentes, secretarias y personal de ventanilla que manipulan notas y DNIs deben recibir capacitación periódica sobre phishing, protección de datos y deber de secreto.",
    "implementer": "Unidad de Capacitación de RRHH y CISO/OPDP.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Cero capacitación; el personal desconoce las medidas básicas para evitar engaños y fugas de datos.",
      "Charlas aisladas sin evaluación de aprendizaje ni registro de asistencia formal.",
      "Capacitación virtual disponible pero optativa, con participación menor al 30% del personal.",
      "Programa institucional obligatorio ejecutado anualmente con evaluaciones aprobatorias registradas en los legajos del personal.",
      "Plataforma de entrenamiento continuo adaptativo con simulación de ataques personalizada por área y métricas de madurez de cultura de ciberseguridad. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2012
  },
  {
    "id": "A.3.18",
    "b": "B.3.18",
    "group": "3",
    "title": "Acuerdos de confidencialidad o no divulgación",
    "meaning": "Establecer compromisos adecuados para quienes acceden a datos.",
    "implement": "Incluir como requisito obligatorio de contratación y adenda para personal permanente el Acuerdo de Confidencialidad y Protección de Datos Personales, estipulando penalidades y vigencia de la obligación incluso tras la extinción del vínculo laboral.",
    "audit": "Revisar una muestra de legajos del personal de la OTI, Admisión y docentes de facultades; constatar la existencia del acuerdo de confidencialidad firmado y vigente en el 100% de la muestra.",
    "criterion": "Las personas con acceso están sujetas a obligaciones documentadas.",
    "interpretation": "Toda persona con acceso a bases de datos de la universidad (docentes, administrativos, practicantes, contratistas) debe firmar un compromiso legal explícito de no revelar ni comercializar la información personal custodiada.",
    "implementer": "Oficina de Recursos Humanos y Asesoría Jurídica.",
    "auditor": "Auditor de TI / OCI.",
    "rubric": [
      "El personal accede a datos confidenciales sin haber suscrito ningún compromiso de confidencialidad.",
      "Se firma una cláusula general en el contrato pero no menciona la protección de datos personales ni penalidades.",
      "Acuerdos firmados únicamente por el personal de la OTI, ignorando a secretarias de facultades y personal administrativo que trata PII masiva.",
      "Acuerdos específicos de confidencialidad y protección de datos firmados por la totalidad del personal y prestadores de servicios.",
      "Gestión digital de acuerdos con firma electrónica avanzada y renovación periódica automatizada ante cambios de puesto o rol funcional. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2042
  },
  {
    "id": "A.3.19",
    "b": "B.3.19",
    "group": "3",
    "title": "Escritorio limpio y pantalla limpia",
    "meaning": "Evitar exposición física o visual innecesaria.",
    "implement": "Configurar mediante Directivas de Grupo (GPO) en Active Directory el bloqueo automático de pantalla tras 5 minutos de inactividad en todas las terminales institucionales; adquirir trituradoras y casilleros con llave para las oficinas de atención.",
    "audit": "Realizar inspecciones físicas fuera del horario laboral en oficinas de Matrícula, DUDE y Facultades (verificar ausencia de papeles con PII expuestos) y verificar técnicamente la directiva GPO de bloqueo de pantalla.",
    "criterion": "Las prácticas observadas cumplen las reglas institucionales.",
    "interpretation": "Evitar que miradas no autorizadas o visitantes accedan a PII: no dejar documentos con notas o fichas en los escritorios al retirarse, y bloquear automáticamente las pantallas de las computadoras tras un periodo de inactividad.",
    "implementer": "Área de Soporte Técnico de la OTI y Seguridad Institucional.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Fichas estudiantiles expuestas sobre mostradores y computadoras desbloqueadas todo el día accesibles para cualquier persona.",
      "Se exhorta verbalmente a ordenar pero las computadoras no tienen bloqueo automático configurado.",
      "Directiva GPO aplicada pero el personal recurre a malas prácticas físicas (anotar contraseñas en post-its en los monitores).",
      "Bloqueo de pantalla forzado por GPO y rondas periódicas documentadas de verificación de escritorio limpio.",
      "Inspecciones autorizadas y mediciones de bloqueo demuestran cumplimiento sostenido; se corrigen reincidencias y se verifica la eficacia sin agregar vigilancia invasiva innecesaria. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2072
  },
  {
    "id": "A.3.20",
    "b": "B.3.20",
    "group": "3",
    "title": "Soportes de almacenamiento",
    "meaning": "Controlar adquisición, traslado, uso y eliminación de soportes.",
    "implement": "Emitir la directiva que prohíbe el uso de memorias USB personales en equipos que traten datos institucionales; bloquear por software los puertos USB de terminales administrativas y cifrar con BitLocker/LUKS los discos portátiles autorizados de respaldo.",
    "audit": "Conectar una memoria USB no registrada a una computadora de ventanilla de SISCAD para constatar el bloqueo de puertos y revisar el inventario físico y la bitácora de custodia de medios de almacenamiento.",
    "criterion": "El soporte es trazable y mantiene la protección requerida.",
    "interpretation": "Control sobre discos duros, memorias USB, cintas de backup y servidores de almacenamiento que contengan PII: registro de inventario, cifrado obligatorio si salen de las instalaciones y transporte protegido.",
    "implementer": "Control Patrimonial y Seguridad de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Se copian bases de datos completas en memorias USB personales sin cifrar ni registrar para llevarlas a casa.",
      "Se llevan registros informales de compra de discos pero no se controla su uso diario ni transporte.",
      "Discos externos inventariados pero sin mecanismos de cifrado obligatorio.",
      "Puertos USB bloqueados por política, inventario formalizado y cifrado obligatorio de todo medio que almacene PII.",
      "Se concilian inventario, préstamos y devolución de medios; se prueban protección, revocación y respuesta ante pérdidas, y se cierran las desviaciones documentadas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2102
  },
  {
    "id": "A.3.21",
    "b": "B.3.21",
    "group": "3",
    "title": "Eliminación segura o reutilización de equipos",
    "meaning": "Verificar eliminación de información antes de reasignar equipos.",
    "implement": "Antes de reasignar o dar de baja un equipo de la UNSA, inventariar soportes y verificar retenciones pendientes. Elegir sanitización adecuada al tipo de medio, comprobar su efectividad y emitir acta con número de activo, método, operador y verificador. Destruir soportes cuando no puedan sanearse de forma fiable.",
    "audit": "Tomar una muestra de computadoras transferidas o dadas de baja en el almacén de patrimonio; ejecutar herramientas forenses de recuperación de datos para verificar la ausencia de información residual.",
    "criterion": "No queda información accesible del uso anterior.",
    "interpretation": "Cuando una computadora de la universidad se reasigna a otra oficina o se da de baja para donación/chatarra, debe asegurarse que ningún dato residual de estudiantes o docentes pueda ser recuperado.",
    "implementer": "Soporte Técnico de la OTI y Unidad de Bienes Patrimoniales.",
    "auditor": "Auditor de Sistemas de OCI.",
    "rubric": [
      "Equipos donados o rematados con bases de datos y archivos estudiantiles intactos en sus discos duros.",
      "Se aplica formateo rápido de fábrica que permite recuperar la información mediante herramientas forenses gratuitas.",
      "Se borran archivos manualmente pero sin protocolo estandarizado ni acta técnica de verificación.",
      "Protocolo de borrado seguro aplicado bajo NIST SP 800-88 con actas de desinfección documentadas por la OTI.",
      "Destrucción física in situ (trituración mecánica) de discos no reutilizables con certificación ambiental y forense externa. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2132
  },
  {
    "id": "A.3.22",
    "b": "B.3.22",
    "group": "3",
    "title": "Dispositivos de punto final del usuario",
    "meaning": "Proteger datos accesibles desde equipos de usuario.",
    "implement": "Desplegar una solución corporativa de EDR (Endpoint Detection and Response) en todas las computadoras de la UNSA; forzar el cifrado de disco completo con BitLocker y prohibir privilegios de administrador local a usuarios estándar.",
    "audit": "Inspeccionar 10 computadoras en oficinas de matrícula y docentes; comprobar la vigencia de firmas del antivirus/EDR, el estado activo del cifrado de disco y la imposibilidad de instalar software no autorizado.",
    "criterion": "Los equipos cumplen la configuración de protección aprobada.",
    "interpretation": "Protección técnica sobre laptops, computadoras de escritorio y dispositivos móviles donde se accede a PII: antivirus corporativo, cortafuegos de host, cifrado de disco y control de aplicaciones no autorizadas.",
    "implementer": "Seguridad de Endpoints de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Computadoras institucionales sin antivirus, infectadas con malware y usuarios con privilegios locales de administrador.",
      "Antivirus gratuitos o desactualizados instalados por cada usuario según su criterio.",
      "Antivirus corporativo instalado pero con consolas desatendidas y discos sin cifrar.",
      "Solución EDR corporativa gestionada centralmente, discos cifrados y privilegios de usuario restringidos.",
      "Plataforma unificada de gestión de terminales (UEM) con verificación de postura de seguridad previa a la conexión de red (Zero Trust Network Access). Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2162
  },
  {
    "id": "A.3.23",
    "b": "B.3.23",
    "group": "3",
    "title": "Autenticación segura",
    "meaning": "Aplicar autenticación según restricciones de acceso.",
    "implement": "Implementar Single Sign-On (SSO) con protocolo SAML/OpenID Connect forzando el uso obligatorio de MFA (mediante Google Authenticator o llaves FIDO2) para todo docente, administrativo y personal con acceso a SISCAD y sistemas que manejen PII.",
    "audit": "Intentar iniciar sesión en SISCAD con credenciales válidas sin activar el segundo factor; verificar en la configuración del directorio institucional que las políticas de contraseñas exijan complejidad mínima (12 caracteres, mayúsculas, números y símbolos) y bloqueo por intentos fallidos.",
    "criterion": "El mecanismo cumple los requisitos definidos por riesgo; MFA es una medida propuesta.",
    "interpretation": "El acceso a los sistemas que procesan datos personales (SISCAD, Moodle, correo institucional) debe exigir contraseñas robustas y, de manera indispensable para administradores y docentes, Autenticación Multifactor (MFA).",
    "implementer": "Área de Infraestructura y Servicios Web de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Contraseñas en texto plano, sin longitud mínima y sistemas que no bloquean cuentas tras ataques de fuerza bruta.",
      "Se exige contraseña básica pero sin segundo factor de autenticación para roles privilegiados.",
      "MFA implementado solo de forma opcional o únicamente para el personal técnico de la OTI.",
      "MFA obligatorio para todo el personal docente y administrativo que accede a bases de datos de PII, con políticas de contraseñas robustas.",
      "Esquema de autenticación sin contraseñas (Passwordless) con claves de paso (Passkeys) resistentes a phishing y evaluación continua de contexto de riesgo de acceso. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2192
  },
  {
    "id": "A.3.24",
    "b": "B.3.24",
    "group": "3",
    "title": "Copia de seguridad de la información",
    "meaning": "Mantener respaldos y probar recuperación.",
    "implement": "Implementar la regla 3-2-1 de copias de seguridad: 3 copias, 2 medios distintos, 1 fuera del Data Center (en nube institucional); cifrar los respaldos con AES-256; programar simulacros semestrales de restauración completa de la base de datos del SISCAD.",
    "audit": "Solicitar las actas de las pruebas de restauración del último año; seleccionar un respaldo aleatorio de la base de datos académica y solicitar al DBA restaurarlo en un entorno aislado para verificar que los datos se recuperen íntegros y legibles.",
    "criterion": "La recuperación probada satisface los objetivos aprobados y protege los datos.",
    "interpretation": "Respaldar bases de datos y sistemas no es suficiente; las copias deben estar cifradas, almacenadas fuera de las instalaciones (off-site) o en una nube inmutable, y deben ejecutarse pruebas periódicas de restauración técnica para validar su integridad.",
    "implementer": "Administradores de Servidores y DBAs de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "No se realizan copias de seguridad; ante una caída o ransomware las notas de la universidad se pierden definitivamente.",
      "Se hacen respaldos manuales e irregulares que se guardan en el mismo disco duro del servidor de producción.",
      "Respaldos diarios automáticos pero nunca se han probado pruebas de restauración ni se almacenan fuera de la sede.",
      "Esquema 3-2-1 operativo, copias cifradas y pruebas de restauración semestrales debidamente documentadas.",
      "Las restauraciones demuestran cumplimiento de los objetivos de recuperación aprobados por servicio; se prueba protección frente a ransomware y se corrigen fallas. RTO y RPO se justifican por necesidad, no por un umbral universal de una hora. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2222
  },
  {
    "id": "A.3.25",
    "b": "B.3.25",
    "group": "3",
    "title": "Registro de eventos",
    "meaning": "Generar, proteger y analizar eventos relevantes.",
    "implement": "Configurar el motor de base de datos y servidores de aplicaciones para registrar eventos de auditoría (quién consultó o modificó las notas de un estudiante); centralizar los registros en un servidor SIEM (Security Information and Event Management) configurado para alertas automáticas ante descargas masivas.",
    "audit": "Con una cuenta ficticia y en un entorno autorizado, generar una consulta y un cambio de prueba. Confirmar su trazabilidad en los registros, sincronización de tiempo, permisos, conservación y alertas. No modificar notas reales para demostrar el control.",
    "criterion": "Los eventos relevantes son trazables y los registros se revisan y protegen.",
    "interpretation": "Definir qué eventos de acceso, modificación, administración y exportación de datos necesita registrar la UNSA. Las bitácoras deben tener tiempo confiable, protección y revisión; no copiar indiscriminadamente datos personales o secretos en ellas.",
    "implementer": "Área de Infraestructura y DBAs de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los sistemas no generan logs; es imposible saber quién alteró una nota o filtró el padrón de postulantes.",
      "Los logs se generan de forma básica en archivos planos locales que se sobrescriben cada pocos días.",
      "Hay logs almacenados pero nadie los revisa ni analiza hasta que ocurre un incidente grave.",
      "Logs completos centralizados en un SIEM institucional, protegidos contra modificación y analizados periódicamente.",
      "Detección de comportamientos anómalos mediante análisis del comportamiento de usuarios y entidades (UEBA) con correlación de eventos en tiempo real. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2252
  },
  {
    "id": "A.3.26",
    "b": "B.3.26",
    "group": "3",
    "title": "Uso de criptografía",
    "meaning": "Regular el uso de criptografía y gestión de claves.",
    "implement": "Aprobar la Política de Criptografía de la UNSA; configurar cifrado de datos transparente (TDE) con AES-256 en las bases de datos institucionales; almacenar y rotar las llaves de cifrado utilizando un módulo de seguridad en hardware (HSM) o servicio KMS seguro, prohibiendo llaves incrustadas en código fuente (hardcoded).",
    "audit": "Inspeccionar el archivo de base de datos o almacenamiento físico de SISCAD para comprobar que los campos sensibles estén cifrados; escanear el código fuente de los repositorios Git de la OTI para validar la ausencia de llaves criptográficas en texto plano.",
    "criterion": "La criptografía y sus claves se gestionan conforme a reglas aprobadas.",
    "interpretation": "La PII debe estar cifrada tanto en tránsito (cuando viaja por la red) como en reposo (cuando reside en discos o bases de datos), gestionando de manera segura el ciclo de vida de las llaves criptográficas.",
    "implementer": "CISO y Arquitectos de Software de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Contraseñas, notas y datos sensibles almacenados en texto plano sin ningún tipo de cifrado.",
      "Se emplea cifrado obsoleto, claves expuestas en el código o una gestión de claves sin responsables ni recuperación probada. Un hash no sustituye al cifrado.",
      "Cifrado en tránsito (HTTPS) pero la base de datos en reposo permanece en texto claro sin protección.",
      "Cifrado robusto en tránsito (TLS 1.3) y en reposo (AES-256) con procedimientos formales de rotación de claves.",
      "Inventario de claves actualizado, acceso segregado y pruebas de rotación, revocación y recuperación. Revisiones periódicas demuestran protección efectiva y corrigen configuraciones débiles. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2282
  },
  {
    "id": "A.3.27",
    "b": "B.3.27",
    "group": "3",
    "title": "Ciclo de vida de desarrollo seguro",
    "meaning": "Integrar privacidad y seguridad en el ciclo de desarrollo.",
    "implement": "Adoptar el marco de desarrollo seguro institucional; integrar en el pipeline de CI/CD (GitLab/GitHub) herramientas de análisis estático de código (SAST) y análisis de dependencias (SCA) que bloqueen despliegues si detectan vulnerabilidades de fuga de PII.",
    "audit": "Auditar los repositorios de desarrollo de las aplicaciones web de la UNSA; revisar los reportes del pipeline CI/CD y verificar que existan puntos de control de privacidad antes de pasar código a producción.",
    "criterion": "El cambio evidencia controles de desarrollo y privacidad desde el diseño.",
    "interpretation": "La seguridad y la privacidad no se añaden al final del proyecto; deben integrarse desde la concepción del software mediante metodologías seguras (OWASP SAMM, DevSecOps) que evalúen riesgos de PII en cada fase del desarrollo.",
    "implementer": "Líder de Desarrollo de Software de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Se desarrolla código sin estándares; los sistemas pasan a producción sin ninguna revisión de seguridad o privacidad.",
      "Los programadores aplican buenas prácticas de forma individual sin una metodología formal institucional.",
      "Metodología documentada pero las revisiones de seguridad son manuales y suelen omitirse por presión de plazos.",
      "Metodología de SDLC formalizada e integrada con herramientas automáticas de escaneo SAST/DAST en los pipelines de entrega.",
      "Cultura DevSecOps consolidada con modelado de amenazas continuo (Threat Modeling) y métricas de seguridad de código auditadas en cada versión. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2312
  },
  {
    "id": "A.3.28",
    "b": "B.3.28",
    "group": "3",
    "title": "Requisitos de seguridad de aplicaciones",
    "meaning": "Definir y aprobar requisitos de seguridad al construir o comprar.",
    "implement": "Incorporar en los Documentos de Especificación de Requerimientos de Software (SRS) una sección obligatoria de requisitos de privacidad y seguridad alineada al estándar OWASP ASVS (Application Security Verification Standard).",
    "audit": "Revisar los términos de referencia y especificaciones técnicas de las últimas aplicaciones adquiridas o desarrolladas; verificar si se aprobaron formalmente los requisitos de protección de PII antes del inicio del desarrollo.",
    "criterion": "Los requisitos de protección identificados fueron verificados.",
    "interpretation": "Antes de comprar o codificar una aplicación (ej. sistema de votación estudiantil, portal de trámites), deben definirse formalmente los requerimientos no funcionales de seguridad y privacidad (cifrado, validación de entradas, gestión de sesiones).",
    "implementer": "Analistas de Sistemas y Comité Técnico de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los requerimientos se limitan exclusivamente a funciones visuales sin especificar requisitos de seguridad.",
      "Se solicita genéricamente que la aplicación «sea segura» sin métricas ni especificaciones técnicas comprobables.",
      "Requisitos de seguridad definidos pero no validados formalmente en la etapa de aceptación del software.",
      "Especificación formal de requisitos de seguridad de aplicaciones aprobada en los documentos de ingeniería de requisitos.",
      "Integración de pruebas automáticas de aceptación de seguridad funcional y no funcional con criterios de parada de despliegue. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2342
  },
  {
    "id": "A.3.29",
    "b": "B.3.29",
    "group": "3",
    "title": "Arquitectura de sistemas seguros y principios de ingeniería",
    "meaning": "Diseñar sistemas que faciliten protección y minimización.",
    "implement": "Diseñar arquitecturas multicapa (separando red de presentación, lógica de negocio y base de datos en segmentos VLAN independientes); aplicar el principio de Privacidad por Defecto para que las opciones de compartir datos estén deshabilitadas por defecto.",
    "audit": "Revisar los diagramas de arquitectura de red y flujos de datos de SISCAD y plataformas web; constatar la segmentación efectiva mediante firewalls internos y la ausencia de exposición directa de bases de datos a Internet.",
    "criterion": "La arquitectura aplica principios definidos y permite ejecutar los controles pertinentes.",
    "interpretation": "Los sistemas deben diseñarse bajo una arquitectura modular y resiliente (defensa en profundidad, separación de entornos, aislamiento de componentes de datos sensibles y Privacidad por Defecto).",
    "implementer": "Arquitectos de Software e Infraestructura de la OTI.",
    "auditor": "Auditor de Sistemas.",
    "rubric": [
      "Los sistemas con datos personales exponen interfaces o bases de datos sin controles de acceso ni separación de confianza adecuados.",
      "Principios de diseño empíricos sin documentación ni separación formal de capas.",
      "Separación de capas documentada pero con reglas de firewall permisivas que comunican libremente todos los servidores.",
      "Principios de arquitectura segura documentados y aplicados rigurosamente con segmentación de redes y DMZ.",
      "Se revisan amenazas y flujos de datos ante cambios, se prueban límites de confianza y privilegios y se verifica la corrección de fallas. La eficacia puede lograrse con distintas arquitecturas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2372
  },
  {
    "id": "A.3.30",
    "b": "B.3.30",
    "group": "3",
    "title": "Desarrollo externalizado",
    "meaning": "Supervisar el desarrollo realizado por terceros.",
    "implement": "Incluir en el contrato con la fábrica de software la entrega obligatoria del código fuente, el informe de escaneo de vulnerabilidades sin fallas críticas/altas y realizar una auditoría de código independiente antes de emitir la conformidad de servicio.",
    "audit": "Revisar los expedientes de contratación de desarrollo de software a terceros; verificar las actas de conformidad técnica y comprobar que se ejecutaron pruebas de penetración previas a la recepción definitiva.",
    "criterion": "El desarrollo externo recibe supervisión y evaluación documentadas.",
    "interpretation": "Si la universidad contrata a una empresa de software externa (fábrica de software) para crear un módulo de SISCAD o una app móvil, la UNSA debe auditar su código, supervisar sus prácticas y no aceptar el producto sin pruebas de seguridad.",
    "implementer": "Jefatura de Proyectos de la OTI.",
    "auditor": "Auditor de TI / OCI.",
    "rubric": [
      "Se recibe software de terceros y se pone en producción sin revisar el código ni ejecutar pruebas de seguridad.",
      "Se confía en la declaración verbal del proveedor de que su software «no tiene vulnerabilidades».",
      "Se revisa la funcionalidad pero no se ejecutan análisis de seguridad ni auditoría de licencias y dependencias.",
      "Monitoreo estricto del desarrollo externo con análisis estático de código y pruebas de seguridad obligatorias previas a la aceptación.",
      "Integración de los proveedores al pipeline CI/CD seguro institucional con verificación automática de estándares de codificación segura y auditorías continuas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2402
  },
  {
    "id": "A.3.31",
    "b": "B.3.31",
    "group": "3",
    "title": "Información de prueba",
    "meaning": "Seleccionar y proteger información usada en pruebas.",
    "implement": "QA y DBA crean juegos de datos sintéticos para matrícula, actas y Admisión. Si se requiere una excepción, documentar necesidad, autorización y protección. Si se afirma anonimización, evaluar riesgo de reidentificación; enmascarar nombres o aplicar hashes no demuestra por sí solo irreversibilidad.",
    "audit": "Revisar inventarios de entornos y muestras autorizadas de datos de prueba. Confirmar origen sintético o, ante una excepción, autorización, acceso, retención y protección. Evaluar reidentificación y documentar incumplimientos según su alcance; un dato coincidente no determina automáticamente una no conformidad mayor.",
    "criterion": "Se usan datos sintéticos o se justifican y controlan los riesgos de datos reales.",
    "interpretation": "Seleccionar y proteger la información de prueba según su finalidad y riesgo. Para la propuesta UNSA, priorizar datos sintéticos; si una excepción requiere datos personales, justificarla y autorizarla con controles equivalentes, acceso restringido y eliminación al finalizar.",
    "implementer": "Administradores de Bases de Datos (DBA) e Ingenieros de QA de la OTI.",
    "auditor": "Auditor de TI.",
    "rubric": [
      "Los desarrolladores y practicantes trabajan con copias directas de la base de datos de producción de SISCAD en sus laptops personales.",
      "Se intenta cambiar algunos nombres pero se dejan los DNIs, teléfonos y notas reales en los entornos de prueba.",
      "Existe un proceso de preparación de datos de prueba, pero no se valida el riesgo de reidentificación ni se revisan de forma consistente las excepciones.",
      "Datos sintéticos por defecto; cualquier excepción está justificada, aprobada, restringida y sujeta a eliminación. Se verifica la protección efectiva en los entornos revisados.",
      "Generación automatizada de datos sintéticos integrada al pipeline de pruebas de CI/CD con borrado seguro automático tras cada ciclo de pruebas. Valorar este nivel solo si existe evidencia sostenida de eficacia y mejora; la herramienta citada es ilustrativa."
    ],
    "sourceLine": 2432
  }
];
const PRINCIPLES = [
  [
    "Consentimiento y elección",
    "La persona puede decidir cuando corresponde consentimiento y modificar esa decisión.",
    "Fotografías de una actividad: separar difusión opcional del registro de asistencia.",
    "1.2.2 1.2.3 1.2.4 1.2.5 1.2.6 1.3.5 1.3.6 1.3.8",
    "2.2.6"
  ],
  [
    "Legitimidad y especificación de la finalidad",
    "El propósito es definido y tiene fundamento aplicable.",
    "Documentar por qué se piden datos en admisión antes de abrir el formulario.",
    "1.2.2 1.2.3 1.2.6 1.3.3 1.3.4 1.3.11",
    "2.2.2 2.2.3 2.2.4 2.2.5 2.3.2"
  ],
  [
    "Limitación de la recogida",
    "Recoger lo necesario, evitando campos por costumbre.",
    "No pedir información familiar para un trámite que no la necesita.",
    "1.2.6 1.4.2",
    ""
  ],
  [
    "Minimización de datos",
    "Reducir uso y capacidad de identificación cuando sea posible.",
    "Analizar resultados de encuestas con variables mínimas y códigos.",
    "1.4.3 1.4.5 1.4.6",
    "2.4.2"
  ],
  [
    "Limitación de uso, conservación y divulgación",
    "Respetar propósito, destinatarios y duración justificada.",
    "Depurar exportaciones temporales y conservar actas conforme al marco aplicable.",
    "1.4.5 1.4.6 1.4.7 1.4.8 1.4.9 1.5.2 1.5.5",
    "2.5.4 2.5.5 2.5.6"
  ],
  [
    "Exactitud y calidad",
    "Disponer de información adecuada y actualizada para la finalidad.",
    "Corregir un dato de contacto y verificar su propagación.",
    "1.4.4",
    ""
  ],
  [
    "Apertura, transparencia y aviso",
    "Explicar el tratamiento de manera accesible.",
    "Mostrar el aviso de privacidad antes de enviar una solicitud de beca.",
    "1.3.3 1.3.4",
    "2.5.7 2.5.8 2.5.9"
  ],
  [
    "Participación y acceso individual",
    "Permitir ejercer derechos sobre los datos.",
    "Rastrear una solicitud de acceso desde el ingreso hasta su respuesta.",
    "1.3.2 1.3.4 1.3.7 1.3.9 1.3.10",
    "2.3.2"
  ],
  [
    "Responsabilidad demostrable",
    "Poder demostrar decisiones, controles y responsabilidades.",
    "Mantener contratos, inventario y evidencia de atención de solicitudes.",
    "1.2.7 1.2.8 1.2.9 1.3.10 1.5.2 1.5.3 1.5.4",
    "2.2.7 2.4.3 2.5.2 2.5.3"
  ],
  [
    "Seguridad de la información",
    "Proteger el tratamiento frente a amenazas.",
    "Usar canales protegidos y verificar las obligaciones del proveedor.",
    "1.2.7 1.4.10",
    "2.4.4"
  ],
  [
    "Cumplimiento de privacidad",
    "Evaluar obligaciones y demostrar su atención.",
    "Revisar el impacto de un sistema nuevo antes de implementarlo.",
    "1.2.6",
    "2.2.6"
  ]
];
const QUIZ = [
  [
    "¿Cómo se relacionan los anexos A, B y C de 2025?",
    [
      "A contiene controles; B orienta su implementación; C los relaciona con principios.",
      "A es para responsables, B para encargados y C exige certificación.",
      "Los tres son listas independientes de controles obligatorios."
    ],
    0,
    "A tiene las tablas A.1, A.2 y A.3. B ofrece orientación correspondiente. C es un mapeo informativo a ISO/IEC 29100."
  ],
  [
    "La UNSA define finalidades de matrícula y contrata una plataforma. ¿Qué rol tiene en ese tratamiento?",
    [
      "Siempre encargado por ser entidad pública.",
      "Responsable; el rol del proveedor debe determinarse por sus actividades y acuerdo.",
      "Ningún rol, porque los datos son del estudiante."
    ],
    1,
    "El rol depende de quién decide finalidades y medios y quién actúa por cuenta de otro, no del carácter público de la universidad."
  ],
  [
    "Un laboratorio procesa una base únicamente por instrucciones de otra entidad. ¿Qué tabla debe analizar?",
    [
      "Solo A.1.",
      "Solo el anexo C.",
      "A.2 y los controles comunes de A.3, según el alcance."
    ],
    2,
    "A.2 contempla encargados; A.3 considera seguridad común. La aplicabilidad se determina y justifica por tratamiento."
  ],
  [
    "La institución obtuvo 92 % en una escala interna. ¿Está certificada?",
    [
      "Sí, superar 90 % es el umbral ISO.",
      "No; el puntaje no sustituye evidencia ni evaluación de conformidad.",
      "Sí, si no tuvo incidentes durante el año."
    ],
    1,
    "La norma no fija un porcentaje universal de aprobación. Un incumplimiento relevante no desaparece por un buen promedio."
  ],
  [
    "El proveedor afirma que borra datos al terminar el contrato. ¿Qué evidencia pedirías?",
    [
      "Solo una entrevista al ejecutivo comercial.",
      "La página publicitaria del servicio.",
      "Contrato, procedimiento, ejecución de un cierre y tratamiento de copias y respaldos."
    ],
    2,
    "Triangular documentos, entrevistas y operación permite comprobar diseño y eficacia: A.2.4.3 y B.2.4.3."
  ],
  [
    "Antes de proponer biometría para entrar al campus, ¿qué corresponde?",
    [
      "Evaluar necesidad, impacto, obligaciones y alternativas menos intrusivas.",
      "Recoger las huellas primero y redactar políticas después.",
      "Pedir consentimiento y omitir el resto del análisis."
    ],
    0,
    "A.1.2.6 exige evaluar la necesidad de una evaluación de impacto al planificar nuevos tratamientos o cambios."
  ],
  [
    "Se marca un control como no aplicable. ¿Qué falta?",
    [
      "Nada; basta seleccionarlo.",
      "Una justificación en la declaración de aplicabilidad sustentada en alcance, rol, riesgos y obligaciones.",
      "Un porcentaje de madurez menor de 20 %."
    ],
    1,
    "No aplicable no significa difícil de implementar. La exclusión debe estar fundamentada y ser revisable."
  ],
  [
    "¿Qué demuestra que un respaldo funciona?",
    [
      "Una captura de la tarea programada.",
      "La existencia de un disco externo.",
      "Una restauración probada, con integridad y objetivos de recuperación verificados."
    ],
    2,
    "A.3.24 contempla mantener copias y probarlas. La evidencia de ejecución y recuperación es más sólida que el diseño aislado."
  ],
  [
    "Un estudiante pide borrar un acta con obligación de conservación. ¿Qué harías?",
    [
      "Borrarla siempre.",
      "Evaluar el derecho y la obligación de conservación, motivar la respuesta y aplicar lo que corresponda.",
      "Ignorar la solicitud."
    ],
    1,
    "La supresión no se aplica automáticamente a toda información. Se documentan las obligaciones y las razones de la decisión."
  ],
  [
    "¿El anexo C demuestra por sí mismo cumplimiento legal peruano?",
    [
      "No; es un mapeo indicativo a principios, y hace falta evaluar las obligaciones peruanas.",
      "Sí; sus once principios sustituyen cualquier ley.",
      "Sí; también aplica automáticamente todo el RGPD."
    ],
    0,
    "C es informativo. El anexo D relaciona controles con RGPD, pero esa correspondencia no determina su aplicabilidad territorial."
  ],
  [
    "¿Qué prueba mejor un consentimiento?",
    [
      "Una casilla marcada sin contexto.",
      "Un aviso genérico sin fecha.",
      "Registro vinculado a la persona, finalidad, momento y versión de la declaración."
    ],
    2,
    "B.1.2.5 orienta a conservar detalles que permitan demostrar qué se consintió y cuándo."
  ],
  [
    "Encuentras que un usuario cesado puede consultar expedientes. ¿Cómo lo documentas?",
    [
      "Como una opinión general: falta seguridad.",
      "Identificando criterio, cuenta de prueba o evidencia protegida, fecha, alcance y desviación observada.",
      "Compensándolo con el buen resultado de las políticas."
    ],
    1,
    "El hallazgo requiere evidencia objetiva frente a un criterio. A.3.8 y A.3.9 permiten analizar identidades y permisos."
  ]
];
