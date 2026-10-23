# Documento de Especificación del MVP 
**Proyecto:** Sistema Inteligente de Trazabilidad de Materiales (PluriOne Trace)     
**Autor:** Axel Farid Muñiz Ramírez    
**Fecha:** Octubre 2026



## 2. Problemática

Los procesos de seguimiento logístico que dependen de anotaciones manuales, hojas de cálculo separadas o comunicaciones no centralizadas suelen dificultar la consulta del estado de los materiales y la reconstrucción de su recorrido. Entre las principales dificultades que el proyecto buscará resolver se encuentran:

- **Errores de captura** al transcribir manualmente los códigos o datos de los paquetes.
- **Información fragmentada** sobre el cliente, el conductor, la ruta y la ubicación actual.
- **Falta de un historial centralizado** de los eventos registrados durante el trayecto.
- **Detección tardía de estados anómalos**, tales como retrasos en la entrega.
- **Excesivo tiempo operativo** destinado a localizar información y preparar reportes de envío.

El proyecto **PluriOne Trace** se plantea para concentrar estos datos dentro de una aplicación web centralizada, proyectando facilitar la consulta de toda la información registrada a través de una interfaz común y accesible.

---

## 3. Solución propuesta

La solución proyectada contempla la implementación de los siguientes módulos y capacidades principales:

- **Catálogo de materiales:** Registro de paquetes mediante un identificador único y datos descriptivos asociados.
- **Relaciones logísticas:** Asociación de cada material con su cliente respectivo y, según corresponda el avance del proceso, con un conductor y una ruta de distribución.
- **Registro de checkpoints:** Actualización periódica de ubicación y estado mediante la inserción de eventos en la tabla `historial_trazabilidad`.
- **Consulta de guía:** Visualización clara de los datos del material y la secuencia histórica de sus movimientos.
- **Asistente conversacional:** Integración con la API de Google Gemini para responder consultas operativas a partir del contexto de los materiales registrados.
- **Diagnóstico de riesgo:** Desarrollo de un endpoint dedicado que calculará y devolverá el nivel de riesgo del envío basándose en el estado del material.
- **Exportación a PDF:** Generación y descarga de la guía en formato PDF desde el frontend utilizando la librería `html2pdf.js`.
- **Simulación de recorrido:** Creación de un script emulador que representará puntos de control y enviará actualizaciones automáticas a la API.

Como parte del alcance inicial, la interfaz integrará visualmente las opciones de captura mediante **"Código QR (Guía Digital)"** y **"Sensor RFID Automático"**, registrando el método seleccionado como un atributo dentro del expediente del material. Las lecturas físicas directas mediante hardware especializado quedan fuera de esta primera fase de desarrollo.

---

## 4. Objetivos del MVP
### 4.1 Objetivo general

Desarrollar una plataforma web que centralice el registro y seguimiento de materiales, mantenga un historial de eventos logísticos y facilite la consulta de información mediante una interfaz de usuario y herramientas de asistencia basadas en inteligencia artificial.

### 4.2 Objetivos específicos

- **Registrar materiales** asignándoles identificadores únicos y datos descriptivos para su control individual.
- **Asociar materiales** con sus respectivos clientes, conductores y rutas mediante el establecimiento de relaciones en la base de datos.
- **Actualizar la ubicación y el estado** de un material de manera dinámica, ya sea directamente desde la interfaz de usuario o mediante solicitudes enviadas a la API REST.
- **Conservar un historial temporal** ordenado cronológicamente con cada uno de los checkpoints y eventos registrados durante el trayecto.
- **Consultar la guía y los movimientos** de un material a través de una vista detallada que integre la información del envío.
- **Proporcionar respuestas conversacionales** sobre la información logística disponible mediante la integración de un asistente basado en inteligencia artificial.
- **Mostrar un diagnóstico indicativo de riesgo** derivado de las reglas de negocio aplicadas al estado actual registrado en cada material.
- **Exportar la guía de un material a PDF** directamente desde el navegador web para facilitar la generación de comprobantes y documentación impresa.

---

## 5. Arquitectura del sistema

Texto introductorio de la arquitectura.

La arquitectura de PluriOne Trace se organiza en una aplicación web desarrollada con React y Vite, un backend basado en FastAPI y una base de datos SQLite gestionada mediante SQLAlchemy. La comunicación entre el frontend y el backend se realiza mediante una API REST sobre HTTP/JSON. El sistema integra un servicio de inteligencia artificial para consultas logísticas y permite generar guías en PDF desde la interfaz. Las funciones de identificación y seguimiento se limitan a los mecanismos implementados en esta versión del MVP.

### 5.1 Frontend

El frontend se proyecta como una aplicación de página única (SPA) desarrollada con React y Vite. La estructura principal de la interfaz se organizará dentro de `src/App.jsx`. La aplicación utilizará Axios para la comunicación HTTP con la API REST del backend, la librería `lucide-react` para la interfaz gráfica e iconografía, y `html2pdf.js` para la generación y descarga de archivos PDF directamente desde el navegador.

Se plantea la implementación de una serie de vistas y controles clave que abarcarán módulos de autenticación, formularios dinámicos para el registro de materiales y actualización de checkpoints, tablas de consulta de envíos, visualización de guías detalladas, un panel de asignación logística y el módulo de chat con inteligencia artificial.

---

### 5.2 Backend

El backend se construirá sobre FastAPI y se ejecutará mediante un servidor ASGI con Uvicorn. El módulo central `main.py` concentrará la declaración de esquemas de entrada y validación de datos con Pydantic, la definición de endpoints REST, la lógica del negocio operativo y la integración con la API de Gemini. La capa de acceso a datos utilizará SQLAlchemy ORM para gestionar la consulta, inserción y modificación de las entidades en la base de datos relacional.

---

### 5.3 Persistencia y Modelo de Datos

La persistencia de información se basará en un motor SQLite relacional (`trazabilidad.db`) gestionado mediante SQLAlchemy. Se contempla diseñar un esquema de seis entidades principales interconectadas:

- **`usuarios`:** Gestión de usuarios del sistema con campos de rol (`operador`, `conductor`, `administrador`).
- **`clientes`:** Catálogo de clientes receptores con datos de contacto y dirección.
- **`conductores`:** Registro de chóferes operativos, licencias y disponibilidad.
- **`rutas`:** Definición de trayectos logísticos especificando origen, destino y tiempos estimados.
- **`materiales`:** Entidad central que mantendrá el código de guía, descripción, peso, estado y las relaciones (FK) hacia cliente, conductor y ruta.
- **`historial_trazabilidad`:** Registro secuencial de checkpoints que almacenará la ubicación, estado del evento, marca de tiempo y observaciones.

---

## 6. Endpoints Principales de la API REST

Para cumplir con la funcionalidad esperada en este MVP, se proyecta el desarrollo de las siguientes rutas clave en el backend:

- **`POST /materiales/`**: Crear un nuevo registro de paquete y asociarlo automáticamente con su cliente.
- **`GET /materiales/`**: Consultar la lista general de materiales serializados para la tabla principal del frontend.
- **`GET /materiales/{id}/guia`**: Obtener el expediente completo de un envío junto con su historial de trazabilidad.
- **`PUT /materiales/{id}/escanear`**: Registrar un nuevo evento o checkpoint (utilizado tanto por la interfaz como por el script de simulación IoT).
- **`POST /envios/asignar`**: Vincular múltiples paquetes con un conductor y ruta de transporte.
- **`GET /materiales/{id}/analisis-ia`**: Generar el cálculo del nivel de riesgo operativo a partir del estado actual del paquete.
- **`POST /chatbot`**: Recibir preguntas del operador y responder mediante el LLM alimentado con el contexto de la base de datos.

---

## 7. Criterios de Aceptación y Validación del MVP

La entrega y validación funcional del MVP se evaluará considerando el cumplimiento de los siguientes criterios:

- **Persistencia Integrativa:** Que la creación de un material registre correctamente la información en la base de datos y cree su primer evento de trazabilidad.
- **Trazabilidad Continua:** Que cada actualización mediante el endpoint de escaneo inserte un registro cronológico en `historial_trazabilidad` sin sobrescribir los anteriores.
- **Asistencia Contextual:** Que el módulo de chat con Gemini proporcione respuestas coherentes basadas exclusivamente en los datos existentes dentro del sistema.
- **Generación de Documentación:** Que la interfaz permita la descarga limpia de la guía logística en formato PDF mediante `html2pdf.js`.