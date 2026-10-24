
# Estructura del Repositorio - PluriOne Trace

```text
G19X-ITLP-AFMR-708-ACADEMIC/
├── docs/                      # Especificaciones formales del producto
│   ├── PRD.md                 # Documento de Requisitos del Producto (PRD)
│   └── MVP.md                 # Alcance y criterios de aceptación del MVP
├── trazabilidad-backend/      # Servidor API REST con FastAPI
│   ├── .env.example           # Plantilla limpia de variables de entorno
│   ├── database.py            # Motor de conexión SQLAlchemy y sesión
│   ├── main.py                # Endpoints REST, autenticación y lógica de IA
│   ├── models.py              # Definición de tablas relacionales (3FN)
│   ├── requirements.txt       # Lista de dependencias de Python
│   └── simulador_iot.py       # Script de simulación de trayectos
├── trazabilidad-frontend/     # Cliente web SPA en React + Vite
│   ├── public/                # Recursos estáticos públicos
│   ├── src/
│   │   ├── assets/            # Imágenes y logos
│   │   ├── App.css             # Estilos globales
│   │   ├── App.jsx             # Panel de control y vistas principales
│   │   ├── index.css           # Configuración de estilos base
│   │   └── main.jsx            # Punto de entrada Vite
│   ├── package.json           # Dependencias de Node.js / NPM
│   └── vite.config.js         # Configuración del empaquetador Vite
├── .gitignore                 # Exclusión de venv, .env, dist y trazabilidad.db
├── README.md                  # Documentación principal del proyecto


<!-- PROJECT_STRUCTURE_START -->
```
├── 📄 .gitignore
├── 📁 docs/
│   ├── 📄 MVP.md
│   └── 📄 PRD.md
├── 📄 README.md
├── 📄 structure.md
├── 📁 trazabilidad-backend/
│   ├── 📄 .env
│   ├── 📄 .env.example
│   ├── 📄 database.py
│   ├── 📄 main.py
│   ├── 📄 models.py
│   ├── 📄 requirements.txt
│   ├── 📄 simulador_iot.py
│   ├── 📄 trazabilidad.db
│   ├── 📁 venv/
│   │   ├── 📁 Include/
│   │   │   └── 📁 site/
│   │   │       └── 📁 python3.12/
│   │   │           └── 📁 greenlet/
│   │   │               └── 📄 greenlet.h
│   │   ├── 📁 Lib/
│   │   │   └── 📁 site-packages/
│   │   │       ├── 📁 annotated_doc/
│   │   │       │   ├── 📄 main.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 main.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 annotated_doc-0.0.5.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 annotated_types/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 test_cases.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 test_cases.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 annotated_types-0.8.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 anyio/
│   │   │       │   ├── 📁 abc/
│   │   │       │   │   ├── 📄 _eventloop.py
│   │   │       │   │   ├── 📄 _resources.py
│   │   │       │   │   ├── 📄 _sockets.py
│   │   │       │   │   ├── 📄 _streams.py
│   │   │       │   │   ├── 📄 _subprocesses.py
│   │   │       │   │   ├── 📄 _tasks.py
│   │   │       │   │   ├── 📄 _testing.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _eventloop.cpython-312.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312.pyc
│   │   │       │   │       ├── 📄 _subprocesses.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 from_thread.py
│   │   │       │   ├── 📄 functools.py
│   │   │       │   ├── 📄 itertools.py
│   │   │       │   ├── 📄 lowlevel.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 pytest_plugin.py
│   │   │       │   ├── 📁 streams/
│   │   │       │   │   ├── 📄 buffered.py
│   │   │       │   │   ├── 📄 file.py
│   │   │       │   │   ├── 📄 memory.py
│   │   │       │   │   ├── 📄 stapled.py
│   │   │       │   │   ├── 📄 text.py
│   │   │       │   │   ├── 📄 tls.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 buffered.cpython-312.pyc
│   │   │       │   │       ├── 📄 file.cpython-312.pyc
│   │   │       │   │       ├── 📄 memory.cpython-312.pyc
│   │   │       │   │       ├── 📄 stapled.cpython-312.pyc
│   │   │       │   │       ├── 📄 text.cpython-312.pyc
│   │   │       │   │       ├── 📄 tls.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 to_interpreter.py
│   │   │       │   ├── 📄 to_process.py
│   │   │       │   ├── 📄 to_thread.py
│   │   │       │   ├── 📁 _backends/
│   │   │       │   │   ├── 📄 _asyncio.py
│   │   │       │   │   ├── 📄 _trio.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _asyncio.cpython-312.pyc
│   │   │       │   │       ├── 📄 _trio.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 _core/
│   │   │       │   │   ├── 📄 _asyncio_selector_thread.py
│   │   │       │   │   ├── 📄 _concurrency_utils.py
│   │   │       │   │   ├── 📄 _contextmanagers.py
│   │   │       │   │   ├── 📄 _eventloop.py
│   │   │       │   │   ├── 📄 _exceptions.py
│   │   │       │   │   ├── 📄 _fileio.py
│   │   │       │   │   ├── 📄 _futures.py
│   │   │       │   │   ├── 📄 _resources.py
│   │   │       │   │   ├── 📄 _signals.py
│   │   │       │   │   ├── 📄 _sockets.py
│   │   │       │   │   ├── 📄 _streams.py
│   │   │       │   │   ├── 📄 _subprocesses.py
│   │   │       │   │   ├── 📄 _synchronization.py
│   │   │       │   │   ├── 📄 _tasks.py
│   │   │       │   │   ├── 📄 _tempfile.py
│   │   │       │   │   ├── 📄 _testing.py
│   │   │       │   │   ├── 📄 _typedattr.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _asyncio_selector_thread.cpython-312.pyc
│   │   │       │   │       ├── 📄 _concurrency_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _contextmanagers.cpython-312.pyc
│   │   │       │   │       ├── 📄 _eventloop.cpython-312.pyc
│   │   │       │   │       ├── 📄 _exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 _fileio.cpython-312.pyc
│   │   │       │   │       ├── 📄 _futures.cpython-312.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312.pyc
│   │   │       │   │       ├── 📄 _signals.cpython-312.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312.pyc
│   │   │       │   │       ├── 📄 _subprocesses.cpython-312.pyc
│   │   │       │   │       ├── 📄 _synchronization.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tempfile.cpython-312.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typedattr.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _lazyimport.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 from_thread.cpython-312.pyc
│   │   │       │       ├── 📄 functools.cpython-312.pyc
│   │   │       │       ├── 📄 itertools.cpython-312.pyc
│   │   │       │       ├── 📄 lowlevel.cpython-312.pyc
│   │   │       │       ├── 📄 pytest_plugin.cpython-312.pyc
│   │   │       │       ├── 📄 to_interpreter.cpython-312.pyc
│   │   │       │       ├── 📄 to_process.cpython-312.pyc
│   │   │       │       ├── 📄 to_thread.cpython-312.pyc
│   │   │       │       ├── 📄 _lazyimport.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 anyio-4.15.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 certifi/
│   │   │       │   ├── 📄 cacert.pem
│   │   │       │   ├── 📄 core.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📁 tests/
│   │   │       │   │   ├── 📄 test_certify.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 test_certify.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 core.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 certifi-2026.7.22.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 cffi/
│   │   │       │   ├── 📄 api.py
│   │   │       │   ├── 📄 backend_ctypes.py
│   │   │       │   ├── 📄 cffi_opcode.py
│   │   │       │   ├── 📄 commontypes.py
│   │   │       │   ├── 📄 cparser.py
│   │   │       │   ├── 📄 error.py
│   │   │       │   ├── 📄 ffiplatform.py
│   │   │       │   ├── 📄 gen_src.py
│   │   │       │   ├── 📄 lock.py
│   │   │       │   ├── 📄 model.py
│   │   │       │   ├── 📄 parse_c_type.h
│   │   │       │   ├── 📄 pkgconfig.py
│   │   │       │   ├── 📄 recompiler.py
│   │   │       │   ├── 📄 setuptools_ext.py
│   │   │       │   ├── 📄 vengine_cpy.py
│   │   │       │   ├── 📄 vengine_gen.py
│   │   │       │   ├── 📄 verifier.py
│   │   │       │   ├── 📄 _cffi_errors.h
│   │   │       │   ├── 📄 _cffi_gen_src.py
│   │   │       │   ├── 📄 _cffi_include.h
│   │   │       │   ├── 📄 _embedding.h
│   │   │       │   ├── 📄 _imp_emulation.py
│   │   │       │   ├── 📄 _shimmed_dist_utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 api.cpython-312.pyc
│   │   │       │       ├── 📄 backend_ctypes.cpython-312.pyc
│   │   │       │       ├── 📄 cffi_opcode.cpython-312.pyc
│   │   │       │       ├── 📄 commontypes.cpython-312.pyc
│   │   │       │       ├── 📄 cparser.cpython-312.pyc
│   │   │       │       ├── 📄 error.cpython-312.pyc
│   │   │       │       ├── 📄 ffiplatform.cpython-312.pyc
│   │   │       │       ├── 📄 gen_src.cpython-312.pyc
│   │   │       │       ├── 📄 lock.cpython-312.pyc
│   │   │       │       ├── 📄 model.cpython-312.pyc
│   │   │       │       ├── 📄 pkgconfig.cpython-312.pyc
│   │   │       │       ├── 📄 recompiler.cpython-312.pyc
│   │   │       │       ├── 📄 setuptools_ext.cpython-312.pyc
│   │   │       │       ├── 📄 vengine_cpy.cpython-312.pyc
│   │   │       │       ├── 📄 vengine_gen.cpython-312.pyc
│   │   │       │       ├── 📄 verifier.cpython-312.pyc
│   │   │       │       ├── 📄 _cffi_gen_src.cpython-312.pyc
│   │   │       │       ├── 📄 _imp_emulation.cpython-312.pyc
│   │   │       │       ├── 📄 _shimmed_dist_utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 cffi-2.1.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 charset_normalizer/
│   │   │       │   ├── 📄 api.py
│   │   │       │   ├── 📄 cd.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 cd.py
│   │   │       │   ├── 📁 cli/
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   ├── 📄 __main__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   ├── 📄 constant.py
│   │   │       │   ├── 📄 legacy.py
│   │   │       │   ├── 📄 md.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 md.py
│   │   │       │   ├── 📄 models.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 api.cpython-312.pyc
│   │   │       │       ├── 📄 cd.cpython-312.pyc
│   │   │       │       ├── 📄 constant.cpython-312.pyc
│   │   │       │       ├── 📄 legacy.cpython-312.pyc
│   │   │       │       ├── 📄 md.cpython-312.pyc
│   │   │       │       ├── 📄 models.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 charset_normalizer-3.5.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 click/
│   │   │       │   ├── 📄 core.py
│   │   │       │   ├── 📄 decorators.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 formatting.py
│   │   │       │   ├── 📄 globals.py
│   │   │       │   ├── 📄 parser.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 shell_completion.py
│   │   │       │   ├── 📄 termui.py
│   │   │       │   ├── 📄 testing.py
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 _termui_impl.py
│   │   │       │   ├── 📄 _textwrap.py
│   │   │       │   ├── 📄 _utils.py
│   │   │       │   ├── 📄 _winconsole.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 core.cpython-312.pyc
│   │   │       │       ├── 📄 decorators.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 formatting.cpython-312.pyc
│   │   │       │       ├── 📄 globals.cpython-312.pyc
│   │   │       │       ├── 📄 parser.cpython-312.pyc
│   │   │       │       ├── 📄 shell_completion.cpython-312.pyc
│   │   │       │       ├── 📄 termui.cpython-312.pyc
│   │   │       │       ├── 📄 testing.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _termui_impl.cpython-312.pyc
│   │   │       │       ├── 📄 _textwrap.cpython-312.pyc
│   │   │       │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │       ├── 📄 _winconsole.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 click-8.5.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.txt
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 cryptography/
│   │   │       │   ├── 📄 cobblestone.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 fernet.py
│   │   │       │   ├── 📁 hazmat/
│   │   │       │   │   ├── 📁 asn1/
│   │   │       │   │   │   ├── 📄 asn1.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 asn1.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 backends/
│   │   │       │   │   │   ├── 📁 openssl/
│   │   │       │   │   │   │   ├── 📄 backend.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 backend.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 bindings/
│   │   │       │   │   │   ├── 📁 openssl/
│   │   │       │   │   │   │   ├── 📄 binding.py
│   │   │       │   │   │   │   ├── 📄 _conditional.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 binding.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _conditional.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 _rust/
│   │   │       │   │   │   │   ├── 📄 asn1.pyi
│   │   │       │   │   │   │   ├── 📄 cobblestone.pyi
│   │   │       │   │   │   │   ├── 📄 declarative_asn1.pyi
│   │   │       │   │   │   │   ├── 📄 exceptions.pyi
│   │   │       │   │   │   │   ├── 📄 ocsp.pyi
│   │   │       │   │   │   │   ├── 📁 openssl/
│   │   │       │   │   │   │   │   ├── 📄 aead.pyi
│   │   │       │   │   │   │   │   ├── 📄 ciphers.pyi
│   │   │       │   │   │   │   │   ├── 📄 cmac.pyi
│   │   │       │   │   │   │   │   ├── 📄 dh.pyi
│   │   │       │   │   │   │   │   ├── 📄 dsa.pyi
│   │   │       │   │   │   │   │   ├── 📄 ec.pyi
│   │   │       │   │   │   │   │   ├── 📄 ed25519.pyi
│   │   │       │   │   │   │   │   ├── 📄 ed448.pyi
│   │   │       │   │   │   │   │   ├── 📄 hashes.pyi
│   │   │       │   │   │   │   │   ├── 📄 hmac.pyi
│   │   │       │   │   │   │   │   ├── 📄 hpke.pyi
│   │   │       │   │   │   │   │   ├── 📄 kdf.pyi
│   │   │       │   │   │   │   │   ├── 📄 keys.pyi
│   │   │       │   │   │   │   │   ├── 📄 keywrap.pyi
│   │   │       │   │   │   │   │   ├── 📄 mldsa.pyi
│   │   │       │   │   │   │   │   ├── 📄 mlkem.pyi
│   │   │       │   │   │   │   │   ├── 📄 poly1305.pyi
│   │   │       │   │   │   │   │   ├── 📄 rsa.pyi
│   │   │       │   │   │   │   │   ├── 📄 x25519.pyi
│   │   │       │   │   │   │   │   ├── 📄 x448.pyi
│   │   │       │   │   │   │   │   └── 📄 __init__.pyi
│   │   │       │   │   │   │   ├── 📄 pkcs12.pyi
│   │   │       │   │   │   │   ├── 📄 pkcs7.pyi
│   │   │       │   │   │   │   ├── 📄 test_support.pyi
│   │   │       │   │   │   │   ├── 📄 x509.pyi
│   │   │       │   │   │   │   ├── 📄 _openssl.pyi
│   │   │       │   │   │   │   └── 📄 __init__.pyi
│   │   │       │   │   │   ├── 📄 _rust.pyd
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 decrepit/
│   │   │       │   │   │   ├── 📁 ciphers/
│   │   │       │   │   │   │   ├── 📄 algorithms.py
│   │   │       │   │   │   │   ├── 📄 modes.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 algorithms.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 modes.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 primitives/
│   │   │       │   │   │   ├── 📁 asymmetric/
│   │   │       │   │   │   │   ├── 📄 dh.py
│   │   │       │   │   │   │   ├── 📄 dsa.py
│   │   │       │   │   │   │   ├── 📄 ec.py
│   │   │       │   │   │   │   ├── 📄 ed25519.py
│   │   │       │   │   │   │   ├── 📄 ed448.py
│   │   │       │   │   │   │   ├── 📄 mldsa.py
│   │   │       │   │   │   │   ├── 📄 mlkem.py
│   │   │       │   │   │   │   ├── 📄 padding.py
│   │   │       │   │   │   │   ├── 📄 rsa.py
│   │   │       │   │   │   │   ├── 📄 types.py
│   │   │       │   │   │   │   ├── 📄 utils.py
│   │   │       │   │   │   │   ├── 📄 x25519.py
│   │   │       │   │   │   │   ├── 📄 x448.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 dh.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 dsa.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ec.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ed25519.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ed448.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 mldsa.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 mlkem.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 padding.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 rsa.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 x25519.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 x448.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 ciphers/
│   │   │       │   │   │   │   ├── 📄 aead.py
│   │   │       │   │   │   │   ├── 📄 algorithms.py
│   │   │       │   │   │   │   ├── 📄 base.py
│   │   │       │   │   │   │   ├── 📄 modes.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 aead.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 algorithms.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 modes.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 cmac.py
│   │   │       │   │   │   ├── 📄 constant_time.py
│   │   │       │   │   │   ├── 📄 hashes.py
│   │   │       │   │   │   ├── 📄 hmac.py
│   │   │       │   │   │   ├── 📄 hpke.py
│   │   │       │   │   │   ├── 📁 kdf/
│   │   │       │   │   │   │   ├── 📄 argon2.py
│   │   │       │   │   │   │   ├── 📄 concatkdf.py
│   │   │       │   │   │   │   ├── 📄 hkdf.py
│   │   │       │   │   │   │   ├── 📄 kbkdf.py
│   │   │       │   │   │   │   ├── 📄 pbkdf2.py
│   │   │       │   │   │   │   ├── 📄 scrypt.py
│   │   │       │   │   │   │   ├── 📄 x963kdf.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 argon2.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 concatkdf.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 hkdf.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 kbkdf.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pbkdf2.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 scrypt.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 x963kdf.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 keywrap.py
│   │   │       │   │   │   ├── 📄 padding.py
│   │   │       │   │   │   ├── 📄 poly1305.py
│   │   │       │   │   │   ├── 📁 serialization/
│   │   │       │   │   │   │   ├── 📄 base.py
│   │   │       │   │   │   │   ├── 📄 pkcs12.py
│   │   │       │   │   │   │   ├── 📄 pkcs7.py
│   │   │       │   │   │   │   ├── 📄 ssh.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pkcs12.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pkcs7.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ssh.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 twofactor/
│   │   │       │   │   │   │   ├── 📄 hotp.py
│   │   │       │   │   │   │   ├── 📄 totp.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 hotp.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 totp.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 _asymmetric.py
│   │   │       │   │   │   ├── 📄 _cipheralgorithm.py
│   │   │       │   │   │   ├── 📄 _modes.py
│   │   │       │   │   │   ├── 📄 _serialization.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 cmac.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 constant_time.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hashes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hmac.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hpke.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 keywrap.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 padding.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 poly1305.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _asymmetric.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _cipheralgorithm.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _modes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _serialization.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 _oid.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _oid.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📁 x509/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 certificate_transparency.py
│   │   │       │   │   ├── 📄 extensions.py
│   │   │       │   │   ├── 📄 general_name.py
│   │   │       │   │   ├── 📄 name.py
│   │   │       │   │   ├── 📄 ocsp.py
│   │   │       │   │   ├── 📄 oid.py
│   │   │       │   │   ├── 📄 verification.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 certificate_transparency.cpython-312.pyc
│   │   │       │   │       ├── 📄 extensions.cpython-312.pyc
│   │   │       │   │       ├── 📄 general_name.cpython-312.pyc
│   │   │       │   │       ├── 📄 name.cpython-312.pyc
│   │   │       │   │       ├── 📄 ocsp.cpython-312.pyc
│   │   │       │   │       ├── 📄 oid.cpython-312.pyc
│   │   │       │   │       ├── 📄 verification.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __about__.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 cobblestone.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 fernet.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 __about__.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 cryptography-50.0.1.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   ├── 📄 LICENSE
│   │   │       │   │   ├── 📄 LICENSE.APACHE
│   │   │       │   │   └── 📄 LICENSE.BSD
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📁 sboms/
│   │   │       │   │   ├── 📄 cryptography-rust.cyclonedx.json
│   │   │       │   │   └── 📄 sbom.json
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 distro/
│   │   │       │   ├── 📄 distro.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 distro.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 distro-1.9.0.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 fastapi/
│   │   │       │   ├── 📁 .agents/
│   │   │       │   │   └── 📁 skills/
│   │   │       │   │       └── 📁 fastapi/
│   │   │       │   │           ├── 📁 references/
│   │   │       │   │           │   ├── 📄 dependencies.md
│   │   │       │   │           │   ├── 📄 other-tools.md
│   │   │       │   │           │   ├── 📄 path-operations.md
│   │   │       │   │           │   ├── 📄 pydantic.md
│   │   │       │   │           │   ├── 📄 responses.md
│   │   │       │   │           │   └── 📄 streaming.md
│   │   │       │   │           └── 📄 SKILL.md
│   │   │       │   ├── 📄 applications.py
│   │   │       │   ├── 📄 background.py
│   │   │       │   ├── 📄 cli.py
│   │   │       │   ├── 📄 concurrency.py
│   │   │       │   ├── 📄 datastructures.py
│   │   │       │   ├── 📁 dependencies/
│   │   │       │   │   ├── 📄 models.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 encoders.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 exception_handlers.py
│   │   │       │   ├── 📄 logger.py
│   │   │       │   ├── 📁 middleware/
│   │   │       │   │   ├── 📄 asyncexitstack.py
│   │   │       │   │   ├── 📄 cors.py
│   │   │       │   │   ├── 📄 gzip.py
│   │   │       │   │   ├── 📄 httpsredirect.py
│   │   │       │   │   ├── 📄 trustedhost.py
│   │   │       │   │   ├── 📄 wsgi.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 asyncexitstack.cpython-312.pyc
│   │   │       │   │       ├── 📄 cors.cpython-312.pyc
│   │   │       │   │       ├── 📄 gzip.cpython-312.pyc
│   │   │       │   │       ├── 📄 httpsredirect.cpython-312.pyc
│   │   │       │   │       ├── 📄 trustedhost.cpython-312.pyc
│   │   │       │   │       ├── 📄 wsgi.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 openapi/
│   │   │       │   │   ├── 📄 constants.py
│   │   │       │   │   ├── 📄 docs.py
│   │   │       │   │   ├── 📄 models.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 constants.cpython-312.pyc
│   │   │       │   │       ├── 📄 docs.cpython-312.pyc
│   │   │       │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 params.py
│   │   │       │   ├── 📄 param_functions.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 requests.py
│   │   │       │   ├── 📄 responses.py
│   │   │       │   ├── 📄 routing.py
│   │   │       │   ├── 📁 security/
│   │   │       │   │   ├── 📄 api_key.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 http.py
│   │   │       │   │   ├── 📄 oauth2.py
│   │   │       │   │   ├── 📄 open_id_connect_url.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 api_key.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 http.cpython-312.pyc
│   │   │       │   │       ├── 📄 oauth2.cpython-312.pyc
│   │   │       │   │       ├── 📄 open_id_connect_url.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 sse.py
│   │   │       │   ├── 📄 staticfiles.py
│   │   │       │   ├── 📄 templating.py
│   │   │       │   ├── 📄 testclient.py
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 websockets.py
│   │   │       │   ├── 📁 _compat/
│   │   │       │   │   ├── 📄 shared.py
│   │   │       │   │   ├── 📄 v2.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 shared.cpython-312.pyc
│   │   │       │   │       ├── 📄 v2.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 applications.cpython-312.pyc
│   │   │       │       ├── 📄 background.cpython-312.pyc
│   │   │       │       ├── 📄 cli.cpython-312.pyc
│   │   │       │       ├── 📄 concurrency.cpython-312.pyc
│   │   │       │       ├── 📄 datastructures.cpython-312.pyc
│   │   │       │       ├── 📄 encoders.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 exception_handlers.cpython-312.pyc
│   │   │       │       ├── 📄 logger.cpython-312.pyc
│   │   │       │       ├── 📄 params.cpython-312.pyc
│   │   │       │       ├── 📄 param_functions.cpython-312.pyc
│   │   │       │       ├── 📄 requests.cpython-312.pyc
│   │   │       │       ├── 📄 responses.cpython-312.pyc
│   │   │       │       ├── 📄 routing.cpython-312.pyc
│   │   │       │       ├── 📄 sse.cpython-312.pyc
│   │   │       │       ├── 📄 staticfiles.cpython-312.pyc
│   │   │       │       ├── 📄 templating.cpython-312.pyc
│   │   │       │       ├── 📄 testclient.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 websockets.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 fastapi-0.141.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 google/
│   │   │       │   ├── 📁 auth/
│   │   │       │   │   ├── 📁 aio/
│   │   │       │   │   │   ├── 📄 credentials.py
│   │   │       │   │   │   ├── 📁 transport/
│   │   │       │   │   │   │   ├── 📄 aiohttp.py
│   │   │       │   │   │   │   ├── 📄 mtls.py
│   │   │       │   │   │   │   ├── 📄 sessions.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 aiohttp.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 mtls.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 sessions.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 _helpers.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 credentials.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _helpers.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 api_key.py
│   │   │       │   │   ├── 📄 app_engine.py
│   │   │       │   │   ├── 📄 aws.py
│   │   │       │   │   ├── 📁 compute_engine/
│   │   │       │   │   │   ├── 📄 credentials.py
│   │   │       │   │   │   ├── 📄 _metadata.py
│   │   │       │   │   │   ├── 📄 _mtls.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 credentials.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _metadata.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _mtls.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 credentials.py
│   │   │       │   │   ├── 📁 crypt/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 es.py
│   │   │       │   │   │   ├── 📄 es256.py
│   │   │       │   │   │   ├── 📄 rsa.py
│   │   │       │   │   │   ├── 📄 _cryptography_rsa.py
│   │   │       │   │   │   ├── 📄 _helpers.py
│   │   │       │   │   │   ├── 📄 _python_rsa.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 es.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 es256.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 rsa.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _cryptography_rsa.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _helpers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _python_rsa.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 downscoped.py
│   │   │       │   │   ├── 📄 environment_vars.py
│   │   │       │   │   ├── 📄 exceptions.py
│   │   │       │   │   ├── 📄 external_account.py
│   │   │       │   │   ├── 📄 external_account_authorized_user.py
│   │   │       │   │   ├── 📄 iam.py
│   │   │       │   │   ├── 📄 identity_pool.py
│   │   │       │   │   ├── 📄 impersonated_credentials.py
│   │   │       │   │   ├── 📄 jwt.py
│   │   │       │   │   ├── 📄 metrics.py
│   │   │       │   │   ├── 📄 pluggable.py
│   │   │       │   │   ├── 📄 py.typed
│   │   │       │   │   ├── 📁 transport/
│   │   │       │   │   │   ├── 📄 grpc.py
│   │   │       │   │   │   ├── 📄 mtls.py
│   │   │       │   │   │   ├── 📄 requests.py
│   │   │       │   │   │   ├── 📄 urllib3.py
│   │   │       │   │   │   ├── 📄 _aiohttp_requests.py
│   │   │       │   │   │   ├── 📄 _custom_tls_signer.py
│   │   │       │   │   │   ├── 📄 _http_client.py
│   │   │       │   │   │   ├── 📄 _mtls_helper.py
│   │   │       │   │   │   ├── 📄 _requests_base.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 grpc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mtls.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 requests.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 urllib3.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _aiohttp_requests.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _custom_tls_signer.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _http_client.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _mtls_helper.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _requests_base.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 version.py
│   │   │       │   │   ├── 📄 _agent_identity_utils.py
│   │   │       │   │   ├── 📄 _cache.py
│   │   │       │   │   ├── 📄 _cloud_sdk.py
│   │   │       │   │   ├── 📄 _credentials_async.py
│   │   │       │   │   ├── 📄 _credentials_base.py
│   │   │       │   │   ├── 📄 _default.py
│   │   │       │   │   ├── 📄 _default_async.py
│   │   │       │   │   ├── 📄 _exponential_backoff.py
│   │   │       │   │   ├── 📄 _helpers.py
│   │   │       │   │   ├── 📄 _jwt_async.py
│   │   │       │   │   ├── 📄 _oauth2client.py
│   │   │       │   │   ├── 📄 _refresh_worker.py
│   │   │       │   │   ├── 📄 _regional_access_boundary_utils.py
│   │   │       │   │   ├── 📄 _service_account_info.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 api_key.cpython-312.pyc
│   │   │       │   │       ├── 📄 app_engine.cpython-312.pyc
│   │   │       │   │       ├── 📄 aws.cpython-312.pyc
│   │   │       │   │       ├── 📄 credentials.cpython-312.pyc
│   │   │       │   │       ├── 📄 downscoped.cpython-312.pyc
│   │   │       │   │       ├── 📄 environment_vars.cpython-312.pyc
│   │   │       │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 external_account.cpython-312.pyc
│   │   │       │   │       ├── 📄 external_account_authorized_user.cpython-312.pyc
│   │   │       │   │       ├── 📄 iam.cpython-312.pyc
│   │   │       │   │       ├── 📄 identity_pool.cpython-312.pyc
│   │   │       │   │       ├── 📄 impersonated_credentials.cpython-312.pyc
│   │   │       │   │       ├── 📄 jwt.cpython-312.pyc
│   │   │       │   │       ├── 📄 metrics.cpython-312.pyc
│   │   │       │   │       ├── 📄 pluggable.cpython-312.pyc
│   │   │       │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │       ├── 📄 _agent_identity_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _cache.cpython-312.pyc
│   │   │       │   │       ├── 📄 _cloud_sdk.cpython-312.pyc
│   │   │       │   │       ├── 📄 _credentials_async.cpython-312.pyc
│   │   │       │   │       ├── 📄 _credentials_base.cpython-312.pyc
│   │   │       │   │       ├── 📄 _default.cpython-312.pyc
│   │   │       │   │       ├── 📄 _default_async.cpython-312.pyc
│   │   │       │   │       ├── 📄 _exponential_backoff.cpython-312.pyc
│   │   │       │   │       ├── 📄 _helpers.cpython-312.pyc
│   │   │       │   │       ├── 📄 _jwt_async.cpython-312.pyc
│   │   │       │   │       ├── 📄 _oauth2client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _refresh_worker.cpython-312.pyc
│   │   │       │   │       ├── 📄 _regional_access_boundary_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _service_account_info.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 genai/
│   │   │       │   │   ├── 📄 batches.py
│   │   │       │   │   ├── 📄 caches.py
│   │   │       │   │   ├── 📄 chats.py
│   │   │       │   │   ├── 📄 client.py
│   │   │       │   │   ├── 📄 documents.py
│   │   │       │   │   ├── 📄 errors.py
│   │   │       │   │   ├── 📄 files.py
│   │   │       │   │   ├── 📄 file_search_stores.py
│   │   │       │   │   ├── 📄 interactions.py
│   │   │       │   │   ├── 📄 live.py
│   │   │       │   │   ├── 📄 live_music.py
│   │   │       │   │   ├── 📄 local_tokenizer.py
│   │   │       │   │   ├── 📄 models.py
│   │   │       │   │   ├── 📄 operations.py
│   │   │       │   │   ├── 📄 pagers.py
│   │   │       │   │   ├── 📄 py.typed
│   │   │       │   │   ├── 📁 tests/
│   │   │       │   │   │   ├── 📁 afc/
│   │   │       │   │   │   │   ├── 📄 test_convert_if_exist_pydantic_model.py
│   │   │       │   │   │   │   ├── 📄 test_convert_number_values_for_function_call_args.py
│   │   │       │   │   │   │   ├── 📄 test_find_afc_incompatible_tool_indexes.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_stream_afc.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_stream_afc_thoughts.py
│   │   │       │   │   │   │   ├── 📄 test_get_function_map.py
│   │   │       │   │   │   │   ├── 📄 test_get_function_response_parts.py
│   │   │       │   │   │   │   ├── 📄 test_get_max_remote_calls_for_afc.py
│   │   │       │   │   │   │   ├── 📄 test_get_usage_header.py
│   │   │       │   │   │   │   ├── 📄 test_invoke_function_from_dict_args.py
│   │   │       │   │   │   │   ├── 📄 test_raise_error_for_afc_incompatible_config.py
│   │   │       │   │   │   │   ├── 📄 test_should_append_afc_history.py
│   │   │       │   │   │   │   ├── 📄 test_should_disable_afc.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_convert_if_exist_pydantic_model.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_convert_number_values_for_function_call_args.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_find_afc_incompatible_tool_indexes.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_stream_afc.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_stream_afc_thoughts.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get_function_map.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get_function_response_parts.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get_max_remote_calls_for_afc.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get_usage_header.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_invoke_function_from_dict_args.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_raise_error_for_afc_incompatible_config.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_should_append_afc_history.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_should_disable_afc.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 batches/
│   │   │       │   │   │   │   ├── 📄 test_cancel.py
│   │   │       │   │   │   │   ├── 📄 test_create.py
│   │   │       │   │   │   │   ├── 📄 test_create_with_bigquery.py
│   │   │       │   │   │   │   ├── 📄 test_create_with_file.py
│   │   │       │   │   │   │   ├── 📄 test_create_with_gcs.py
│   │   │       │   │   │   │   ├── 📄 test_create_with_inlined_requests.py
│   │   │       │   │   │   │   ├── 📄 test_create_with_vertex_dataset.py
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_embedding.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_cancel.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_with_bigquery.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_with_file.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_with_gcs.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_with_inlined_requests.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_with_vertex_dataset.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_embedding.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 caches/
│   │   │       │   │   │   │   ├── 📄 constants.py
│   │   │       │   │   │   │   ├── 📄 test_create.py
│   │   │       │   │   │   │   ├── 📄 test_create_custom_url.py
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_delete_custom_url.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_get_custom_url.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 test_update.py
│   │   │       │   │   │   │   ├── 📄 test_update_custom_url.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 constants.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_create_custom_url.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_delete_custom_url.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get_custom_url.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_update.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_update_custom_url.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 chats/
│   │   │       │   │   │   │   ├── 📄 test_get_history.py
│   │   │       │   │   │   │   ├── 📄 test_send_message.py
│   │   │       │   │   │   │   ├── 📄 test_validate_response.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_get_history.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_send_message.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_validate_response.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 client/
│   │   │       │   │   │   │   ├── 📄 test_async_stream.py
│   │   │       │   │   │   │   ├── 📄 test_client_close.py
│   │   │       │   │   │   │   ├── 📄 test_client_initialization.py
│   │   │       │   │   │   │   ├── 📄 test_client_requests.py
│   │   │       │   │   │   │   ├── 📄 test_custom_client.py
│   │   │       │   │   │   │   ├── 📄 test_httpx2_client.py
│   │   │       │   │   │   │   ├── 📄 test_http_options.py
│   │   │       │   │   │   │   ├── 📄 test_replay_client_equality.py
│   │   │       │   │   │   │   ├── 📄 test_retries.py
│   │   │       │   │   │   │   ├── 📄 test_upload_errors.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_async_stream.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_client_close.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_client_initialization.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_client_requests.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_custom_client.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_httpx2_client.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_http_options.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_replay_client_equality.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_retries.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_upload_errors.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 common/
│   │   │       │   │   │   │   ├── 📄 test_common.py
│   │   │       │   │   │   │   ├── 📄 test_duck_type.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_common.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_duck_type.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 conftest.py
│   │   │       │   │   │   ├── 📁 documents/
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 errors/
│   │   │       │   │   │   │   ├── 📄 test_api_error.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_api_error.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 files/
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_download.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 test_register.py
│   │   │       │   │   │   │   ├── 📄 test_register_table.py
│   │   │       │   │   │   │   ├── 📄 test_upload.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_download.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_register.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_register_table.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_upload.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 file_search_stores/
│   │   │       │   │   │   │   ├── 📄 test_create.py
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_import_file.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 test_multimodal_flow.py
│   │   │       │   │   │   │   ├── 📄 test_upload_to_file_search_store.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_create.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_import_file.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_multimodal_flow.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_upload_to_file_search_store.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 gaos/
│   │   │       │   │   │   │   ├── 📄 test_environments_lifecycle.py
│   │   │       │   │   │   │   ├── 📄 test_triggers_lifecycle.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_environments_lifecycle.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_triggers_lifecycle.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 imports/
│   │   │       │   │   │   │   ├── 📄 test_no_optional_imports.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       └── 📄 test_no_optional_imports.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 interactions/
│   │   │       │   │   │   │   ├── 📄 test_auth.py
│   │   │       │   │   │   │   ├── 📄 test_httpx_compat.py
│   │   │       │   │   │   │   ├── 📄 test_integration.py
│   │   │       │   │   │   │   ├── 📄 test_paths.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_auth.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_httpx_compat.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_integration.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_paths.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 live/
│   │   │       │   │   │   │   ├── 📄 test_live.py
│   │   │       │   │   │   │   ├── 📄 test_live_music.py
│   │   │       │   │   │   │   ├── 📄 test_live_response.py
│   │   │       │   │   │   │   ├── 📄 test_send_client_content.py
│   │   │       │   │   │   │   ├── 📄 test_send_realtime_input.py
│   │   │       │   │   │   │   ├── 📄 test_send_tool_response.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_live.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_live_music.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_live_response.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_send_client_content.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_send_realtime_input.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_send_tool_response.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 live_api/
│   │   │       │   │   │   │   ├── 📄 conftest.py
│   │   │       │   │   │   │   ├── 📄 test_live_session.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 conftest.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_live_session.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 local_tokenizer/
│   │   │       │   │   │   │   ├── 📄 test_local_tokenizer.py
│   │   │       │   │   │   │   ├── 📄 test_local_tokenizer_loader.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_local_tokenizer.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_local_tokenizer_loader.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 mcp/
│   │   │       │   │   │   │   ├── 📄 test_has_mcp_tool_usage.py
│   │   │       │   │   │   │   ├── 📄 test_mcp_to_gemini_tools.py
│   │   │       │   │   │   │   ├── 📄 test_parse_config_for_mcp_sessions.py
│   │   │       │   │   │   │   ├── 📄 test_parse_config_for_mcp_usage.py
│   │   │       │   │   │   │   ├── 📄 test_set_mcp_usage_header.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_has_mcp_tool_usage.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_mcp_to_gemini_tools.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_parse_config_for_mcp_sessions.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_parse_config_for_mcp_usage.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_set_mcp_usage_header.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 models/
│   │   │       │   │   │   │   ├── 📄 constants.py
│   │   │       │   │   │   │   ├── 📄 test_compute_tokens.py
│   │   │       │   │   │   │   ├── 📄 test_count_tokens.py
│   │   │       │   │   │   │   ├── 📄 test_delete.py
│   │   │       │   │   │   │   ├── 📄 test_edit_image.py
│   │   │       │   │   │   │   ├── 📄 test_embed_content.py
│   │   │       │   │   │   │   ├── 📄 test_function_call_streaming.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_cached_content.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_config_zero_value.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_from_apikey.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_http_options.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_image_generation.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_mcp.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_media_resolution.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_model.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_multi_regional.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_part.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_thought.py
│   │   │       │   │   │   │   ├── 📄 test_generate_content_tools.py
│   │   │       │   │   │   │   ├── 📄 test_generate_images.py
│   │   │       │   │   │   │   ├── 📄 test_generate_videos.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 test_recontext_image.py
│   │   │       │   │   │   │   ├── 📄 test_segment_image.py
│   │   │       │   │   │   │   ├── 📄 test_update.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 constants.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_compute_tokens.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_count_tokens.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_delete.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_edit_image.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_embed_content.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_function_call_streaming.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_cached_content.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_config_zero_value.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_from_apikey.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_http_options.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_image_generation.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_mcp.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_media_resolution.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_model.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_multi_regional.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_part.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_thought.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_content_tools.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_images.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_generate_videos.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_recontext_image.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_segment_image.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_update.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 operations/
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 public_samples/
│   │   │       │   │   │   │   ├── 📄 test_gemini_text_only.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_gemini_text_only.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 pytest_helper.py
│   │   │       │   │   │   ├── 📁 shared/
│   │   │       │   │   │   │   ├── 📁 batches/
│   │   │       │   │   │   │   │   ├── 📄 test_create_delete.py
│   │   │       │   │   │   │   │   ├── 📄 test_create_get_cancel.py
│   │   │       │   │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_create_delete.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_create_get_cancel.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 caches/
│   │   │       │   │   │   │   │   ├── 📄 test_create_get_delete.py
│   │   │       │   │   │   │   │   ├── 📄 test_create_update_get.py
│   │   │       │   │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_create_get_delete.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_create_update_get.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 chats/
│   │   │       │   │   │   │   │   ├── 📄 test_send_message.py
│   │   │       │   │   │   │   │   ├── 📄 test_send_message_stream.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_send_message.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_send_message_stream.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 files/
│   │   │       │   │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   │   ├── 📄 test_upload_get_delete.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_upload_get_delete.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 models/
│   │   │       │   │   │   │   │   ├── 📄 test_compute_tokens.py
│   │   │       │   │   │   │   │   ├── 📄 test_count_tokens.py
│   │   │       │   │   │   │   │   ├── 📄 test_edit_image.py
│   │   │       │   │   │   │   │   ├── 📄 test_embed.py
│   │   │       │   │   │   │   │   ├── 📄 test_generate_content.py
│   │   │       │   │   │   │   │   ├── 📄 test_generate_content_stream.py
│   │   │       │   │   │   │   │   ├── 📄 test_generate_images.py
│   │   │       │   │   │   │   │   ├── 📄 test_generate_videos.py
│   │   │       │   │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   │   ├── 📄 test_recontext_image.py
│   │   │       │   │   │   │   │   ├── 📄 test_segment_image.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_compute_tokens.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_count_tokens.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_edit_image.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_embed.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_generate_content.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_generate_content_stream.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_generate_images.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_generate_videos.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_recontext_image.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_segment_image.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 tunings/
│   │   │       │   │   │   │   │   ├── 📄 test_create.py
│   │   │       │   │   │   │   │   ├── 📄 test_create_get_cancel.py
│   │   │       │   │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 test_create.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_create_get_cancel.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 tokens/
│   │   │       │   │   │   │   ├── 📄 test_create.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_create.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 transformers/
│   │   │       │   │   │   │   ├── 📄 test_blobs.py
│   │   │       │   │   │   │   ├── 📄 test_bytes.py
│   │   │       │   │   │   │   ├── 📄 test_function_responses.py
│   │   │       │   │   │   │   ├── 📄 test_schema.py
│   │   │       │   │   │   │   ├── 📄 test_t_batch.py
│   │   │       │   │   │   │   ├── 📄 test_t_content.py
│   │   │       │   │   │   │   ├── 📄 test_t_contents.py
│   │   │       │   │   │   │   ├── 📄 test_t_part.py
│   │   │       │   │   │   │   ├── 📄 test_t_parts.py
│   │   │       │   │   │   │   ├── 📄 test_t_tool.py
│   │   │       │   │   │   │   ├── 📄 test_t_tools.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_blobs.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_bytes.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_function_responses.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_schema.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_batch.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_content.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_contents.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_part.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_parts.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_tool.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_t_tools.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 tunings/
│   │   │       │   │   │   │   ├── 📄 test_cancel.py
│   │   │       │   │   │   │   ├── 📄 test_end_to_end.py
│   │   │       │   │   │   │   ├── 📄 test_get.py
│   │   │       │   │   │   │   ├── 📄 test_list.py
│   │   │       │   │   │   │   ├── 📄 test_tune.py
│   │   │       │   │   │   │   ├── 📄 test_validate_reward.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_cancel.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_end_to_end.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_get.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_list.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_tune.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_validate_reward.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 types/
│   │   │       │   │   │   │   ├── 📄 test_bytes_internal.py
│   │   │       │   │   │   │   ├── 📄 test_bytes_type.py
│   │   │       │   │   │   │   ├── 📄 test_future.py
│   │   │       │   │   │   │   ├── 📄 test_optional_types.py
│   │   │       │   │   │   │   ├── 📄 test_part_type.py
│   │   │       │   │   │   │   ├── 📄 test_schema_from_json_schema.py
│   │   │       │   │   │   │   ├── 📄 test_schema_json_schema.py
│   │   │       │   │   │   │   ├── 📄 test_types.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 test_bytes_internal.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_bytes_type.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_future.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_optional_types.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_part_type.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_schema_from_json_schema.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_schema_json_schema.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 test_types.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 conftest.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pytest_helper.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 tokens.py
│   │   │       │   │   ├── 📄 tunings.py
│   │   │       │   │   ├── 📄 types.py
│   │   │       │   │   ├── 📄 version.py
│   │   │       │   │   ├── 📄 _adapters.py
│   │   │       │   │   ├── 📄 _api_client.py
│   │   │       │   │   ├── 📄 _api_module.py
│   │   │       │   │   ├── 📄 _automatic_function_calling_util.py
│   │   │       │   │   ├── 📄 _base_transformers.py
│   │   │       │   │   ├── 📄 _base_url.py
│   │   │       │   │   ├── 📄 _common.py
│   │   │       │   │   ├── 📄 _extra_utils.py
│   │   │       │   │   ├── 📁 _gaos/
│   │   │       │   │   │   ├── 📄 agents.py
│   │   │       │   │   │   ├── 📄 basesdk.py
│   │   │       │   │   │   ├── 📄 environments.py
│   │   │       │   │   │   ├── 📁 errors/
│   │   │       │   │   │   │   ├── 📄 cancelinteractionbyid.py
│   │   │       │   │   │   │   ├── 📄 createinteraction.py
│   │   │       │   │   │   │   ├── 📄 deleteinteraction.py
│   │   │       │   │   │   │   ├── 📄 genaidefaulterror.py
│   │   │       │   │   │   │   ├── 📄 genaierror.py
│   │   │       │   │   │   │   ├── 📄 getinteractionbyid.py
│   │   │       │   │   │   │   ├── 📄 no_response_error.py
│   │   │       │   │   │   │   ├── 📄 responsevalidationerror.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 cancelinteractionbyid.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createinteraction.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deleteinteraction.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 genaidefaulterror.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 genaierror.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getinteractionbyid.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 no_response_error.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 responsevalidationerror.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 files.py
│   │   │       │   │   │   ├── 📄 google_genai.py
│   │   │       │   │   │   ├── 📄 httpclient.py
│   │   │       │   │   │   ├── 📄 interactions.py
│   │   │       │   │   │   ├── 📁 lib/
│   │   │       │   │   │   │   ├── 📄 compat_errors.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       └── 📄 compat_errors.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 models/
│   │   │       │   │   │   │   ├── 📄 cancelinteractionbyid.py
│   │   │       │   │   │   │   ├── 📄 createagent.py
│   │   │       │   │   │   │   ├── 📄 createenvironment.py
│   │   │       │   │   │   │   ├── 📄 createinteraction.py
│   │   │       │   │   │   │   ├── 📄 createtrigger.py
│   │   │       │   │   │   │   ├── 📄 createwebhook.py
│   │   │       │   │   │   │   ├── 📄 deleteagent.py
│   │   │       │   │   │   │   ├── 📄 deleteenvironment.py
│   │   │       │   │   │   │   ├── 📄 deleteinteraction.py
│   │   │       │   │   │   │   ├── 📄 deletetrigger.py
│   │   │       │   │   │   │   ├── 📄 deletewebhook.py
│   │   │       │   │   │   │   ├── 📄 getagent.py
│   │   │       │   │   │   │   ├── 📄 getenvironment.py
│   │   │       │   │   │   │   ├── 📄 getenvironmentfiles.py
│   │   │       │   │   │   │   ├── 📄 getinteractionbyid.py
│   │   │       │   │   │   │   ├── 📄 gettrigger.py
│   │   │       │   │   │   │   ├── 📄 getwebhook.py
│   │   │       │   │   │   │   ├── 📁 internal/
│   │   │       │   │   │   │   │   ├── 📄 globals.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 globals.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 listagents.py
│   │   │       │   │   │   │   ├── 📄 listenvironments.py
│   │   │       │   │   │   │   ├── 📄 listtriggerexecutions.py
│   │   │       │   │   │   │   ├── 📄 listtriggers.py
│   │   │       │   │   │   │   ├── 📄 listwebhooks.py
│   │   │       │   │   │   │   ├── 📄 pingwebhook.py
│   │   │       │   │   │   │   ├── 📄 rotatesigningsecret.py
│   │   │       │   │   │   │   ├── 📄 runtrigger.py
│   │   │       │   │   │   │   ├── 📄 updatetrigger.py
│   │   │       │   │   │   │   ├── 📄 updatewebhook.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 cancelinteractionbyid.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createagent.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createenvironment.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createinteraction.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createtrigger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 createwebhook.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deleteagent.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deleteenvironment.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deleteinteraction.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deletetrigger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 deletewebhook.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getagent.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getenvironment.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getenvironmentfiles.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getinteractionbyid.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 gettrigger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 getwebhook.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 listagents.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 listenvironments.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 listtriggerexecutions.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 listtriggers.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 listwebhooks.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pingwebhook.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 rotatesigningsecret.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 runtrigger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 updatetrigger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 updatewebhook.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 resources/
│   │   │       │   │   │   │   ├── 📁 agents/
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 environments/
│   │   │       │   │   │   │   │   ├── 📁 createenvironmentrequest/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 environment/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 interactions/
│   │   │       │   │   │   │   │   ├── 📁 codeexecutioncallstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 codemenderagentconfig/
│   │   │       │   │   │   │   │   │   ├── 📁 findrequest/
│   │   │       │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   ├── 📁 fixrequest/
│   │   │       │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 environment/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 errorevent/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 googlemapscallstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 googlemapsresult/
│   │   │       │   │   │   │   │   │   ├── 📁 place/
│   │   │       │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 googlemapsresultstep/
│   │   │       │   │   │   │   │   │   ├── 📁 result/
│   │   │       │   │   │   │   │   │   │   ├── 📁 place/
│   │   │       │   │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 googlesearchcallstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 googlesearchresultstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 placecitation/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 retrievalcalldelta/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 stepdelta/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 tool/
│   │   │       │   │   │   │   │   │   ├── 📁 retrieval/
│   │   │       │   │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 transcriptionmode/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 urlcontextcallstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 urlcontextresultstep/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 usage/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📁 videocontent/
│   │   │       │   │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 triggers/
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 webhooks/
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 sdk.py
│   │   │       │   │   │   ├── 📄 sdkconfiguration.py
│   │   │       │   │   │   ├── 📄 triggers.py
│   │   │       │   │   │   ├── 📁 types/
│   │   │       │   │   │   │   ├── 📁 agents/
│   │   │       │   │   │   │   │   ├── 📄 agent.py
│   │   │       │   │   │   │   │   ├── 📄 agentlistresponse.py
│   │   │       │   │   │   │   │   ├── 📄 agenttool.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 agent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 agentlistresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 agenttool.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 base64fileinput.py
│   │   │       │   │   │   │   ├── 📄 basemodel.py
│   │   │       │   │   │   │   ├── 📁 environments/
│   │   │       │   │   │   │   │   ├── 📄 createenvironmentrequest.py
│   │   │       │   │   │   │   │   ├── 📄 environment.py
│   │   │       │   │   │   │   │   ├── 📄 environmentfile.py
│   │   │       │   │   │   │   │   ├── 📄 getenvironmentfilesresponse.py
│   │   │       │   │   │   │   │   ├── 📄 listenvironmentsresponse.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 createenvironmentrequest.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 environment.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 environmentfile.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 getenvironmentfilesresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 listenvironmentsresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 interactions/
│   │   │       │   │   │   │   │   ├── 📄 agentoption.py
│   │   │       │   │   │   │   │   ├── 📄 allowedtools.py
│   │   │       │   │   │   │   │   ├── 📄 allowlistentry.py
│   │   │       │   │   │   │   │   ├── 📄 annotation.py
│   │   │       │   │   │   │   │   ├── 📄 antigravityagentconfig.py
│   │   │       │   │   │   │   │   ├── 📄 argumentsdelta.py
│   │   │       │   │   │   │   │   ├── 📄 audiocontent.py
│   │   │       │   │   │   │   │   ├── 📄 audiodelta.py
│   │   │       │   │   │   │   │   ├── 📄 audioresponseformat.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecution.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecutioncallarguments.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecutioncalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecutioncallstep.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecutionresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 codeexecutionresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 codemenderagentconfig.py
│   │   │       │   │   │   │   │   ├── 📄 computeruse.py
│   │   │       │   │   │   │   │   ├── 📄 content.py
│   │   │       │   │   │   │   │   ├── 📄 createagentinteraction.py
│   │   │       │   │   │   │   │   ├── 📄 createmodelinteraction.py
│   │   │       │   │   │   │   │   ├── 📄 deepresearchagentconfig.py
│   │   │       │   │   │   │   │   ├── 📄 documentcontent.py
│   │   │       │   │   │   │   │   ├── 📄 documentdelta.py
│   │   │       │   │   │   │   │   ├── 📄 dynamicagentconfig.py
│   │   │       │   │   │   │   │   ├── 📄 empty.py
│   │   │       │   │   │   │   │   ├── 📄 environment.py
│   │   │       │   │   │   │   │   ├── 📄 environmentnetworkegressallowlist.py
│   │   │       │   │   │   │   │   ├── 📄 error.py
│   │   │       │   │   │   │   │   ├── 📄 errorevent.py
│   │   │       │   │   │   │   │   ├── 📄 exaaisearchconfig.py
│   │   │       │   │   │   │   │   ├── 📄 filecitation.py
│   │   │       │   │   │   │   │   ├── 📄 filecontent.py
│   │   │       │   │   │   │   │   ├── 📄 filesearch.py
│   │   │       │   │   │   │   │   ├── 📄 filesearchcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 filesearchcallstep.py
│   │   │       │   │   │   │   │   ├── 📄 filesearchresult.py
│   │   │       │   │   │   │   │   ├── 📄 filesearchresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 filesearchresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 filter_.py
│   │   │       │   │   │   │   │   ├── 📄 findrequest.py
│   │   │       │   │   │   │   │   ├── 📄 fixrequest.py
│   │   │       │   │   │   │   │   ├── 📄 function.py
│   │   │       │   │   │   │   │   ├── 📄 functioncallstep.py
│   │   │       │   │   │   │   │   ├── 📄 functionresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 functionresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 functionresultsubcontent.py
│   │   │       │   │   │   │   │   ├── 📄 generationconfig.py
│   │   │       │   │   │   │   │   ├── 📄 googlemaps.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapscallarguments.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapscalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapscallstep.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapsresult.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapsresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapsresultplaces.py
│   │   │       │   │   │   │   │   ├── 📄 googlemapsresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearch.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchcallarguments.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchcallstep.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchresult.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 googlesearchresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 groundingtoolcount.py
│   │   │       │   │   │   │   │   ├── 📄 harmcategory.py
│   │   │       │   │   │   │   │   ├── 📄 hybridsearch.py
│   │   │       │   │   │   │   │   ├── 📄 imageconfig.py
│   │   │       │   │   │   │   │   ├── 📄 imagecontent.py
│   │   │       │   │   │   │   │   ├── 📄 imagedelta.py
│   │   │       │   │   │   │   │   ├── 📄 imageresponseformat.py
│   │   │       │   │   │   │   │   ├── 📄 interaction.py
│   │   │       │   │   │   │   │   ├── 📄 interactioncompletedevent.py
│   │   │       │   │   │   │   │   ├── 📄 interactioncreatedevent.py
│   │   │       │   │   │   │   │   ├── 📄 interactionsinput.py
│   │   │       │   │   │   │   │   ├── 📄 interactionsseevent.py
│   │   │       │   │   │   │   │   ├── 📄 interactionsseeventinteraction.py
│   │   │       │   │   │   │   │   ├── 📄 interactionssestreamevent.py
│   │   │       │   │   │   │   │   ├── 📄 interactionstatusupdate.py
│   │   │       │   │   │   │   │   ├── 📄 mcpserver.py
│   │   │       │   │   │   │   │   ├── 📄 mcpservertoolcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 mcpservertoolcallstep.py
│   │   │       │   │   │   │   │   ├── 📄 mcpservertoolresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 mcpservertoolresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 mediaprocessing.py
│   │   │       │   │   │   │   │   ├── 📄 mediaresolution.py
│   │   │       │   │   │   │   │   ├── 📄 modalitytokens.py
│   │   │       │   │   │   │   │   ├── 📄 model.py
│   │   │       │   │   │   │   │   ├── 📄 modeloutputstep.py
│   │   │       │   │   │   │   │   ├── 📄 parallelaisearchconfig.py
│   │   │       │   │   │   │   │   ├── 📄 placecitation.py
│   │   │       │   │   │   │   │   ├── 📄 processingcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 processingcallstep.py
│   │   │       │   │   │   │   │   ├── 📄 processingresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 processingresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 ragresource.py
│   │   │       │   │   │   │   │   ├── 📄 ragretrievalconfig.py
│   │   │       │   │   │   │   │   ├── 📄 ragstoreconfig.py
│   │   │       │   │   │   │   │   ├── 📄 ranking.py
│   │   │       │   │   │   │   │   ├── 📄 responseformat.py
│   │   │       │   │   │   │   │   ├── 📄 responsemodality.py
│   │   │       │   │   │   │   │   ├── 📄 retrieval.py
│   │   │       │   │   │   │   │   ├── 📄 retrievalcallarguments.py
│   │   │       │   │   │   │   │   ├── 📄 retrievalcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 retrievalresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 reviewsnippet.py
│   │   │       │   │   │   │   │   ├── 📄 safetysetting.py
│   │   │       │   │   │   │   │   ├── 📄 servicetier.py
│   │   │       │   │   │   │   │   ├── 📄 sessionconfig.py
│   │   │       │   │   │   │   │   ├── 📄 smarttranscriptionmode.py
│   │   │       │   │   │   │   │   ├── 📄 source.py
│   │   │       │   │   │   │   │   ├── 📄 speakerconfig.py
│   │   │       │   │   │   │   │   ├── 📄 speechconfig.py
│   │   │       │   │   │   │   │   ├── 📄 staticmediaprocessing.py
│   │   │       │   │   │   │   │   ├── 📄 status.py
│   │   │       │   │   │   │   │   ├── 📄 step.py
│   │   │       │   │   │   │   │   ├── 📄 stepdelta.py
│   │   │       │   │   │   │   │   ├── 📄 stepdeltadata.py
│   │   │       │   │   │   │   │   ├── 📄 stepdeltametadata.py
│   │   │       │   │   │   │   │   ├── 📄 stepstart.py
│   │   │       │   │   │   │   │   ├── 📄 stepstop.py
│   │   │       │   │   │   │   │   ├── 📄 textannotationdelta.py
│   │   │       │   │   │   │   │   ├── 📄 textcontent.py
│   │   │       │   │   │   │   │   ├── 📄 textdelta.py
│   │   │       │   │   │   │   │   ├── 📄 textresponseformat.py
│   │   │       │   │   │   │   │   ├── 📄 thinkinglevel.py
│   │   │       │   │   │   │   │   ├── 📄 thinkingsummaries.py
│   │   │       │   │   │   │   │   ├── 📄 thoughtsignaturedelta.py
│   │   │       │   │   │   │   │   ├── 📄 thoughtstep.py
│   │   │       │   │   │   │   │   ├── 📄 thoughtsummarycontent.py
│   │   │       │   │   │   │   │   ├── 📄 thoughtsummarydelta.py
│   │   │       │   │   │   │   │   ├── 📄 tool.py
│   │   │       │   │   │   │   │   ├── 📄 toolchoiceconfig.py
│   │   │       │   │   │   │   │   ├── 📄 toolchoicetype.py
│   │   │       │   │   │   │   │   ├── 📄 transcriptionconfig.py
│   │   │       │   │   │   │   │   ├── 📄 transcriptionmode.py
│   │   │       │   │   │   │   │   ├── 📄 urlcitation.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontext.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextcallarguments.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextcalldelta.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextcallstep.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextresult.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextresultdelta.py
│   │   │       │   │   │   │   │   ├── 📄 urlcontextresultstep.py
│   │   │       │   │   │   │   │   ├── 📄 usage.py
│   │   │       │   │   │   │   │   ├── 📄 userinputstep.py
│   │   │       │   │   │   │   │   ├── 📄 verbatimtranscriptionmode.py
│   │   │       │   │   │   │   │   ├── 📄 vertexaisearchconfig.py
│   │   │       │   │   │   │   │   ├── 📄 videoconfig.py
│   │   │       │   │   │   │   │   ├── 📄 videocontent.py
│   │   │       │   │   │   │   │   ├── 📄 videodelta.py
│   │   │       │   │   │   │   │   ├── 📄 videoresponseformat.py
│   │   │       │   │   │   │   │   ├── 📄 webhookconfig.py
│   │   │       │   │   │   │   │   ├── 📄 wordinfo.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 agentoption.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 allowedtools.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 allowlistentry.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 annotation.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 antigravityagentconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 argumentsdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 audiocontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 audiodelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 audioresponseformat.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecution.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecutioncallarguments.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecutioncalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecutioncallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecutionresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codeexecutionresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 codemenderagentconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 computeruse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 content.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 createagentinteraction.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 createmodelinteraction.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 deepresearchagentconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 documentcontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 documentdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 dynamicagentconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 empty.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 environment.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 environmentnetworkegressallowlist.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 error.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 errorevent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 exaaisearchconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filecitation.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filecontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearch.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearchcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearchcallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearchresult.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearchresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filesearchresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 filter_.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 findrequest.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 fixrequest.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 function.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 functioncallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 functionresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 functionresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 functionresultsubcontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 generationconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemaps.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapscallarguments.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapscalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapscallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapsresult.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapsresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapsresultplaces.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlemapsresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearch.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchcallarguments.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchcallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchresult.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 googlesearchresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 groundingtoolcount.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 harmcategory.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 hybridsearch.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 imageconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 imagecontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 imagedelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 imageresponseformat.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interaction.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactioncompletedevent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactioncreatedevent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactionsinput.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactionsseevent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactionsseeventinteraction.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactionssestreamevent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 interactionstatusupdate.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mcpserver.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mcpservertoolcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mcpservertoolcallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mcpservertoolresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mcpservertoolresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mediaprocessing.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 mediaresolution.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 modalitytokens.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 model.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 modeloutputstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 parallelaisearchconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 placecitation.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 processingcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 processingcallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 processingresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 processingresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 ragresource.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 ragretrievalconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 ragstoreconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 ranking.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 responseformat.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 responsemodality.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 retrieval.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 retrievalcallarguments.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 retrievalcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 retrievalresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 reviewsnippet.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 safetysetting.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 servicetier.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 sessionconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 smarttranscriptionmode.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 source.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 speakerconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 speechconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 staticmediaprocessing.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 status.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 step.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 stepdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 stepdeltadata.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 stepdeltametadata.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 stepstart.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 stepstop.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 textannotationdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 textcontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 textdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 textresponseformat.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thinkinglevel.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thinkingsummaries.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thoughtsignaturedelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thoughtstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thoughtsummarycontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 thoughtsummarydelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 tool.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 toolchoiceconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 toolchoicetype.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 transcriptionconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 transcriptionmode.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcitation.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontext.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextcallarguments.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextcalldelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextcallstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextresult.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextresultdelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 urlcontextresultstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 usage.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 userinputstep.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 verbatimtranscriptionmode.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 vertexaisearchconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 videoconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 videocontent.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 videodelta.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 videoresponseformat.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhookconfig.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 wordinfo.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 security.py
│   │   │       │   │   │   │   ├── 📁 triggers/
│   │   │       │   │   │   │   │   ├── 📄 listtriggerexecutionsresponse.py
│   │   │       │   │   │   │   │   ├── 📄 listtriggersresponse.py
│   │   │       │   │   │   │   │   ├── 📄 trigger.py
│   │   │       │   │   │   │   │   ├── 📄 triggercreateparams.py
│   │   │       │   │   │   │   │   ├── 📄 triggerexecution.py
│   │   │       │   │   │   │   │   ├── 📄 triggerupdate.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 listtriggerexecutionsresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 listtriggersresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 trigger.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 triggercreateparams.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 triggerexecution.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 triggerupdate.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📁 webhooks/
│   │   │       │   │   │   │   │   ├── 📄 pingwebhookrequest.py
│   │   │       │   │   │   │   │   ├── 📄 rotatesigningsecretrequest.py
│   │   │       │   │   │   │   │   ├── 📄 signingsecret.py
│   │   │       │   │   │   │   │   ├── 📄 webhook.py
│   │   │       │   │   │   │   │   ├── 📄 webhooklistresponse.py
│   │   │       │   │   │   │   │   ├── 📄 webhookpingresponse.py
│   │   │       │   │   │   │   │   ├── 📄 webhookrotatesigningsecretresponse.py
│   │   │       │   │   │   │   │   ├── 📄 webhookupdate.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 pingwebhookrequest.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 rotatesigningsecretrequest.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 signingsecret.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhook.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhooklistresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhookpingresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhookrotatesigningsecretresponse.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 webhookupdate.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 base64fileinput.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 basemodel.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 security.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 utils/
│   │   │       │   │   │   │   ├── 📄 annotations.py
│   │   │       │   │   │   │   ├── 📄 datetimes.py
│   │   │       │   │   │   │   ├── 📄 dynamic_imports.py
│   │   │       │   │   │   │   ├── 📄 enums.py
│   │   │       │   │   │   │   ├── 📄 eventstreaming.py
│   │   │       │   │   │   │   ├── 📄 forms.py
│   │   │       │   │   │   │   ├── 📄 headers.py
│   │   │       │   │   │   │   ├── 📄 logger.py
│   │   │       │   │   │   │   ├── 📄 metadata.py
│   │   │       │   │   │   │   ├── 📄 queryparams.py
│   │   │       │   │   │   │   ├── 📄 requestbodies.py
│   │   │       │   │   │   │   ├── 📄 response_helpers.py
│   │   │       │   │   │   │   ├── 📄 retries.py
│   │   │       │   │   │   │   ├── 📄 security.py
│   │   │       │   │   │   │   ├── 📄 serializers.py
│   │   │       │   │   │   │   ├── 📄 unions.py
│   │   │       │   │   │   │   ├── 📄 unmarshal_json_response.py
│   │   │       │   │   │   │   ├── 📄 url.py
│   │   │       │   │   │   │   ├── 📄 values.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 annotations.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 datetimes.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 dynamic_imports.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 enums.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 eventstreaming.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 forms.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 headers.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 logger.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 metadata.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 queryparams.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 requestbodies.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 response_helpers.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 retries.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 security.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 serializers.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 unions.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 unmarshal_json_response.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 url.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 values.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 webhooks.py
│   │   │       │   │   │   ├── 📁 _hooks/
│   │   │       │   │   │   │   ├── 📄 adapters.py
│   │   │       │   │   │   │   ├── 📄 asyncregistration.py
│   │   │       │   │   │   │   ├── 📄 asyncsdkhooks.py
│   │   │       │   │   │   │   ├── 📄 asynctypes.py
│   │   │       │   │   │   │   ├── 📄 google_genai_auth.py
│   │   │       │   │   │   │   ├── 📄 registration.py
│   │   │       │   │   │   │   ├── 📄 sdkhooks.py
│   │   │       │   │   │   │   ├── 📄 types.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 adapters.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 asyncregistration.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 asyncsdkhooks.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 asynctypes.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 google_genai_auth.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 registration.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 sdkhooks.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 _version.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 agents.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 basesdk.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 environments.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 files.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 google_genai.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 httpclient.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 interactions.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sdk.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sdkconfiguration.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 triggers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 webhooks.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _version.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 _live_converters.py
│   │   │       │   │   ├── 📄 _local_tokenizer_loader.py
│   │   │       │   │   ├── 📄 _mcp_utils.py
│   │   │       │   │   ├── 📄 _operations_converters.py
│   │   │       │   │   ├── 📄 _replay_api_client.py
│   │   │       │   │   ├── 📄 _test_api_client.py
│   │   │       │   │   ├── 📄 _tokens_converters.py
│   │   │       │   │   ├── 📄 _transformers.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 batches.cpython-312.pyc
│   │   │       │   │       ├── 📄 caches.cpython-312.pyc
│   │   │       │   │       ├── 📄 chats.cpython-312.pyc
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 documents.cpython-312.pyc
│   │   │       │   │       ├── 📄 errors.cpython-312.pyc
│   │   │       │   │       ├── 📄 files.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_search_stores.cpython-312.pyc
│   │   │       │   │       ├── 📄 interactions.cpython-312.pyc
│   │   │       │   │       ├── 📄 live.cpython-312.pyc
│   │   │       │   │       ├── 📄 live_music.cpython-312.pyc
│   │   │       │   │       ├── 📄 local_tokenizer.cpython-312.pyc
│   │   │       │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │       ├── 📄 operations.cpython-312.pyc
│   │   │       │   │       ├── 📄 pagers.cpython-312.pyc
│   │   │       │   │       ├── 📄 tokens.cpython-312.pyc
│   │   │       │   │       ├── 📄 tunings.cpython-312.pyc
│   │   │       │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │       ├── 📄 _adapters.cpython-312.pyc
│   │   │       │   │       ├── 📄 _api_client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _api_module.cpython-312.pyc
│   │   │       │   │       ├── 📄 _automatic_function_calling_util.cpython-312.pyc
│   │   │       │   │       ├── 📄 _base_transformers.cpython-312.pyc
│   │   │       │   │       ├── 📄 _base_url.cpython-312.pyc
│   │   │       │   │       ├── 📄 _common.cpython-312.pyc
│   │   │       │   │       ├── 📄 _extra_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _live_converters.cpython-312.pyc
│   │   │       │   │       ├── 📄 _local_tokenizer_loader.cpython-312.pyc
│   │   │       │   │       ├── 📄 _mcp_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _operations_converters.cpython-312.pyc
│   │   │       │   │       ├── 📄 _replay_api_client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _test_api_client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tokens_converters.cpython-312.pyc
│   │   │       │   │       ├── 📄 _transformers.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   └── 📁 oauth2/
│   │   │       │       ├── 📄 challenges.py
│   │   │       │       ├── 📄 credentials.py
│   │   │       │       ├── 📄 gdch_credentials.py
│   │   │       │       ├── 📄 id_token.py
│   │   │       │       ├── 📄 py.typed
│   │   │       │       ├── 📄 reauth.py
│   │   │       │       ├── 📄 service_account.py
│   │   │       │       ├── 📄 sts.py
│   │   │       │       ├── 📄 utils.py
│   │   │       │       ├── 📄 webauthn_handler.py
│   │   │       │       ├── 📄 webauthn_handler_factory.py
│   │   │       │       ├── 📄 webauthn_types.py
│   │   │       │       ├── 📄 _client.py
│   │   │       │       ├── 📄 _client_async.py
│   │   │       │       ├── 📄 _credentials_async.py
│   │   │       │       ├── 📄 _id_token_async.py
│   │   │       │       ├── 📄 _reauth_async.py
│   │   │       │       ├── 📄 _service_account_async.py
│   │   │       │       ├── 📄 __init__.py
│   │   │       │       └── 📁 __pycache__/
│   │   │       │           ├── 📄 challenges.cpython-312.pyc
│   │   │       │           ├── 📄 credentials.cpython-312.pyc
│   │   │       │           ├── 📄 gdch_credentials.cpython-312.pyc
│   │   │       │           ├── 📄 id_token.cpython-312.pyc
│   │   │       │           ├── 📄 reauth.cpython-312.pyc
│   │   │       │           ├── 📄 service_account.cpython-312.pyc
│   │   │       │           ├── 📄 sts.cpython-312.pyc
│   │   │       │           ├── 📄 utils.cpython-312.pyc
│   │   │       │           ├── 📄 webauthn_handler.cpython-312.pyc
│   │   │       │           ├── 📄 webauthn_handler_factory.cpython-312.pyc
│   │   │       │           ├── 📄 webauthn_types.cpython-312.pyc
│   │   │       │           ├── 📄 _client.cpython-312.pyc
│   │   │       │           ├── 📄 _client_async.cpython-312.pyc
│   │   │       │           ├── 📄 _credentials_async.cpython-312.pyc
│   │   │       │           ├── 📄 _id_token_async.cpython-312.pyc
│   │   │       │           ├── 📄 _reauth_async.cpython-312.pyc
│   │   │       │           ├── 📄 _service_account_async.cpython-312.pyc
│   │   │       │           └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 google_auth-2.58.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 google_genai-2.22.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 greenlet/
│   │   │       │   ├── 📄 CObjects.cpp
│   │   │       │   ├── 📄 greenlet.cpp
│   │   │       │   ├── 📄 greenlet.h
│   │   │       │   ├── 📄 greenlet_allocator.hpp
│   │   │       │   ├── 📄 greenlet_compiler_compat.hpp
│   │   │       │   ├── 📄 greenlet_cpython_compat.hpp
│   │   │       │   ├── 📄 greenlet_exceptions.hpp
│   │   │       │   ├── 📄 greenlet_internal.hpp
│   │   │       │   ├── 📄 greenlet_msvc_compat.hpp
│   │   │       │   ├── 📄 greenlet_refs.hpp
│   │   │       │   ├── 📄 greenlet_slp_switch.hpp
│   │   │       │   ├── 📄 greenlet_thread_support.hpp
│   │   │       │   ├── 📁 platform/
│   │   │       │   │   ├── 📄 setup_switch_x64_masm.cmd
│   │   │       │   │   ├── 📄 switch_aarch64_gcc.h
│   │   │       │   │   ├── 📄 switch_alpha_unix.h
│   │   │       │   │   ├── 📄 switch_amd64_unix.h
│   │   │       │   │   ├── 📄 switch_arm32_gcc.h
│   │   │       │   │   ├── 📄 switch_arm32_ios.h
│   │   │       │   │   ├── 📄 switch_arm64_masm.asm
│   │   │       │   │   ├── 📄 switch_arm64_masm.obj
│   │   │       │   │   ├── 📄 switch_arm64_msvc.h
│   │   │       │   │   ├── 📄 switch_csky_gcc.h
│   │   │       │   │   ├── 📄 switch_loongarch64_linux.h
│   │   │       │   │   ├── 📄 switch_m68k_gcc.h
│   │   │       │   │   ├── 📄 switch_mips_unix.h
│   │   │       │   │   ├── 📄 switch_ppc64_aix.h
│   │   │       │   │   ├── 📄 switch_ppc64_linux.h
│   │   │       │   │   ├── 📄 switch_ppc_aix.h
│   │   │       │   │   ├── 📄 switch_ppc_linux.h
│   │   │       │   │   ├── 📄 switch_ppc_macosx.h
│   │   │       │   │   ├── 📄 switch_ppc_unix.h
│   │   │       │   │   ├── 📄 switch_riscv_unix.h
│   │   │       │   │   ├── 📄 switch_s390_unix.h
│   │   │       │   │   ├── 📄 switch_sh_gcc.h
│   │   │       │   │   ├── 📄 switch_sparc_sun_gcc.h
│   │   │       │   │   ├── 📄 switch_x32_unix.h
│   │   │       │   │   ├── 📄 switch_x64_masm.asm
│   │   │       │   │   ├── 📄 switch_x64_masm.obj
│   │   │       │   │   ├── 📄 switch_x64_msvc.h
│   │   │       │   │   ├── 📄 switch_x86_msvc.h
│   │   │       │   │   ├── 📄 switch_x86_unix.h
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 PyGreenlet.cpp
│   │   │       │   ├── 📄 PyGreenlet.hpp
│   │   │       │   ├── 📄 PyGreenletUnswitchable.cpp
│   │   │       │   ├── 📄 PyModule.cpp
│   │   │       │   ├── 📄 slp_platformselect.h
│   │   │       │   ├── 📄 TBrokenGreenlet.cpp
│   │   │       │   ├── 📁 tests/
│   │   │       │   │   ├── 📄 fail_clearing_run_switches.py
│   │   │       │   │   ├── 📄 fail_cpp_exception.py
│   │   │       │   │   ├── 📄 fail_c_stack_refs_suspended_gc.py
│   │   │       │   │   ├── 📄 fail_initialstub_already_started.py
│   │   │       │   │   ├── 📄 fail_issue_515_freethread_gc.py
│   │   │       │   │   ├── 📄 fail_slp_switch.py
│   │   │       │   │   ├── 📄 fail_switch_critical_section.py
│   │   │       │   │   ├── 📄 fail_switch_three_greenlets.py
│   │   │       │   │   ├── 📄 fail_switch_three_greenlets2.py
│   │   │       │   │   ├── 📄 fail_switch_two_greenlets.py
│   │   │       │   │   ├── 📄 leakcheck.py
│   │   │       │   │   ├── 📄 test_contextvars.py
│   │   │       │   │   ├── 📄 test_cpp.py
│   │   │       │   │   ├── 📄 test_extension_interface.py
│   │   │       │   │   ├── 📄 test_gc.py
│   │   │       │   │   ├── 📄 test_generator.py
│   │   │       │   │   ├── 📄 test_generator_nested.py
│   │   │       │   │   ├── 📄 test_greenlet.py
│   │   │       │   │   ├── 📄 test_greenlet_trash.py
│   │   │       │   │   ├── 📄 test_interpreter_shutdown.py
│   │   │       │   │   ├── 📄 test_leaks.py
│   │   │       │   │   ├── 📄 test_stack_saved.py
│   │   │       │   │   ├── 📄 test_throw.py
│   │   │       │   │   ├── 📄 test_tracing.py
│   │   │       │   │   ├── 📄 test_version.py
│   │   │       │   │   ├── 📄 test_weakref.py
│   │   │       │   │   ├── 📄 _test_extension.c
│   │   │       │   │   ├── 📄 _test_extension.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 _test_extension_cpp.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 _test_extension_cpp.cpp
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 fail_clearing_run_switches.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_cpp_exception.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_c_stack_refs_suspended_gc.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_initialstub_already_started.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_issue_515_freethread_gc.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_slp_switch.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_switch_critical_section.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_switch_three_greenlets.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_switch_three_greenlets2.cpython-312.pyc
│   │   │       │   │       ├── 📄 fail_switch_two_greenlets.cpython-312.pyc
│   │   │       │   │       ├── 📄 leakcheck.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_contextvars.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_cpp.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_extension_interface.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_gc.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_generator.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_generator_nested.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_greenlet.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_greenlet_trash.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_interpreter_shutdown.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_leaks.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_stack_saved.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_throw.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_tracing.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_version.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_weakref.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 TExceptionState.cpp
│   │   │       │   ├── 📄 TGreenlet.cpp
│   │   │       │   ├── 📄 TGreenlet.hpp
│   │   │       │   ├── 📄 TGreenletGlobals.cpp
│   │   │       │   ├── 📄 TMainGreenlet.cpp
│   │   │       │   ├── 📄 TPythonState.cpp
│   │   │       │   ├── 📄 TStackState.cpp
│   │   │       │   ├── 📄 TThreadState.hpp
│   │   │       │   ├── 📄 TThreadStateCreator.hpp
│   │   │       │   ├── 📄 TThreadStateDestroy.cpp
│   │   │       │   ├── 📄 TUserGreenlet.cpp
│   │   │       │   ├── 📄 _greenlet.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 greenlet-3.5.5.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   ├── 📄 LICENSE
│   │   │       │   │   └── 📄 LICENSE.PSF
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 groq/
│   │   │       │   ├── 📁 lib/
│   │   │       │   │   └── 📄 .keep
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📁 resources/
│   │   │       │   │   ├── 📁 audio/
│   │   │       │   │   │   ├── 📄 audio.py
│   │   │       │   │   │   ├── 📄 speech.py
│   │   │       │   │   │   ├── 📄 transcriptions.py
│   │   │       │   │   │   ├── 📄 translations.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 audio.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 speech.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 transcriptions.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 translations.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 batches.py
│   │   │       │   │   ├── 📁 chat/
│   │   │       │   │   │   ├── 📄 chat.py
│   │   │       │   │   │   ├── 📄 completions.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 chat.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 completions.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 embeddings.py
│   │   │       │   │   ├── 📄 files.py
│   │   │       │   │   ├── 📄 models.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 batches.cpython-312.pyc
│   │   │       │   │       ├── 📄 embeddings.cpython-312.pyc
│   │   │       │   │       ├── 📄 files.cpython-312.pyc
│   │   │       │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 types/
│   │   │       │   │   ├── 📁 audio/
│   │   │       │   │   │   ├── 📄 speech_create_params.py
│   │   │       │   │   │   ├── 📄 transcription.py
│   │   │       │   │   │   ├── 📄 transcription_create_params.py
│   │   │       │   │   │   ├── 📄 translation.py
│   │   │       │   │   │   ├── 📄 translation_create_params.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 speech_create_params.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 transcription.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 transcription_create_params.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 translation.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 translation_create_params.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 batch_cancel_response.py
│   │   │       │   │   ├── 📄 batch_create_params.py
│   │   │       │   │   ├── 📄 batch_create_response.py
│   │   │       │   │   ├── 📄 batch_list_response.py
│   │   │       │   │   ├── 📄 batch_retrieve_response.py
│   │   │       │   │   ├── 📁 chat/
│   │   │       │   │   │   ├── 📄 chat_completion.py
│   │   │       │   │   │   ├── 📄 chat_completion_assistant_message_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_chunk.py
│   │   │       │   │   │   ├── 📄 chat_completion_content_part_image_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_content_part_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_content_part_text_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_function_call_option_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_function_message_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_message.py
│   │   │       │   │   │   ├── 📄 chat_completion_message_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_message_tool_call.py
│   │   │       │   │   │   ├── 📄 chat_completion_message_tool_call_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_named_tool_choice_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_role.py
│   │   │       │   │   │   ├── 📄 chat_completion_system_message_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_token_logprob.py
│   │   │       │   │   │   ├── 📄 chat_completion_tool_choice_option_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_tool_message_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_tool_param.py
│   │   │       │   │   │   ├── 📄 chat_completion_user_message_param.py
│   │   │       │   │   │   ├── 📄 completion_create_params.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 chat_completion.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_assistant_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_chunk.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_content_part_image_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_content_part_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_content_part_text_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_function_call_option_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_function_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_message.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_message_tool_call.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_message_tool_call_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_named_tool_choice_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_role.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_system_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_token_logprob.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_tool_choice_option_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_tool_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_tool_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 chat_completion_user_message_param.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 completion_create_params.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 completion_usage.py
│   │   │       │   │   ├── 📄 create_embedding_response.py
│   │   │       │   │   ├── 📄 embedding.py
│   │   │       │   │   ├── 📄 embedding_create_params.py
│   │   │       │   │   ├── 📄 file_create_params.py
│   │   │       │   │   ├── 📄 file_create_response.py
│   │   │       │   │   ├── 📄 file_delete_response.py
│   │   │       │   │   ├── 📄 file_info_response.py
│   │   │       │   │   ├── 📄 file_list_response.py
│   │   │       │   │   ├── 📄 model.py
│   │   │       │   │   ├── 📄 model_deleted.py
│   │   │       │   │   ├── 📄 model_list_response.py
│   │   │       │   │   ├── 📁 shared/
│   │   │       │   │   │   ├── 📄 error_object.py
│   │   │       │   │   │   ├── 📄 function_definition.py
│   │   │       │   │   │   ├── 📄 function_parameters.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 error_object.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 function_definition.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 function_parameters.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 shared_params/
│   │   │       │   │   │   ├── 📄 function_definition.py
│   │   │       │   │   │   ├── 📄 function_parameters.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 function_definition.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 function_parameters.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 batch_cancel_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 batch_create_params.cpython-312.pyc
│   │   │       │   │       ├── 📄 batch_create_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 batch_list_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 batch_retrieve_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 completion_usage.cpython-312.pyc
│   │   │       │   │       ├── 📄 create_embedding_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 embedding.cpython-312.pyc
│   │   │       │   │       ├── 📄 embedding_create_params.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_create_params.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_create_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_delete_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_info_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 file_list_response.cpython-312.pyc
│   │   │       │   │       ├── 📄 model.cpython-312.pyc
│   │   │       │   │       ├── 📄 model_deleted.cpython-312.pyc
│   │   │       │   │       ├── 📄 model_list_response.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _base_client.py
│   │   │       │   ├── 📄 _client.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 _constants.py
│   │   │       │   ├── 📄 _exceptions.py
│   │   │       │   ├── 📄 _files.py
│   │   │       │   ├── 📄 _models.py
│   │   │       │   ├── 📄 _qs.py
│   │   │       │   ├── 📄 _resource.py
│   │   │       │   ├── 📄 _response.py
│   │   │       │   ├── 📄 _streaming.py
│   │   │       │   ├── 📄 _types.py
│   │   │       │   ├── 📁 _utils/
│   │   │       │   │   ├── 📄 _compat.py
│   │   │       │   │   ├── 📄 _datetime_parse.py
│   │   │       │   │   ├── 📄 _json.py
│   │   │       │   │   ├── 📄 _logs.py
│   │   │       │   │   ├── 📄 _path.py
│   │   │       │   │   ├── 📄 _proxy.py
│   │   │       │   │   ├── 📄 _reflection.py
│   │   │       │   │   ├── 📄 _resources_proxy.py
│   │   │       │   │   ├── 📄 _streams.py
│   │   │       │   │   ├── 📄 _sync.py
│   │   │       │   │   ├── 📄 _transform.py
│   │   │       │   │   ├── 📄 _typing.py
│   │   │       │   │   ├── 📄 _utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │   │       ├── 📄 _datetime_parse.cpython-312.pyc
│   │   │       │   │       ├── 📄 _json.cpython-312.pyc
│   │   │       │   │       ├── 📄 _logs.cpython-312.pyc
│   │   │       │   │       ├── 📄 _path.cpython-312.pyc
│   │   │       │   │       ├── 📄 _proxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 _reflection.cpython-312.pyc
│   │   │       │   │       ├── 📄 _resources_proxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312.pyc
│   │   │       │   │       ├── 📄 _sync.cpython-312.pyc
│   │   │       │   │       ├── 📄 _transform.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typing.cpython-312.pyc
│   │   │       │   │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 _base_client.cpython-312.pyc
│   │   │       │       ├── 📄 _client.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _constants.cpython-312.pyc
│   │   │       │       ├── 📄 _exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 _files.cpython-312.pyc
│   │   │       │       ├── 📄 _models.cpython-312.pyc
│   │   │       │       ├── 📄 _qs.cpython-312.pyc
│   │   │       │       ├── 📄 _resource.cpython-312.pyc
│   │   │       │       ├── 📄 _response.cpython-312.pyc
│   │   │       │       ├── 📄 _streaming.cpython-312.pyc
│   │   │       │       ├── 📄 _types.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 groq-1.7.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 h11/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _abnf.py
│   │   │       │   ├── 📄 _connection.py
│   │   │       │   ├── 📄 _events.py
│   │   │       │   ├── 📄 _headers.py
│   │   │       │   ├── 📄 _readers.py
│   │   │       │   ├── 📄 _receivebuffer.py
│   │   │       │   ├── 📄 _state.py
│   │   │       │   ├── 📄 _util.py
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 _writers.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 _abnf.cpython-312.pyc
│   │   │       │       ├── 📄 _connection.cpython-312.pyc
│   │   │       │       ├── 📄 _events.cpython-312.pyc
│   │   │       │       ├── 📄 _headers.cpython-312.pyc
│   │   │       │       ├── 📄 _readers.cpython-312.pyc
│   │   │       │       ├── 📄 _receivebuffer.cpython-312.pyc
│   │   │       │       ├── 📄 _state.cpython-312.pyc
│   │   │       │       ├── 📄 _util.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       ├── 📄 _writers.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 h11-0.16.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.txt
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 httpcore/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _api.py
│   │   │       │   ├── 📁 _async/
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 connection_pool.py
│   │   │       │   │   ├── 📄 http11.py
│   │   │       │   │   ├── 📄 http2.py
│   │   │       │   │   ├── 📄 http_proxy.py
│   │   │       │   │   ├── 📄 interfaces.py
│   │   │       │   │   ├── 📄 socks_proxy.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection_pool.cpython-312.pyc
│   │   │       │   │       ├── 📄 http11.cpython-312.pyc
│   │   │       │   │       ├── 📄 http2.cpython-312.pyc
│   │   │       │   │       ├── 📄 http_proxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 interfaces.cpython-312.pyc
│   │   │       │   │       ├── 📄 socks_proxy.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 _backends/
│   │   │       │   │   ├── 📄 anyio.py
│   │   │       │   │   ├── 📄 auto.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 mock.py
│   │   │       │   │   ├── 📄 sync.py
│   │   │       │   │   ├── 📄 trio.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 anyio.cpython-312.pyc
│   │   │       │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 mock.cpython-312.pyc
│   │   │       │   │       ├── 📄 sync.cpython-312.pyc
│   │   │       │   │       ├── 📄 trio.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _exceptions.py
│   │   │       │   ├── 📄 _models.py
│   │   │       │   ├── 📄 _ssl.py
│   │   │       │   ├── 📁 _sync/
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 connection_pool.py
│   │   │       │   │   ├── 📄 http11.py
│   │   │       │   │   ├── 📄 http2.py
│   │   │       │   │   ├── 📄 http_proxy.py
│   │   │       │   │   ├── 📄 interfaces.py
│   │   │       │   │   ├── 📄 socks_proxy.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection_pool.cpython-312.pyc
│   │   │       │   │       ├── 📄 http11.cpython-312.pyc
│   │   │       │   │       ├── 📄 http2.cpython-312.pyc
│   │   │       │   │       ├── 📄 http_proxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 interfaces.cpython-312.pyc
│   │   │       │   │       ├── 📄 socks_proxy.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _synchronization.py
│   │   │       │   ├── 📄 _trace.py
│   │   │       │   ├── 📄 _utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 _api.cpython-312.pyc
│   │   │       │       ├── 📄 _exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 _models.cpython-312.pyc
│   │   │       │       ├── 📄 _ssl.cpython-312.pyc
│   │   │       │       ├── 📄 _synchronization.cpython-312.pyc
│   │   │       │       ├── 📄 _trace.cpython-312.pyc
│   │   │       │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 httpcore-1.0.9.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 httpx/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _api.py
│   │   │       │   ├── 📄 _auth.py
│   │   │       │   ├── 📄 _client.py
│   │   │       │   ├── 📄 _config.py
│   │   │       │   ├── 📄 _content.py
│   │   │       │   ├── 📄 _decoders.py
│   │   │       │   ├── 📄 _exceptions.py
│   │   │       │   ├── 📄 _main.py
│   │   │       │   ├── 📄 _models.py
│   │   │       │   ├── 📄 _multipart.py
│   │   │       │   ├── 📄 _status_codes.py
│   │   │       │   ├── 📁 _transports/
│   │   │       │   │   ├── 📄 asgi.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 default.py
│   │   │       │   │   ├── 📄 mock.py
│   │   │       │   │   ├── 📄 wsgi.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 asgi.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 default.cpython-312.pyc
│   │   │       │   │       ├── 📄 mock.cpython-312.pyc
│   │   │       │   │       ├── 📄 wsgi.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _types.py
│   │   │       │   ├── 📄 _urlparse.py
│   │   │       │   ├── 📄 _urls.py
│   │   │       │   ├── 📄 _utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📁 __pycache__/
│   │   │       │   │   ├── 📄 _api.cpython-312.pyc
│   │   │       │   │   ├── 📄 _auth.cpython-312.pyc
│   │   │       │   │   ├── 📄 _client.cpython-312.pyc
│   │   │       │   │   ├── 📄 _config.cpython-312.pyc
│   │   │       │   │   ├── 📄 _content.cpython-312.pyc
│   │   │       │   │   ├── 📄 _decoders.cpython-312.pyc
│   │   │       │   │   ├── 📄 _exceptions.cpython-312.pyc
│   │   │       │   │   ├── 📄 _main.cpython-312.pyc
│   │   │       │   │   ├── 📄 _models.cpython-312.pyc
│   │   │       │   │   ├── 📄 _multipart.cpython-312.pyc
│   │   │       │   │   ├── 📄 _status_codes.cpython-312.pyc
│   │   │       │   │   ├── 📄 _types.cpython-312.pyc
│   │   │       │   │   ├── 📄 _urlparse.cpython-312.pyc
│   │   │       │   │   ├── 📄 _urls.cpython-312.pyc
│   │   │       │   │   ├── 📄 _utils.cpython-312.pyc
│   │   │       │   │   ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   └── 📄 __version__.cpython-312.pyc
│   │   │       │   └── 📄 __version__.py
│   │   │       ├── 📁 httpx-0.28.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 idna/
│   │   │       │   ├── 📄 cli.py
│   │   │       │   ├── 📄 codec.py
│   │   │       │   ├── 📄 compat.py
│   │   │       │   ├── 📄 core.py
│   │   │       │   ├── 📄 idnadata.py
│   │   │       │   ├── 📄 intranges.py
│   │   │       │   ├── 📄 package_data.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 uts46data.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 cli.cpython-312.pyc
│   │   │       │       ├── 📄 codec.cpython-312.pyc
│   │   │       │       ├── 📄 compat.cpython-312.pyc
│   │   │       │       ├── 📄 core.cpython-312.pyc
│   │   │       │       ├── 📄 idnadata.cpython-312.pyc
│   │   │       │       ├── 📄 intranges.cpython-312.pyc
│   │   │       │       ├── 📄 package_data.cpython-312.pyc
│   │   │       │       ├── 📄 uts46data.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 idna-3.19.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 pip/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📁 _internal/
│   │   │       │   │   ├── 📄 build_env.py
│   │   │       │   │   ├── 📄 cache.py
│   │   │       │   │   ├── 📁 cli/
│   │   │       │   │   │   ├── 📄 autocompletion.py
│   │   │       │   │   │   ├── 📄 base_command.py
│   │   │       │   │   │   ├── 📄 cmdoptions.py
│   │   │       │   │   │   ├── 📄 command_context.py
│   │   │       │   │   │   ├── 📄 index_command.py
│   │   │       │   │   │   ├── 📄 main.py
│   │   │       │   │   │   ├── 📄 main_parser.py
│   │   │       │   │   │   ├── 📄 parser.py
│   │   │       │   │   │   ├── 📄 progress_bars.py
│   │   │       │   │   │   ├── 📄 req_command.py
│   │   │       │   │   │   ├── 📄 spinners.py
│   │   │       │   │   │   ├── 📄 status_codes.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 autocompletion.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 base_command.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cmdoptions.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 command_context.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 index_command.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 main.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 main_parser.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 parser.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 progress_bars.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 req_command.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 spinners.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 status_codes.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 commands/
│   │   │       │   │   │   ├── 📄 cache.py
│   │   │       │   │   │   ├── 📄 check.py
│   │   │       │   │   │   ├── 📄 completion.py
│   │   │       │   │   │   ├── 📄 configuration.py
│   │   │       │   │   │   ├── 📄 debug.py
│   │   │       │   │   │   ├── 📄 download.py
│   │   │       │   │   │   ├── 📄 freeze.py
│   │   │       │   │   │   ├── 📄 hash.py
│   │   │       │   │   │   ├── 📄 help.py
│   │   │       │   │   │   ├── 📄 index.py
│   │   │       │   │   │   ├── 📄 inspect.py
│   │   │       │   │   │   ├── 📄 install.py
│   │   │       │   │   │   ├── 📄 list.py
│   │   │       │   │   │   ├── 📄 search.py
│   │   │       │   │   │   ├── 📄 show.py
│   │   │       │   │   │   ├── 📄 uninstall.py
│   │   │       │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 cache.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 check.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 completion.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 configuration.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 debug.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 download.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 freeze.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hash.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 help.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 index.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 inspect.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 install.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 list.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 search.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 show.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 uninstall.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 configuration.py
│   │   │       │   │   ├── 📁 distributions/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 installed.py
│   │   │       │   │   │   ├── 📄 sdist.py
│   │   │       │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 installed.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sdist.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 exceptions.py
│   │   │       │   │   ├── 📁 index/
│   │   │       │   │   │   ├── 📄 collector.py
│   │   │       │   │   │   ├── 📄 package_finder.py
│   │   │       │   │   │   ├── 📄 sources.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 collector.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 package_finder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sources.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 locations/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 _distutils.py
│   │   │       │   │   │   ├── 📄 _sysconfig.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _distutils.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _sysconfig.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 main.py
│   │   │       │   │   ├── 📁 metadata/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📁 importlib/
│   │   │       │   │   │   │   ├── 📄 _compat.py
│   │   │       │   │   │   │   ├── 📄 _dists.py
│   │   │       │   │   │   │   ├── 📄 _envs.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _dists.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _envs.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 pkg_resources.py
│   │   │       │   │   │   ├── 📄 _json.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pkg_resources.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _json.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 models/
│   │   │       │   │   │   ├── 📄 candidate.py
│   │   │       │   │   │   ├── 📄 direct_url.py
│   │   │       │   │   │   ├── 📄 format_control.py
│   │   │       │   │   │   ├── 📄 index.py
│   │   │       │   │   │   ├── 📄 installation_report.py
│   │   │       │   │   │   ├── 📄 link.py
│   │   │       │   │   │   ├── 📄 scheme.py
│   │   │       │   │   │   ├── 📄 search_scope.py
│   │   │       │   │   │   ├── 📄 selection_prefs.py
│   │   │       │   │   │   ├── 📄 target_python.py
│   │   │       │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 candidate.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 direct_url.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 format_control.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 index.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 installation_report.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 link.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 scheme.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 search_scope.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 selection_prefs.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 target_python.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 network/
│   │   │       │   │   │   ├── 📄 auth.py
│   │   │       │   │   │   ├── 📄 cache.py
│   │   │       │   │   │   ├── 📄 download.py
│   │   │       │   │   │   ├── 📄 lazy_wheel.py
│   │   │       │   │   │   ├── 📄 session.py
│   │   │       │   │   │   ├── 📄 utils.py
│   │   │       │   │   │   ├── 📄 xmlrpc.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 auth.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cache.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 download.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 lazy_wheel.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 session.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 xmlrpc.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 operations/
│   │   │       │   │   │   ├── 📁 build/
│   │   │       │   │   │   │   ├── 📄 build_tracker.py
│   │   │       │   │   │   │   ├── 📄 metadata.py
│   │   │       │   │   │   │   ├── 📄 metadata_editable.py
│   │   │       │   │   │   │   ├── 📄 metadata_legacy.py
│   │   │       │   │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   │   ├── 📄 wheel_editable.py
│   │   │       │   │   │   │   ├── 📄 wheel_legacy.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 build_tracker.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 metadata.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 metadata_editable.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 metadata_legacy.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 wheel_editable.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 wheel_legacy.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 check.py
│   │   │       │   │   │   ├── 📄 freeze.py
│   │   │       │   │   │   ├── 📁 install/
│   │   │       │   │   │   │   ├── 📄 editable_legacy.py
│   │   │       │   │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 editable_legacy.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 prepare.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 check.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 freeze.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 prepare.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 pyproject.py
│   │   │       │   │   ├── 📁 req/
│   │   │       │   │   │   ├── 📄 constructors.py
│   │   │       │   │   │   ├── 📄 req_file.py
│   │   │       │   │   │   ├── 📄 req_install.py
│   │   │       │   │   │   ├── 📄 req_set.py
│   │   │       │   │   │   ├── 📄 req_uninstall.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 constructors.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 req_file.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 req_install.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 req_set.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 req_uninstall.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 resolution/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📁 legacy/
│   │   │       │   │   │   │   ├── 📄 resolver.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 resolver.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📁 resolvelib/
│   │   │       │   │   │   │   ├── 📄 base.py
│   │   │       │   │   │   │   ├── 📄 candidates.py
│   │   │       │   │   │   │   ├── 📄 factory.py
│   │   │       │   │   │   │   ├── 📄 found_candidates.py
│   │   │       │   │   │   │   ├── 📄 provider.py
│   │   │       │   │   │   │   ├── 📄 reporter.py
│   │   │       │   │   │   │   ├── 📄 requirements.py
│   │   │       │   │   │   │   ├── 📄 resolver.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 candidates.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 factory.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 found_candidates.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 provider.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 reporter.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 requirements.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 resolver.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 self_outdated_check.py
│   │   │       │   │   ├── 📁 utils/
│   │   │       │   │   │   ├── 📄 appdirs.py
│   │   │       │   │   │   ├── 📄 compat.py
│   │   │       │   │   │   ├── 📄 compatibility_tags.py
│   │   │       │   │   │   ├── 📄 datetime.py
│   │   │       │   │   │   ├── 📄 deprecation.py
│   │   │       │   │   │   ├── 📄 direct_url_helpers.py
│   │   │       │   │   │   ├── 📄 egg_link.py
│   │   │       │   │   │   ├── 📄 entrypoints.py
│   │   │       │   │   │   ├── 📄 filesystem.py
│   │   │       │   │   │   ├── 📄 filetypes.py
│   │   │       │   │   │   ├── 📄 glibc.py
│   │   │       │   │   │   ├── 📄 hashes.py
│   │   │       │   │   │   ├── 📄 logging.py
│   │   │       │   │   │   ├── 📄 misc.py
│   │   │       │   │   │   ├── 📄 packaging.py
│   │   │       │   │   │   ├── 📄 retry.py
│   │   │       │   │   │   ├── 📄 setuptools_build.py
│   │   │       │   │   │   ├── 📄 subprocess.py
│   │   │       │   │   │   ├── 📄 temp_dir.py
│   │   │       │   │   │   ├── 📄 unpacking.py
│   │   │       │   │   │   ├── 📄 urls.py
│   │   │       │   │   │   ├── 📄 virtualenv.py
│   │   │       │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   ├── 📄 _jaraco_text.py
│   │   │       │   │   │   ├── 📄 _log.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 appdirs.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 compat.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 compatibility_tags.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 datetime.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 deprecation.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 direct_url_helpers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 egg_link.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 entrypoints.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filesystem.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filetypes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 glibc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hashes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 logging.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 misc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 packaging.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 retry.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 setuptools_build.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 subprocess.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 temp_dir.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 unpacking.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 urls.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 virtualenv.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _jaraco_text.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _log.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 vcs/
│   │   │       │   │   │   ├── 📄 bazaar.py
│   │   │       │   │   │   ├── 📄 git.py
│   │   │       │   │   │   ├── 📄 mercurial.py
│   │   │       │   │   │   ├── 📄 subversion.py
│   │   │       │   │   │   ├── 📄 versioncontrol.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 bazaar.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 git.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mercurial.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 subversion.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 versioncontrol.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 wheel_builder.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 build_env.cpython-312.pyc
│   │   │       │   │       ├── 📄 cache.cpython-312.pyc
│   │   │       │   │       ├── 📄 configuration.cpython-312.pyc
│   │   │       │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 main.cpython-312.pyc
│   │   │       │   │       ├── 📄 pyproject.cpython-312.pyc
│   │   │       │   │       ├── 📄 self_outdated_check.cpython-312.pyc
│   │   │       │   │       ├── 📄 wheel_builder.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 _vendor/
│   │   │       │   │   ├── 📁 cachecontrol/
│   │   │       │   │   │   ├── 📄 adapter.py
│   │   │       │   │   │   ├── 📄 cache.py
│   │   │       │   │   │   ├── 📁 caches/
│   │   │       │   │   │   │   ├── 📄 file_cache.py
│   │   │       │   │   │   │   ├── 📄 redis_cache.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 file_cache.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 redis_cache.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 controller.py
│   │   │       │   │   │   ├── 📄 filewrapper.py
│   │   │       │   │   │   ├── 📄 heuristics.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 serialize.py
│   │   │       │   │   │   ├── 📄 wrapper.py
│   │   │       │   │   │   ├── 📄 _cmd.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 adapter.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cache.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 controller.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filewrapper.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 heuristics.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 serialize.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wrapper.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _cmd.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 certifi/
│   │   │       │   │   │   ├── 📄 cacert.pem
│   │   │       │   │   │   ├── 📄 core.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📄 __main__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 core.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   │   ├── 📁 distlib/
│   │   │       │   │   │   ├── 📄 compat.py
│   │   │       │   │   │   ├── 📄 database.py
│   │   │       │   │   │   ├── 📄 index.py
│   │   │       │   │   │   ├── 📄 locators.py
│   │   │       │   │   │   ├── 📄 manifest.py
│   │   │       │   │   │   ├── 📄 markers.py
│   │   │       │   │   │   ├── 📄 metadata.py
│   │   │       │   │   │   ├── 📄 resources.py
│   │   │       │   │   │   ├── 📄 scripts.py
│   │   │       │   │   │   ├── 📄 t32.exe
│   │   │       │   │   │   ├── 📄 t64-arm.exe
│   │   │       │   │   │   ├── 📄 t64.exe
│   │   │       │   │   │   ├── 📄 util.py
│   │   │       │   │   │   ├── 📄 version.py
│   │   │       │   │   │   ├── 📄 w32.exe
│   │   │       │   │   │   ├── 📄 w64-arm.exe
│   │   │       │   │   │   ├── 📄 w64.exe
│   │   │       │   │   │   ├── 📄 wheel.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 compat.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 database.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 index.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 locators.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 manifest.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 markers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 metadata.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 resources.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 scripts.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wheel.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 distro/
│   │   │       │   │   │   ├── 📄 distro.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📄 __main__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 distro.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   │   ├── 📁 idna/
│   │   │       │   │   │   ├── 📄 codec.py
│   │   │       │   │   │   ├── 📄 compat.py
│   │   │       │   │   │   ├── 📄 core.py
│   │   │       │   │   │   ├── 📄 idnadata.py
│   │   │       │   │   │   ├── 📄 intranges.py
│   │   │       │   │   │   ├── 📄 package_data.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 uts46data.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 codec.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 compat.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 core.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 idnadata.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 intranges.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 package_data.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 uts46data.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 msgpack/
│   │   │       │   │   │   ├── 📄 exceptions.py
│   │   │       │   │   │   ├── 📄 ext.py
│   │   │       │   │   │   ├── 📄 fallback.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 ext.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 fallback.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 packaging/
│   │   │       │   │   │   ├── 📁 licenses/
│   │   │       │   │   │   │   ├── 📄 _spdx.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 _spdx.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 markers.py
│   │   │       │   │   │   ├── 📄 metadata.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 requirements.py
│   │   │       │   │   │   ├── 📄 specifiers.py
│   │   │       │   │   │   ├── 📄 tags.py
│   │   │       │   │   │   ├── 📄 utils.py
│   │   │       │   │   │   ├── 📄 version.py
│   │   │       │   │   │   ├── 📄 _elffile.py
│   │   │       │   │   │   ├── 📄 _manylinux.py
│   │   │       │   │   │   ├── 📄 _musllinux.py
│   │   │       │   │   │   ├── 📄 _parser.py
│   │   │       │   │   │   ├── 📄 _structures.py
│   │   │       │   │   │   ├── 📄 _tokenizer.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 markers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 metadata.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 requirements.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 specifiers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 tags.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _elffile.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _manylinux.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _musllinux.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _parser.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _structures.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _tokenizer.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 pkg_resources/
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 platformdirs/
│   │   │       │   │   │   ├── 📄 android.py
│   │   │       │   │   │   ├── 📄 api.py
│   │   │       │   │   │   ├── 📄 macos.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 unix.py
│   │   │       │   │   │   ├── 📄 version.py
│   │   │       │   │   │   ├── 📄 windows.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📄 __main__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 android.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 api.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 macos.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 unix.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 windows.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   │   ├── 📁 pygments/
│   │   │       │   │   │   ├── 📄 cmdline.py
│   │   │       │   │   │   ├── 📄 console.py
│   │   │       │   │   │   ├── 📄 filter.py
│   │   │       │   │   │   ├── 📁 filters/
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 formatter.py
│   │   │       │   │   │   ├── 📁 formatters/
│   │   │       │   │   │   │   ├── 📄 bbcode.py
│   │   │       │   │   │   │   ├── 📄 groff.py
│   │   │       │   │   │   │   ├── 📄 html.py
│   │   │       │   │   │   │   ├── 📄 img.py
│   │   │       │   │   │   │   ├── 📄 irc.py
│   │   │       │   │   │   │   ├── 📄 latex.py
│   │   │       │   │   │   │   ├── 📄 other.py
│   │   │       │   │   │   │   ├── 📄 pangomarkup.py
│   │   │       │   │   │   │   ├── 📄 rtf.py
│   │   │       │   │   │   │   ├── 📄 svg.py
│   │   │       │   │   │   │   ├── 📄 terminal.py
│   │   │       │   │   │   │   ├── 📄 terminal256.py
│   │   │       │   │   │   │   ├── 📄 _mapping.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 bbcode.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 groff.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 html.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 img.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 irc.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 latex.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 other.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pangomarkup.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 rtf.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 svg.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 terminal.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 terminal256.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _mapping.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 lexer.py
│   │   │       │   │   │   ├── 📁 lexers/
│   │   │       │   │   │   │   ├── 📄 python.py
│   │   │       │   │   │   │   ├── 📄 _mapping.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 python.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _mapping.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 modeline.py
│   │   │       │   │   │   ├── 📄 plugin.py
│   │   │       │   │   │   ├── 📄 regexopt.py
│   │   │       │   │   │   ├── 📄 scanner.py
│   │   │       │   │   │   ├── 📄 sphinxext.py
│   │   │       │   │   │   ├── 📄 style.py
│   │   │       │   │   │   ├── 📁 styles/
│   │   │       │   │   │   │   ├── 📄 _mapping.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 _mapping.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 token.py
│   │   │       │   │   │   ├── 📄 unistring.py
│   │   │       │   │   │   ├── 📄 util.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📄 __main__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 cmdline.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 console.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filter.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 formatter.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 lexer.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 modeline.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 plugin.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 regexopt.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 scanner.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sphinxext.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 style.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 token.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 unistring.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   │   ├── 📁 pyproject_hooks/
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 _impl.py
│   │   │       │   │   │   ├── 📁 _in_process/
│   │   │       │   │   │   │   ├── 📄 _in_process.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 _in_process.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 _impl.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 requests/
│   │   │       │   │   │   ├── 📄 adapters.py
│   │   │       │   │   │   ├── 📄 api.py
│   │   │       │   │   │   ├── 📄 auth.py
│   │   │       │   │   │   ├── 📄 certs.py
│   │   │       │   │   │   ├── 📄 compat.py
│   │   │       │   │   │   ├── 📄 cookies.py
│   │   │       │   │   │   ├── 📄 exceptions.py
│   │   │       │   │   │   ├── 📄 help.py
│   │   │       │   │   │   ├── 📄 hooks.py
│   │   │       │   │   │   ├── 📄 models.py
│   │   │       │   │   │   ├── 📄 packages.py
│   │   │       │   │   │   ├── 📄 sessions.py
│   │   │       │   │   │   ├── 📄 status_codes.py
│   │   │       │   │   │   ├── 📄 structures.py
│   │   │       │   │   │   ├── 📄 utils.py
│   │   │       │   │   │   ├── 📄 _internal_utils.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📁 __pycache__/
│   │   │       │   │   │   │   ├── 📄 adapters.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 api.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 auth.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 certs.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 compat.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 cookies.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 help.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 hooks.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 models.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 packages.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 sessions.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 status_codes.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 structures.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 _internal_utils.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   └── 📄 __version__.cpython-312.pyc
│   │   │       │   │   │   └── 📄 __version__.py
│   │   │       │   │   ├── 📁 resolvelib/
│   │   │       │   │   │   ├── 📁 compat/
│   │   │       │   │   │   │   ├── 📄 collections_abc.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 collections_abc.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 providers.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 reporters.py
│   │   │       │   │   │   ├── 📄 resolvers.py
│   │   │       │   │   │   ├── 📄 structs.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 providers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 reporters.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 resolvers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 structs.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 rich/
│   │   │       │   │   │   ├── 📄 abc.py
│   │   │       │   │   │   ├── 📄 align.py
│   │   │       │   │   │   ├── 📄 ansi.py
│   │   │       │   │   │   ├── 📄 bar.py
│   │   │       │   │   │   ├── 📄 box.py
│   │   │       │   │   │   ├── 📄 cells.py
│   │   │       │   │   │   ├── 📄 color.py
│   │   │       │   │   │   ├── 📄 color_triplet.py
│   │   │       │   │   │   ├── 📄 columns.py
│   │   │       │   │   │   ├── 📄 console.py
│   │   │       │   │   │   ├── 📄 constrain.py
│   │   │       │   │   │   ├── 📄 containers.py
│   │   │       │   │   │   ├── 📄 control.py
│   │   │       │   │   │   ├── 📄 default_styles.py
│   │   │       │   │   │   ├── 📄 diagnose.py
│   │   │       │   │   │   ├── 📄 emoji.py
│   │   │       │   │   │   ├── 📄 errors.py
│   │   │       │   │   │   ├── 📄 filesize.py
│   │   │       │   │   │   ├── 📄 file_proxy.py
│   │   │       │   │   │   ├── 📄 highlighter.py
│   │   │       │   │   │   ├── 📄 json.py
│   │   │       │   │   │   ├── 📄 jupyter.py
│   │   │       │   │   │   ├── 📄 layout.py
│   │   │       │   │   │   ├── 📄 live.py
│   │   │       │   │   │   ├── 📄 live_render.py
│   │   │       │   │   │   ├── 📄 logging.py
│   │   │       │   │   │   ├── 📄 markup.py
│   │   │       │   │   │   ├── 📄 measure.py
│   │   │       │   │   │   ├── 📄 padding.py
│   │   │       │   │   │   ├── 📄 pager.py
│   │   │       │   │   │   ├── 📄 palette.py
│   │   │       │   │   │   ├── 📄 panel.py
│   │   │       │   │   │   ├── 📄 pretty.py
│   │   │       │   │   │   ├── 📄 progress.py
│   │   │       │   │   │   ├── 📄 progress_bar.py
│   │   │       │   │   │   ├── 📄 prompt.py
│   │   │       │   │   │   ├── 📄 protocol.py
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 region.py
│   │   │       │   │   │   ├── 📄 repr.py
│   │   │       │   │   │   ├── 📄 rule.py
│   │   │       │   │   │   ├── 📄 scope.py
│   │   │       │   │   │   ├── 📄 screen.py
│   │   │       │   │   │   ├── 📄 segment.py
│   │   │       │   │   │   ├── 📄 spinner.py
│   │   │       │   │   │   ├── 📄 status.py
│   │   │       │   │   │   ├── 📄 style.py
│   │   │       │   │   │   ├── 📄 styled.py
│   │   │       │   │   │   ├── 📄 syntax.py
│   │   │       │   │   │   ├── 📄 table.py
│   │   │       │   │   │   ├── 📄 terminal_theme.py
│   │   │       │   │   │   ├── 📄 text.py
│   │   │       │   │   │   ├── 📄 theme.py
│   │   │       │   │   │   ├── 📄 themes.py
│   │   │       │   │   │   ├── 📄 traceback.py
│   │   │       │   │   │   ├── 📄 tree.py
│   │   │       │   │   │   ├── 📄 _cell_widths.py
│   │   │       │   │   │   ├── 📄 _emoji_codes.py
│   │   │       │   │   │   ├── 📄 _emoji_replace.py
│   │   │       │   │   │   ├── 📄 _export_format.py
│   │   │       │   │   │   ├── 📄 _extension.py
│   │   │       │   │   │   ├── 📄 _fileno.py
│   │   │       │   │   │   ├── 📄 _inspect.py
│   │   │       │   │   │   ├── 📄 _log_render.py
│   │   │       │   │   │   ├── 📄 _loop.py
│   │   │       │   │   │   ├── 📄 _null_file.py
│   │   │       │   │   │   ├── 📄 _palettes.py
│   │   │       │   │   │   ├── 📄 _pick.py
│   │   │       │   │   │   ├── 📄 _ratio.py
│   │   │       │   │   │   ├── 📄 _spinners.py
│   │   │       │   │   │   ├── 📄 _stack.py
│   │   │       │   │   │   ├── 📄 _timer.py
│   │   │       │   │   │   ├── 📄 _win32_console.py
│   │   │       │   │   │   ├── 📄 _windows.py
│   │   │       │   │   │   ├── 📄 _windows_renderer.py
│   │   │       │   │   │   ├── 📄 _wrap.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   ├── 📄 __main__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 abc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 align.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 ansi.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 bar.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 box.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cells.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 color.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 color_triplet.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 columns.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 console.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 constrain.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 containers.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 control.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 default_styles.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 diagnose.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 emoji.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 errors.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filesize.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 file_proxy.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 highlighter.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 jupyter.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 layout.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 live.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 live_render.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 logging.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 markup.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 measure.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 padding.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pager.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 palette.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 panel.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pretty.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 progress.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 progress_bar.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 prompt.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 protocol.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 region.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 repr.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 rule.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 scope.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 screen.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 segment.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 spinner.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 status.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 style.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 styled.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 syntax.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 table.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 terminal_theme.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 text.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 theme.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 themes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 traceback.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 tree.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _cell_widths.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _emoji_codes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _emoji_replace.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _export_format.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _extension.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _fileno.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _inspect.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _log_render.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _loop.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _null_file.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _palettes.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _pick.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _ratio.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _spinners.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _stack.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _timer.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _win32_console.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _windows.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _windows_renderer.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _wrap.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   │   ├── 📁 tomli/
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 _parser.py
│   │   │       │   │   │   ├── 📄 _re.py
│   │   │       │   │   │   ├── 📄 _types.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 _parser.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _re.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _types.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 truststore/
│   │   │       │   │   │   ├── 📄 py.typed
│   │   │       │   │   │   ├── 📄 _api.py
│   │   │       │   │   │   ├── 📄 _macos.py
│   │   │       │   │   │   ├── 📄 _openssl.py
│   │   │       │   │   │   ├── 📄 _ssl_constants.py
│   │   │       │   │   │   ├── 📄 _windows.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 _api.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _macos.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _openssl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _ssl_constants.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _windows.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 typing_extensions.py
│   │   │       │   │   ├── 📁 urllib3/
│   │   │       │   │   │   ├── 📄 connection.py
│   │   │       │   │   │   ├── 📄 connectionpool.py
│   │   │       │   │   │   ├── 📁 contrib/
│   │   │       │   │   │   │   ├── 📄 appengine.py
│   │   │       │   │   │   │   ├── 📄 ntlmpool.py
│   │   │       │   │   │   │   ├── 📄 pyopenssl.py
│   │   │       │   │   │   │   ├── 📄 securetransport.py
│   │   │       │   │   │   │   ├── 📄 socks.py
│   │   │       │   │   │   │   ├── 📄 _appengine_environ.py
│   │   │       │   │   │   │   ├── 📁 _securetransport/
│   │   │       │   │   │   │   │   ├── 📄 bindings.py
│   │   │       │   │   │   │   │   ├── 📄 low_level.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 bindings.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 low_level.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 appengine.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ntlmpool.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 pyopenssl.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 securetransport.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 socks.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 _appengine_environ.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 exceptions.py
│   │   │       │   │   │   ├── 📄 fields.py
│   │   │       │   │   │   ├── 📄 filepost.py
│   │   │       │   │   │   ├── 📁 packages/
│   │   │       │   │   │   │   ├── 📁 backports/
│   │   │       │   │   │   │   │   ├── 📄 makefile.py
│   │   │       │   │   │   │   │   ├── 📄 weakref_finalize.py
│   │   │       │   │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │   │       ├── 📄 makefile.cpython-312.pyc
│   │   │       │   │   │   │   │       ├── 📄 weakref_finalize.cpython-312.pyc
│   │   │       │   │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   │   ├── 📄 six.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 six.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 poolmanager.py
│   │   │       │   │   │   ├── 📄 request.py
│   │   │       │   │   │   ├── 📄 response.py
│   │   │       │   │   │   ├── 📁 util/
│   │   │       │   │   │   │   ├── 📄 connection.py
│   │   │       │   │   │   │   ├── 📄 proxy.py
│   │   │       │   │   │   │   ├── 📄 queue.py
│   │   │       │   │   │   │   ├── 📄 request.py
│   │   │       │   │   │   │   ├── 📄 response.py
│   │   │       │   │   │   │   ├── 📄 retry.py
│   │   │       │   │   │   │   ├── 📄 ssltransport.py
│   │   │       │   │   │   │   ├── 📄 ssl_.py
│   │   │       │   │   │   │   ├── 📄 ssl_match_hostname.py
│   │   │       │   │   │   │   ├── 📄 timeout.py
│   │   │       │   │   │   │   ├── 📄 url.py
│   │   │       │   │   │   │   ├── 📄 wait.py
│   │   │       │   │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 proxy.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 queue.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 request.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 response.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 retry.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ssltransport.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ssl_.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 ssl_match_hostname.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 timeout.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 url.cpython-312.pyc
│   │   │       │   │   │   │       ├── 📄 wait.cpython-312.pyc
│   │   │       │   │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   │   ├── 📄 _collections.py
│   │   │       │   │   │   ├── 📄 _version.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 connectionpool.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 fields.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 filepost.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 poolmanager.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 request.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 response.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _collections.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _version.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 vendor.txt
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 typing_extensions.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   ├── 📄 __pip-runner__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       ├── 📄 __main__.cpython-312.pyc
│   │   │       │       └── 📄 __pip-runner__.cpython-312.pyc
│   │   │       ├── 📁 pip-25.0.1.dist-info/
│   │   │       │   ├── 📄 AUTHORS.txt
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE.txt
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 psycopg2/
│   │   │       │   ├── 📄 errorcodes.py
│   │   │       │   ├── 📄 errors.py
│   │   │       │   ├── 📄 extensions.py
│   │   │       │   ├── 📄 extras.py
│   │   │       │   ├── 📄 pool.py
│   │   │       │   ├── 📄 sql.py
│   │   │       │   ├── 📄 tz.py
│   │   │       │   ├── 📄 _ipaddress.py
│   │   │       │   ├── 📄 _json.py
│   │   │       │   ├── 📄 _psycopg.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _range.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 errorcodes.cpython-312.pyc
│   │   │       │       ├── 📄 errors.cpython-312.pyc
│   │   │       │       ├── 📄 extensions.cpython-312.pyc
│   │   │       │       ├── 📄 extras.cpython-312.pyc
│   │   │       │       ├── 📄 pool.cpython-312.pyc
│   │   │       │       ├── 📄 sql.cpython-312.pyc
│   │   │       │       ├── 📄 tz.cpython-312.pyc
│   │   │       │       ├── 📄 _ipaddress.cpython-312.pyc
│   │   │       │       ├── 📄 _json.cpython-312.pyc
│   │   │       │       ├── 📄 _range.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 psycopg2_binary-2.9.12.dist-info/
│   │   │       │   ├── 📄 DELVEWHEEL
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 psycopg2_binary.libs/
│   │   │       │   ├── 📄 libcrypto-3-x64-00fd260ae72c744ee1352e64a568f454.dll
│   │   │       │   ├── 📄 libpq-59fb91041b8033400b68b6f333423fb2.dll
│   │   │       │   └── 📄 libssl-3-x64-42d016cedaa8505e1c2f3866222613c3.dll
│   │   │       ├── 📁 pyasn1/
│   │   │       │   ├── 📁 codec/
│   │   │       │   │   ├── 📁 ber/
│   │   │       │   │   │   ├── 📄 decoder.py
│   │   │       │   │   │   ├── 📄 encoder.py
│   │   │       │   │   │   ├── 📄 eoo.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 decoder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 encoder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 eoo.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 cer/
│   │   │       │   │   │   ├── 📄 decoder.py
│   │   │       │   │   │   ├── 📄 encoder.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 decoder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 encoder.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 der/
│   │   │       │   │   │   ├── 📄 decoder.py
│   │   │       │   │   │   ├── 📄 encoder.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 decoder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 encoder.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 native/
│   │   │       │   │   │   ├── 📄 decoder.py
│   │   │       │   │   │   ├── 📄 encoder.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 decoder.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 encoder.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 streaming.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 streaming.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 compat/
│   │   │       │   │   ├── 📄 integer.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 integer.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 debug.py
│   │   │       │   ├── 📄 error.py
│   │   │       │   ├── 📁 type/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 char.py
│   │   │       │   │   ├── 📄 constraint.py
│   │   │       │   │   ├── 📄 error.py
│   │   │       │   │   ├── 📄 namedtype.py
│   │   │       │   │   ├── 📄 namedval.py
│   │   │       │   │   ├── 📄 opentype.py
│   │   │       │   │   ├── 📄 tag.py
│   │   │       │   │   ├── 📄 tagmap.py
│   │   │       │   │   ├── 📄 univ.py
│   │   │       │   │   ├── 📄 useful.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 char.cpython-312.pyc
│   │   │       │   │       ├── 📄 constraint.cpython-312.pyc
│   │   │       │   │       ├── 📄 error.cpython-312.pyc
│   │   │       │   │       ├── 📄 namedtype.cpython-312.pyc
│   │   │       │   │       ├── 📄 namedval.cpython-312.pyc
│   │   │       │   │       ├── 📄 opentype.cpython-312.pyc
│   │   │       │   │       ├── 📄 tag.cpython-312.pyc
│   │   │       │   │       ├── 📄 tagmap.cpython-312.pyc
│   │   │       │   │       ├── 📄 univ.cpython-312.pyc
│   │   │       │   │       ├── 📄 useful.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 debug.cpython-312.pyc
│   │   │       │       ├── 📄 error.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pyasn1-0.6.4.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.rst
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   ├── 📄 WHEEL
│   │   │       │   └── 📄 zip-safe
│   │   │       ├── 📁 pyasn1_modules/
│   │   │       │   ├── 📄 pem.py
│   │   │       │   ├── 📄 rfc1155.py
│   │   │       │   ├── 📄 rfc1157.py
│   │   │       │   ├── 📄 rfc1901.py
│   │   │       │   ├── 📄 rfc1902.py
│   │   │       │   ├── 📄 rfc1905.py
│   │   │       │   ├── 📄 rfc2251.py
│   │   │       │   ├── 📄 rfc2314.py
│   │   │       │   ├── 📄 rfc2315.py
│   │   │       │   ├── 📄 rfc2437.py
│   │   │       │   ├── 📄 rfc2459.py
│   │   │       │   ├── 📄 rfc2511.py
│   │   │       │   ├── 📄 rfc2560.py
│   │   │       │   ├── 📄 rfc2631.py
│   │   │       │   ├── 📄 rfc2634.py
│   │   │       │   ├── 📄 rfc2876.py
│   │   │       │   ├── 📄 rfc2985.py
│   │   │       │   ├── 📄 rfc2986.py
│   │   │       │   ├── 📄 rfc3058.py
│   │   │       │   ├── 📄 rfc3114.py
│   │   │       │   ├── 📄 rfc3125.py
│   │   │       │   ├── 📄 rfc3161.py
│   │   │       │   ├── 📄 rfc3274.py
│   │   │       │   ├── 📄 rfc3279.py
│   │   │       │   ├── 📄 rfc3280.py
│   │   │       │   ├── 📄 rfc3281.py
│   │   │       │   ├── 📄 rfc3370.py
│   │   │       │   ├── 📄 rfc3412.py
│   │   │       │   ├── 📄 rfc3414.py
│   │   │       │   ├── 📄 rfc3447.py
│   │   │       │   ├── 📄 rfc3537.py
│   │   │       │   ├── 📄 rfc3560.py
│   │   │       │   ├── 📄 rfc3565.py
│   │   │       │   ├── 📄 rfc3657.py
│   │   │       │   ├── 📄 rfc3709.py
│   │   │       │   ├── 📄 rfc3739.py
│   │   │       │   ├── 📄 rfc3770.py
│   │   │       │   ├── 📄 rfc3779.py
│   │   │       │   ├── 📄 rfc3820.py
│   │   │       │   ├── 📄 rfc3852.py
│   │   │       │   ├── 📄 rfc4010.py
│   │   │       │   ├── 📄 rfc4043.py
│   │   │       │   ├── 📄 rfc4055.py
│   │   │       │   ├── 📄 rfc4073.py
│   │   │       │   ├── 📄 rfc4108.py
│   │   │       │   ├── 📄 rfc4210.py
│   │   │       │   ├── 📄 rfc4211.py
│   │   │       │   ├── 📄 rfc4334.py
│   │   │       │   ├── 📄 rfc4357.py
│   │   │       │   ├── 📄 rfc4387.py
│   │   │       │   ├── 📄 rfc4476.py
│   │   │       │   ├── 📄 rfc4490.py
│   │   │       │   ├── 📄 rfc4491.py
│   │   │       │   ├── 📄 rfc4683.py
│   │   │       │   ├── 📄 rfc4985.py
│   │   │       │   ├── 📄 rfc5035.py
│   │   │       │   ├── 📄 rfc5083.py
│   │   │       │   ├── 📄 rfc5084.py
│   │   │       │   ├── 📄 rfc5126.py
│   │   │       │   ├── 📄 rfc5208.py
│   │   │       │   ├── 📄 rfc5275.py
│   │   │       │   ├── 📄 rfc5280.py
│   │   │       │   ├── 📄 rfc5480.py
│   │   │       │   ├── 📄 rfc5636.py
│   │   │       │   ├── 📄 rfc5639.py
│   │   │       │   ├── 📄 rfc5649.py
│   │   │       │   ├── 📄 rfc5652.py
│   │   │       │   ├── 📄 rfc5697.py
│   │   │       │   ├── 📄 rfc5751.py
│   │   │       │   ├── 📄 rfc5752.py
│   │   │       │   ├── 📄 rfc5753.py
│   │   │       │   ├── 📄 rfc5755.py
│   │   │       │   ├── 📄 rfc5913.py
│   │   │       │   ├── 📄 rfc5914.py
│   │   │       │   ├── 📄 rfc5915.py
│   │   │       │   ├── 📄 rfc5916.py
│   │   │       │   ├── 📄 rfc5917.py
│   │   │       │   ├── 📄 rfc5924.py
│   │   │       │   ├── 📄 rfc5934.py
│   │   │       │   ├── 📄 rfc5940.py
│   │   │       │   ├── 📄 rfc5958.py
│   │   │       │   ├── 📄 rfc5990.py
│   │   │       │   ├── 📄 rfc6010.py
│   │   │       │   ├── 📄 rfc6019.py
│   │   │       │   ├── 📄 rfc6031.py
│   │   │       │   ├── 📄 rfc6032.py
│   │   │       │   ├── 📄 rfc6120.py
│   │   │       │   ├── 📄 rfc6170.py
│   │   │       │   ├── 📄 rfc6187.py
│   │   │       │   ├── 📄 rfc6210.py
│   │   │       │   ├── 📄 rfc6211.py
│   │   │       │   ├── 📄 rfc6402.py
│   │   │       │   ├── 📄 rfc6482.py
│   │   │       │   ├── 📄 rfc6486.py
│   │   │       │   ├── 📄 rfc6487.py
│   │   │       │   ├── 📄 rfc6664.py
│   │   │       │   ├── 📄 rfc6955.py
│   │   │       │   ├── 📄 rfc6960.py
│   │   │       │   ├── 📄 rfc7030.py
│   │   │       │   ├── 📄 rfc7191.py
│   │   │       │   ├── 📄 rfc7229.py
│   │   │       │   ├── 📄 rfc7292.py
│   │   │       │   ├── 📄 rfc7296.py
│   │   │       │   ├── 📄 rfc7508.py
│   │   │       │   ├── 📄 rfc7585.py
│   │   │       │   ├── 📄 rfc7633.py
│   │   │       │   ├── 📄 rfc7773.py
│   │   │       │   ├── 📄 rfc7894.py
│   │   │       │   ├── 📄 rfc7906.py
│   │   │       │   ├── 📄 rfc7914.py
│   │   │       │   ├── 📄 rfc8017.py
│   │   │       │   ├── 📄 rfc8018.py
│   │   │       │   ├── 📄 rfc8103.py
│   │   │       │   ├── 📄 rfc8209.py
│   │   │       │   ├── 📄 rfc8226.py
│   │   │       │   ├── 📄 rfc8358.py
│   │   │       │   ├── 📄 rfc8360.py
│   │   │       │   ├── 📄 rfc8398.py
│   │   │       │   ├── 📄 rfc8410.py
│   │   │       │   ├── 📄 rfc8418.py
│   │   │       │   ├── 📄 rfc8419.py
│   │   │       │   ├── 📄 rfc8479.py
│   │   │       │   ├── 📄 rfc8494.py
│   │   │       │   ├── 📄 rfc8520.py
│   │   │       │   ├── 📄 rfc8619.py
│   │   │       │   ├── 📄 rfc8649.py
│   │   │       │   ├── 📄 rfc8692.py
│   │   │       │   ├── 📄 rfc8696.py
│   │   │       │   ├── 📄 rfc8702.py
│   │   │       │   ├── 📄 rfc8708.py
│   │   │       │   ├── 📄 rfc8769.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 pem.cpython-312.pyc
│   │   │       │       ├── 📄 rfc1155.cpython-312.pyc
│   │   │       │       ├── 📄 rfc1157.cpython-312.pyc
│   │   │       │       ├── 📄 rfc1901.cpython-312.pyc
│   │   │       │       ├── 📄 rfc1902.cpython-312.pyc
│   │   │       │       ├── 📄 rfc1905.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2251.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2314.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2315.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2437.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2459.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2511.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2560.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2631.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2634.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2876.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2985.cpython-312.pyc
│   │   │       │       ├── 📄 rfc2986.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3058.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3114.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3125.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3161.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3274.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3279.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3280.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3281.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3370.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3412.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3414.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3447.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3537.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3560.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3565.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3657.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3709.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3739.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3770.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3779.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3820.cpython-312.pyc
│   │   │       │       ├── 📄 rfc3852.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4010.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4043.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4055.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4073.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4108.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4210.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4211.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4334.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4357.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4387.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4476.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4490.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4491.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4683.cpython-312.pyc
│   │   │       │       ├── 📄 rfc4985.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5035.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5083.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5084.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5126.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5208.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5275.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5280.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5480.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5636.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5639.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5649.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5652.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5697.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5751.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5752.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5753.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5755.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5913.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5914.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5915.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5916.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5917.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5924.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5934.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5940.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5958.cpython-312.pyc
│   │   │       │       ├── 📄 rfc5990.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6010.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6019.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6031.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6032.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6120.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6170.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6187.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6210.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6211.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6402.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6482.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6486.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6487.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6664.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6955.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6960.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7030.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7191.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7229.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7292.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7296.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7508.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7585.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7633.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7773.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7894.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7906.cpython-312.pyc
│   │   │       │       ├── 📄 rfc7914.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8017.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8018.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8103.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8209.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8226.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8358.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8360.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8398.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8410.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8418.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8419.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8479.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8494.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8520.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8619.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8649.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8692.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8696.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8702.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8708.cpython-312.pyc
│   │   │       │       ├── 📄 rfc8769.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pyasn1_modules-0.4.2.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.txt
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   ├── 📄 WHEEL
│   │   │       │   └── 📄 zip-safe
│   │   │       ├── 📁 pycparser/
│   │   │       │   ├── 📄 ast_transforms.py
│   │   │       │   ├── 📄 c_ast.py
│   │   │       │   ├── 📄 c_generator.py
│   │   │       │   ├── 📄 c_lexer.py
│   │   │       │   ├── 📄 c_parser.py
│   │   │       │   ├── 📄 _ast_gen.py
│   │   │       │   ├── 📄 _c_ast.cfg
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 ast_transforms.cpython-312.pyc
│   │   │       │       ├── 📄 c_ast.cpython-312.pyc
│   │   │       │       ├── 📄 c_generator.cpython-312.pyc
│   │   │       │       ├── 📄 c_lexer.cpython-312.pyc
│   │   │       │       ├── 📄 c_parser.cpython-312.pyc
│   │   │       │       ├── 📄 _ast_gen.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pycparser-3.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 pydantic/
│   │   │       │   ├── 📄 aliases.py
│   │   │       │   ├── 📄 alias_generators.py
│   │   │       │   ├── 📄 annotated_handlers.py
│   │   │       │   ├── 📄 class_validators.py
│   │   │       │   ├── 📄 color.py
│   │   │       │   ├── 📄 config.py
│   │   │       │   ├── 📄 dataclasses.py
│   │   │       │   ├── 📄 datetime_parse.py
│   │   │       │   ├── 📄 decorator.py
│   │   │       │   ├── 📁 deprecated/
│   │   │       │   │   ├── 📄 class_validators.py
│   │   │       │   │   ├── 📄 config.py
│   │   │       │   │   ├── 📄 copy_internals.py
│   │   │       │   │   ├── 📄 decorator.py
│   │   │       │   │   ├── 📄 json.py
│   │   │       │   │   ├── 📄 parse.py
│   │   │       │   │   ├── 📄 tools.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 class_validators.cpython-312.pyc
│   │   │       │   │       ├── 📄 config.cpython-312.pyc
│   │   │       │   │       ├── 📄 copy_internals.cpython-312.pyc
│   │   │       │   │       ├── 📄 decorator.cpython-312.pyc
│   │   │       │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │       ├── 📄 parse.cpython-312.pyc
│   │   │       │   │       ├── 📄 tools.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 env_settings.py
│   │   │       │   ├── 📄 errors.py
│   │   │       │   ├── 📄 error_wrappers.py
│   │   │       │   ├── 📁 experimental/
│   │   │       │   │   ├── 📄 arguments_schema.py
│   │   │       │   │   ├── 📄 missing_sentinel.py
│   │   │       │   │   ├── 📄 pipeline.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 arguments_schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 missing_sentinel.cpython-312.pyc
│   │   │       │   │       ├── 📄 pipeline.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 fields.py
│   │   │       │   ├── 📄 functional_serializers.py
│   │   │       │   ├── 📄 functional_validators.py
│   │   │       │   ├── 📄 generics.py
│   │   │       │   ├── 📄 json.py
│   │   │       │   ├── 📄 json_schema.py
│   │   │       │   ├── 📄 main.py
│   │   │       │   ├── 📄 mypy.py
│   │   │       │   ├── 📄 networks.py
│   │   │       │   ├── 📄 parse.py
│   │   │       │   ├── 📁 plugin/
│   │   │       │   │   ├── 📄 _loader.py
│   │   │       │   │   ├── 📄 _schema_validator.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _loader.cpython-312.pyc
│   │   │       │   │       ├── 📄 _schema_validator.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 root_model.py
│   │   │       │   ├── 📄 schema.py
│   │   │       │   ├── 📄 tools.py
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📄 type_adapter.py
│   │   │       │   ├── 📄 typing.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📁 v1/
│   │   │       │   │   ├── 📄 annotated_types.py
│   │   │       │   │   ├── 📄 class_validators.py
│   │   │       │   │   ├── 📄 color.py
│   │   │       │   │   ├── 📄 config.py
│   │   │       │   │   ├── 📄 dataclasses.py
│   │   │       │   │   ├── 📄 datetime_parse.py
│   │   │       │   │   ├── 📄 decorator.py
│   │   │       │   │   ├── 📄 env_settings.py
│   │   │       │   │   ├── 📄 errors.py
│   │   │       │   │   ├── 📄 error_wrappers.py
│   │   │       │   │   ├── 📄 fields.py
│   │   │       │   │   ├── 📄 generics.py
│   │   │       │   │   ├── 📄 json.py
│   │   │       │   │   ├── 📄 main.py
│   │   │       │   │   ├── 📄 mypy.py
│   │   │       │   │   ├── 📄 networks.py
│   │   │       │   │   ├── 📄 parse.py
│   │   │       │   │   ├── 📄 py.typed
│   │   │       │   │   ├── 📄 schema.py
│   │   │       │   │   ├── 📄 tools.py
│   │   │       │   │   ├── 📄 types.py
│   │   │       │   │   ├── 📄 typing.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 validators.py
│   │   │       │   │   ├── 📄 version.py
│   │   │       │   │   ├── 📄 _hypothesis_plugin.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 annotated_types.cpython-312.pyc
│   │   │       │   │       ├── 📄 class_validators.cpython-312.pyc
│   │   │       │   │       ├── 📄 color.cpython-312.pyc
│   │   │       │   │       ├── 📄 config.cpython-312.pyc
│   │   │       │   │       ├── 📄 dataclasses.cpython-312.pyc
│   │   │       │   │       ├── 📄 datetime_parse.cpython-312.pyc
│   │   │       │   │       ├── 📄 decorator.cpython-312.pyc
│   │   │       │   │       ├── 📄 env_settings.cpython-312.pyc
│   │   │       │   │       ├── 📄 errors.cpython-312.pyc
│   │   │       │   │       ├── 📄 error_wrappers.cpython-312.pyc
│   │   │       │   │       ├── 📄 fields.cpython-312.pyc
│   │   │       │   │       ├── 📄 generics.cpython-312.pyc
│   │   │       │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │       ├── 📄 main.cpython-312.pyc
│   │   │       │   │       ├── 📄 mypy.cpython-312.pyc
│   │   │       │   │       ├── 📄 networks.cpython-312.pyc
│   │   │       │   │       ├── 📄 parse.cpython-312.pyc
│   │   │       │   │       ├── 📄 schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 tools.cpython-312.pyc
│   │   │       │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │       ├── 📄 typing.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 validators.cpython-312.pyc
│   │   │       │   │       ├── 📄 version.cpython-312.pyc
│   │   │       │   │       ├── 📄 _hypothesis_plugin.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 validate_call_decorator.py
│   │   │       │   ├── 📄 validators.py
│   │   │       │   ├── 📄 version.py
│   │   │       │   ├── 📄 warnings.py
│   │   │       │   ├── 📁 _internal/
│   │   │       │   │   ├── 📄 _config.py
│   │   │       │   │   ├── 📄 _core_metadata.py
│   │   │       │   │   ├── 📄 _core_utils.py
│   │   │       │   │   ├── 📄 _dataclasses.py
│   │   │       │   │   ├── 📄 _decorators.py
│   │   │       │   │   ├── 📄 _decorators_v1.py
│   │   │       │   │   ├── 📄 _discriminated_union.py
│   │   │       │   │   ├── 📄 _docs_extraction.py
│   │   │       │   │   ├── 📄 _fields.py
│   │   │       │   │   ├── 📄 _forward_ref.py
│   │   │       │   │   ├── 📄 _generate_schema.py
│   │   │       │   │   ├── 📄 _generics.py
│   │   │       │   │   ├── 📄 _git.py
│   │   │       │   │   ├── 📄 _import_utils.py
│   │   │       │   │   ├── 📄 _internal_dataclass.py
│   │   │       │   │   ├── 📄 _known_annotated_metadata.py
│   │   │       │   │   ├── 📄 _mock_val_ser.py
│   │   │       │   │   ├── 📄 _model_construction.py
│   │   │       │   │   ├── 📄 _namespace_utils.py
│   │   │       │   │   ├── 📄 _repr.py
│   │   │       │   │   ├── 📄 _schema_gather.py
│   │   │       │   │   ├── 📄 _schema_generation_shared.py
│   │   │       │   │   ├── 📄 _serializers.py
│   │   │       │   │   ├── 📄 _signature.py
│   │   │       │   │   ├── 📄 _typing_extra.py
│   │   │       │   │   ├── 📄 _utils.py
│   │   │       │   │   ├── 📄 _validate_call.py
│   │   │       │   │   ├── 📄 _validators.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _config.cpython-312.pyc
│   │   │       │   │       ├── 📄 _core_metadata.cpython-312.pyc
│   │   │       │   │       ├── 📄 _core_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _dataclasses.cpython-312.pyc
│   │   │       │   │       ├── 📄 _decorators.cpython-312.pyc
│   │   │       │   │       ├── 📄 _decorators_v1.cpython-312.pyc
│   │   │       │   │       ├── 📄 _discriminated_union.cpython-312.pyc
│   │   │       │   │       ├── 📄 _docs_extraction.cpython-312.pyc
│   │   │       │   │       ├── 📄 _fields.cpython-312.pyc
│   │   │       │   │       ├── 📄 _forward_ref.cpython-312.pyc
│   │   │       │   │       ├── 📄 _generate_schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 _generics.cpython-312.pyc
│   │   │       │   │       ├── 📄 _git.cpython-312.pyc
│   │   │       │   │       ├── 📄 _import_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _internal_dataclass.cpython-312.pyc
│   │   │       │   │       ├── 📄 _known_annotated_metadata.cpython-312.pyc
│   │   │       │   │       ├── 📄 _mock_val_ser.cpython-312.pyc
│   │   │       │   │       ├── 📄 _model_construction.cpython-312.pyc
│   │   │       │   │       ├── 📄 _namespace_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _repr.cpython-312.pyc
│   │   │       │   │       ├── 📄 _schema_gather.cpython-312.pyc
│   │   │       │   │       ├── 📄 _schema_generation_shared.cpython-312.pyc
│   │   │       │   │       ├── 📄 _serializers.cpython-312.pyc
│   │   │       │   │       ├── 📄 _signature.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typing_extra.cpython-312.pyc
│   │   │       │   │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _validate_call.cpython-312.pyc
│   │   │       │   │       ├── 📄 _validators.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _migration.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 aliases.cpython-312.pyc
│   │   │       │       ├── 📄 alias_generators.cpython-312.pyc
│   │   │       │       ├── 📄 annotated_handlers.cpython-312.pyc
│   │   │       │       ├── 📄 class_validators.cpython-312.pyc
│   │   │       │       ├── 📄 color.cpython-312.pyc
│   │   │       │       ├── 📄 config.cpython-312.pyc
│   │   │       │       ├── 📄 dataclasses.cpython-312.pyc
│   │   │       │       ├── 📄 datetime_parse.cpython-312.pyc
│   │   │       │       ├── 📄 decorator.cpython-312.pyc
│   │   │       │       ├── 📄 env_settings.cpython-312.pyc
│   │   │       │       ├── 📄 errors.cpython-312.pyc
│   │   │       │       ├── 📄 error_wrappers.cpython-312.pyc
│   │   │       │       ├── 📄 fields.cpython-312.pyc
│   │   │       │       ├── 📄 functional_serializers.cpython-312.pyc
│   │   │       │       ├── 📄 functional_validators.cpython-312.pyc
│   │   │       │       ├── 📄 generics.cpython-312.pyc
│   │   │       │       ├── 📄 json.cpython-312.pyc
│   │   │       │       ├── 📄 json_schema.cpython-312.pyc
│   │   │       │       ├── 📄 main.cpython-312.pyc
│   │   │       │       ├── 📄 mypy.cpython-312.pyc
│   │   │       │       ├── 📄 networks.cpython-312.pyc
│   │   │       │       ├── 📄 parse.cpython-312.pyc
│   │   │       │       ├── 📄 root_model.cpython-312.pyc
│   │   │       │       ├── 📄 schema.cpython-312.pyc
│   │   │       │       ├── 📄 tools.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       ├── 📄 type_adapter.cpython-312.pyc
│   │   │       │       ├── 📄 typing.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 validate_call_decorator.cpython-312.pyc
│   │   │       │       ├── 📄 validators.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 warnings.cpython-312.pyc
│   │   │       │       ├── 📄 _migration.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pydantic-2.13.5.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 pydantic_core/
│   │   │       │   ├── 📄 core_schema.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _pydantic_core.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _pydantic_core.pyi
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 core_schema.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pydantic_core-2.46.5.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📁 sboms/
│   │   │       │   │   └── 📄 pydantic-core.cyclonedx.json
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 requests/
│   │   │       │   ├── 📄 adapters.py
│   │   │       │   ├── 📄 api.py
│   │   │       │   ├── 📄 auth.py
│   │   │       │   ├── 📄 certs.py
│   │   │       │   ├── 📄 compat.py
│   │   │       │   ├── 📄 cookies.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 help.py
│   │   │       │   ├── 📄 hooks.py
│   │   │       │   ├── 📄 models.py
│   │   │       │   ├── 📄 packages.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 sessions.py
│   │   │       │   ├── 📄 status_codes.py
│   │   │       │   ├── 📄 structures.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 _internal_utils.py
│   │   │       │   ├── 📄 _types.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📁 __pycache__/
│   │   │       │   │   ├── 📄 adapters.cpython-312.pyc
│   │   │       │   │   ├── 📄 api.cpython-312.pyc
│   │   │       │   │   ├── 📄 auth.cpython-312.pyc
│   │   │       │   │   ├── 📄 certs.cpython-312.pyc
│   │   │       │   │   ├── 📄 compat.cpython-312.pyc
│   │   │       │   │   ├── 📄 cookies.cpython-312.pyc
│   │   │       │   │   ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │   ├── 📄 help.cpython-312.pyc
│   │   │       │   │   ├── 📄 hooks.cpython-312.pyc
│   │   │       │   │   ├── 📄 models.cpython-312.pyc
│   │   │       │   │   ├── 📄 packages.cpython-312.pyc
│   │   │       │   │   ├── 📄 sessions.cpython-312.pyc
│   │   │       │   │   ├── 📄 status_codes.cpython-312.pyc
│   │   │       │   │   ├── 📄 structures.cpython-312.pyc
│   │   │       │   │   ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   ├── 📄 _internal_utils.cpython-312.pyc
│   │   │       │   │   ├── 📄 _types.cpython-312.pyc
│   │   │       │   │   ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │   └── 📄 __version__.cpython-312.pyc
│   │   │       │   └── 📄 __version__.py
│   │   │       ├── 📁 requests-2.34.2.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   ├── 📄 LICENSE
│   │   │       │   │   └── 📄 NOTICE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 sniffio/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _impl.py
│   │   │       │   ├── 📁 _tests/
│   │   │       │   │   ├── 📄 test_sniffio.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 test_sniffio.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 _impl.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 sniffio-1.3.1.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 LICENSE.APACHE2
│   │   │       │   ├── 📄 LICENSE.MIT
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 sqlalchemy/
│   │   │       │   ├── 📁 connectors/
│   │   │       │   │   ├── 📄 aioodbc.py
│   │   │       │   │   ├── 📄 asyncio.py
│   │   │       │   │   ├── 📄 pyodbc.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 aioodbc.cpython-312.pyc
│   │   │       │   │       ├── 📄 asyncio.cpython-312.pyc
│   │   │       │   │       ├── 📄 pyodbc.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 cyextension/
│   │   │       │   │   ├── 📄 collections.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 collections.pyx
│   │   │       │   │   ├── 📄 immutabledict.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 immutabledict.pxd
│   │   │       │   │   ├── 📄 immutabledict.pyx
│   │   │       │   │   ├── 📄 processors.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 processors.pyx
│   │   │       │   │   ├── 📄 resultproxy.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 resultproxy.pyx
│   │   │       │   │   ├── 📄 util.cp312-win_amd64.pyd
│   │   │       │   │   ├── 📄 util.pyx
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 dialects/
│   │   │       │   │   ├── 📁 mssql/
│   │   │       │   │   │   ├── 📄 aioodbc.py
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 information_schema.py
│   │   │       │   │   │   ├── 📄 json.py
│   │   │       │   │   │   ├── 📄 provision.py
│   │   │       │   │   │   ├── 📄 pymssql.py
│   │   │       │   │   │   ├── 📄 pyodbc.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 aioodbc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 information_schema.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pymssql.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pyodbc.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 mysql/
│   │   │       │   │   │   ├── 📄 aiomysql.py
│   │   │       │   │   │   ├── 📄 asyncmy.py
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 cymysql.py
│   │   │       │   │   │   ├── 📄 dml.py
│   │   │       │   │   │   ├── 📄 enumerated.py
│   │   │       │   │   │   ├── 📄 expression.py
│   │   │       │   │   │   ├── 📄 json.py
│   │   │       │   │   │   ├── 📄 mariadb.py
│   │   │       │   │   │   ├── 📄 mariadbconnector.py
│   │   │       │   │   │   ├── 📄 mysqlconnector.py
│   │   │       │   │   │   ├── 📄 mysqldb.py
│   │   │       │   │   │   ├── 📄 provision.py
│   │   │       │   │   │   ├── 📄 pymysql.py
│   │   │       │   │   │   ├── 📄 pyodbc.py
│   │   │       │   │   │   ├── 📄 reflection.py
│   │   │       │   │   │   ├── 📄 reserved_words.py
│   │   │       │   │   │   ├── 📄 types.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 aiomysql.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 asyncmy.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cymysql.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 dml.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 enumerated.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 expression.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mariadb.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mariadbconnector.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mysqlconnector.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mysqldb.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pymysql.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pyodbc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 reflection.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 reserved_words.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 oracle/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 cx_oracle.py
│   │   │       │   │   │   ├── 📄 dictionary.py
│   │   │       │   │   │   ├── 📄 oracledb.py
│   │   │       │   │   │   ├── 📄 provision.py
│   │   │       │   │   │   ├── 📄 types.py
│   │   │       │   │   │   ├── 📄 vector.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cx_oracle.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 dictionary.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 oracledb.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 vector.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 postgresql/
│   │   │       │   │   │   ├── 📄 array.py
│   │   │       │   │   │   ├── 📄 asyncpg.py
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 dml.py
│   │   │       │   │   │   ├── 📄 ext.py
│   │   │       │   │   │   ├── 📄 hstore.py
│   │   │       │   │   │   ├── 📄 json.py
│   │   │       │   │   │   ├── 📄 named_types.py
│   │   │       │   │   │   ├── 📄 operators.py
│   │   │       │   │   │   ├── 📄 pg8000.py
│   │   │       │   │   │   ├── 📄 pg_catalog.py
│   │   │       │   │   │   ├── 📄 provision.py
│   │   │       │   │   │   ├── 📄 psycopg.py
│   │   │       │   │   │   ├── 📄 psycopg2.py
│   │   │       │   │   │   ├── 📄 psycopg2cffi.py
│   │   │       │   │   │   ├── 📄 ranges.py
│   │   │       │   │   │   ├── 📄 types.py
│   │   │       │   │   │   ├── 📄 _psycopg_common.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 array.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 asyncpg.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 dml.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 ext.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 hstore.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 named_types.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 operators.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pg8000.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pg_catalog.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 psycopg.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 psycopg2.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 psycopg2cffi.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 ranges.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _psycopg_common.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 sqlite/
│   │   │       │   │   │   ├── 📄 aiosqlite.py
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 dml.py
│   │   │       │   │   │   ├── 📄 json.py
│   │   │       │   │   │   ├── 📄 provision.py
│   │   │       │   │   │   ├── 📄 pysqlcipher.py
│   │   │       │   │   │   ├── 📄 pysqlite.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 aiosqlite.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 dml.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 json.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pysqlcipher.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pysqlite.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 type_migration_guidelines.txt
│   │   │       │   │   ├── 📄 _typing.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _typing.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 engine/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 characteristics.py
│   │   │       │   │   ├── 📄 create.py
│   │   │       │   │   ├── 📄 cursor.py
│   │   │       │   │   ├── 📄 default.py
│   │   │       │   │   ├── 📄 events.py
│   │   │       │   │   ├── 📄 interfaces.py
│   │   │       │   │   ├── 📄 mock.py
│   │   │       │   │   ├── 📄 processors.py
│   │   │       │   │   ├── 📄 reflection.py
│   │   │       │   │   ├── 📄 result.py
│   │   │       │   │   ├── 📄 row.py
│   │   │       │   │   ├── 📄 strategies.py
│   │   │       │   │   ├── 📄 url.py
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 _py_processors.py
│   │   │       │   │   ├── 📄 _py_row.py
│   │   │       │   │   ├── 📄 _py_util.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 characteristics.cpython-312.pyc
│   │   │       │   │       ├── 📄 create.cpython-312.pyc
│   │   │       │   │       ├── 📄 cursor.cpython-312.pyc
│   │   │       │   │       ├── 📄 default.cpython-312.pyc
│   │   │       │   │       ├── 📄 events.cpython-312.pyc
│   │   │       │   │       ├── 📄 interfaces.cpython-312.pyc
│   │   │       │   │       ├── 📄 mock.cpython-312.pyc
│   │   │       │   │       ├── 📄 processors.cpython-312.pyc
│   │   │       │   │       ├── 📄 reflection.cpython-312.pyc
│   │   │       │   │       ├── 📄 result.cpython-312.pyc
│   │   │       │   │       ├── 📄 row.cpython-312.pyc
│   │   │       │   │       ├── 📄 strategies.cpython-312.pyc
│   │   │       │   │       ├── 📄 url.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       ├── 📄 _py_processors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _py_row.cpython-312.pyc
│   │   │       │   │       ├── 📄 _py_util.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 event/
│   │   │       │   │   ├── 📄 api.py
│   │   │       │   │   ├── 📄 attr.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 legacy.py
│   │   │       │   │   ├── 📄 registry.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 api.cpython-312.pyc
│   │   │       │   │       ├── 📄 attr.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 legacy.cpython-312.pyc
│   │   │       │   │       ├── 📄 registry.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 events.py
│   │   │       │   ├── 📄 exc.py
│   │   │       │   ├── 📁 ext/
│   │   │       │   │   ├── 📄 associationproxy.py
│   │   │       │   │   ├── 📁 asyncio/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 engine.py
│   │   │       │   │   │   ├── 📄 exc.py
│   │   │       │   │   │   ├── 📄 result.py
│   │   │       │   │   │   ├── 📄 scoping.py
│   │   │       │   │   │   ├── 📄 session.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 engine.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 exc.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 result.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 scoping.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 session.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 automap.py
│   │   │       │   │   ├── 📄 baked.py
│   │   │       │   │   ├── 📄 compiler.py
│   │   │       │   │   ├── 📁 declarative/
│   │   │       │   │   │   ├── 📄 extensions.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 extensions.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 horizontal_shard.py
│   │   │       │   │   ├── 📄 hybrid.py
│   │   │       │   │   ├── 📄 indexable.py
│   │   │       │   │   ├── 📄 instrumentation.py
│   │   │       │   │   ├── 📄 mutable.py
│   │   │       │   │   ├── 📁 mypy/
│   │   │       │   │   │   ├── 📄 apply.py
│   │   │       │   │   │   ├── 📄 decl_class.py
│   │   │       │   │   │   ├── 📄 infer.py
│   │   │       │   │   │   ├── 📄 names.py
│   │   │       │   │   │   ├── 📄 plugin.py
│   │   │       │   │   │   ├── 📄 util.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 apply.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 decl_class.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 infer.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 names.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 plugin.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 orderinglist.py
│   │   │       │   │   ├── 📄 serializer.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 associationproxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 automap.cpython-312.pyc
│   │   │       │   │       ├── 📄 baked.cpython-312.pyc
│   │   │       │   │       ├── 📄 compiler.cpython-312.pyc
│   │   │       │   │       ├── 📄 horizontal_shard.cpython-312.pyc
│   │   │       │   │       ├── 📄 hybrid.cpython-312.pyc
│   │   │       │   │       ├── 📄 indexable.cpython-312.pyc
│   │   │       │   │       ├── 📄 instrumentation.cpython-312.pyc
│   │   │       │   │       ├── 📄 mutable.cpython-312.pyc
│   │   │       │   │       ├── 📄 orderinglist.cpython-312.pyc
│   │   │       │   │       ├── 📄 serializer.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 future/
│   │   │       │   │   ├── 📄 engine.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 engine.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 inspection.py
│   │   │       │   ├── 📄 log.py
│   │   │       │   ├── 📁 orm/
│   │   │       │   │   ├── 📄 attributes.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 bulk_persistence.py
│   │   │       │   │   ├── 📄 clsregistry.py
│   │   │       │   │   ├── 📄 collections.py
│   │   │       │   │   ├── 📄 context.py
│   │   │       │   │   ├── 📄 decl_api.py
│   │   │       │   │   ├── 📄 decl_base.py
│   │   │       │   │   ├── 📄 dependency.py
│   │   │       │   │   ├── 📄 descriptor_props.py
│   │   │       │   │   ├── 📄 dynamic.py
│   │   │       │   │   ├── 📄 evaluator.py
│   │   │       │   │   ├── 📄 events.py
│   │   │       │   │   ├── 📄 exc.py
│   │   │       │   │   ├── 📄 identity.py
│   │   │       │   │   ├── 📄 instrumentation.py
│   │   │       │   │   ├── 📄 interfaces.py
│   │   │       │   │   ├── 📄 loading.py
│   │   │       │   │   ├── 📄 mapped_collection.py
│   │   │       │   │   ├── 📄 mapper.py
│   │   │       │   │   ├── 📄 path_registry.py
│   │   │       │   │   ├── 📄 persistence.py
│   │   │       │   │   ├── 📄 properties.py
│   │   │       │   │   ├── 📄 query.py
│   │   │       │   │   ├── 📄 relationships.py
│   │   │       │   │   ├── 📄 scoping.py
│   │   │       │   │   ├── 📄 session.py
│   │   │       │   │   ├── 📄 state.py
│   │   │       │   │   ├── 📄 state_changes.py
│   │   │       │   │   ├── 📄 strategies.py
│   │   │       │   │   ├── 📄 strategy_options.py
│   │   │       │   │   ├── 📄 sync.py
│   │   │       │   │   ├── 📄 unitofwork.py
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 writeonly.py
│   │   │       │   │   ├── 📄 _orm_constructors.py
│   │   │       │   │   ├── 📄 _typing.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 attributes.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 bulk_persistence.cpython-312.pyc
│   │   │       │   │       ├── 📄 clsregistry.cpython-312.pyc
│   │   │       │   │       ├── 📄 collections.cpython-312.pyc
│   │   │       │   │       ├── 📄 context.cpython-312.pyc
│   │   │       │   │       ├── 📄 decl_api.cpython-312.pyc
│   │   │       │   │       ├── 📄 decl_base.cpython-312.pyc
│   │   │       │   │       ├── 📄 dependency.cpython-312.pyc
│   │   │       │   │       ├── 📄 descriptor_props.cpython-312.pyc
│   │   │       │   │       ├── 📄 dynamic.cpython-312.pyc
│   │   │       │   │       ├── 📄 evaluator.cpython-312.pyc
│   │   │       │   │       ├── 📄 events.cpython-312.pyc
│   │   │       │   │       ├── 📄 exc.cpython-312.pyc
│   │   │       │   │       ├── 📄 identity.cpython-312.pyc
│   │   │       │   │       ├── 📄 instrumentation.cpython-312.pyc
│   │   │       │   │       ├── 📄 interfaces.cpython-312.pyc
│   │   │       │   │       ├── 📄 loading.cpython-312.pyc
│   │   │       │   │       ├── 📄 mapped_collection.cpython-312.pyc
│   │   │       │   │       ├── 📄 mapper.cpython-312.pyc
│   │   │       │   │       ├── 📄 path_registry.cpython-312.pyc
│   │   │       │   │       ├── 📄 persistence.cpython-312.pyc
│   │   │       │   │       ├── 📄 properties.cpython-312.pyc
│   │   │       │   │       ├── 📄 query.cpython-312.pyc
│   │   │       │   │       ├── 📄 relationships.cpython-312.pyc
│   │   │       │   │       ├── 📄 scoping.cpython-312.pyc
│   │   │       │   │       ├── 📄 session.cpython-312.pyc
│   │   │       │   │       ├── 📄 state.cpython-312.pyc
│   │   │       │   │       ├── 📄 state_changes.cpython-312.pyc
│   │   │       │   │       ├── 📄 strategies.cpython-312.pyc
│   │   │       │   │       ├── 📄 strategy_options.cpython-312.pyc
│   │   │       │   │       ├── 📄 sync.cpython-312.pyc
│   │   │       │   │       ├── 📄 unitofwork.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       ├── 📄 writeonly.cpython-312.pyc
│   │   │       │   │       ├── 📄 _orm_constructors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typing.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 pool/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 events.py
│   │   │       │   │   ├── 📄 impl.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 events.cpython-312.pyc
│   │   │       │   │       ├── 📄 impl.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 schema.py
│   │   │       │   ├── 📁 sql/
│   │   │       │   │   ├── 📄 annotation.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 cache_key.py
│   │   │       │   │   ├── 📄 coercions.py
│   │   │       │   │   ├── 📄 compiler.py
│   │   │       │   │   ├── 📄 crud.py
│   │   │       │   │   ├── 📄 ddl.py
│   │   │       │   │   ├── 📄 default_comparator.py
│   │   │       │   │   ├── 📄 dml.py
│   │   │       │   │   ├── 📄 elements.py
│   │   │       │   │   ├── 📄 events.py
│   │   │       │   │   ├── 📄 expression.py
│   │   │       │   │   ├── 📄 functions.py
│   │   │       │   │   ├── 📄 lambdas.py
│   │   │       │   │   ├── 📄 naming.py
│   │   │       │   │   ├── 📄 operators.py
│   │   │       │   │   ├── 📄 roles.py
│   │   │       │   │   ├── 📄 schema.py
│   │   │       │   │   ├── 📄 selectable.py
│   │   │       │   │   ├── 📄 sqltypes.py
│   │   │       │   │   ├── 📄 traversals.py
│   │   │       │   │   ├── 📄 type_api.py
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 visitors.py
│   │   │       │   │   ├── 📄 _dml_constructors.py
│   │   │       │   │   ├── 📄 _elements_constructors.py
│   │   │       │   │   ├── 📄 _orm_types.py
│   │   │       │   │   ├── 📄 _py_util.py
│   │   │       │   │   ├── 📄 _selectable_constructors.py
│   │   │       │   │   ├── 📄 _typing.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 annotation.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 cache_key.cpython-312.pyc
│   │   │       │   │       ├── 📄 coercions.cpython-312.pyc
│   │   │       │   │       ├── 📄 compiler.cpython-312.pyc
│   │   │       │   │       ├── 📄 crud.cpython-312.pyc
│   │   │       │   │       ├── 📄 ddl.cpython-312.pyc
│   │   │       │   │       ├── 📄 default_comparator.cpython-312.pyc
│   │   │       │   │       ├── 📄 dml.cpython-312.pyc
│   │   │       │   │       ├── 📄 elements.cpython-312.pyc
│   │   │       │   │       ├── 📄 events.cpython-312.pyc
│   │   │       │   │       ├── 📄 expression.cpython-312.pyc
│   │   │       │   │       ├── 📄 functions.cpython-312.pyc
│   │   │       │   │       ├── 📄 lambdas.cpython-312.pyc
│   │   │       │   │       ├── 📄 naming.cpython-312.pyc
│   │   │       │   │       ├── 📄 operators.cpython-312.pyc
│   │   │       │   │       ├── 📄 roles.cpython-312.pyc
│   │   │       │   │       ├── 📄 schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 selectable.cpython-312.pyc
│   │   │       │   │       ├── 📄 sqltypes.cpython-312.pyc
│   │   │       │   │       ├── 📄 traversals.cpython-312.pyc
│   │   │       │   │       ├── 📄 type_api.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       ├── 📄 visitors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _dml_constructors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _elements_constructors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _orm_types.cpython-312.pyc
│   │   │       │   │       ├── 📄 _py_util.cpython-312.pyc
│   │   │       │   │       ├── 📄 _selectable_constructors.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typing.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 testing/
│   │   │       │   │   ├── 📄 assertions.py
│   │   │       │   │   ├── 📄 assertsql.py
│   │   │       │   │   ├── 📄 asyncio.py
│   │   │       │   │   ├── 📄 config.py
│   │   │       │   │   ├── 📄 engines.py
│   │   │       │   │   ├── 📄 entities.py
│   │   │       │   │   ├── 📄 exclusions.py
│   │   │       │   │   ├── 📁 fixtures/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 mypy.py
│   │   │       │   │   │   ├── 📄 orm.py
│   │   │       │   │   │   ├── 📄 sql.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 mypy.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 orm.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 sql.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 pickleable.py
│   │   │       │   │   ├── 📁 plugin/
│   │   │       │   │   │   ├── 📄 bootstrap.py
│   │   │       │   │   │   ├── 📄 plugin_base.py
│   │   │       │   │   │   ├── 📄 pytestplugin.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 bootstrap.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 plugin_base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 pytestplugin.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 profiling.py
│   │   │       │   │   ├── 📄 provision.py
│   │   │       │   │   ├── 📄 requirements.py
│   │   │       │   │   ├── 📄 schema.py
│   │   │       │   │   ├── 📁 suite/
│   │   │       │   │   │   ├── 📄 test_cte.py
│   │   │       │   │   │   ├── 📄 test_ddl.py
│   │   │       │   │   │   ├── 📄 test_deprecations.py
│   │   │       │   │   │   ├── 📄 test_dialect.py
│   │   │       │   │   │   ├── 📄 test_insert.py
│   │   │       │   │   │   ├── 📄 test_reflection.py
│   │   │       │   │   │   ├── 📄 test_results.py
│   │   │       │   │   │   ├── 📄 test_rowcount.py
│   │   │       │   │   │   ├── 📄 test_select.py
│   │   │       │   │   │   ├── 📄 test_sequence.py
│   │   │       │   │   │   ├── 📄 test_types.py
│   │   │       │   │   │   ├── 📄 test_unicode_ddl.py
│   │   │       │   │   │   ├── 📄 test_update_delete.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 test_cte.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_ddl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_deprecations.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_dialect.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_insert.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_reflection.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_results.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_rowcount.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_select.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_sequence.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_types.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_unicode_ddl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 test_update_delete.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 warnings.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 assertions.cpython-312.pyc
│   │   │       │   │       ├── 📄 assertsql.cpython-312.pyc
│   │   │       │   │       ├── 📄 asyncio.cpython-312.pyc
│   │   │       │   │       ├── 📄 config.cpython-312.pyc
│   │   │       │   │       ├── 📄 engines.cpython-312.pyc
│   │   │       │   │       ├── 📄 entities.cpython-312.pyc
│   │   │       │   │       ├── 📄 exclusions.cpython-312.pyc
│   │   │       │   │       ├── 📄 pickleable.cpython-312.pyc
│   │   │       │   │       ├── 📄 profiling.cpython-312.pyc
│   │   │       │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │       ├── 📄 requirements.cpython-312.pyc
│   │   │       │   │       ├── 📄 schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       ├── 📄 warnings.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📁 util/
│   │   │       │   │   ├── 📄 compat.py
│   │   │       │   │   ├── 📄 concurrency.py
│   │   │       │   │   ├── 📄 deprecations.py
│   │   │       │   │   ├── 📄 langhelpers.py
│   │   │       │   │   ├── 📄 preloaded.py
│   │   │       │   │   ├── 📄 queue.py
│   │   │       │   │   ├── 📄 tool_support.py
│   │   │       │   │   ├── 📄 topological.py
│   │   │       │   │   ├── 📄 typing.py
│   │   │       │   │   ├── 📄 _collections.py
│   │   │       │   │   ├── 📄 _concurrency_py3k.py
│   │   │       │   │   ├── 📄 _has_cy.py
│   │   │       │   │   ├── 📄 _py_collections.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 compat.cpython-312.pyc
│   │   │       │   │       ├── 📄 concurrency.cpython-312.pyc
│   │   │       │   │       ├── 📄 deprecations.cpython-312.pyc
│   │   │       │   │       ├── 📄 langhelpers.cpython-312.pyc
│   │   │       │   │       ├── 📄 preloaded.cpython-312.pyc
│   │   │       │   │       ├── 📄 queue.cpython-312.pyc
│   │   │       │   │       ├── 📄 tool_support.cpython-312.pyc
│   │   │       │   │       ├── 📄 topological.cpython-312.pyc
│   │   │       │   │       ├── 📄 typing.cpython-312.pyc
│   │   │       │   │       ├── 📄 _collections.cpython-312.pyc
│   │   │       │   │       ├── 📄 _concurrency_py3k.cpython-312.pyc
│   │   │       │   │       ├── 📄 _has_cy.cpython-312.pyc
│   │   │       │   │       ├── 📄 _py_collections.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 events.cpython-312.pyc
│   │   │       │       ├── 📄 exc.cpython-312.pyc
│   │   │       │       ├── 📄 inspection.cpython-312.pyc
│   │   │       │       ├── 📄 log.cpython-312.pyc
│   │   │       │       ├── 📄 schema.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 sqlalchemy-2.0.52.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 starlette/
│   │   │       │   ├── 📄 applications.py
│   │   │       │   ├── 📄 authentication.py
│   │   │       │   ├── 📄 background.py
│   │   │       │   ├── 📄 concurrency.py
│   │   │       │   ├── 📄 config.py
│   │   │       │   ├── 📄 convertors.py
│   │   │       │   ├── 📄 datastructures.py
│   │   │       │   ├── 📄 endpoints.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 formparsers.py
│   │   │       │   ├── 📁 middleware/
│   │   │       │   │   ├── 📄 authentication.py
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 body_limit.py
│   │   │       │   │   ├── 📄 cors.py
│   │   │       │   │   ├── 📄 errors.py
│   │   │       │   │   ├── 📄 exceptions.py
│   │   │       │   │   ├── 📄 gzip.py
│   │   │       │   │   ├── 📄 httpsredirect.py
│   │   │       │   │   ├── 📄 sessions.py
│   │   │       │   │   ├── 📄 trustedhost.py
│   │   │       │   │   ├── 📄 wsgi.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 authentication.cpython-312.pyc
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 body_limit.cpython-312.pyc
│   │   │       │   │       ├── 📄 cors.cpython-312.pyc
│   │   │       │   │       ├── 📄 errors.cpython-312.pyc
│   │   │       │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 gzip.cpython-312.pyc
│   │   │       │   │       ├── 📄 httpsredirect.cpython-312.pyc
│   │   │       │   │       ├── 📄 sessions.cpython-312.pyc
│   │   │       │   │       ├── 📄 trustedhost.cpython-312.pyc
│   │   │       │   │       ├── 📄 wsgi.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 requests.py
│   │   │       │   ├── 📄 responses.py
│   │   │       │   ├── 📄 routing.py
│   │   │       │   ├── 📄 schemas.py
│   │   │       │   ├── 📄 staticfiles.py
│   │   │       │   ├── 📄 status.py
│   │   │       │   ├── 📄 templating.py
│   │   │       │   ├── 📄 testclient.py
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📄 websockets.py
│   │   │       │   ├── 📄 _exception_handler.py
│   │   │       │   ├── 📄 _utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 applications.cpython-312.pyc
│   │   │       │       ├── 📄 authentication.cpython-312.pyc
│   │   │       │       ├── 📄 background.cpython-312.pyc
│   │   │       │       ├── 📄 concurrency.cpython-312.pyc
│   │   │       │       ├── 📄 config.cpython-312.pyc
│   │   │       │       ├── 📄 convertors.cpython-312.pyc
│   │   │       │       ├── 📄 datastructures.cpython-312.pyc
│   │   │       │       ├── 📄 endpoints.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 formparsers.cpython-312.pyc
│   │   │       │       ├── 📄 requests.cpython-312.pyc
│   │   │       │       ├── 📄 responses.cpython-312.pyc
│   │   │       │       ├── 📄 routing.cpython-312.pyc
│   │   │       │       ├── 📄 schemas.cpython-312.pyc
│   │   │       │       ├── 📄 staticfiles.cpython-312.pyc
│   │   │       │       ├── 📄 status.cpython-312.pyc
│   │   │       │       ├── 📄 templating.cpython-312.pyc
│   │   │       │       ├── 📄 testclient.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       ├── 📄 websockets.cpython-312.pyc
│   │   │       │       ├── 📄 _exception_handler.cpython-312.pyc
│   │   │       │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 starlette-1.6.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 tenacity/
│   │   │       │   ├── 📄 after.py
│   │   │       │   ├── 📁 asyncio/
│   │   │       │   │   ├── 📄 retry.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 retry.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 before.py
│   │   │       │   ├── 📄 before_sleep.py
│   │   │       │   ├── 📄 nap.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 retry.py
│   │   │       │   ├── 📄 stop.py
│   │   │       │   ├── 📄 tornadoweb.py
│   │   │       │   ├── 📄 wait.py
│   │   │       │   ├── 📄 _utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 after.cpython-312.pyc
│   │   │       │       ├── 📄 before.cpython-312.pyc
│   │   │       │       ├── 📄 before_sleep.cpython-312.pyc
│   │   │       │       ├── 📄 nap.cpython-312.pyc
│   │   │       │       ├── 📄 retry.cpython-312.pyc
│   │   │       │       ├── 📄 stop.cpython-312.pyc
│   │   │       │       ├── 📄 tornadoweb.cpython-312.pyc
│   │   │       │       ├── 📄 wait.cpython-312.pyc
│   │   │       │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 tenacity-9.1.4.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 typing_extensions-4.16.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📄 typing_extensions.py
│   │   │       ├── 📁 typing_inspection/
│   │   │       │   ├── 📄 introspection.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 typing_objects.py
│   │   │       │   ├── 📄 typing_objects.pyi
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 introspection.cpython-312.pyc
│   │   │       │       ├── 📄 typing_objects.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 typing_inspection-0.4.4.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 urllib3/
│   │   │       │   ├── 📄 connection.py
│   │   │       │   ├── 📄 connectionpool.py
│   │   │       │   ├── 📁 contrib/
│   │   │       │   │   ├── 📁 emscripten/
│   │   │       │   │   │   ├── 📄 connection.py
│   │   │       │   │   │   ├── 📄 emscripten_fetch_worker.js
│   │   │       │   │   │   ├── 📄 fetch.py
│   │   │       │   │   │   ├── 📄 request.py
│   │   │       │   │   │   ├── 📄 response.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 fetch.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 request.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 response.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 pyopenssl.py
│   │   │       │   │   ├── 📄 socks.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 pyopenssl.cpython-312.pyc
│   │   │       │   │       ├── 📄 socks.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 fields.py
│   │   │       │   ├── 📄 filepost.py
│   │   │       │   ├── 📁 http2/
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 probe.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 probe.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 poolmanager.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 response.py
│   │   │       │   ├── 📁 util/
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 proxy.py
│   │   │       │   │   ├── 📄 request.py
│   │   │       │   │   ├── 📄 response.py
│   │   │       │   │   ├── 📄 retry.py
│   │   │       │   │   ├── 📄 ssltransport.py
│   │   │       │   │   ├── 📄 ssl_.py
│   │   │       │   │   ├── 📄 ssl_match_hostname.py
│   │   │       │   │   ├── 📄 timeout.py
│   │   │       │   │   ├── 📄 url.py
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 wait.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 proxy.cpython-312.pyc
│   │   │       │   │       ├── 📄 request.cpython-312.pyc
│   │   │       │   │       ├── 📄 response.cpython-312.pyc
│   │   │       │   │       ├── 📄 retry.cpython-312.pyc
│   │   │       │   │       ├── 📄 ssltransport.cpython-312.pyc
│   │   │       │   │       ├── 📄 ssl_.cpython-312.pyc
│   │   │       │   │       ├── 📄 ssl_match_hostname.cpython-312.pyc
│   │   │       │   │       ├── 📄 timeout.cpython-312.pyc
│   │   │       │   │       ├── 📄 url.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       ├── 📄 wait.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _base_connection.py
│   │   │       │   ├── 📄 _collections.py
│   │   │       │   ├── 📄 _request_methods.py
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 connection.cpython-312.pyc
│   │   │       │       ├── 📄 connectionpool.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 fields.cpython-312.pyc
│   │   │       │       ├── 📄 filepost.cpython-312.pyc
│   │   │       │       ├── 📄 poolmanager.cpython-312.pyc
│   │   │       │       ├── 📄 response.cpython-312.pyc
│   │   │       │       ├── 📄 _base_connection.cpython-312.pyc
│   │   │       │       ├── 📄 _collections.cpython-312.pyc
│   │   │       │       ├── 📄 _request_methods.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 urllib3-2.7.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.txt
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 uvicorn/
│   │   │       │   ├── 📄 config.py
│   │   │       │   ├── 📄 importer.py
│   │   │       │   ├── 📁 lifespan/
│   │   │       │   │   ├── 📄 off.py
│   │   │       │   │   ├── 📄 on.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 off.cpython-312.pyc
│   │   │       │   │       ├── 📄 on.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 logging.py
│   │   │       │   ├── 📁 loops/
│   │   │       │   │   ├── 📄 asyncio.py
│   │   │       │   │   ├── 📄 auto.py
│   │   │       │   │   ├── 📄 uvloop.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 asyncio.cpython-312.pyc
│   │   │       │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │       ├── 📄 uvloop.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 main.py
│   │   │       │   ├── 📁 middleware/
│   │   │       │   │   ├── 📄 asgi2.py
│   │   │       │   │   ├── 📄 message_logger.py
│   │   │       │   │   ├── 📄 proxy_headers.py
│   │   │       │   │   ├── 📄 wsgi.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 asgi2.cpython-312.pyc
│   │   │       │   │       ├── 📄 message_logger.cpython-312.pyc
│   │   │       │   │       ├── 📄 proxy_headers.cpython-312.pyc
│   │   │       │   │       ├── 📄 wsgi.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 protocols/
│   │   │       │   │   ├── 📁 http/
│   │   │       │   │   │   ├── 📄 auto.py
│   │   │       │   │   │   ├── 📄 flow_control.py
│   │   │       │   │   │   ├── 📄 h11_impl.py
│   │   │       │   │   │   ├── 📄 httptools_impl.py
│   │   │       │   │   │   ├── 📄 zttp_impl.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 flow_control.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 h11_impl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 httptools_impl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 zttp_impl.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📁 websockets/
│   │   │       │   │   │   ├── 📄 auto.py
│   │   │       │   │   │   ├── 📄 websockets_impl.py
│   │   │       │   │   │   ├── 📄 websockets_sansio_impl.py
│   │   │       │   │   │   ├── 📄 wsproto_impl.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 websockets_impl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 websockets_sansio_impl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 wsproto_impl.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 server.py
│   │   │       │   ├── 📁 supervisors/
│   │   │       │   │   ├── 📄 basereload.py
│   │   │       │   │   ├── 📄 multiprocess.py
│   │   │       │   │   ├── 📄 statreload.py
│   │   │       │   │   ├── 📄 watchfilesreload.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 basereload.cpython-312.pyc
│   │   │       │   │       ├── 📄 multiprocess.cpython-312.pyc
│   │   │       │   │       ├── 📄 statreload.cpython-312.pyc
│   │   │       │   │       ├── 📄 watchfilesreload.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 workers.py
│   │   │       │   ├── 📄 _ansi.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 _subprocess.py
│   │   │       │   ├── 📄 _types.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 config.cpython-312.pyc
│   │   │       │       ├── 📄 importer.cpython-312.pyc
│   │   │       │       ├── 📄 logging.cpython-312.pyc
│   │   │       │       ├── 📄 main.cpython-312.pyc
│   │   │       │       ├── 📄 server.cpython-312.pyc
│   │   │       │       ├── 📄 workers.cpython-312.pyc
│   │   │       │       ├── 📄 _ansi.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _subprocess.cpython-312.pyc
│   │   │       │       ├── 📄 _types.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 uvicorn-0.52.4.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 websockets/
│   │   │       │   ├── 📁 asyncio/
│   │   │       │   │   ├── 📄 async_timeout.py
│   │   │       │   │   ├── 📄 client.py
│   │   │       │   │   ├── 📄 compatibility.py
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 messages.py
│   │   │       │   │   ├── 📄 router.py
│   │   │       │   │   ├── 📄 server.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 async_timeout.cpython-312.pyc
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 compatibility.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 messages.cpython-312.pyc
│   │   │       │   │       ├── 📄 router.cpython-312.pyc
│   │   │       │   │       ├── 📄 server.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 auth.py
│   │   │       │   ├── 📄 cli.py
│   │   │       │   ├── 📄 client.py
│   │   │       │   ├── 📄 connection.py
│   │   │       │   ├── 📄 datastructures.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📁 extensions/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 permessage_deflate.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 permessage_deflate.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 frames.py
│   │   │       │   ├── 📄 headers.py
│   │   │       │   ├── 📄 http.py
│   │   │       │   ├── 📄 http11.py
│   │   │       │   ├── 📄 imports.py
│   │   │       │   ├── 📁 legacy/
│   │   │       │   │   ├── 📄 auth.py
│   │   │       │   │   ├── 📄 client.py
│   │   │       │   │   ├── 📄 exceptions.py
│   │   │       │   │   ├── 📄 framing.py
│   │   │       │   │   ├── 📄 handshake.py
│   │   │       │   │   ├── 📄 http.py
│   │   │       │   │   ├── 📄 protocol.py
│   │   │       │   │   ├── 📄 server.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 auth.cpython-312.pyc
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 framing.cpython-312.pyc
│   │   │       │   │       ├── 📄 handshake.cpython-312.pyc
│   │   │       │   │       ├── 📄 http.cpython-312.pyc
│   │   │       │   │       ├── 📄 protocol.cpython-312.pyc
│   │   │       │   │       ├── 📄 server.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 protocol.py
│   │   │       │   ├── 📄 proxy.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 server.py
│   │   │       │   ├── 📄 speedups.c
│   │   │       │   ├── 📄 speedups.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 speedups.pyi
│   │   │       │   ├── 📄 streams.py
│   │   │       │   ├── 📁 sync/
│   │   │       │   │   ├── 📄 client.py
│   │   │       │   │   ├── 📄 connection.py
│   │   │       │   │   ├── 📄 messages.py
│   │   │       │   │   ├── 📄 router.py
│   │   │       │   │   ├── 📄 server.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 messages.cpython-312.pyc
│   │   │       │   │       ├── 📄 router.cpython-312.pyc
│   │   │       │   │       ├── 📄 server.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 typing.py
│   │   │       │   ├── 📄 uri.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 auth.cpython-312.pyc
│   │   │       │       ├── 📄 cli.cpython-312.pyc
│   │   │       │       ├── 📄 client.cpython-312.pyc
│   │   │       │       ├── 📄 connection.cpython-312.pyc
│   │   │       │       ├── 📄 datastructures.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 frames.cpython-312.pyc
│   │   │       │       ├── 📄 headers.cpython-312.pyc
│   │   │       │       ├── 📄 http.cpython-312.pyc
│   │   │       │       ├── 📄 http11.cpython-312.pyc
│   │   │       │       ├── 📄 imports.cpython-312.pyc
│   │   │       │       ├── 📄 protocol.cpython-312.pyc
│   │   │       │       ├── 📄 proxy.cpython-312.pyc
│   │   │       │       ├── 📄 server.cpython-312.pyc
│   │   │       │       ├── 📄 streams.cpython-312.pyc
│   │   │       │       ├── 📄 typing.cpython-312.pyc
│   │   │       │       ├── 📄 uri.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 websockets-16.1.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📄 _cffi_backend.cp312-win_amd64.pyd
│   │   │       └── 📁 __pycache__/
│   │   │           └── 📄 typing_extensions.cpython-312.pyc
│   │   ├── 📄 pyvenv.cfg
│   │   └── 📁 Scripts/
│   │       ├── 📄 activate
│   │       ├── 📄 activate.bat
│   │       ├── 📄 Activate.ps1
│   │       ├── 📄 cffi-gen-src.exe
│   │       ├── 📄 deactivate.bat
│   │       ├── 📄 distro.exe
│   │       ├── 📄 fastapi.exe
│   │       ├── 📄 httpx.exe
│   │       ├── 📄 idna.exe
│   │       ├── 📄 normalizer.exe
│   │       ├── 📄 pip.exe
│   │       ├── 📄 pip3.12.exe
│   │       ├── 📄 pip3.exe
│   │       ├── 📄 python.exe
│   │       ├── 📄 pythonw.exe
│   │       ├── 📄 uvicorn.exe
│   │       └── 📄 websockets.exe
│   └── 📁 __pycache__/
│       ├── 📄 database.cpython-312.pyc
│       ├── 📄 main.cpython-312.pyc
│       └── 📄 models.cpython-312.pyc
└── 📁 trazabilidad-frontend/
    ├── 📄 index.html
    ├── 📄 package-lock.json
    ├── 📄 package.json
    ├── 📁 public/
    │   ├── 📄 favicon.svg
    │   └── 📄 icons.svg
    ├── 📁 src/
    │   ├── 📄 App.css
    │   ├── 📄 App.jsx
    │   ├── 📁 assets/
    │   │   ├── 📄 hero.png
    │   │   ├── 📄 react.svg
    │   │   └── 📄 vite.svg
    │   ├── 📄 index.css
    │   └── 📄 main.jsx
    └── 📄 vite.config.js
```
<!-- PROJECT_STRUCTURE_END -->
