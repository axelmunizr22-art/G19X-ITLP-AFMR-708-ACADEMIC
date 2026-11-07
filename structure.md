G19X-ITLP-AFMR-708-ACADEMIC/
├── docs/                      # Especificaciones formales del producto
│   ├── PRD.md                 # Documento de Requisitos del Producto (PRD)
│   ├── MVP.md                 # Alcance y criterios de aceptación del MVP
│   └── evidencias/            # Evidencias de pruebas y validación
│       └── instalacion-limpia.md # Bitácora de instalación y pruebas en limpio
├── trazabilidad-backend/      # Servidor API REST con FastAPI
│   ├── tests/                 # Carpeta de pruebas unitarias y de integración
│   │   └── test_analisis.py # Archivo de pruebas con pytest
│   ├── .env.example           # Plantilla limpia de variables de entorno
│   ├── database.py            # Motor de conexión SQLAlchemy y sesión
│   ├── main.py                # Endpoints REST, autenticación y lógica de IA
│   ├── models.py              # Definición de tablas relacionales (3FN)
│   ├── pytest.ini             # Configuración de pytest
│   ├── requirements.txt       # Lista de dependencias de Python
│   └── simulador_iot.py       # Script de simulación de trayectos
├── trazabilidad-frontend/     # Cliente web SPA en React + Vite
│   ├── public/                # Recursos estáticos públicos
│   ├── src/
│   │   ├── assets/            # Imágenes y logos
│   │   ├── components/        # Componentes modulares
│   │   │   ├── Login.jsx        # Componente de inicio de sesión
│   │   │   └── PanelAnalisisIA.jsx # Componente de diagnóstico inteligente
│   │   ├── App.css             # Estilos globales
│   │   ├── App.jsx             # Panel de control principal
│   │   ├── index.css           # Configuración de estilos base
│   │   └── main.jsx            # Punto de entrada Vite
│   ├── package.json           # Dependencias de Node.js / NPM
│   └── vite.config.js         # Configuración del empaquetador Vite
├── .gitignore                 # Exclusión de venv, .env, dist y trazabilidad.db
└── README.md                  # Documentation principal del proyecto




<!-- PROJECT_STRUCTURE_START -->
```
├── 📄 .gitignore
├── 📁 docs/
│   ├── 📁 evidencias/
│   │   └── 📄 instalacion-limpia.md
│   ├── 📄 MVP.md
│   └── 📄 PRD.md
├── 📄 README.md
├── 📄 structure.md
├── 📁 trazabilidad-backend/
│   ├── 📄 .env
│   ├── 📄 .env.example
│   ├── 📁 .pytest_cache/
│   │   ├── 📄 .gitignore
│   │   ├── 📄 CACHEDIR.TAG
│   │   ├── 📄 README.md
│   │   └── 📁 v/
│   │       └── 📁 cache/
│   │           ├── 📄 lastfailed
│   │           ├── 📄 nodeids
│   │           └── 📄 stepwise
│   ├── 📄 database.py
│   ├── 📄 main.py
│   ├── 📄 models.py
│   ├── 📄 pytest.ini
│   ├── 📄 requirements.txt
│   ├── 📄 simulador_iot.py
│   ├── 📁 tests/
│   │   ├── 📄 test_analisis.py
│   │   └── 📁 __pycache__/
│   │       └── 📄 test_analisis.cpython-312-pytest-8.3.4.pyc
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
│   │   │       │   │       ├── 📄 _eventloop.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _eventloop.cpython-312.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312.pyc
│   │   │       │   │       ├── 📄 _subprocesses.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _subprocesses.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312.pyc
│   │   │       │   │       ├── 📄 __init__.cpython-312-pytest-8.3.4.pyc
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
│   │   │       │   │       ├── 📄 memory.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 memory.cpython-312.pyc
│   │   │       │   │       ├── 📄 stapled.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 stapled.cpython-312.pyc
│   │   │       │   │       ├── 📄 text.cpython-312.pyc
│   │   │       │   │       ├── 📄 tls.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 tls.cpython-312.pyc
│   │   │       │   │       ├── 📄 __init__.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 to_interpreter.py
│   │   │       │   ├── 📄 to_process.py
│   │   │       │   ├── 📄 to_thread.py
│   │   │       │   ├── 📁 _backends/
│   │   │       │   │   ├── 📄 _asyncio.py
│   │   │       │   │   ├── 📄 _trio.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _asyncio.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _asyncio.cpython-312.pyc
│   │   │       │   │       ├── 📄 _trio.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _trio.cpython-312.pyc
│   │   │       │   │       ├── 📄 __init__.cpython-312-pytest-8.3.4.pyc
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
│   │   │       │   │       ├── 📄 _eventloop.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _eventloop.cpython-312.pyc
│   │   │       │   │       ├── 📄 _exceptions.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 _fileio.cpython-312.pyc
│   │   │       │   │       ├── 📄 _futures.cpython-312.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _resources.cpython-312.pyc
│   │   │       │   │       ├── 📄 _signals.cpython-312.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _sockets.cpython-312.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _streams.cpython-312.pyc
│   │   │       │   │       ├── 📄 _subprocesses.cpython-312.pyc
│   │   │       │   │       ├── 📄 _synchronization.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _synchronization.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _tasks.cpython-312.pyc
│   │   │       │   │       ├── 📄 _tempfile.cpython-312.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _testing.cpython-312.pyc
│   │   │       │   │       ├── 📄 _typedattr.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       ├── 📄 _typedattr.cpython-312.pyc
│   │   │       │   │       ├── 📄 __init__.cpython-312-pytest-8.3.4.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _lazyimport.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 from_thread.cpython-312-pytest-8.3.4.pyc
│   │   │       │       ├── 📄 from_thread.cpython-312.pyc
│   │   │       │       ├── 📄 functools.cpython-312.pyc
│   │   │       │       ├── 📄 itertools.cpython-312.pyc
│   │   │       │       ├── 📄 lowlevel.cpython-312-pytest-8.3.4.pyc
│   │   │       │       ├── 📄 lowlevel.cpython-312.pyc
│   │   │       │       ├── 📄 pytest_plugin.cpython-312-pytest-8.3.4.pyc
│   │   │       │       ├── 📄 pytest_plugin.cpython-312.pyc
│   │   │       │       ├── 📄 to_interpreter.cpython-312.pyc
│   │   │       │       ├── 📄 to_process.cpython-312.pyc
│   │   │       │       ├── 📄 to_thread.cpython-312-pytest-8.3.4.pyc
│   │   │       │       ├── 📄 to_thread.cpython-312.pyc
│   │   │       │       ├── 📄 _lazyimport.cpython-312-pytest-8.3.4.pyc
│   │   │       │       ├── 📄 _lazyimport.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312-pytest-8.3.4.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 anyio-4.16.0.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 bcrypt/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _bcrypt.pyd
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __init__.pyi
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 bcrypt-4.1.2.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
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
│   │   │       ├── 📁 certifi-2026.10.23.dist-info/
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
│   │   │       ├── 📁 colorama/
│   │   │       │   ├── 📄 ansi.py
│   │   │       │   ├── 📄 ansitowin32.py
│   │   │       │   ├── 📄 initialise.py
│   │   │       │   ├── 📁 tests/
│   │   │       │   │   ├── 📄 ansitowin32_test.py
│   │   │       │   │   ├── 📄 ansi_test.py
│   │   │       │   │   ├── 📄 initialise_test.py
│   │   │       │   │   ├── 📄 isatty_test.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 winterm_test.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 ansitowin32_test.cpython-312.pyc
│   │   │       │   │       ├── 📄 ansi_test.cpython-312.pyc
│   │   │       │   │       ├── 📄 initialise_test.cpython-312.pyc
│   │   │       │   │       ├── 📄 isatty_test.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 winterm_test.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 win32.py
│   │   │       │   ├── 📄 winterm.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 ansi.cpython-312.pyc
│   │   │       │       ├── 📄 ansitowin32.cpython-312.pyc
│   │   │       │       ├── 📄 initialise.cpython-312.pyc
│   │   │       │       ├── 📄 win32.cpython-312.pyc
│   │   │       │       ├── 📄 winterm.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 colorama-0.4.6.dist-info/
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
│   │   │       ├── 📁 dotenv/
│   │   │       │   ├── 📄 cli.py
│   │   │       │   ├── 📄 ipython.py
│   │   │       │   ├── 📄 main.py
│   │   │       │   ├── 📄 parser.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 variables.py
│   │   │       │   ├── 📄 version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 cli.cpython-312.pyc
│   │   │       │       ├── 📄 ipython.cpython-312.pyc
│   │   │       │       ├── 📄 main.cpython-312.pyc
│   │   │       │       ├── 📄 parser.cpython-312.pyc
│   │   │       │       ├── 📄 variables.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 ecdsa/
│   │   │       │   ├── 📄 curves.py
│   │   │       │   ├── 📄 der.py
│   │   │       │   ├── 📄 ecdh.py
│   │   │       │   ├── 📄 ecdsa.py
│   │   │       │   ├── 📄 eddsa.py
│   │   │       │   ├── 📄 ellipticcurve.py
│   │   │       │   ├── 📄 errors.py
│   │   │       │   ├── 📄 keys.py
│   │   │       │   ├── 📄 numbertheory.py
│   │   │       │   ├── 📄 rfc6979.py
│   │   │       │   ├── 📄 ssh.py
│   │   │       │   ├── 📄 test_curves.py
│   │   │       │   ├── 📄 test_der.py
│   │   │       │   ├── 📄 test_ecdh.py
│   │   │       │   ├── 📄 test_ecdsa.py
│   │   │       │   ├── 📄 test_eddsa.py
│   │   │       │   ├── 📄 test_ellipticcurve.py
│   │   │       │   ├── 📄 test_jacobi.py
│   │   │       │   ├── 📄 test_keys.py
│   │   │       │   ├── 📄 test_malformed_sigs.py
│   │   │       │   ├── 📄 test_numbertheory.py
│   │   │       │   ├── 📄 test_pyecdsa.py
│   │   │       │   ├── 📄 test_rw_lock.py
│   │   │       │   ├── 📄 test_sha3.py
│   │   │       │   ├── 📄 util.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 _rwlock.py
│   │   │       │   ├── 📄 _sha3.py
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 curves.cpython-312.pyc
│   │   │       │       ├── 📄 der.cpython-312.pyc
│   │   │       │       ├── 📄 ecdh.cpython-312.pyc
│   │   │       │       ├── 📄 ecdsa.cpython-312.pyc
│   │   │       │       ├── 📄 eddsa.cpython-312.pyc
│   │   │       │       ├── 📄 ellipticcurve.cpython-312.pyc
│   │   │       │       ├── 📄 errors.cpython-312.pyc
│   │   │       │       ├── 📄 keys.cpython-312.pyc
│   │   │       │       ├── 📄 numbertheory.cpython-312.pyc
│   │   │       │       ├── 📄 rfc6979.cpython-312.pyc
│   │   │       │       ├── 📄 ssh.cpython-312.pyc
│   │   │       │       ├── 📄 test_curves.cpython-312.pyc
│   │   │       │       ├── 📄 test_der.cpython-312.pyc
│   │   │       │       ├── 📄 test_ecdh.cpython-312.pyc
│   │   │       │       ├── 📄 test_ecdsa.cpython-312.pyc
│   │   │       │       ├── 📄 test_eddsa.cpython-312.pyc
│   │   │       │       ├── 📄 test_ellipticcurve.cpython-312.pyc
│   │   │       │       ├── 📄 test_jacobi.cpython-312.pyc
│   │   │       │       ├── 📄 test_keys.cpython-312.pyc
│   │   │       │       ├── 📄 test_malformed_sigs.cpython-312.pyc
│   │   │       │       ├── 📄 test_numbertheory.cpython-312.pyc
│   │   │       │       ├── 📄 test_pyecdsa.cpython-312.pyc
│   │   │       │       ├── 📄 test_rw_lock.cpython-312.pyc
│   │   │       │       ├── 📄 test_sha3.cpython-312.pyc
│   │   │       │       ├── 📄 util.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _rwlock.cpython-312.pyc
│   │   │       │       ├── 📄 _sha3.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 ecdsa-0.19.2.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 fastapi/
│   │   │       │   ├── 📄 applications.py
│   │   │       │   ├── 📄 background.py
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
│   │   │       │   │   ├── 📄 cors.py
│   │   │       │   │   ├── 📄 gzip.py
│   │   │       │   │   ├── 📄 httpsredirect.py
│   │   │       │   │   ├── 📄 trustedhost.py
│   │   │       │   │   ├── 📄 wsgi.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
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
│   │   │       │   ├── 📄 staticfiles.py
│   │   │       │   ├── 📄 templating.py
│   │   │       │   ├── 📄 testclient.py
│   │   │       │   ├── 📄 types.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 websockets.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 applications.cpython-312.pyc
│   │   │       │       ├── 📄 background.cpython-312.pyc
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
│   │   │       │       ├── 📄 staticfiles.cpython-312.pyc
│   │   │       │       ├── 📄 templating.cpython-312.pyc
│   │   │       │       ├── 📄 testclient.cpython-312.pyc
│   │   │       │       ├── 📄 types.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 websockets.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 fastapi-0.110.0.dist-info/
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
│   │   │       │   │   ├── 📄 errors.py
│   │   │       │   │   ├── 📄 files.py
│   │   │       │   │   ├── 📄 live.py
│   │   │       │   │   ├── 📄 models.py
│   │   │       │   │   ├── 📄 pagers.py
│   │   │       │   │   ├── 📄 tunings.py
│   │   │       │   │   ├── 📄 types.py
│   │   │       │   │   ├── 📄 _api_client.py
│   │   │       │   │   ├── 📄 _automatic_function_calling_util.py
│   │   │       │   │   ├── 📄 _common.py
│   │   │       │   │   ├── 📄 _extra_utils.py
│   │   │       │   │   ├── 📄 _replay_api_client.py
│   │   │       │   │   ├── 📄 _test_api_client.py
│   │   │       │   │   ├── 📄 _transformers.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 batches.cpython-312.pyc
│   │   │       │   │       ├── 📄 caches.cpython-312.pyc
│   │   │       │   │       ├── 📄 chats.cpython-312.pyc
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 errors.cpython-312.pyc
│   │   │       │   │       ├── 📄 files.cpython-312.pyc
│   │   │       │   │       ├── 📄 live.cpython-312.pyc
│   │   │       │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │       ├── 📄 pagers.cpython-312.pyc
│   │   │       │   │       ├── 📄 tunings.cpython-312.pyc
│   │   │       │   │       ├── 📄 types.cpython-312.pyc
│   │   │       │   │       ├── 📄 _api_client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _automatic_function_calling_util.cpython-312.pyc
│   │   │       │   │       ├── 📄 _common.cpython-312.pyc
│   │   │       │   │       ├── 📄 _extra_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _replay_api_client.cpython-312.pyc
│   │   │       │   │       ├── 📄 _test_api_client.cpython-312.pyc
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
│   │   │       ├── 📁 google_genai-0.3.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
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
│   │   │       │   ├── 📄 _compat.py
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
│   │   │       │   │   ├── 📄 _compat.cpython-312.pyc
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
│   │   │       ├── 📁 httpx-0.27.2.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
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
│   │   │       ├── 📁 idna-3.20.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE.md
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 iniconfig/
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _parse.py
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 _parse.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 iniconfig-2.3.1.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 jose/
│   │   │       │   ├── 📁 backends/
│   │   │       │   │   ├── 📄 base.py
│   │   │       │   │   ├── 📄 cryptography_backend.py
│   │   │       │   │   ├── 📄 ecdsa_backend.py
│   │   │       │   │   ├── 📄 native.py
│   │   │       │   │   ├── 📄 rsa_backend.py
│   │   │       │   │   ├── 📄 _asn1.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │       ├── 📄 cryptography_backend.cpython-312.pyc
│   │   │       │   │       ├── 📄 ecdsa_backend.cpython-312.pyc
│   │   │       │   │       ├── 📄 native.cpython-312.pyc
│   │   │       │   │       ├── 📄 rsa_backend.cpython-312.pyc
│   │   │       │   │       ├── 📄 _asn1.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 constants.py
│   │   │       │   ├── 📄 exceptions.py
│   │   │       │   ├── 📄 jwe.py
│   │   │       │   ├── 📄 jwk.py
│   │   │       │   ├── 📄 jws.py
│   │   │       │   ├── 📄 jwt.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 constants.cpython-312.pyc
│   │   │       │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │       ├── 📄 jwe.cpython-312.pyc
│   │   │       │       ├── 📄 jwk.cpython-312.pyc
│   │   │       │       ├── 📄 jws.cpython-312.pyc
│   │   │       │       ├── 📄 jwt.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 packaging/
│   │   │       │   ├── 📄 dependency_groups.py
│   │   │       │   ├── 📄 direct_url.py
│   │   │       │   ├── 📄 errors.py
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   ├── 📄 _spdx.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 _spdx.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 markers.py
│   │   │       │   ├── 📄 metadata.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 pylock.py
│   │   │       │   ├── 📄 ranges.py
│   │   │       │   ├── 📄 requirements.py
│   │   │       │   ├── 📄 specifiers.py
│   │   │       │   ├── 📄 tags.py
│   │   │       │   ├── 📄 utils.py
│   │   │       │   ├── 📄 version.py
│   │   │       │   ├── 📄 _elffile.py
│   │   │       │   ├── 📄 _manylinux.py
│   │   │       │   ├── 📄 _musllinux.py
│   │   │       │   ├── 📄 _parser.py
│   │   │       │   ├── 📄 _ranges.py
│   │   │       │   ├── 📄 _structures.py
│   │   │       │   ├── 📄 _tokenizer.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 dependency_groups.cpython-312.pyc
│   │   │       │       ├── 📄 direct_url.cpython-312.pyc
│   │   │       │       ├── 📄 errors.cpython-312.pyc
│   │   │       │       ├── 📄 markers.cpython-312.pyc
│   │   │       │       ├── 📄 metadata.cpython-312.pyc
│   │   │       │       ├── 📄 pylock.cpython-312.pyc
│   │   │       │       ├── 📄 ranges.cpython-312.pyc
│   │   │       │       ├── 📄 requirements.cpython-312.pyc
│   │   │       │       ├── 📄 specifiers.cpython-312.pyc
│   │   │       │       ├── 📄 tags.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 _elffile.cpython-312.pyc
│   │   │       │       ├── 📄 _manylinux.cpython-312.pyc
│   │   │       │       ├── 📄 _musllinux.cpython-312.pyc
│   │   │       │       ├── 📄 _parser.cpython-312.pyc
│   │   │       │       ├── 📄 _ranges.cpython-312.pyc
│   │   │       │       ├── 📄 _structures.cpython-312.pyc
│   │   │       │       ├── 📄 _tokenizer.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 packaging-26.3.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   ├── 📄 LICENSE
│   │   │       │   │   ├── 📄 LICENSE.APACHE
│   │   │       │   │   └── 📄 LICENSE.BSD
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 passlib/
│   │   │       │   ├── 📄 apache.py
│   │   │       │   ├── 📄 apps.py
│   │   │       │   ├── 📄 context.py
│   │   │       │   ├── 📁 crypto/
│   │   │       │   │   ├── 📄 des.py
│   │   │       │   │   ├── 📄 digest.py
│   │   │       │   │   ├── 📁 scrypt/
│   │   │       │   │   │   ├── 📄 _builtin.py
│   │   │       │   │   │   ├── 📄 _gen_files.py
│   │   │       │   │   │   ├── 📄 _salsa.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 _builtin.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _gen_files.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _salsa.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📁 _blowfish/
│   │   │       │   │   │   ├── 📄 base.py
│   │   │       │   │   │   ├── 📄 unrolled.py
│   │   │       │   │   │   ├── 📄 _gen_files.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 unrolled.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 _gen_files.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 _md4.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 des.cpython-312.pyc
│   │   │       │   │       ├── 📄 digest.cpython-312.pyc
│   │   │       │   │       ├── 📄 _md4.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 exc.py
│   │   │       │   ├── 📁 ext/
│   │   │       │   │   ├── 📁 django/
│   │   │       │   │   │   ├── 📄 models.py
│   │   │       │   │   │   ├── 📄 utils.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 models.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 handlers/
│   │   │       │   │   ├── 📄 argon2.py
│   │   │       │   │   ├── 📄 bcrypt.py
│   │   │       │   │   ├── 📄 cisco.py
│   │   │       │   │   ├── 📄 des_crypt.py
│   │   │       │   │   ├── 📄 digests.py
│   │   │       │   │   ├── 📄 django.py
│   │   │       │   │   ├── 📄 fshp.py
│   │   │       │   │   ├── 📄 ldap_digests.py
│   │   │       │   │   ├── 📄 md5_crypt.py
│   │   │       │   │   ├── 📄 misc.py
│   │   │       │   │   ├── 📄 mssql.py
│   │   │       │   │   ├── 📄 mysql.py
│   │   │       │   │   ├── 📄 oracle.py
│   │   │       │   │   ├── 📄 pbkdf2.py
│   │   │       │   │   ├── 📄 phpass.py
│   │   │       │   │   ├── 📄 postgres.py
│   │   │       │   │   ├── 📄 roundup.py
│   │   │       │   │   ├── 📄 scram.py
│   │   │       │   │   ├── 📄 scrypt.py
│   │   │       │   │   ├── 📄 sha1_crypt.py
│   │   │       │   │   ├── 📄 sha2_crypt.py
│   │   │       │   │   ├── 📄 sun_md5_crypt.py
│   │   │       │   │   ├── 📄 windows.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 argon2.cpython-312.pyc
│   │   │       │   │       ├── 📄 bcrypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 cisco.cpython-312.pyc
│   │   │       │   │       ├── 📄 des_crypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 digests.cpython-312.pyc
│   │   │       │   │       ├── 📄 django.cpython-312.pyc
│   │   │       │   │       ├── 📄 fshp.cpython-312.pyc
│   │   │       │   │       ├── 📄 ldap_digests.cpython-312.pyc
│   │   │       │   │       ├── 📄 md5_crypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 misc.cpython-312.pyc
│   │   │       │   │       ├── 📄 mssql.cpython-312.pyc
│   │   │       │   │       ├── 📄 mysql.cpython-312.pyc
│   │   │       │   │       ├── 📄 oracle.cpython-312.pyc
│   │   │       │   │       ├── 📄 pbkdf2.cpython-312.pyc
│   │   │       │   │       ├── 📄 phpass.cpython-312.pyc
│   │   │       │   │       ├── 📄 postgres.cpython-312.pyc
│   │   │       │   │       ├── 📄 roundup.cpython-312.pyc
│   │   │       │   │       ├── 📄 scram.cpython-312.pyc
│   │   │       │   │       ├── 📄 scrypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 sha1_crypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 sha2_crypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 sun_md5_crypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 windows.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 hash.py
│   │   │       │   ├── 📄 hosts.py
│   │   │       │   ├── 📄 ifc.py
│   │   │       │   ├── 📄 pwd.py
│   │   │       │   ├── 📄 registry.py
│   │   │       │   ├── 📁 tests/
│   │   │       │   │   ├── 📄 backports.py
│   │   │       │   │   ├── 📄 sample1.cfg
│   │   │       │   │   ├── 📄 sample1b.cfg
│   │   │       │   │   ├── 📄 sample1c.cfg
│   │   │       │   │   ├── 📄 sample_config_1s.cfg
│   │   │       │   │   ├── 📄 test_apache.py
│   │   │       │   │   ├── 📄 test_apps.py
│   │   │       │   │   ├── 📄 test_context.py
│   │   │       │   │   ├── 📄 test_context_deprecated.py
│   │   │       │   │   ├── 📄 test_crypto_builtin_md4.py
│   │   │       │   │   ├── 📄 test_crypto_des.py
│   │   │       │   │   ├── 📄 test_crypto_digest.py
│   │   │       │   │   ├── 📄 test_crypto_scrypt.py
│   │   │       │   │   ├── 📄 test_ext_django.py
│   │   │       │   │   ├── 📄 test_ext_django_source.py
│   │   │       │   │   ├── 📄 test_handlers.py
│   │   │       │   │   ├── 📄 test_handlers_argon2.py
│   │   │       │   │   ├── 📄 test_handlers_bcrypt.py
│   │   │       │   │   ├── 📄 test_handlers_cisco.py
│   │   │       │   │   ├── 📄 test_handlers_django.py
│   │   │       │   │   ├── 📄 test_handlers_pbkdf2.py
│   │   │       │   │   ├── 📄 test_handlers_scrypt.py
│   │   │       │   │   ├── 📄 test_hosts.py
│   │   │       │   │   ├── 📄 test_pwd.py
│   │   │       │   │   ├── 📄 test_registry.py
│   │   │       │   │   ├── 📄 test_totp.py
│   │   │       │   │   ├── 📄 test_utils.py
│   │   │       │   │   ├── 📄 test_utils_handlers.py
│   │   │       │   │   ├── 📄 test_utils_md4.py
│   │   │       │   │   ├── 📄 test_utils_pbkdf2.py
│   │   │       │   │   ├── 📄 test_win32.py
│   │   │       │   │   ├── 📄 tox_support.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 _test_bad_register.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   ├── 📄 __main__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 backports.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_apache.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_apps.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_context.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_context_deprecated.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_crypto_builtin_md4.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_crypto_des.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_crypto_digest.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_crypto_scrypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_ext_django.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_ext_django_source.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_argon2.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_bcrypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_cisco.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_django.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_pbkdf2.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_handlers_scrypt.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_hosts.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_pwd.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_registry.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_totp.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_utils_handlers.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_utils_md4.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_utils_pbkdf2.cpython-312.pyc
│   │   │       │   │       ├── 📄 test_win32.cpython-312.pyc
│   │   │       │   │       ├── 📄 tox_support.cpython-312.pyc
│   │   │       │   │       ├── 📄 utils.cpython-312.pyc
│   │   │       │   │       ├── 📄 _test_bad_register.cpython-312.pyc
│   │   │       │   │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │   │       └── 📄 __main__.cpython-312.pyc
│   │   │       │   ├── 📄 totp.py
│   │   │       │   ├── 📁 utils/
│   │   │       │   │   ├── 📄 binary.py
│   │   │       │   │   ├── 📁 compat/
│   │   │       │   │   │   ├── 📄 _ordered_dict.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 _ordered_dict.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 decor.py
│   │   │       │   │   ├── 📄 des.py
│   │   │       │   │   ├── 📄 handlers.py
│   │   │       │   │   ├── 📄 md4.py
│   │   │       │   │   ├── 📄 pbkdf2.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 binary.cpython-312.pyc
│   │   │       │   │       ├── 📄 decor.cpython-312.pyc
│   │   │       │   │       ├── 📄 des.cpython-312.pyc
│   │   │       │   │       ├── 📄 handlers.cpython-312.pyc
│   │   │       │   │       ├── 📄 md4.cpython-312.pyc
│   │   │       │   │       ├── 📄 pbkdf2.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 win32.py
│   │   │       │   ├── 📁 _data/
│   │   │       │   │   └── 📁 wordsets/
│   │   │       │   │       ├── 📄 bip39.txt
│   │   │       │   │       ├── 📄 eff_long.txt
│   │   │       │   │       ├── 📄 eff_prefixed.txt
│   │   │       │   │       └── 📄 eff_short.txt
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 apache.cpython-312.pyc
│   │   │       │       ├── 📄 apps.cpython-312.pyc
│   │   │       │       ├── 📄 context.cpython-312.pyc
│   │   │       │       ├── 📄 exc.cpython-312.pyc
│   │   │       │       ├── 📄 hash.cpython-312.pyc
│   │   │       │       ├── 📄 hosts.cpython-312.pyc
│   │   │       │       ├── 📄 ifc.cpython-312.pyc
│   │   │       │       ├── 📄 pwd.cpython-312.pyc
│   │   │       │       ├── 📄 registry.cpython-312.pyc
│   │   │       │       ├── 📄 totp.cpython-312.pyc
│   │   │       │       ├── 📄 win32.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 passlib-1.7.4.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   ├── 📄 WHEEL
│   │   │       │   └── 📄 zip-safe
│   │   │       ├── 📁 PIL/
│   │   │       │   ├── 📄 AvifImagePlugin.py
│   │   │       │   ├── 📄 BdfFontFile.py
│   │   │       │   ├── 📄 BlpImagePlugin.py
│   │   │       │   ├── 📄 BmpImagePlugin.py
│   │   │       │   ├── 📄 BufrStubImagePlugin.py
│   │   │       │   ├── 📄 ContainerIO.py
│   │   │       │   ├── 📄 CurImagePlugin.py
│   │   │       │   ├── 📄 DcxImagePlugin.py
│   │   │       │   ├── 📄 DdsImagePlugin.py
│   │   │       │   ├── 📄 EpsImagePlugin.py
│   │   │       │   ├── 📄 ExifTags.py
│   │   │       │   ├── 📄 features.py
│   │   │       │   ├── 📄 FitsImagePlugin.py
│   │   │       │   ├── 📄 FliImagePlugin.py
│   │   │       │   ├── 📄 FontFile.py
│   │   │       │   ├── 📄 FpxImagePlugin.py
│   │   │       │   ├── 📄 FtexImagePlugin.py
│   │   │       │   ├── 📄 GbrImagePlugin.py
│   │   │       │   ├── 📄 GdImageFile.py
│   │   │       │   ├── 📄 GifImagePlugin.py
│   │   │       │   ├── 📄 GimpGradientFile.py
│   │   │       │   ├── 📄 GimpPaletteFile.py
│   │   │       │   ├── 📄 GribStubImagePlugin.py
│   │   │       │   ├── 📄 Hdf5StubImagePlugin.py
│   │   │       │   ├── 📄 IcnsImagePlugin.py
│   │   │       │   ├── 📄 IcoImagePlugin.py
│   │   │       │   ├── 📄 Image.py
│   │   │       │   ├── 📄 ImageChops.py
│   │   │       │   ├── 📄 ImageCms.py
│   │   │       │   ├── 📄 ImageColor.py
│   │   │       │   ├── 📄 ImageDraw.py
│   │   │       │   ├── 📄 ImageDraw2.py
│   │   │       │   ├── 📄 ImageEnhance.py
│   │   │       │   ├── 📄 ImageFile.py
│   │   │       │   ├── 📄 ImageFilter.py
│   │   │       │   ├── 📄 ImageFont.py
│   │   │       │   ├── 📄 ImageGrab.py
│   │   │       │   ├── 📄 ImageMath.py
│   │   │       │   ├── 📄 ImageMode.py
│   │   │       │   ├── 📄 ImageMorph.py
│   │   │       │   ├── 📄 ImageOps.py
│   │   │       │   ├── 📄 ImagePalette.py
│   │   │       │   ├── 📄 ImagePath.py
│   │   │       │   ├── 📄 ImageQt.py
│   │   │       │   ├── 📄 ImageSequence.py
│   │   │       │   ├── 📄 ImageShow.py
│   │   │       │   ├── 📄 ImageStat.py
│   │   │       │   ├── 📄 ImageTk.py
│   │   │       │   ├── 📄 ImageTransform.py
│   │   │       │   ├── 📄 ImageWin.py
│   │   │       │   ├── 📄 ImImagePlugin.py
│   │   │       │   ├── 📄 ImtImagePlugin.py
│   │   │       │   ├── 📄 IptcImagePlugin.py
│   │   │       │   ├── 📄 Jpeg2KImagePlugin.py
│   │   │       │   ├── 📄 JpegImagePlugin.py
│   │   │       │   ├── 📄 JpegPresets.py
│   │   │       │   ├── 📄 McIdasImagePlugin.py
│   │   │       │   ├── 📄 MicImagePlugin.py
│   │   │       │   ├── 📄 MpegImagePlugin.py
│   │   │       │   ├── 📄 MpoImagePlugin.py
│   │   │       │   ├── 📄 MspImagePlugin.py
│   │   │       │   ├── 📄 PaletteFile.py
│   │   │       │   ├── 📄 PalmImagePlugin.py
│   │   │       │   ├── 📄 PcdImagePlugin.py
│   │   │       │   ├── 📄 PcfFontFile.py
│   │   │       │   ├── 📄 PcxImagePlugin.py
│   │   │       │   ├── 📄 PdfImagePlugin.py
│   │   │       │   ├── 📄 PdfParser.py
│   │   │       │   ├── 📄 PixarImagePlugin.py
│   │   │       │   ├── 📄 PngImagePlugin.py
│   │   │       │   ├── 📄 PpmImagePlugin.py
│   │   │       │   ├── 📄 PsdImagePlugin.py
│   │   │       │   ├── 📄 PSDraw.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 QoiImagePlugin.py
│   │   │       │   ├── 📄 report.py
│   │   │       │   ├── 📄 SgiImagePlugin.py
│   │   │       │   ├── 📄 SpiderImagePlugin.py
│   │   │       │   ├── 📄 SunImagePlugin.py
│   │   │       │   ├── 📄 TarIO.py
│   │   │       │   ├── 📄 TgaImagePlugin.py
│   │   │       │   ├── 📄 TiffImagePlugin.py
│   │   │       │   ├── 📄 TiffTags.py
│   │   │       │   ├── 📄 WalImageFile.py
│   │   │       │   ├── 📄 WebPImagePlugin.py
│   │   │       │   ├── 📄 WmfImagePlugin.py
│   │   │       │   ├── 📄 XbmImagePlugin.py
│   │   │       │   ├── 📄 XpmImagePlugin.py
│   │   │       │   ├── 📄 XVThumbImagePlugin.py
│   │   │       │   ├── 📄 _avif.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _avif.pyi
│   │   │       │   ├── 📄 _binary.py
│   │   │       │   ├── 📄 _deprecate.py
│   │   │       │   ├── 📄 _imaging.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imaging.pyi
│   │   │       │   ├── 📄 _imagingcms.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imagingcms.pyi
│   │   │       │   ├── 📄 _imagingft.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imagingft.pyi
│   │   │       │   ├── 📄 _imagingmath.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imagingmath.pyi
│   │   │       │   ├── 📄 _imagingmorph.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imagingmorph.pyi
│   │   │       │   ├── 📄 _imagingtk.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _imagingtk.pyi
│   │   │       │   ├── 📄 _tkinter_finder.py
│   │   │       │   ├── 📄 _typing.py
│   │   │       │   ├── 📄 _util.py
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 _webp.cp312-win_amd64.pyd
│   │   │       │   ├── 📄 _webp.pyi
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 AvifImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 BdfFontFile.cpython-312.pyc
│   │   │       │       ├── 📄 BlpImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 BmpImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 BufrStubImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 ContainerIO.cpython-312.pyc
│   │   │       │       ├── 📄 CurImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 DcxImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 DdsImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 EpsImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 ExifTags.cpython-312.pyc
│   │   │       │       ├── 📄 features.cpython-312.pyc
│   │   │       │       ├── 📄 FitsImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 FliImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 FontFile.cpython-312.pyc
│   │   │       │       ├── 📄 FpxImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 FtexImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 GbrImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 GdImageFile.cpython-312.pyc
│   │   │       │       ├── 📄 GifImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 GimpGradientFile.cpython-312.pyc
│   │   │       │       ├── 📄 GimpPaletteFile.cpython-312.pyc
│   │   │       │       ├── 📄 GribStubImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 Hdf5StubImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 IcnsImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 IcoImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 Image.cpython-312.pyc
│   │   │       │       ├── 📄 ImageChops.cpython-312.pyc
│   │   │       │       ├── 📄 ImageCms.cpython-312.pyc
│   │   │       │       ├── 📄 ImageColor.cpython-312.pyc
│   │   │       │       ├── 📄 ImageDraw.cpython-312.pyc
│   │   │       │       ├── 📄 ImageDraw2.cpython-312.pyc
│   │   │       │       ├── 📄 ImageEnhance.cpython-312.pyc
│   │   │       │       ├── 📄 ImageFile.cpython-312.pyc
│   │   │       │       ├── 📄 ImageFilter.cpython-312.pyc
│   │   │       │       ├── 📄 ImageFont.cpython-312.pyc
│   │   │       │       ├── 📄 ImageGrab.cpython-312.pyc
│   │   │       │       ├── 📄 ImageMath.cpython-312.pyc
│   │   │       │       ├── 📄 ImageMode.cpython-312.pyc
│   │   │       │       ├── 📄 ImageMorph.cpython-312.pyc
│   │   │       │       ├── 📄 ImageOps.cpython-312.pyc
│   │   │       │       ├── 📄 ImagePalette.cpython-312.pyc
│   │   │       │       ├── 📄 ImagePath.cpython-312.pyc
│   │   │       │       ├── 📄 ImageQt.cpython-312.pyc
│   │   │       │       ├── 📄 ImageSequence.cpython-312.pyc
│   │   │       │       ├── 📄 ImageShow.cpython-312.pyc
│   │   │       │       ├── 📄 ImageStat.cpython-312.pyc
│   │   │       │       ├── 📄 ImageTk.cpython-312.pyc
│   │   │       │       ├── 📄 ImageTransform.cpython-312.pyc
│   │   │       │       ├── 📄 ImageWin.cpython-312.pyc
│   │   │       │       ├── 📄 ImImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 ImtImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 IptcImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 Jpeg2KImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 JpegImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 JpegPresets.cpython-312.pyc
│   │   │       │       ├── 📄 McIdasImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 MicImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 MpegImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 MpoImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 MspImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PaletteFile.cpython-312.pyc
│   │   │       │       ├── 📄 PalmImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PcdImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PcfFontFile.cpython-312.pyc
│   │   │       │       ├── 📄 PcxImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PdfImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PdfParser.cpython-312.pyc
│   │   │       │       ├── 📄 PixarImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PngImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PpmImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PsdImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 PSDraw.cpython-312.pyc
│   │   │       │       ├── 📄 QoiImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 report.cpython-312.pyc
│   │   │       │       ├── 📄 SgiImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 SpiderImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 SunImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 TarIO.cpython-312.pyc
│   │   │       │       ├── 📄 TgaImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 TiffImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 TiffTags.cpython-312.pyc
│   │   │       │       ├── 📄 WalImageFile.cpython-312.pyc
│   │   │       │       ├── 📄 WebPImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 WmfImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 XbmImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 XpmImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 XVThumbImagePlugin.cpython-312.pyc
│   │   │       │       ├── 📄 _binary.cpython-312.pyc
│   │   │       │       ├── 📄 _deprecate.cpython-312.pyc
│   │   │       │       ├── 📄 _tkinter_finder.cpython-312.pyc
│   │   │       │       ├── 📄 _typing.cpython-312.pyc
│   │   │       │       ├── 📄 _util.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 pillow-11.3.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   ├── 📄 WHEEL
│   │   │       │   └── 📄 zip-safe
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
│   │   │       ├── 📁 pluggy/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 _caller.py
│   │   │       │   ├── 📄 _callers.py
│   │   │       │   ├── 📄 _compat.py
│   │   │       │   ├── 📄 _config.py
│   │   │       │   ├── 📄 _decorators.py
│   │   │       │   ├── 📄 _execution.py
│   │   │       │   ├── 📄 _hooks.py
│   │   │       │   ├── 📄 _impl.py
│   │   │       │   ├── 📄 _manager.py
│   │   │       │   ├── 📄 _result.py
│   │   │       │   ├── 📄 _tracing.py
│   │   │       │   ├── 📄 _warnings.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 _caller.cpython-312.pyc
│   │   │       │       ├── 📄 _callers.cpython-312.pyc
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _config.cpython-312.pyc
│   │   │       │       ├── 📄 _decorators.cpython-312.pyc
│   │   │       │       ├── 📄 _execution.cpython-312.pyc
│   │   │       │       ├── 📄 _hooks.cpython-312.pyc
│   │   │       │       ├── 📄 _impl.cpython-312.pyc
│   │   │       │       ├── 📄 _manager.cpython-312.pyc
│   │   │       │       ├── 📄 _result.cpython-312.pyc
│   │   │       │       ├── 📄 _tracing.cpython-312.pyc
│   │   │       │       ├── 📄 _warnings.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 pluggy-1.7.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 licenses/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
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
│   │   │       ├── 📄 py.py
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
│   │   │       │   │   ├── 📄 _fields.py
│   │   │       │   │   ├── 📄 _forward_ref.py
│   │   │       │   │   ├── 📄 _generate_schema.py
│   │   │       │   │   ├── 📄 _generics.py
│   │   │       │   │   ├── 📄 _git.py
│   │   │       │   │   ├── 📄 _internal_dataclass.py
│   │   │       │   │   ├── 📄 _known_annotated_metadata.py
│   │   │       │   │   ├── 📄 _mock_val_ser.py
│   │   │       │   │   ├── 📄 _model_construction.py
│   │   │       │   │   ├── 📄 _repr.py
│   │   │       │   │   ├── 📄 _schema_generation_shared.py
│   │   │       │   │   ├── 📄 _signature.py
│   │   │       │   │   ├── 📄 _std_types_schema.py
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
│   │   │       │   │       ├── 📄 _fields.cpython-312.pyc
│   │   │       │   │       ├── 📄 _forward_ref.cpython-312.pyc
│   │   │       │   │       ├── 📄 _generate_schema.cpython-312.pyc
│   │   │       │   │       ├── 📄 _generics.cpython-312.pyc
│   │   │       │   │       ├── 📄 _git.cpython-312.pyc
│   │   │       │   │       ├── 📄 _internal_dataclass.cpython-312.pyc
│   │   │       │   │       ├── 📄 _known_annotated_metadata.cpython-312.pyc
│   │   │       │   │       ├── 📄 _mock_val_ser.cpython-312.pyc
│   │   │       │   │       ├── 📄 _model_construction.cpython-312.pyc
│   │   │       │   │       ├── 📄 _repr.cpython-312.pyc
│   │   │       │   │       ├── 📄 _schema_generation_shared.cpython-312.pyc
│   │   │       │   │       ├── 📄 _signature.cpython-312.pyc
│   │   │       │   │       ├── 📄 _std_types_schema.cpython-312.pyc
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
│   │   │       ├── 📁 pydantic-2.6.4.dist-info/
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
│   │   │       ├── 📁 pydantic_core-2.16.3.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📁 license_files/
│   │   │       │   │   └── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 pytest/
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   ├── 📄 __main__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 pytest-8.3.4.dist-info/
│   │   │       │   ├── 📄 AUTHORS
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 python_dotenv-1.0.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 python_jose-3.3.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 REQUESTED
│   │   │       │   ├── 📄 top_level.txt
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
│   │   │       ├── 📁 rsa/
│   │   │       │   ├── 📄 asn1.py
│   │   │       │   ├── 📄 cli.py
│   │   │       │   ├── 📄 common.py
│   │   │       │   ├── 📄 core.py
│   │   │       │   ├── 📄 key.py
│   │   │       │   ├── 📄 parallel.py
│   │   │       │   ├── 📄 pem.py
│   │   │       │   ├── 📄 pkcs1.py
│   │   │       │   ├── 📄 pkcs1_v2.py
│   │   │       │   ├── 📄 prime.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 randnum.py
│   │   │       │   ├── 📄 transform.py
│   │   │       │   ├── 📄 util.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 asn1.cpython-312.pyc
│   │   │       │       ├── 📄 cli.cpython-312.pyc
│   │   │       │       ├── 📄 common.cpython-312.pyc
│   │   │       │       ├── 📄 core.cpython-312.pyc
│   │   │       │       ├── 📄 key.cpython-312.pyc
│   │   │       │       ├── 📄 parallel.cpython-312.pyc
│   │   │       │       ├── 📄 pem.cpython-312.pyc
│   │   │       │       ├── 📄 pkcs1.cpython-312.pyc
│   │   │       │       ├── 📄 pkcs1_v2.cpython-312.pyc
│   │   │       │       ├── 📄 prime.cpython-312.pyc
│   │   │       │       ├── 📄 randnum.cpython-312.pyc
│   │   │       │       ├── 📄 transform.cpython-312.pyc
│   │   │       │       ├── 📄 util.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 rsa-4.9.1.dist-info/
│   │   │       │   ├── 📄 entry_points.txt
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📁 six-1.17.0.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📄 six.py
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
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 base.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 cx_oracle.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 dictionary.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 oracledb.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 provision.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 types.cpython-312.pyc
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
│   │   │       ├── 📁 SQLAlchemy-2.0.28.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
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
│   │   │       │   ├── 📄 _compat.py
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
│   │   │       │       ├── 📄 _compat.cpython-312.pyc
│   │   │       │       ├── 📄 _exception_handler.cpython-312.pyc
│   │   │       │       ├── 📄 _utils.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       ├── 📁 starlette-0.36.3.dist-info/
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
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 flow_control.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 h11_impl.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 httptools_impl.cpython-312.pyc
│   │   │       │   │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📁 websockets/
│   │   │       │   │   │   ├── 📄 auto.py
│   │   │       │   │   │   ├── 📄 websockets_impl.py
│   │   │       │   │   │   ├── 📄 wsproto_impl.py
│   │   │       │   │   │   ├── 📄 __init__.py
│   │   │       │   │   │   └── 📁 __pycache__/
│   │   │       │   │   │       ├── 📄 auto.cpython-312.pyc
│   │   │       │   │   │       ├── 📄 websockets_impl.cpython-312.pyc
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
│   │   │       │   │   ├── 📄 watchgodreload.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 basereload.cpython-312.pyc
│   │   │       │   │       ├── 📄 multiprocess.cpython-312.pyc
│   │   │       │   │       ├── 📄 statreload.cpython-312.pyc
│   │   │       │   │       ├── 📄 watchfilesreload.cpython-312.pyc
│   │   │       │   │       ├── 📄 watchgodreload.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 workers.py
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
│   │   │       │       ├── 📄 _subprocess.cpython-312.pyc
│   │   │       │       ├── 📄 _types.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 uvicorn-0.28.0.dist-info/
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
│   │   │       │   │   ├── 📄 server.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 async_timeout.cpython-312.pyc
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 compatibility.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 messages.cpython-312.pyc
│   │   │       │   │       ├── 📄 server.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 auth.py
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
│   │   │       │   │   ├── 📄 server.py
│   │   │       │   │   ├── 📄 utils.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 client.cpython-312.pyc
│   │   │       │   │       ├── 📄 connection.cpython-312.pyc
│   │   │       │   │       ├── 📄 messages.cpython-312.pyc
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
│   │   │       │       ├── 📄 server.cpython-312.pyc
│   │   │       │       ├── 📄 streams.cpython-312.pyc
│   │   │       │       ├── 📄 typing.cpython-312.pyc
│   │   │       │       ├── 📄 uri.cpython-312.pyc
│   │   │       │       ├── 📄 utils.cpython-312.pyc
│   │   │       │       ├── 📄 version.cpython-312.pyc
│   │   │       │       ├── 📄 __init__.cpython-312.pyc
│   │   │       │       └── 📄 __main__.cpython-312.pyc
│   │   │       ├── 📁 websockets-14.2.dist-info/
│   │   │       │   ├── 📄 INSTALLER
│   │   │       │   ├── 📄 LICENSE
│   │   │       │   ├── 📄 METADATA
│   │   │       │   ├── 📄 RECORD
│   │   │       │   ├── 📄 top_level.txt
│   │   │       │   └── 📄 WHEEL
│   │   │       ├── 📄 _cffi_backend.cp312-win_amd64.pyd
│   │   │       ├── 📁 _pytest/
│   │   │       │   ├── 📁 assertion/
│   │   │       │   │   ├── 📄 rewrite.py
│   │   │       │   │   ├── 📄 truncate.py
│   │   │       │   │   ├── 📄 util.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 rewrite.cpython-312.pyc
│   │   │       │   │       ├── 📄 truncate.cpython-312.pyc
│   │   │       │   │       ├── 📄 util.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 cacheprovider.py
│   │   │       │   ├── 📄 capture.py
│   │   │       │   ├── 📄 compat.py
│   │   │       │   ├── 📁 config/
│   │   │       │   │   ├── 📄 argparsing.py
│   │   │       │   │   ├── 📄 compat.py
│   │   │       │   │   ├── 📄 exceptions.py
│   │   │       │   │   ├── 📄 findpaths.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 argparsing.cpython-312.pyc
│   │   │       │   │       ├── 📄 compat.cpython-312.pyc
│   │   │       │   │       ├── 📄 exceptions.cpython-312.pyc
│   │   │       │   │       ├── 📄 findpaths.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 debugging.py
│   │   │       │   ├── 📄 deprecated.py
│   │   │       │   ├── 📄 doctest.py
│   │   │       │   ├── 📄 faulthandler.py
│   │   │       │   ├── 📄 fixtures.py
│   │   │       │   ├── 📄 freeze_support.py
│   │   │       │   ├── 📄 helpconfig.py
│   │   │       │   ├── 📄 hookspec.py
│   │   │       │   ├── 📄 junitxml.py
│   │   │       │   ├── 📄 legacypath.py
│   │   │       │   ├── 📄 logging.py
│   │   │       │   ├── 📄 main.py
│   │   │       │   ├── 📁 mark/
│   │   │       │   │   ├── 📄 expression.py
│   │   │       │   │   ├── 📄 structures.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 expression.cpython-312.pyc
│   │   │       │   │       ├── 📄 structures.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 monkeypatch.py
│   │   │       │   ├── 📄 nodes.py
│   │   │       │   ├── 📄 outcomes.py
│   │   │       │   ├── 📄 pastebin.py
│   │   │       │   ├── 📄 pathlib.py
│   │   │       │   ├── 📄 py.typed
│   │   │       │   ├── 📄 pytester.py
│   │   │       │   ├── 📄 pytester_assertions.py
│   │   │       │   ├── 📄 python.py
│   │   │       │   ├── 📄 python_api.py
│   │   │       │   ├── 📄 python_path.py
│   │   │       │   ├── 📄 recwarn.py
│   │   │       │   ├── 📄 reports.py
│   │   │       │   ├── 📄 runner.py
│   │   │       │   ├── 📄 scope.py
│   │   │       │   ├── 📄 setuponly.py
│   │   │       │   ├── 📄 setupplan.py
│   │   │       │   ├── 📄 skipping.py
│   │   │       │   ├── 📄 stash.py
│   │   │       │   ├── 📄 stepwise.py
│   │   │       │   ├── 📄 terminal.py
│   │   │       │   ├── 📄 threadexception.py
│   │   │       │   ├── 📄 timing.py
│   │   │       │   ├── 📄 tmpdir.py
│   │   │       │   ├── 📄 unittest.py
│   │   │       │   ├── 📄 unraisableexception.py
│   │   │       │   ├── 📄 warnings.py
│   │   │       │   ├── 📄 warning_types.py
│   │   │       │   ├── 📄 _argcomplete.py
│   │   │       │   ├── 📁 _code/
│   │   │       │   │   ├── 📄 code.py
│   │   │       │   │   ├── 📄 source.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 code.cpython-312.pyc
│   │   │       │   │       ├── 📄 source.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 _io/
│   │   │       │   │   ├── 📄 pprint.py
│   │   │       │   │   ├── 📄 saferepr.py
│   │   │       │   │   ├── 📄 terminalwriter.py
│   │   │       │   │   ├── 📄 wcwidth.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 pprint.cpython-312.pyc
│   │   │       │   │       ├── 📄 saferepr.cpython-312.pyc
│   │   │       │   │       ├── 📄 terminalwriter.cpython-312.pyc
│   │   │       │   │       ├── 📄 wcwidth.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📁 _py/
│   │   │       │   │   ├── 📄 error.py
│   │   │       │   │   ├── 📄 path.py
│   │   │       │   │   ├── 📄 __init__.py
│   │   │       │   │   └── 📁 __pycache__/
│   │   │       │   │       ├── 📄 error.cpython-312.pyc
│   │   │       │   │       ├── 📄 path.cpython-312.pyc
│   │   │       │   │       └── 📄 __init__.cpython-312.pyc
│   │   │       │   ├── 📄 _version.py
│   │   │       │   ├── 📄 __init__.py
│   │   │       │   └── 📁 __pycache__/
│   │   │       │       ├── 📄 cacheprovider.cpython-312.pyc
│   │   │       │       ├── 📄 capture.cpython-312.pyc
│   │   │       │       ├── 📄 compat.cpython-312.pyc
│   │   │       │       ├── 📄 debugging.cpython-312.pyc
│   │   │       │       ├── 📄 deprecated.cpython-312.pyc
│   │   │       │       ├── 📄 doctest.cpython-312.pyc
│   │   │       │       ├── 📄 faulthandler.cpython-312.pyc
│   │   │       │       ├── 📄 fixtures.cpython-312.pyc
│   │   │       │       ├── 📄 freeze_support.cpython-312.pyc
│   │   │       │       ├── 📄 helpconfig.cpython-312.pyc
│   │   │       │       ├── 📄 hookspec.cpython-312.pyc
│   │   │       │       ├── 📄 junitxml.cpython-312.pyc
│   │   │       │       ├── 📄 legacypath.cpython-312.pyc
│   │   │       │       ├── 📄 logging.cpython-312.pyc
│   │   │       │       ├── 📄 main.cpython-312.pyc
│   │   │       │       ├── 📄 monkeypatch.cpython-312.pyc
│   │   │       │       ├── 📄 nodes.cpython-312.pyc
│   │   │       │       ├── 📄 outcomes.cpython-312.pyc
│   │   │       │       ├── 📄 pastebin.cpython-312.pyc
│   │   │       │       ├── 📄 pathlib.cpython-312.pyc
│   │   │       │       ├── 📄 pytester.cpython-312.pyc
│   │   │       │       ├── 📄 pytester_assertions.cpython-312.pyc
│   │   │       │       ├── 📄 python.cpython-312.pyc
│   │   │       │       ├── 📄 python_api.cpython-312.pyc
│   │   │       │       ├── 📄 python_path.cpython-312.pyc
│   │   │       │       ├── 📄 recwarn.cpython-312.pyc
│   │   │       │       ├── 📄 reports.cpython-312.pyc
│   │   │       │       ├── 📄 runner.cpython-312.pyc
│   │   │       │       ├── 📄 scope.cpython-312.pyc
│   │   │       │       ├── 📄 setuponly.cpython-312.pyc
│   │   │       │       ├── 📄 setupplan.cpython-312.pyc
│   │   │       │       ├── 📄 skipping.cpython-312.pyc
│   │   │       │       ├── 📄 stash.cpython-312.pyc
│   │   │       │       ├── 📄 stepwise.cpython-312.pyc
│   │   │       │       ├── 📄 terminal.cpython-312.pyc
│   │   │       │       ├── 📄 threadexception.cpython-312.pyc
│   │   │       │       ├── 📄 timing.cpython-312.pyc
│   │   │       │       ├── 📄 tmpdir.cpython-312.pyc
│   │   │       │       ├── 📄 unittest.cpython-312.pyc
│   │   │       │       ├── 📄 unraisableexception.cpython-312.pyc
│   │   │       │       ├── 📄 warnings.cpython-312.pyc
│   │   │       │       ├── 📄 warning_types.cpython-312.pyc
│   │   │       │       ├── 📄 _argcomplete.cpython-312.pyc
│   │   │       │       ├── 📄 _version.cpython-312.pyc
│   │   │       │       └── 📄 __init__.cpython-312.pyc
│   │   │       └── 📁 __pycache__/
│   │   │           ├── 📄 py.cpython-312.pyc
│   │   │           ├── 📄 six.cpython-312.pyc
│   │   │           └── 📄 typing_extensions.cpython-312.pyc
│   │   ├── 📄 pyvenv.cfg
│   │   └── 📁 Scripts/
│   │       ├── 📄 activate
│   │       ├── 📄 activate.bat
│   │       ├── 📄 Activate.ps1
│   │       ├── 📄 cffi-gen-src.exe
│   │       ├── 📄 deactivate.bat
│   │       ├── 📄 distro.exe
│   │       ├── 📄 dotenv.exe
│   │       ├── 📄 httpx.exe
│   │       ├── 📄 idna.exe
│   │       ├── 📄 normalizer.exe
│   │       ├── 📄 pip.exe
│   │       ├── 📄 pip3.12.exe
│   │       ├── 📄 pip3.exe
│   │       ├── 📄 py.test.exe
│   │       ├── 📄 pyrsa-decrypt.exe
│   │       ├── 📄 pyrsa-encrypt.exe
│   │       ├── 📄 pyrsa-keygen.exe
│   │       ├── 📄 pyrsa-priv2pub.exe
│   │       ├── 📄 pyrsa-sign.exe
│   │       ├── 📄 pyrsa-verify.exe
│   │       ├── 📄 pytest.exe
│   │       ├── 📄 python.exe
│   │       ├── 📄 pythonw.exe
│   │       └── 📄 uvicorn.exe
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
    │   ├── 📁 components/
    │   │   ├── 📄 Login.jsx
    │   │   └── 📄 PanelAnalisisIA.jsx
    │   ├── 📄 index.css
    │   └── 📄 main.jsx
    └── 📄 vite.config.js
```
<!-- PROJECT_STRUCTURE_END -->
