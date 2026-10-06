'use strict';
const CONTROLS = [
  {
    "id": "A.1.2.2",
    "b": "B.1.2.2",
    "group": "1",
    "title": "Finalidades del tratamiento",
    "meaning": "Explicar para qué se necesita cada dato antes de tratarlo.",
    "implement": "Admisión: registrar por separado inscripción, evaluación y comunicación de resultados; asignar un dueño a cada finalidad.",
    "audit": "Contrastar formulario, inventario y uso real de campos con el responsable de admisión.",
    "criterion": "Cada uso observado tiene una finalidad específica documentada."
  },
  {
    "id": "A.1.2.3",
    "b": "B.1.2.3",
    "group": "1",
    "title": "Base que legitima el tratamiento",
    "meaning": "Identificar y demostrar el fundamento aplicable a cada finalidad.",
    "implement": "Asesoría jurídica valida una matriz por proceso; no asumir que todo tratamiento universitario requiere consentimiento ni importar bases del RGPD automáticamente.",
    "audit": "Revisar matriz legal, norma o consentimiento invocado y expedientes de matrícula.",
    "criterion": "Existe fundamento aplicable y documentado para cada finalidad revisada."
  },
  {
    "id": "A.1.2.4",
    "b": "B.1.2.4",
    "group": "1",
    "title": "Diseño del consentimiento",
    "meaning": "Definir cuándo corresponde solicitarlo y cómo demostrarlo.",
    "implement": "Separar el permiso opcional para difundir fotografías de los trámites académicos obligatorios.",
    "audit": "Inspeccionar formulario y procedimiento, incluyendo casos de menores cuando corresponda.",
    "criterion": "El mecanismo diferencia finalidades y cumple los requisitos legales identificados."
  },
  {
    "id": "A.1.2.5",
    "b": "B.1.2.5",
    "group": "1",
    "title": "Registro del consentimiento",
    "meaning": "Conservar prueba verificable de la decisión de la persona.",
    "implement": "Guardar versión del aviso, finalidad, fecha y manifestación del estudiante para campañas opcionales.",
    "audit": "Tomar registros de una campaña y rastrearlos hasta el consentimiento vigente.",
    "criterion": "Cada uso basado en consentimiento puede vincularse a evidencia válida."
  },
  {
    "id": "A.1.2.6",
    "b": "B.1.2.6",
    "group": "1",
    "title": "Evaluación de impacto en privacidad",
    "meaning": "Evaluar si los cambios requieren estudiar su impacto sobre las personas.",
    "implement": "Antes de proponer reconocimiento facial en el campus, analizar necesidad, alternativas, riesgos y salvaguardas.",
    "audit": "Revisar evaluación de necesidad, informe de impacto si procede y aprobación anterior al despliegue.",
    "criterion": "La necesidad se evaluó oportunamente y los riesgos tienen tratamiento y responsables."
  },
  {
    "id": "A.1.2.7",
    "b": "B.1.2.7",
    "group": "1",
    "title": "Contratos con encargados",
    "meaning": "Formalizar las obligaciones de quienes procesan datos por cuenta de la universidad.",
    "implement": "Añadir al contrato de una plataforma educativa instrucciones, seguridad, incidentes, subencargados y devolución de datos.",
    "audit": "Revisar contrato firmado y evidencias operativas del proveedor frente a controles A.2 aplicables.",
    "criterion": "Contrato vigente y controles aplicables cubiertos; exclusiones justificadas."
  },
  {
    "id": "A.1.2.8",
    "b": "B.1.2.8",
    "group": "1",
    "title": "Responsabilidades compartidas",
    "meaning": "Acordar responsabilidades cuando dos entidades deciden conjuntamente el tratamiento.",
    "implement": "En una investigación conjunta, determinar primero si existe corresponsabilidad y acordar atención de derechos y seguridad.",
    "audit": "Revisar convenio, decisiones reales y punto de contacto comunicado.",
    "criterion": "Roles coherentes con la operación y obligaciones asignadas sin vacíos."
  },
  {
    "id": "A.1.2.9",
    "b": "B.1.2.9",
    "group": "1",
    "title": "Inventario de tratamientos",
    "meaning": "Mantener registros que expliquen el tratamiento de datos.",
    "implement": "Inventariar matrícula, personal, bienestar, investigación y videovigilancia con finalidad, categorías, destinatarios y dueño.",
    "audit": "Seguir el recorrido de datos de un proceso desde su captación hasta su eliminación.",
    "criterion": "El inventario refleja los sistemas y tratamientos observados y tiene responsable."
  },
  {
    "id": "A.1.3.2",
    "b": "B.1.3.2",
    "group": "1",
    "title": "Obligaciones frente a las personas",
    "meaning": "Determinar qué derechos y obligaciones deben atenderse.",
    "implement": "Asignar un canal y responsables para las solicitudes de estudiantes, docentes y trabajadores.",
    "audit": "Contrastar matriz de obligaciones con procedimientos y casos atendidos.",
    "criterion": "Las obligaciones aplicables tienen mecanismo de atención operativo."
  },
  {
    "id": "A.1.3.3",
    "b": "B.1.3.3",
    "group": "1",
    "title": "Contenido de la información",
    "meaning": "Definir qué se informa y en qué momento.",
    "implement": "Preparar avisos específicos para admisión, becas y atención de salud, con los elementos legales aplicables.",
    "audit": "Revisar matriz de contenidos, versiones y momento previsto de presentación.",
    "criterion": "La información requerida está definida para cada tratamiento."
  },
  {
    "id": "A.1.3.4",
    "b": "B.1.3.4",
    "group": "1",
    "title": "Avisos accesibles",
    "meaning": "Entregar información comprensible sobre quién trata los datos y para qué.",
    "implement": "Mostrar un aviso legible antes de enviar la inscripción y ofrecer una alternativa accesible.",
    "audit": "Recorrer el formulario como postulante y comparar el aviso visible con el aprobado.",
    "criterion": "El aviso es accesible, comprensible y se proporciona oportunamente."
  },
  {
    "id": "A.1.3.5",
    "b": "B.1.3.5",
    "group": "1",
    "title": "Retiro o cambio del consentimiento",
    "meaning": "Facilitar la modificación de una decisión de consentimiento.",
    "implement": "Permitir dejar de recibir comunicaciones opcionales y propagar el cambio a las listas de envío.",
    "audit": "Simular una retirada con datos de prueba y revisar fecha y cese de uso.",
    "criterion": "La retirada se registra y se aplica a los tratamientos afectados."
  },
  {
    "id": "A.1.3.6",
    "b": "B.1.3.6",
    "group": "1",
    "title": "Oposición al tratamiento",
    "meaning": "Disponer de un mecanismo para recibir y resolver oposiciones.",
    "implement": "Canalizar una oposición del estudiante y evaluar su procedencia según el marco aplicable.",
    "audit": "Revisar expediente, fundamento de la decisión y comunicación al solicitante.",
    "criterion": "La solicitud se evalúa y responde conforme a obligaciones aplicables."
  },
  {
    "id": "A.1.3.7",
    "b": "B.1.3.7",
    "group": "1",
    "title": "Acceso, rectificación y supresión",
    "meaning": "Atender solicitudes sobre los datos y gestionar sus límites legales.",
    "implement": "Corregir un dato de contacto; evaluar la supresión sin borrar actas sujetas a conservación obligatoria.",
    "audit": "Revisar identidad, respuesta y ejecución en sistemas, con justificación de excepciones.",
    "criterion": "Las decisiones son fundadas y lo aprobado se ejecuta en los sistemas afectados."
  },
  {
    "id": "A.1.3.8",
    "b": "B.1.3.8",
    "group": "1",
    "title": "Comunicación a terceros",
    "meaning": "Propagar a destinatarios los cambios pertinentes sobre datos compartidos.",
    "implement": "Comunicar una rectificación a un proveedor que recibió el registro afectado.",
    "audit": "Rastrear solicitud, lista de destinatarios, aviso y confirmación cuando proceda.",
    "criterion": "Los terceros afectados reciben las comunicaciones que corresponden."
  },
  {
    "id": "A.1.3.9",
    "b": "B.1.3.9",
    "group": "1",
    "title": "Entrega de copia de datos",
    "meaning": "Poder entregar a la persona una copia de sus datos tratados.",
    "implement": "Preparar una exportación segura de sus datos académicos sin incluir datos de otros estudiantes.",
    "audit": "Ejecutar una solicitud de prueba y revisar integridad, identidad y entrega.",
    "criterion": "La copia corresponde a la persona y se entrega con protección adecuada."
  },
  {
    "id": "A.1.3.10",
    "b": "B.1.3.10",
    "group": "1",
    "title": "Gestión de solicitudes",
    "meaning": "Documentar recepción, seguimiento y respuesta a solicitudes legítimas.",
    "implement": "Crear un registro de solicitudes con fecha, tipo, responsable, plazo aplicable y cierre.",
    "audit": "Muestrear casos abiertos, cerrados y vencidos; contrastar fechas con el plazo legal identificado.",
    "criterion": "Cada caso tiene trazabilidad y respuesta conforme al plazo aplicable."
  },
  {
    "id": "A.1.3.11",
    "b": "B.1.3.11",
    "group": "1",
    "title": "Decisiones automatizadas",
    "meaning": "Identificar obligaciones derivadas de decisiones exclusivamente automatizadas.",
    "implement": "Si se propone asignación automática de becas, identificar efectos y salvaguardas exigibles antes de usarla.",
    "audit": "Revisar reglas, análisis jurídico, explicación del proceso y mecanismos de revisión que procedan.",
    "criterion": "Se identificaron y atienden las obligaciones que afectan a las personas."
  },
  {
    "id": "A.1.4.2",
    "b": "B.1.4.2",
    "group": "1",
    "title": "Recogida mínima",
    "meaning": "Solicitar únicamente datos necesarios para el propósito.",
    "implement": "Revisar si un formulario de préstamo bibliotecario necesita domicilio o solo identificación institucional.",
    "audit": "Comparar cada campo y dato de registros técnicos con su necesidad documentada.",
    "criterion": "No se recogen campos innecesarios para la finalidad."
  },
  {
    "id": "A.1.4.3",
    "b": "B.1.4.3",
    "group": "1",
    "title": "Uso limitado",
    "meaning": "Restringir el uso, acceso y divulgación a lo necesario.",
    "implement": "Impedir que listas de matrícula se reutilicen para publicidad ajena a la finalidad autorizada.",
    "audit": "Comparar permisos, consultas y exportaciones con finalidades y procedimientos.",
    "criterion": "Los usos observados permanecen dentro del propósito y alcance permitido."
  },
  {
    "id": "A.1.4.4",
    "b": "B.1.4.4",
    "group": "1",
    "title": "Calidad de los datos",
    "meaning": "Mantener exactitud y actualización adecuadas al tratamiento.",
    "implement": "Habilitar actualización validada de contactos y corrección de inconsistencias académicas.",
    "audit": "Revisar una muestra de correcciones y su propagación a sistemas relacionados.",
    "criterion": "Los errores detectados se gestionan y los datos son aptos para su finalidad."
  },
  {
    "id": "A.1.4.5",
    "b": "B.1.4.5",
    "group": "1",
    "title": "Objetivos de minimización",
    "meaning": "Definir cómo reducir datos y grado de identificación.",
    "implement": "Usar códigos de participante y variables mínimas en un estudio; custodiar aparte la tabla de correspondencia.",
    "audit": "Revisar objetivo, diseño del conjunto y acceso a claves de reidentificación.",
    "criterion": "Existe minimización documentada y aplicada; seudonimizar no se presenta como anonimizar."
  },
  {
    "id": "A.1.4.6",
    "b": "B.1.4.6",
    "group": "1",
    "title": "Fin del uso identificable",
    "meaning": "Eliminar o desidentificar cuando ya no se necesitan los datos originales.",
    "implement": "Tras cerrar un estudio y cumplir conservación aplicable, borrar identificadores o aplicar anonimización evaluada.",
    "audit": "Revisar vencimientos, ejecución y riesgo razonable de reidentificación.",
    "criterion": "Los datos innecesarios se eliminan o dejan de permitir identificación conforme al criterio adoptado."
  },
  {
    "id": "A.1.4.7",
    "b": "B.1.4.7",
    "group": "1",
    "title": "Archivos temporales",
    "meaning": "Eliminar temporales conforme a plazos definidos.",
    "implement": "Programar limpieza de exportaciones de matrícula y archivos de carga fallida.",
    "audit": "Inspeccionar directorios temporales, tareas y registros de limpieza.",
    "criterion": "No quedan temporales vencidos respecto al plazo documentado."
  },
  {
    "id": "A.1.4.8",
    "b": "B.1.4.8",
    "group": "1",
    "title": "Conservación",
    "meaning": "No retener datos más tiempo del necesario.",
    "implement": "Aprobar una tabla por serie documental: expedientes académicos, postulaciones, videovigilancia y salud.",
    "audit": "Contrastar fundamento de conservación, fechas y tratamiento de excepciones.",
    "criterion": "Cada categoría tiene plazo justificado y se respeta; no aplicar un plazo único arbitrario."
  },
  {
    "id": "A.1.4.9",
    "b": "B.1.4.9",
    "group": "1",
    "title": "Eliminación segura",
    "meaning": "Definir y aplicar métodos adecuados de destrucción.",
    "implement": "Destruir formularios físicos y borrar copias digitales con métodos acordes al soporte.",
    "audit": "Examinar actas, responsables, método y verificación del resultado.",
    "criterion": "La eliminación está autorizada, documentada y es eficaz para el soporte."
  },
  {
    "id": "A.1.4.10",
    "b": "B.1.4.10",
    "group": "1",
    "title": "Envío al destinatario correcto",
    "meaning": "Proteger los datos que se transmiten.",
    "implement": "Entregar expedientes mediante canal autenticado con destinatario validado y acceso limitado.",
    "audit": "Revisar un envío autorizado y probar restricciones con cuentas de prueba.",
    "criterion": "El envío llega al destinatario autorizado y conserva protección y trazabilidad."
  },
  {
    "id": "A.1.5.2",
    "b": "B.1.5.2",
    "group": "1",
    "title": "Fundamento de transferencias",
    "meaning": "Documentar la base aplicable a transferencias entre jurisdicciones.",
    "implement": "Antes de contratar nube fuera del país, evaluar las condiciones peruanas de flujo transfronterizo.",
    "audit": "Revisar análisis jurídico, destino, garantías y contrato del flujo concreto.",
    "criterion": "Cada transferencia tiene un fundamento aplicable documentado."
  },
  {
    "id": "A.1.5.3",
    "b": "B.1.5.3",
    "group": "1",
    "title": "Destinos internacionales",
    "meaning": "Conocer los países y organizaciones a los que pueden transferirse datos.",
    "implement": "Mantener el mapa de regiones de alojamiento, respaldo y soporte de proveedores.",
    "audit": "Contrastar inventario con contrato, arquitectura y subproveedores.",
    "criterion": "Los destinos posibles conocidos están documentados y actualizados."
  },
  {
    "id": "A.1.5.4",
    "b": "B.1.5.4",
    "group": "1",
    "title": "Registro de transferencias",
    "meaning": "Registrar intercambios y permitir cooperación posterior.",
    "implement": "Registrar envíos de datos de intercambio académico y canal de contacto con la entidad receptora.",
    "audit": "Seguir un envío y comprobar si puede localizarse para rectificación posterior.",
    "criterion": "Los registros permiten identificar el flujo y colaborar ante solicitudes."
  },
  {
    "id": "A.1.5.5",
    "b": "B.1.5.5",
    "group": "1",
    "title": "Registro de divulgaciones",
    "meaning": "Saber qué datos se entregaron, a quién y cuándo.",
    "implement": "Registrar entregas autorizadas de información a terceros, incluida una auditoría.",
    "audit": "Revisar registro, autorización, destinatario, datos y momento de entrega.",
    "criterion": "Las divulgaciones examinadas tienen trazabilidad suficiente."
  },
  {
    "id": "A.2.2.2",
    "b": "B.2.2.2",
    "group": "2",
    "title": "Acuerdo con el cliente",
    "meaning": "Precisar la asistencia del encargado a su cliente.",
    "implement": "Si un laboratorio UNSA procesa datos por cuenta de otra entidad, acordar asistencia en derechos, incidentes y evaluaciones.",
    "audit": "Comparar contrato de servicio con responsabilidades realmente ejecutadas.",
    "criterion": "El acuerdo cubre las obligaciones de asistencia pertinentes."
  },
  {
    "id": "A.2.2.3",
    "b": "B.2.2.3",
    "group": "2",
    "title": "Instrucciones y finalidad del cliente",
    "meaning": "Procesar por cuenta ajena solo según instrucciones documentadas.",
    "implement": "El laboratorio restringe análisis y conservación a lo encargado; no reutiliza la base para otro estudio.",
    "audit": "Revisar instrucciones, consultas, salidas y usos secundarios.",
    "criterion": "Las operaciones se corresponden con instrucciones documentadas."
  },
  {
    "id": "A.2.2.4",
    "b": "B.2.2.4",
    "group": "2",
    "title": "Publicidad con datos encargados",
    "meaning": "No reutilizar datos para publicidad sin establecer el consentimiento previo correspondiente.",
    "implement": "Excluir la base recibida de un convenio de cualquier campaña propia del laboratorio.",
    "audit": "Revisar listas de campañas y procedencia de destinatarios.",
    "criterion": "No hay uso publicitario sin consentimiento pertinente ni condicionamiento del servicio."
  },
  {
    "id": "A.2.2.5",
    "b": "B.2.2.5",
    "group": "2",
    "title": "Instrucciones contrarias a la ley",
    "meaning": "Informar al cliente si una instrucción se considera contraria a requisitos legales.",
    "implement": "Escalar a asesoría jurídica una petición de publicar datos identificables sin fundamento aparente.",
    "audit": "Revisar procedimiento de escalamiento y comunicaciones de casos o simulación.",
    "criterion": "Las instrucciones cuestionadas se comunican y gestionan documentadamente."
  },
  {
    "id": "A.2.2.6",
    "b": "B.2.2.6",
    "group": "2",
    "title": "Demostración ante el cliente",
    "meaning": "Aportar información que permita al cliente acreditar sus obligaciones.",
    "implement": "Entregar al cliente evidencias de controles y facilitar auditorías según el acuerdo.",
    "audit": "Revisar informes entregados, alcance y solicitudes de evidencia.",
    "criterion": "La información es suficiente y pertinente para las obligaciones del cliente."
  },
  {
    "id": "A.2.2.7",
    "b": "B.2.2.7",
    "group": "2",
    "title": "Registros del encargo",
    "meaning": "Mantener registros sobre los tratamientos realizados por cuenta del cliente.",
    "implement": "Llevar una ficha por convenio con operaciones, destinos y medidas de seguridad.",
    "audit": "Contrastar encargos activos con registros y flujos reales.",
    "criterion": "Los registros cubren los encargos y se mantienen protegidos."
  },
  {
    "id": "A.2.3.2",
    "b": "B.2.3.2",
    "group": "2",
    "title": "Asistencia en derechos",
    "meaning": "Dar al cliente medios para cumplir frente a las personas.",
    "implement": "Localizar, rectificar o borrar registros por instrucción válida del cliente dentro del tiempo acordado.",
    "audit": "Simular una petición del cliente y rastrear respuesta y ejecución.",
    "criterion": "La asistencia permite al cliente cumplir sus obligaciones y plazos."
  },
  {
    "id": "A.2.4.2",
    "b": "B.2.4.2",
    "group": "2",
    "title": "Temporales del encargo",
    "meaning": "Controlar la vida de archivos intermedios.",
    "implement": "Borrar ficheros de importación del convenio conforme al plazo documentado.",
    "audit": "Examinar temporales, antigüedad y ejecuciones de limpieza.",
    "criterion": "Los temporales no exceden su plazo aprobado."
  },
  {
    "id": "A.2.4.3",
    "b": "B.2.4.3",
    "group": "2",
    "title": "Devolución o eliminación al cierre",
    "meaning": "Poder retornar, transferir o eliminar los datos de forma segura.",
    "implement": "Al terminar el convenio, entregar resultados y ejecutar el destino pactado para originales, copias y respaldos.",
    "audit": "Revisar plan de salida, acta de entrega, borrado y tratamiento de respaldos.",
    "criterion": "El cierre cumple instrucciones y deja evidencia verificable."
  },
  {
    "id": "A.2.4.4",
    "b": "B.2.4.4",
    "group": "2",
    "title": "Transmisión en el encargo",
    "meaning": "Asegurar que los datos llegan al destinatario autorizado.",
    "implement": "Acordar un canal seguro con la entidad que contrata el análisis.",
    "audit": "Revisar controles de envío y registro de transferencias de prueba.",
    "criterion": "Los envíos cumplen el acuerdo y protegen destinatario e información."
  },
  {
    "id": "A.2.5.2",
    "b": "B.2.5.2",
    "group": "2",
    "title": "Aviso de transferencias internacionales",
    "meaning": "Informar al cliente sobre la base de transferencia y sus cambios.",
    "implement": "Avisar antes de mover los datos del convenio a una nueva jurisdicción, según el contrato.",
    "audit": "Revisar comunicaciones, plazos pactados y posibilidad de objeción o terminación.",
    "criterion": "El cliente recibe información oportuna conforme al acuerdo."
  },
  {
    "id": "A.2.5.3",
    "b": "B.2.5.3",
    "group": "2",
    "title": "Destinos del encargo",
    "meaning": "Documentar países y organizaciones posibles de destino.",
    "implement": "Informar al cliente dónde se alojarán los datos y los respaldos del servicio.",
    "audit": "Comparar lista de destinos con configuración y cadena de proveedores.",
    "criterion": "La lista refleja las ubicaciones posibles del tratamiento."
  },
  {
    "id": "A.2.5.4",
    "b": "B.2.5.4",
    "group": "2",
    "title": "Divulgaciones del encargado",
    "meaning": "Registrar datos revelados a terceros.",
    "implement": "Registrar una entrega autorizada desde el laboratorio a un tercero del convenio.",
    "audit": "Contrastar autorización con datos, destinatario y fecha.",
    "criterion": "Cada divulgación examinada puede reconstruirse."
  },
  {
    "id": "A.2.5.5",
    "b": "B.2.5.5",
    "group": "2",
    "title": "Solicitudes vinculantes de entrega",
    "meaning": "Notificar al cliente solicitudes legalmente vinculantes, salvo prohibición aplicable.",
    "implement": "Establecer revisión jurídica y aviso al cliente ante un requerimiento de autoridad.",
    "audit": "Revisar requerimiento, análisis de restricciones y constancia del aviso cuando procede.",
    "criterion": "La notificación respeta las obligaciones legales y contractuales."
  },
  {
    "id": "A.2.5.6",
    "b": "B.2.5.6",
    "group": "2",
    "title": "Evaluación de divulgaciones",
    "meaning": "Gestionar solicitudes de entrega según su fuerza legal y autorización contractual.",
    "implement": "Rechazar pedidos informales de bases y consultar al cliente según corresponda antes de revelar datos.",
    "audit": "Revisar fundamento, decisión jurídica, consulta y alcance de la entrega.",
    "criterion": "No se aceptan divulgaciones sin fundamento o autorización pertinente."
  },
  {
    "id": "A.2.5.7",
    "b": "B.2.5.7",
    "group": "2",
    "title": "Información sobre subencargados",
    "meaning": "Comunicar al cliente si intervienen subcontratistas.",
    "implement": "Identificar el proveedor que almacenaría datos del convenio antes de usarlo.",
    "audit": "Comparar lista comunicada con servicios realmente empleados.",
    "criterion": "El cliente conoce los subencargados pertinentes antes de su intervención."
  },
  {
    "id": "A.2.5.8",
    "b": "B.2.5.8",
    "group": "2",
    "title": "Autorización de subencargados",
    "meaning": "Subcontratar de acuerdo con el contrato del cliente.",
    "implement": "Obtener autorización escrita y trasladar obligaciones al proveedor del laboratorio.",
    "audit": "Revisar autorización, contrato y controles exigidos al subencargado.",
    "criterion": "La cadena de encargo está autorizada y las obligaciones se transmiten."
  },
  {
    "id": "A.2.5.9",
    "b": "B.2.5.9",
    "group": "2",
    "title": "Cambios de subencargados",
    "meaning": "Comunicar cambios previstos cuando existe autorización general.",
    "implement": "Avisar la sustitución de un proveedor y permitir objeción conforme al acuerdo.",
    "audit": "Contrastar fecha del aviso, plazo pactado y fecha del cambio.",
    "criterion": "El cambio respeta la autorización y oportunidad de oposición acordadas."
  },
  {
    "id": "A.3.3",
    "b": "B.3.3",
    "group": "3",
    "title": "Políticas de seguridad",
    "meaning": "Aprobar, comunicar y revisar políticas para datos personales.",
    "implement": "Aprobar una política institucional con reglas para expedientes, plataformas y terceros.",
    "audit": "Revisar aprobación, versiones, comunicación y revisión por cambios.",
    "criterion": "La política es vigente, conocida y aplicable al tratamiento."
  },
  {
    "id": "A.3.4",
    "b": "B.3.4",
    "group": "3",
    "title": "Funciones y responsabilidades",
    "meaning": "Asignar responsabilidades de seguridad y privacidad.",
    "implement": "Definir responsables por proceso, contacto para titulares y coordinación con el oficial de datos según marco aplicable.",
    "audit": "Entrevistar responsables y revisar designaciones y autoridad.",
    "criterion": "Las funciones están asignadas y quienes las ejercen las conocen."
  },
  {
    "id": "A.3.5",
    "b": "B.3.5",
    "group": "3",
    "title": "Clasificación de información",
    "meaning": "Clasificar según necesidades de protección y datos involucrados.",
    "implement": "Diferenciar información pública, expedientes personales y datos de salud de bienestar.",
    "audit": "Examinar inventario y clasificación de una muestra de documentos y sistemas.",
    "criterion": "La clasificación identifica datos personales y protección requerida."
  },
  {
    "id": "A.3.6",
    "b": "B.3.6",
    "group": "3",
    "title": "Etiquetado",
    "meaning": "Hacer reconocible la clasificación en el uso diario.",
    "implement": "Etiquetar expedientes reservados y exportaciones que contienen datos personales.",
    "audit": "Inspeccionar archivos, reportes y reglas de etiquetado.",
    "criterion": "El etiquetado corresponde a la clasificación adoptada."
  },
  {
    "id": "A.3.7",
    "b": "B.3.7",
    "group": "3",
    "title": "Reglas de intercambio",
    "meaning": "Regular transferencias internas y externas.",
    "implement": "Definir canales y autorizaciones para compartir listas entre escuelas y oficinas.",
    "audit": "Rastrear intercambios frente al procedimiento y acuerdos.",
    "criterion": "Los intercambios siguen reglas conocidas y aplicadas."
  },
  {
    "id": "A.3.8",
    "b": "B.3.8",
    "group": "3",
    "title": "Ciclo de vida de identidades",
    "meaning": "Gestionar identidades desde el alta hasta su cierre.",
    "implement": "Conectar altas, cambios y bajas del personal con las cuentas institucionales.",
    "audit": "Cruzar nómina y contratos finalizados con directorio de cuentas.",
    "criterion": "Cada identidad tiene dueño y estado coherente con su relación vigente."
  },
  {
    "id": "A.3.9",
    "b": "B.3.9",
    "group": "3",
    "title": "Permisos de acceso",
    "meaning": "Otorgar, revisar y retirar permisos según necesidad.",
    "implement": "Limitar acceso de docentes a cursos asignados y retirar permisos al cambiar funciones.",
    "audit": "Revisar autorizaciones y probar acceso con perfiles de prueba.",
    "criterion": "Los permisos se justifican, revisan y revocan según reglas aprobadas."
  },
  {
    "id": "A.3.10",
    "b": "B.3.10",
    "group": "3",
    "title": "Seguridad en contratos de proveedores",
    "meaning": "Acordar requisitos de seguridad por relación contractual.",
    "implement": "Exigir al proveedor educativo medidas, reporte de incidentes y verificaciones proporcionales al riesgo.",
    "audit": "Revisar anexo de seguridad y evidencias de ejecución.",
    "criterion": "Los requisitos pertinentes están acordados y se verifican."
  },
  {
    "id": "A.3.11",
    "b": "B.3.11",
    "group": "3",
    "title": "Preparación ante incidentes",
    "meaning": "Definir responsabilidades y procedimientos de respuesta.",
    "implement": "Preparar un protocolo ante exposición de listas con datos personales y realizar un ejercicio.",
    "audit": "Revisar plan, contactos, obligaciones de notificación y acta de simulacro.",
    "criterion": "La organización puede detectar, escalar y coordinar una respuesta."
  },
  {
    "id": "A.3.12",
    "b": "B.3.12",
    "group": "3",
    "title": "Respuesta a incidentes",
    "meaning": "Actuar y conservar registros según el procedimiento.",
    "implement": "Ante una publicación indebida, contener, preservar evidencia y evaluar comunicaciones y notificaciones aplicables.",
    "audit": "Reconstruir la línea de tiempo de un caso o simulacro y revisar decisiones.",
    "criterion": "La respuesta sigue el procedimiento y demuestra atención a obligaciones aplicables."
  },
  {
    "id": "A.3.13",
    "b": "B.3.13",
    "group": "3",
    "title": "Requisitos legales y contractuales",
    "meaning": "Mantener actualizadas las obligaciones de seguridad pertinentes.",
    "implement": "Asignar revisión de Ley 29733, su reglamento y compromisos de convenios.",
    "audit": "Revisar matriz, fuentes oficiales, responsable y actualizaciones.",
    "criterion": "Las obligaciones vigentes identificadas se traducen en acciones verificables."
  },
  {
    "id": "A.3.14",
    "b": "B.3.14",
    "group": "3",
    "title": "Protección de registros",
    "meaning": "Evitar pérdida, alteración o divulgación de evidencias.",
    "implement": "Controlar acceso y versiones de consentimientos, políticas históricas y expedientes de atención.",
    "audit": "Probar permisos y revisar historial, conservación y recuperación.",
    "criterion": "Los registros conservan integridad, disponibilidad y confidencialidad."
  },
  {
    "id": "A.3.15",
    "b": "B.3.15",
    "group": "3",
    "title": "Revisión independiente",
    "meaning": "Revisar seguridad con independencia adecuada.",
    "implement": "Encargar revisión a un equipo que no evalúe su propio trabajo operativo.",
    "audit": "Revisar competencia, independencia, alcance e informe.",
    "criterion": "La revisión cubre personas, procesos y tecnología y comunica resultados."
  },
  {
    "id": "A.3.16",
    "b": "B.3.16",
    "group": "3",
    "title": "Revisión de cumplimiento interno",
    "meaning": "Comprobar regularmente el cumplimiento de reglas de seguridad.",
    "implement": "Planificar revisiones de configuración y uso de plataformas con hallazgos y seguimiento.",
    "audit": "Revisar resultados, desviaciones y acciones hasta su verificación.",
    "criterion": "Las revisiones se realizan y las desviaciones se gestionan."
  },
  {
    "id": "A.3.17",
    "b": "B.3.17",
    "group": "3",
    "title": "Formación y sensibilización",
    "meaning": "Capacitar según el trabajo y riesgos del personal.",
    "implement": "Formar a docentes en publicación de notas y a bienestar en manejo de datos de salud.",
    "audit": "Revisar cobertura por puesto y ejercicios de comprensión.",
    "criterion": "El personal relevante recibe formación adecuada y demuestra comprensión."
  },
  {
    "id": "A.3.18",
    "b": "B.3.18",
    "group": "3",
    "title": "Compromisos de confidencialidad",
    "meaning": "Establecer compromisos adecuados para quienes acceden a datos.",
    "implement": "Incluir personal, practicantes y terceros con obligaciones y vigencia definidas.",
    "audit": "Cruzar usuarios autorizados con compromisos o cláusulas aplicables.",
    "criterion": "Las personas con acceso están sujetas a obligaciones documentadas."
  },
  {
    "id": "A.3.19",
    "b": "B.3.19",
    "group": "3",
    "title": "Escritorio y pantalla protegidos",
    "meaning": "Evitar exposición física o visual innecesaria.",
    "implement": "Guardar fichas de estudiantes y bloquear pantallas al ausentarse.",
    "audit": "Realizar observación autorizada en oficinas y revisar configuración.",
    "criterion": "Las prácticas observadas cumplen las reglas institucionales."
  },
  {
    "id": "A.3.20",
    "b": "B.3.20",
    "group": "3",
    "title": "Soportes de almacenamiento",
    "meaning": "Controlar adquisición, traslado, uso y eliminación de soportes.",
    "implement": "Inventariar discos y autorizar traslados; proteger medios extraíbles según riesgo.",
    "audit": "Revisar inventario, custodios, cifrado o compensaciones y cadena de entrega.",
    "criterion": "El soporte es trazable y mantiene la protección requerida."
  },
  {
    "id": "A.3.21",
    "b": "B.3.21",
    "group": "3",
    "title": "Baja o reutilización de equipos",
    "meaning": "Verificar eliminación de información antes de reasignar equipos.",
    "implement": "Sanear discos de computadoras de secretaría antes de reasignarlas.",
    "audit": "Revisar acta y verificación técnica autorizada del saneamiento.",
    "criterion": "No queda información accesible del uso anterior."
  },
  {
    "id": "A.3.22",
    "b": "B.3.22",
    "group": "3",
    "title": "Protección de dispositivos",
    "meaning": "Proteger datos accesibles desde equipos de usuario.",
    "implement": "Gestionar portátiles institucionales con bloqueo, actualizaciones y protección acorde al riesgo.",
    "audit": "Examinar una muestra de equipos y registros de gestión.",
    "criterion": "Los equipos cumplen la configuración de protección aprobada."
  },
  {
    "id": "A.3.23",
    "b": "B.3.23",
    "group": "3",
    "title": "Autenticación segura",
    "meaning": "Aplicar autenticación según restricciones de acceso.",
    "implement": "Proponer autenticación multifactor para cuentas privilegiadas y procesos de recuperación robustos.",
    "audit": "Probar inicio de sesión y recuperación con usuarios de prueba.",
    "criterion": "El mecanismo cumple los requisitos definidos por riesgo; MFA es una medida propuesta."
  },
  {
    "id": "A.3.24",
    "b": "B.3.24",
    "group": "3",
    "title": "Copias y restauración",
    "meaning": "Mantener respaldos y probar recuperación.",
    "implement": "Definir objetivos de recuperación y ensayar restauración de un sistema académico con datos de prueba.",
    "audit": "Revisar copias, actas de restauración, integridad y tratamiento de datos previamente suprimidos.",
    "criterion": "La recuperación probada satisface los objetivos aprobados y protege los datos."
  },
  {
    "id": "A.3.25",
    "b": "B.3.25",
    "group": "3",
    "title": "Registros de actividad",
    "meaning": "Generar, proteger y analizar eventos relevantes.",
    "implement": "Registrar accesos y cambios en expedientes sin copiar datos sensibles innecesarios al log.",
    "audit": "Seguir un evento, revisar integridad, permisos y evidencia de análisis.",
    "criterion": "Los eventos relevantes son trazables y los registros se revisan y protegen."
  },
  {
    "id": "A.3.26",
    "b": "B.3.26",
    "group": "3",
    "title": "Cifrado y claves",
    "meaning": "Regular el uso de criptografía y gestión de claves.",
    "implement": "Proteger datos en tránsito y almacenamiento según evaluación; asignar custodios de claves.",
    "audit": "Revisar configuración, permisos de claves y proceso de renovación.",
    "criterion": "La criptografía y sus claves se gestionan conforme a reglas aprobadas."
  },
  {
    "id": "A.3.27",
    "b": "B.3.27",
    "group": "3",
    "title": "Desarrollo seguro",
    "meaning": "Integrar privacidad y seguridad en el ciclo de desarrollo.",
    "implement": "Añadir revisión de privacidad a diseño, pruebas y aprobación del sistema de matrícula.",
    "audit": "Examinar un cambio reciente y sus revisiones antes de producción.",
    "criterion": "El cambio evidencia controles de desarrollo y privacidad desde el diseño."
  },
  {
    "id": "A.3.28",
    "b": "B.3.28",
    "group": "3",
    "title": "Requisitos de aplicaciones",
    "meaning": "Definir y aprobar requisitos de seguridad al construir o comprar.",
    "implement": "Incluir control de acceso, transmisión protegida y criterios de aceptación en una compra de software.",
    "audit": "Vincular requisitos aprobados con pruebas de aceptación.",
    "criterion": "Los requisitos de protección identificados fueron verificados."
  },
  {
    "id": "A.3.29",
    "b": "B.3.29",
    "group": "3",
    "title": "Arquitectura segura",
    "meaning": "Diseñar sistemas que faciliten protección y minimización.",
    "implement": "Separar entornos y diseñar eliminación por plazos desde el inicio del sistema.",
    "audit": "Revisar diagramas, decisiones de diseño y prueba de aislamiento o eliminación.",
    "criterion": "La arquitectura aplica principios definidos y permite ejecutar los controles pertinentes."
  },
  {
    "id": "A.3.30",
    "b": "B.3.30",
    "group": "3",
    "title": "Desarrollo contratado",
    "meaning": "Supervisar el desarrollo realizado por terceros.",
    "implement": "Exigir al contratista revisiones, pruebas y corrección de problemas antes de aceptar entregables.",
    "audit": "Revisar contrato, informes de pruebas y aceptación del producto.",
    "criterion": "El desarrollo externo recibe supervisión y evaluación documentadas."
  },
  {
    "id": "A.3.31",
    "b": "B.3.31",
    "group": "3",
    "title": "Datos de prueba",
    "meaning": "Seleccionar y proteger información usada en pruebas.",
    "implement": "Usar datos sintéticos para matrícula; justificar y proteger cualquier excepción con datos reales.",
    "audit": "Inspeccionar conjuntos de prueba, accesos y tratamiento de excepciones.",
    "criterion": "Se usan datos sintéticos o se justifican y controlan los riesgos de datos reales."
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
