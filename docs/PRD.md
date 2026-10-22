# Documento de Requisitos del Producto (PRD)

**Nombre del Producto:** Sistema Inteligente de Trazabilidad de Materiales  
**Empresa:** PluriOne S.A. de C.V.  
**Autor:** Axel Farid Muñiz Ramírez-ITLP 
**Estado:** Aprobado para Desarrollo  
**Fecha:** Octubre de 2026  

---

## 1. Visión y Objetivos

### 1.1. Visión del Producto
Transformar la gestión de inventarios y envíos dentro de la cadena de suministro en **PluriOne Trace** mediante la consolidación de un sistema web integral de trazabilidad. La plataforma combina el registro atómico de paquetes, la actualización inmutable de puntos de control (*checkpoints*) y la asistencia conversacional inteligente con RAG basada en **Google Gemini**, eliminando la opacidad en el tránsito de materiales y acelerando las consultas operativas.

### 1.2. Objetivos del Negocio (KPIs)
* **Eficiencia Operativa:** Reducir en un 70% el tiempo de búsqueda y consulta del estado de un paquete mediante el Chatbot RAG e interfaz en vivo.
* **Visibilidad y Trazabilidad:** Registrar el 100% de los movimientos y cambios de ubicación/estado de los paquetes (`MAT-XXX`) en la bitácora del sistema.
* **Resiliencia y Disponibilidad:** Garantizar un tiempo de respuesta medio en el backend menor a 200 ms y un sistema de tolerancia a fallos/reintentos automáticos en las consultas de Inteligencia Artificial para mitigar picos de demanda.

---

## 2. Usuarios Objetivo (User Personas)

1. **Personal de Almacén / Recepción (Operativo):**
   * **Perfil:** Operador encargado de recibir, registrar y escanear entrada y salida de mercancía.
   * **Necesidades:** Registrar paquetes rápidamente asociando cliente, nombre, ubicación inicial y generar etiquetas/códigos.
   * **Puntos de dolor:** Captura manual repetitiva en hojas de cálculo y pérdida de rastro físico de los materiales.

2. **Área de Logística / Planificación:**
   * **Perfil:** Coordinador de rutas, asignación de envíos y relación con conductores.
   * **Necesidades:** Asignar paquetes a choferes y rutas específicas, cambiar ubicaciones y actualizar estados en tiempo real.
   * **Puntos de dolor:** Desconexión entre los conductores en ruta y la visibilidad centralizada del almacén.

3. **Cliente Destinatario / Usuario Final:**
   * **Perfil:** Cliente externo o receptor del envío.
   * **Necesidades:** Consultar el estado exacto de su paquete mediante su guía e ID sin requerir llamadas de soporte.

4. **Administrador / Directivo:**
   * **Perfil:** Supervisor de operaciones de PluriOne Trace.
   * **Necesidades:** Auditar movimientos, supervisar el catálogo de clientes, conductores, materiales y apoyarse en el Asistente IA para resolver dudas teóricas o de inventario.

---

## 3. Alcance del Producto

### 3.1. En Alcance (In Scope)
* **Autenticación segura de usuarios:** Control de acceso, inicio de sesión y gestión de perfiles (`/auth/login`, `/auth/register`, `/auth/recuperar`) con persistencia en la tabla `usuarios`.
* **Registro atómico de paquetes e insumos:** Ingesta de materiales (`MAT-XXX`) asociando el cliente destinatario, ubicación inicial y soporte para etiquetado con Códigos QR y lecturas RFID.
* **Asignación logística relacional (Outbound):** Vinculación dinámica entre el paquete, el cliente receptor, el conductor designado y la ruta de transporte, cambiando el estado operativo a *"En Tránsito"*.
* **Bitácora inmutable de checkpoints (Escaneo y Seguimiento):** Actualización de ubicaciones en tiempo real y estados logísticos (*En Regla/Tránsito, Retrasado, Entregado*) con registro histórico de fechas, horas y motivos de retraso.
* **Monitoreo Geográfico e Itinerario de Ruta Interactivo:** Visualización en mapa interactivo (basado en Leaflet.js / OpenStreetMap) y línea de tiempo (*Timeline*) que proyecta gráficamente los puntos de origen, tramos en tránsito, *checkpoints* intermedios y destino final de los envíos.
* **Asistente conversacional RAG (Chatbot Logístico):** Chat flotante e interactivo impulsado por **Google Gemini** (`gemini-3.6-flash`) que inyecta el contexto en vivo de SQLite para responder preguntas sobre la ubicación de envíos o conceptos teóricos de logística (Incoterms, aduanas).
* **Diagnóstico preventivo con IA:** Inferencia automática sobre los trayectos (`GET /materiales/{id}/analisis-ia`) para clasificar el nivel de riesgo en la entrega (*Alto, Medio, Bajo*) y detectar posibles anomalías antes de que afecten al cliente.
* **Exportación de Guías de Trazabilidad:** Generación y descarga inmediata del reporte oficial de ruta en formato PDF de alta calidad mediante `html2pdf.js` desde el navegador web.

### 3.2. Fuera de Alcance (Out of Scope)
* **Telemetría GPS por Satélite en Tiempo Real:** Hardware IoT integrado en vehículos para rastreo geográfico continuo sin intervención humana (en esta fase la ubicación se actualiza por escaneo en *checkpoints*).
* **Migración a PostgreSQL en la nube:** Despliegue en base de datos distribuida (previsto para la Fase 2 de escalabilidad).
* **Notificaciones Push y SMS Automatizados:** Envío automático de alertas SMS o mensajes de WhatsApp al destinatario ante cambios de estado.
* **Aplicaciones Móviles Nativas:** Módulos descargables para iOS o Android (el sistema actual opera como una aplicación web responsiva accesible desde cualquier navegador móvil).

---

## 4. Historias de Usuario y Requisitos Funcionales

* **US-01 (Registro de Paquetes - Prioridad Alta):**
  * **Historia:** Como Operador de Almacén, quiero registrar un nuevo paquete con su cliente y ubicación para asignarle una guía única.
  * **Criterios de Aceptación:** Debe guardar en la BD el ID de paquete (`MAT-XXX`), nombre, `cliente_id`, ubicación inicial y estado (*"En almacén"*).

* **US-02 (Escaneo de Checkpoints - Prioridad Alta):**
  * **Historia:** Como Coordinador de Logística, quiero actualizar la ubicación y estado de un paquete mediante la API para reflejar su avance.
  * **Criterios de Aceptación:** Endpoint `PUT /materiales/{id}/escanear` actualiza los campos `ubicacion_actual` y `estado` en SQLite en tiempo real.

* **US-03 (Consulta RAG de Envíos - Prioridad Alta):**
  * **Historia:** Como Usuario, quiero consultar a través del Chatbot el estado en vivo de un paquete para saber dónde se encuentra sin buscar manualmente.
  * **Criterios de Aceptación:** El chatbot consulta los registros activos en la BD SQLite y responde con el ID, cliente, ubicación y estado en lenguaje natural.

* **US-04 (Consultas Teóricas Logísticas - Prioridad Alta):**
  * **Historia:** Como Usuario, quiero consultar al Chatbot sobre conceptos de logística (ej. Incoterms DDP, FOB, despacho aduanero) para resolver dudas operativas.
  * **Criterios de Aceptación:** El asistente Gemini debe responder de forma clara y profesional preguntas teóricas dentro del dominio de logística.

* **US-05 (Filtro de Dominio en IA - Prioridad Alta):**
  * **Historia:** Como Administrador, quiero que el Chatbot rechace preguntas ajenas a logística o al sistema para no malgastar recursos.
  * **Criterios de Aceptación:** Si se consulta sobre temas no logísticos (recetas, deportes, etc.), debe responder: *"Solo puedo responder preguntas relacionadas con la logística y los envíos de PluriOne Trace."*

* **US-06 (Tolerancia a Fallos en IA - Prioridad Media):**
  * **Historia:** Como Sistema Backend, quiero manejar automáticamente errores 503 por alta demanda en la API de IA para garantizar que el usuario reciba respuesta sin interrupciones.
  * **Criterios de Aceptación:** Implementar bucle de reintento con pausa corta al detectar código 503 antes de mostrar mensaje de fallback al usuario.

---

## 5. Requisitos No Funcionales

* **Rendimiento:** Tiempos de respuesta de la API de FastAPI < 150 ms para operaciones CRUD. Tiempo de respuesta del chatbot con Gemini < 2.0 segundos.
* **Tolerancia a Fallos y Manejo de Errores:** Bloques `try-except` defensivos que capturen fallos de autenticación (401), modelos no encontrados (404) y saturación del modelo (503), devolviendo JSON estructurado.
* **Seguridad:** Aislamiento de credenciales mediante variables de entorno (`.env`) evitando exponer API keys públicas en el cliente.
* **Compatibilidad:** Implementación con el SDK actualizado `google-genai` apuntando al modelo oficial vigente `gemini-3.6-flash`.
* **Arquitectura:** Desacoplamiento estricto entre cliente SPA (React) y servidor (FastAPI + SQLAlchemy + Gemini API).

---

## 6. Supuestos y Dependencias

* **Dependencia:** Conexión a Internet estable en el servidor backend para realizar peticiones HTTPS a la API de Google Gemini.
* **Dependencia:** Servidor Uvicorn ejecutándose localmente o en entorno de despliegue sobre Python 3.10+.
* **Supuesto:** La base de datos SQLite `trazabilidad.db` mantiene la integridad referencial entre clientes, conductores, rutas y materiales registrados.
* **Supuesto:** Cuenta con API Key de Google AI Studio con cuota activa para llamadas al modelo `gemini-3.6-flash`. 
