import { useState, useEffect } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import { QRCodeCanvas } from 'qrcode.react';

const API_URL = 'http://localhost:8000';
// Interceptor global para que Axios agregue el token automáticamente a CADA petición
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function App() {

  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [modoAuth, setModoAuth] = useState('login');
  const [notificacionToast, setNotificacionToast] = useState(null);

  const lanzarNotificacion = (titulo, detalle) => {
    setNotificacionToast({ titulo, detalle });
    setTimeout(() => {
      setNotificacionToast(null);
    }, 5000);
  };
  const [formAuth, setFormAuth] = useState({
  correo: '',
  password: '',
  password_actual: '',
  nueva_password: '',
});
  const [alertaAuth, setAlertaAuth] = useState(null);  

  const [materiales, setMateriales] = useState([]);
  const [guiaSeleccionada, setGuiaSeleccionada] = useState(null);
  const [analisisIA, setAnalisisIA] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('panel');
  const [busqueda, setBusqueda] = useState('');

  // ESTADOS DE LAS NUEVAS TABLAS Y ASIGNACIÓN
  const [clientes, setClientes] = useState([]);
  const [conductores, setConductores] = useState([]);
  const [rutas, setRutas] = useState([]);

  const [formAsignacion, setFormAsignacion] = useState({
    material_id: '',
    cliente_id: '',
    conductor_id: '',
    ruta_id: '',
    cliente_nombre: '',
    conductor_nombre: '',
    ruta_destino: ''
  });

  const [nuevoMaterial, setNuevoMaterial] = useState({
    id: '',
    nombre: '',
    cliente: '',
    ubicacion_inicial: '',
    metodo_captura: 'Código QR (Guía Digital)'
  });

  const [escaneo, setEscaneo] = useState({
    id: '',
    nueva_ubicacion: '',
    nuevo_estado: 'En Regla',
    motivo: ''
  });

  // ESTADOS DEL CHATBOT
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajesChat, setMensajesChat] = useState([
    { remitente: 'bot', texto: '¡Hola! Soy tu asistente de trazabilidad logística. ¿En qué te puedo ayudar hoy?' }
  ]);
  const [inputChat, setInputChat] = useState('');
  const [cargandoBot, setCargandoBot] = useState(false);

 const enviarMensajeChat = async (e) => {
  e?.preventDefault();
  if (!inputChat.trim() || cargandoBot) return;

  const textoUsuario = inputChat.trim();
  setInputChat('');
  setMensajesChat((prev) => [...prev, { remitente: 'usuario', texto: textoUsuario }]);
  setCargandoBot(true);

  try {
    const res = await axios.post(
      `${API_URL}/chatbot`, 
      { message: textoUsuario }
    );
    setMensajesChat((prev) => [...prev, { remitente: 'bot', texto: res.data.respuesta }]);
  } catch (err) {
    setMensajesChat((prev) => [
      ...prev,
      { remitente: 'bot', texto: '⚠️ Ocurrió un error al conectar con el servidor de trazabilidad o sesión expirada.' }
    ]);
  } finally {
    setCargandoBot(false);
  }
};

  const mostrarNotificacion = (tipo, mensaje) => {
    setAlertaAuth({ tipo, mensaje });
    setTimeout(() => setAlertaAuth(null), 4000);
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAlertaAuth(null);
    
    try {
      if (modoAuth === 'login') {
      const res = await axios.post(`${API_URL}/auth/login`, formAuth);
      setUsuarioAutenticado(res.data.correo);
      
      localStorage.setItem('token', res.data.access_token);
    } else if (modoAuth === 'register') {
        await axios.post(`${API_URL}/auth/register`, formAuth);
        mostrarNotificacion('exito', '¡Cuenta creada con éxito! Ya puedes iniciar sesión.');
        setFormAuth({ correo: '', password: '' });
        setModoAuth('login');
      } else if (modoAuth === 'recuperar') {
  await axios.post(`${API_URL}/auth/recuperar`, {
    correo: formAuth.correo,
    password_actual: formAuth.password_actual,
    nueva_password: formAuth.nueva_password,
  });

  mostrarNotificacion('exito', '¡Contraseña actualizada correctamente!');

  setFormAuth({
    correo: '',
    password: '',
    password_actual: '',
    nueva_password: '',
  });

  setModoAuth('login');
}
    } catch (err) {
      const msjError = err.response?.data?.detail || 'Error al procesar la solicitud';
      mostrarNotificacion('error', msjError);
    }
  };

  const cargarMateriales = async () => {
  if (!usuarioAutenticado) return;
  try {
    const res = await axios.get(`${API_URL}/materiales/`);
    setMateriales(res.data);
  } catch (err) {
    console.error('Error al cargar datos:', err);
  }
};

const cargarCatalogos = async () => {
  if (!usuarioAutenticado) return;
  try {
    const [resC, resCond, resR] = await Promise.all([
      axios.get(`${API_URL}/clientes`),
      axios.get(`${API_URL}/conductores`),
      axios.get(`${API_URL}/rutas`)
    ]);
    setClientes(resC.data);
    setConductores(resCond.data);
    setRutas(resR.data);
  } catch (err) {
    console.error('Error al cargar catálogos:', err);
  }
};

  useEffect(() => {
    if (usuarioAutenticado) {
      cargarMateriales();
      cargarCatalogos();
      const intervalo = setInterval(() => {
        cargarMateriales();
      }, 3000);
      return () => clearInterval(intervalo);
    }
  }, [usuarioAutenticado]);

  const handleCrear = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/materiales/`, nuevoMaterial);
      setNuevoMaterial({ id: '', nombre: '', cliente: '', ubicacion_inicial: '', metodo_captura: 'Código QR (Guía Digital)' });
      await cargarMateriales();
    } catch (err) {
      alert(err.response?.data?.detail || 'Error al guardar el material');
    }
  };

  const handleEscanear = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/materiales/${escaneo.id}/escanear`, {
        nueva_ubicacion: escaneo.nueva_ubicacion,
        nuevo_estado: escaneo.nuevo_estado,
        motivo: escaneo.motivo
      });
      alert(`¡Registro de ${escaneo.id} actualizado con éxito!`);
      setEscaneo({ id: '', nueva_ubicacion: '', nuevo_estado: 'En Regla', motivo: '' });
      await cargarMateriales();
    } catch (err) {
      alert(err.response?.data?.detail || 'Material no encontrado o error en servidor');
    }
  };

  const handleAsignarEnvio = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/envios/asignar`, {
        material_id: formAsignacion.material_id,
        conductor_nombre: formAsignacion.conductor_nombre,
        ruta_destino: formAsignacion.ruta_destino
      });

      // Llama a la notificación flotante verde
      lanzarNotificacion("¡Salida Programada con Éxito!", [
        `📦 Paquete: ${formAsignacion.material_id}`,
        `🚛 Conductor: ${formAsignacion.conductor_nombre}`,
        `📍 Destino: ${formAsignacion.ruta_destino}`
      ]);

      setFormAsignacion({ material_id: '', cliente_nombre: '', conductor_nombre: '', ruta_destino: '' });
      await cargarMateriales();
    } catch (err) {
      const msj = err.response?.data?.detail || "Error al procesar la asignación";
      alert("⚠️ " + msj);
    }
  };

  const verGuiaYAnalisis = async (id) => {
    try {
      const resGuia = await axios.get(`${API_URL}/materiales/${id}/guia`);
      const resIA = await axios.get(`${API_URL}/materiales/${id}/analisis-ia`);
      setGuiaSeleccionada(resGuia.data);
      setAnalisisIA(resIA.data);
    } catch (err) {
      alert('Error al consultar el material ' + id);
    }
  };

  const descargarPDF = () => {
    const elemento = document.getElementById('guia-pdf');
    const opciones = {
      margin: 8,
      filename: `Guia_Trazabilidad_${guiaSeleccionada.guia_id || guiaSeleccionada.id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opciones).from(elemento).save();
  };

  const materialesFiltrados = materiales.filter((m) => {
    const termino = busqueda.toLowerCase();
    const clienteTxt = typeof m.cliente === 'string' ? m.cliente : (m.cliente?.nombre || m.cliente_rel?.nombre || '');
    return (
      m.id.toLowerCase().includes(termino) ||
      m.nombre.toLowerCase().includes(termino) ||
      clienteTxt.toLowerCase().includes(termino) ||
      m.estado.toLowerCase().includes(termino)
    );
  });

  // PANTALLA DE AUTENTICACIÓN
  if (!usuarioAutenticado) {
    return (
      <div style={{
        backgroundColor: '#0b1329',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative'
      }}>
        <style>{`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .anim-alerta { animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}</style>

        {alertaAuth && (
          <div className="anim-alerta" style={{
            position: 'absolute',
            top: '28px',
            backgroundColor: alertaAuth.tipo === 'exito' ? '#10b981' : '#ef4444',
            color: '#ffffff',
            padding: '14px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: '700',
            fontSize: '14px',
            zIndex: 100
          }}>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.25)',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {alertaAuth.tipo === 'exito' ? '✓' : '✕'}
            </span>
            {alertaAuth.mensaje}
          </div>
        )}

        <div style={{
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '420px',
          borderRadius: '16px',
          padding: '40px 32px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '800', color: '#0f172a' }}>PluriOne Trace</h1>
            <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: '#64748b' }}>
              {modoAuth === 'login' && 'Ingresa tus credenciales para acceder'}
              {modoAuth === 'register' && 'Crea tu cuenta para comenzar'}
              {modoAuth === 'recuperar' && 'Ingresa tu correo y nueva contraseña'}
            </p>
          </div>

          <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Correo Electrónico (Siempre visible) */}
  <div>
    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
      Correo Electrónico
    </label>
    <input
      type="email"
      placeholder="usuario@develop.com.mx"
      value={formAuth.correo}
      onChange={(e) => setFormAuth({ ...formAuth, correo: e.target.value })}
      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
      required
    />
  </div>

  {/* SI ESTAMOS EN MODO RECUPERAR: Mostramos Contraseña Actual y Nueva Contraseña */}
  {modoAuth === 'recuperar' ? (
    <>
      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
          Contraseña Actual
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={formAuth.password_actual || ''}
          onChange={(e) => setFormAuth({ ...formAuth, password_actual: e.target.value })}
          style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          required
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
          Nueva Contraseña
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={formAuth.nueva_password || ''}
          onChange={(e) => setFormAuth({ ...formAuth, nueva_password: e.target.value })}
          style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          required
        />
      </div>
    </>
  ) : (
    /* SI ES LOGIN O REGISTRO: Mostramos un solo campo de contraseña normal */
    <div>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
        Contraseña
      </label>
      <input
        type="password"
        placeholder="••••••••"
        value={formAuth.password || ''}
        onChange={(e) => setFormAuth({ ...formAuth, password: e.target.value })}
        style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
        required
      />
    </div>
  )}

  <button
    type="submit"
    style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginTop: '8px' }}
  >
    {modoAuth === 'login' && 'Iniciar Sesión'}
    {modoAuth === 'register' && 'Registrar Cuenta'}
    {modoAuth === 'recuperar' && 'Actualizar Contraseña'}
  </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '13px' }}>
            {modoAuth === 'login' ? (
              <>
                <button onClick={() => { setAlertaAuth(null); setModoAuth('recuperar'); }} style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', cursor: 'pointer', padding: 0 }}>
                  ¿Olvidaste tu contraseña?
                </button>
                <button onClick={() => { setAlertaAuth(null); setModoAuth('register'); }} style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', cursor: 'pointer', padding: 0 }}>
                  Crear cuenta
                </button>
              </>
            ) : (
              <button onClick={() => { setAlertaAuth(null); setModoAuth('login'); }} style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', cursor: 'pointer', padding: 0, margin: '0 auto' }}>
                Volver a Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // PANEL DENTRO DEL SISTEMA
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '240px', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 16px', flexShrink: 0 }}>
        <div>
          <h2 style={{ margin: '0', fontSize: '20px', fontWeight: '800', color: '#38bdf8' }}>PluriOne Trace</h2>
          <p style={{ margin: '4px 0 32px 0', fontSize: '12px', color: '#64748b' }}>Sistema de Trazabilidad v1.0</p>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => setSeccionActiva('panel')}
              style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', border: 'none', backgroundColor: seccionActiva === 'panel' ? '#2563eb' : 'transparent', color: seccionActiva === 'panel' ? '#ffffff' : '#94a3b8', fontWeight: '600', cursor: 'pointer' }}
            >
              Panel Principal
            </button>
            <button 
              onClick={() => setSeccionActiva('asignacion')}
              style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', border: 'none', backgroundColor: seccionActiva === 'asignacion' ? '#2563eb' : 'transparent', color: seccionActiva === 'asignacion' ? '#ffffff' : '#94a3b8', fontWeight: '600', cursor: 'pointer' }}
            >
              Asignación Logística
            </button>
            <button 
              onClick={() => setSeccionActiva('inventario')}
              style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', border: 'none', backgroundColor: seccionActiva === 'inventario' ? '#2563eb' : 'transparent', color: seccionActiva === 'inventario' ? '#ffffff' : '#94a3b8', fontWeight: '600', cursor: 'pointer' }}
            >
              Inventario & Guías
            </button>
            <button 
              onClick={() => setSeccionActiva('ia')}
              style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', border: 'none', backgroundColor: seccionActiva === 'ia' ? '#2563eb' : 'transparent', color: seccionActiva === 'ia' ? '#ffffff' : '#94a3b8', fontWeight: '600', cursor: 'pointer' }}
            >
              Análisis de IA
            </button>
          </nav>
        </div>

        <div>
          <p style={{ margin: '0 0 12px 0', fontSize: '11px', color: '#94a3b8', wordBreak: 'break-all' }}>
            <b>Usuario:</b> {usuarioAutenticado}
          </p>
          <button 
            onClick={() => setUsuarioAutenticado(null)}
            style={{ width: '100%', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main style={{ flex: 1, padding: '32px' }}>
        
        {/* VISTA 1: PANEL PRINCIPAL */}
        {seccionActiva === 'panel' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Panel Principal</h1>
              <span style={{ backgroundColor: '#22c55e', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>Operativo</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Total Registrados</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>{materiales.length}</p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>En Regla (Tránsito)</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '28px', fontWeight: '800', color: '#0284c7' }}>
                  {materiales.filter(m => m.estado.includes('En Regla') || m.estado.includes('Tránsito')).length}
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Alertas / Retrasos</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '28px', fontWeight: '800', color: '#ef4444' }}>
                  {materiales.filter(m => m.estado.includes('Retrasado') || m.estado.includes('Alerta')).length}
                </p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Entregados a Cliente</span>
                <p style={{ margin: '8px 0 0 0', fontSize: '28px', fontWeight: '800', color: '#16a34a' }}>
                  {materiales.filter(m => m.estado.includes('Entregado')).length}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>1. Registrar Salida & Generar Guía</h3>
                  <form onSubmit={handleCrear} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input placeholder="ID / Código de Envío (ej. MAT-101)" value={nuevoMaterial.id} onChange={(e) => setNuevoMaterial({...nuevoMaterial, id: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    <input placeholder="Nombre del Material" value={nuevoMaterial.nombre} onChange={(e) => setNuevoMaterial({...nuevoMaterial, nombre: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    <input placeholder="Cliente / Destinatario" value={nuevoMaterial.cliente} onChange={(e) => setNuevoMaterial({...nuevoMaterial, cliente: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    <input placeholder="Ubicación Inicial (ej. Terminal A)" value={nuevoMaterial.ubicacion_inicial} onChange={(e) => setNuevoMaterial({...nuevoMaterial, ubicacion_inicial: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    <select value={nuevoMaterial.metodo_captura} onChange={(e) => setNuevoMaterial({...nuevoMaterial, metodo_captura: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                      <option value="Código QR (Guía Digital)">Código QR (Guía Digital)</option>
                      <option value="Sensor RFID Automático">Sensor RFID Automático</option>
                    </select>
                    <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', marginTop: '6px' }}>
                      Guardar y Generar Guía
                    </button>
                  </form>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>2. Escanear / Actualizar Estado</h3>
                  <form onSubmit={handleEscanear} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input placeholder="Escanear ID o Código" value={escaneo.id} onChange={(e) => setEscaneo({...escaneo, id: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    <input placeholder="Ubicación Actual o Destino" value={escaneo.nueva_ubicacion} onChange={(e) => setEscaneo({...escaneo, nueva_ubicacion: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                    
                    <select value={escaneo.nuevo_estado} onChange={(e) => setEscaneo({...escaneo, nuevo_estado: e.target.value})} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                      <option value="En Regla">En Regla / En Tránsito</option>
                      <option value="Retrasado">Retrasado / Anómalo</option>
                      <option value="Entregado a Cliente">Entregado a Cliente</option>
                    </select>

                    {escaneo.nuevo_estado === 'Retrasado' && (
                      <input 
                        placeholder="Motivo del retraso (ej. Tráfico, Falla mecánica, Clima)" 
                        value={escaneo.motivo} 
                        onChange={(e) => setEscaneo({...escaneo, motivo: e.target.value})} 
                        style={{ padding: '10px', border: '1px solid #fca5a5', borderRadius: '6px', backgroundColor: '#fef2f2' }} 
                        required 
                      />
                    )}

                    <button type="submit" style={{ backgroundColor: '#0f172a', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', marginTop: '6px' }}>
                      Actualizar Registro
                    </button>
                  </form>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>Vista Rápida de Envíos en Curso</h3>
                  <input
                    type="text"
                    placeholder="Buscar por código, material, cliente o estado..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', marginBottom: '16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }}
                  />
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ color: '#64748b', borderBottom: '1px solid #f1f5f9' }}>
                        <th style={{ padding: '8px' }}>Código</th>
                        <th style={{ padding: '8px' }}>Material</th>
                        <th style={{ padding: '8px' }}>Cliente</th>
                        <th style={{ padding: '8px' }}>Estado</th>
                        <th style={{ padding: '8px', textAlign: 'right' }}>Guía</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materialesFiltrados.map((m) => (
                        <tr key={m.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                          <td style={{ padding: '10px 8px', fontWeight: '700' }}>{m.id}</td>
                          <td style={{ padding: '10px 8px' }}>{m.nombre}</td>
                          <td style={{ padding: '10px 8px' }}>
                            {(typeof m.cliente === 'string' && m.cliente.trim() !== '') ? m.cliente : (m.cliente?.nombre || m.cliente_rel?.nombre || 'Sin Destinatario')}
                          </td>
                          <td style={{ padding: '10px 8px' }}>
                            <span style={{
                              backgroundColor: m.estado?.includes('Retrasado') ? '#fef2f2' : m.estado?.includes('Entregado') ? '#f0fdf4' : '#e0f2fe',
                              color: m.estado?.includes('Retrasado') ? '#ef4444' : m.estado?.includes('Entregado') ? '#16a34a' : '#0284c7',
                              padding: '4px 8px', borderRadius: '4px', fontWeight: '600', fontSize: '11px'
                            }}>
                              {m.estado}
                            </span>
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                            <button onClick={() => verGuiaYAnalisis(m.id)} style={{ backgroundColor: '#0284c7', color: '#ffffff', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '11px' }}>
                              Ver Guía
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {guiaSeleccionada && (
                  <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                    <button onClick={descargarPDF} style={{ backgroundColor: '#16a34a', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', marginBottom: '20px', fontSize: '13px' }}>
                      Exportar Guía a PDF
                    </button>
                    <div id="guia-pdf" style={{ padding: '20px', backgroundColor: '#ffffff', color: '#0f172a', fontFamily: 'Arial, sans-serif' }}>
                      <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '12px', marginBottom: '16px' }}>
                        <h2 style={{ margin: 0, color: '#0284c7', fontSize: '20px', fontWeight: '800' }}>PLURIONE TRACE</h2>
                        <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#64748b' }}>SISTEMA DIGITAL DE TRAZABILIDAD Y CONTROL DE LOGÍSTICA</p>
                        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>
                          REPORTE DE RUTA: {guiaSeleccionada.guia_id || guiaSeleccionada.id}
                        </div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', marginBottom: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
                        <div>
                          <span style={{ color: '#64748b', fontSize: '10px', fontWeight: '700', display: 'block' }}>MATERIAL / PRODUCTO</span>
                          <strong>{guiaSeleccionada.material || guiaSeleccionada.nombre}</strong>
                        </div>
                        <div>
                          <span style={{ color: '#64748b', fontSize: '10px', fontWeight: '700', display: 'block' }}>CLIENTE DESTINATARIO</span>
                          <strong>{guiaSeleccionada.cliente}</strong>
                        </div>
                      </div>
                      {/* Diagnóstico Inteligente de Riesgo (IA) - Estilo Ejecutivo */}
{analisisIA && (
  <div style={{ marginTop: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
    
    {/* Encabezado */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
      <span style={{ fontSize: '18px' }}>🤖</span>
      <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
        Diagnóstico Inteligente de Riesgo (IA)
      </h3>
    </div>

    {/* Tarjetas de métricas en dos columnas */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
      
      {/* Tarjeta Nivel de Riesgo */}
      <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Nivel de Riesgo</span>
        <span style={{ fontSize: '14px', fontWeight: '800', color: analisisIA.nivel_riesgo === 'Alto' ? '#dc2626' : analisisIA.nivel_riesgo === 'Medio' ? '#d97706' : '#16a34a' }}>
          {analisisIA.nivel_riesgo} ({analisisIA.porcentaje_evaluado ?? 0}%)
        </span>
      </div>

      {/* Tarjeta Checkpoints */}
      <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Checkpoints con Retraso</span>
        <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
          {analisisIA.checkpoints_retrasados ?? 0} de {analisisIA.checkpoints_totales ?? 0} registrados
        </span>

      </div>

    </div>

    {/* Bloques de Texto Descriptivo */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
        <strong style={{ color: '#475569', display: 'block', marginBottom: '2px', fontSize: '11px' }}>DIAGNÓSTICO DEL TRAYECTO:</strong>
        <span style={{ color: '#0f172a', lineHeight: '1.4' }}>{analisisIA.diagnostico_ia || analisisIA.diagnostico}</span>
      </div>

      <div style={{ backgroundColor: '#eff6ff', padding: '10px 12px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
        <strong style={{ color: '#1d4ed8', display: 'block', marginBottom: '2px', fontSize: '11px' }}>RECOMENDACIÓN OPERATIVA:</strong>
        <span style={{ color: '#1e3a8a', lineHeight: '1.4' }}>{analisisIA.recomendacion || "Tránsito estándar dentro de los parámetros esperados por el sistema."}</span>
      </div>
    </div>

  </div>
)}



{/* Código QR interactivo de la guía */}
  <div style={{ marginTop: '16px', marginBottom: '16px', textAlign: 'center', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
    <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase' }}>Código QR de Verificación Digital</p>
    <div style={{ display: 'inline-block', background: '#fff', padding: '8px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <QRCodeCanvas 
        value={guiaSeleccionada?.id || 'PLURIONE-TRACE'} 
        size={110} 
        level="H" 
      />
    </div>
    <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>Escanee para validación logística</p>
  </div>


                      <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px' }}>
                        Historial de Puntos de Control y Escaneos
                      </h4>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
                            <th style={{ padding: '6px 8px', borderBottom: '1px solid #cbd5e1' }}>Fecha y Hora</th>
                            <th style={{ padding: '6px 8px', borderBottom: '1px solid #cbd5e1' }}>Ubicación</th>
                            <th style={{ padding: '6px 8px', borderBottom: '1px solid #cbd5e1' }}>Estado Registrado</th>
                          </tr>
                        </thead>
                        <tbody style={{ fontSize: '13px' }}>
  {(guiaSeleccionada?.historial_trayecto || guiaSeleccionada?.historial || []).map((h, index) => {
    return (
      <tr key={h.id || index} style={{ borderBottom: '1px solid #f1f5f9' }}>
        <td style={{ padding: '6px 8px', color: '#334155' }}>
          {h.fecha_hora?.replace('T', ' ').slice(0, 16) || 'N/A'}
        </td>
        <td style={{ padding: '6px 8px', fontWeight: '600', color: '#0f172a' }}>
          {h.ubicacion || 'N/A'}
        </td>
        <td style={{ padding: '6px 8px', color: h.estado?.includes('Retrasado') ? '#dc2626' : '#0284c7' }}>
          {h.estado}
        </td>
      </tr>
    );
  })}
</tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* VISTA 2: ASIGNACIÓN LOGÍSTICA INTELIGENTE */}
        {seccionActiva === 'asignacion' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Asignación Directa de Envíos</h1>
              <span style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>Flujo Ágil</span>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#0f172a' }}>Configurar Salida y Ruta de Transporte</h3>
              
              <form onSubmit={handleAsignarEnvio} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                
                {/* SELECCIÓN DE PAQUETE (AUTOCOMPLETA EL CLIENTE) */}
                <div style={{ gridColumn: 'span 2', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                    📦 Seleccionar Paquete Activo
                  </label>
                  <select 
                    value={formAsignacion.material_id} 
                    onChange={(e) => {
                      const matId = e.target.value;
                      const paqueteEncontrado = materiales.find(m => m.id === matId);
                      const clienteCalculado = typeof paqueteEncontrado?.cliente === 'string' ? paqueteEncontrado.cliente : (paqueteEncontrado?.cliente_rel?.nombre || 'Cliente General');
                      
                      setFormAsignacion({
                        ...formAsignacion,
                        material_id: matId,
                        cliente_nombre: clienteCalculado
                      });
                    }} 
                    style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#ffffff', fontSize: '14px', fontWeight: '600' }}
                    required
                  >
                    <option value="">-- Selecciona el paquete registrado --</option>
                    {materiales.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.id} - {m.nombre}
                      </option>
                    ))}
                  </select>

                  {formAsignacion.material_id && (
                    <div style={{ marginTop: '10px', fontSize: '13px', color: '#0369a1', backgroundColor: '#e0f2fe', padding: '8px 12px', borderRadius: '6px' }}>
                      <b>Cliente Vinculado Automáticamente:</b> {formAsignacion.cliente_nombre}
                    </div>
                  )}
                </div>

                {/* CONDUCTOR DESIGNADO */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    🚛 Conductor Asignado
                  </label>
                  
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                    {['Carlos Mendoza', 'Jaime Ramírez', 'Roberto Gómez'].map((nombreCond) => (
                      <button
                        type="button"
                        key={nombreCond}
                        onClick={() => setFormAsignacion({ ...formAsignacion, conductor_nombre: nombreCond })}
                        style={{
                          backgroundColor: formAsignacion.conductor_nombre === nombreCond ? '#0f172a' : '#f1f5f9',
                          color: formAsignacion.conductor_nombre === nombreCond ? '#ffffff' : '#334155',
                          border: 'none',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        + {nombreCond.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Escribe o selecciona el nombre del chofer"
                    value={formAsignacion.conductor_nombre || ''}
                    onChange={(e) => setFormAsignacion({ ...formAsignacion, conductor_nombre: e.target.value })}
                    style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
                    required
                  />
                </div>

                {/* RUTA DE TRANSPORTE */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    📍 Destino / Ruta de Transporte
                  </label>

                  <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                    {['Tijuana, BCN', 'Chiapas, CHP', 'Guadalajara, JAL', 'Monterrey, NLE'].map((destinoRapido) => (
                      <button
                        type="button"
                        key={destinoRapido}
                        onClick={() => setFormAsignacion({ ...formAsignacion, ruta_destino: destinoRapido })}
                        style={{
                          backgroundColor: formAsignacion.ruta_destino === destinoRapido ? '#2563eb' : '#f1f5f9',
                          color: formAsignacion.ruta_destino === destinoRapido ? '#ffffff' : '#334155',
                          border: 'none',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        {destinoRapido.split(',')[0]}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Ej. Tijuana, Chiapas, Mérida..."
                    value={formAsignacion.ruta_destino || ''}
                    onChange={(e) => setFormAsignacion({ ...formAsignacion, ruta_destino: e.target.value })}
                    style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
                    required
                  />
                </div>

                {/* BOTÓN DE CONFIRMACIÓN */}
                <div style={{ gridColumn: 'span 2', marginTop: '12px' }}>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', cursor: 'pointer' }}>
                    Confirmar y Asignar Salida de Envío
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

        {/* VISTA 3: INVENTARIO & GUÍAS */}
        {seccionActiva === 'inventario' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>Inventario & Guías Digitales</h1>
              <span style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>Catálogo General</span>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
              <input
                type="text"
                placeholder="Filtrar por código, nombre del paquete, cliente o ciudad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ color: '#64748b', borderBottom: '2px solid #f1f5f9' }}>
                    <th style={{ padding: '12px' }}>Código Envío</th>
                    <th style={{ padding: '12px' }}>Nombre Material</th>
                    <th style={{ padding: '12px' }}>Cliente / Destino</th>
                    <th style={{ padding: '12px' }}>Ubicación Actual</th>
                    <th style={{ padding: '12px' }}>Estado Logístico</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {materialesFiltrados.map((m) => (
                    <tr key={m.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                      <td style={{ padding: '14px 12px', fontWeight: '800', color: '#0f172a' }}>{m.id}</td>
                      <td style={{ padding: '14px 12px' }}>{m.nombre}</td>
                      <td style={{ padding: '14px 12px' }}>
                        {(typeof m.cliente === 'string' && m.cliente.trim() !== '') ? m.cliente : (m.cliente?.nombre || m.cliente_rel?.nombre || 'Sin Destinatario')}
                      </td>
                      <td style={{ padding: '14px 12px', color: '#475569' }}>{m.ubicacion_actual}</td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{
                          backgroundColor: m.estado?.includes('Retrasado') ? '#fef2f2' : m.estado?.includes('Entregado') ? '#f0fdf4' : '#e0f2fe',
                          color: m.estado?.includes('Retrasado') ? '#ef4444' : m.estado?.includes('Entregado') ? '#16a34a' : '#0284c7',
                          padding: '6px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '12px'
                        }}>
                          {m.estado}
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                        <button 
                          onClick={() => { verGuiaYAnalisis(m.id); setSeccionActiva('panel'); }}
                          style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: '700', fontSize: '12px' }}
                        >
                          Generar Guía
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

     {/* --- VISTA DE ANÁLISIS DE IA ORDENADA Y PROFESIONAL --- */}
{seccionActiva === 'ia' && (() => {
  const totalMats = Array.isArray(materiales) ? materiales.length : 0;
  const retrasados = Array.isArray(materiales) 
    ? materiales.filter(m => m.estado && (m.estado.toLowerCase().includes('retrasado') || m.estado.toLowerCase().includes('alerta'))).length 
    : 0;
  const confiabilidad = totalMats > 0 ? Math.round(((totalMats - retrasados) / totalMats) * 100) : 100;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      
      {/* Tarjeta de Cabecera */}
      <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '24px 32px', borderRadius: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
             Centro de Diagnóstico & IA Predictiva
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
            Evaluación analítica en tiempo real basada en el estado de los envíos, bitácora inmutable de checkpoints y tiempos de ruta.
          </p>
        </div>
        <div style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Engine v2.0
        </div>
      </div>

      {/* Cuadrícula de 3 Columnas para Métricas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        
        {/* Tarjeta 1 */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Confiabilidad del Trayecto</p>
          <p style={{ fontSize: '36px', fontWeight: '900', color: '#4f46e5', margin: '0 0 12px 0' }}>{confiabilidad}%</p>
          <div style={{ display: 'inline-block', backgroundColor: '#ecfdf5', color: '#047857', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600', marginBottom: '10px' }}>
            🟢 Sincronizado con SQLite
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Calculado dinámicamente s/ estado de envíos activos.</p>
        </div>

        {/* Tarjeta 2 */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Envíos con Retraso / Alerta</p>
          <p style={{ fontSize: '36px', fontWeight: '900', color: retrasados > 0 ? '#dc2626' : '#1e293b', margin: '0 0 12px 0' }}>{retrasados}</p>
          <div style={{ display: 'inline-block', backgroundColor: retrasados > 0 ? '#fef2f2' : '#f1f5f9', color: retrasados > 0 ? '#b91c1c' : '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600', marginBottom: '10px' }}>
            {retrasados > 0 ? '⚠️ Requiere Atención' : '✨ Sin Incidencias'}
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Basado en la bitácora inmutable de checkpoints.</p>
        </div>

        {/* Tarjeta 3 */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Total Envíos Monitoreados</p>
          <p style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', margin: '0 0 12px 0' }}>{totalMats}</p>
          <div style={{ display: 'inline-block', backgroundColor: '#eef2ff', color: '#4f46e5', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600', marginBottom: '10px' }}>
            📦 Paquetes Registrados
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Volumen actual analizado por el motor analítico.</p>
        </div>

      </div>

      {/* Tarjeta Inferior de Estado */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 4px 0' }}>Estado del Sistema Analítico</h3>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>El algoritmo procesa métricas en vivo conectadas directamente con la base de datos.</p>
        </div>
        <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>
          Sistema Operativo
        </span>
      </div>

    </div>
  );
})()}
    
      </main>

      {/* PESTAÑA / TOAST FLOTANTE DE NOTIFICACIÓN VERDE */}
      {notificacionToast && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '16px 22px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
          zIndex: 9999,
          minWidth: '320px',
          borderLeft: '6px solid #047857',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <strong style={{ fontSize: '15px', fontWeight: '800' }}>
              ✅ {notificacionToast.titulo}
            </strong>
            <button 
              onClick={() => setNotificacionToast(null)} 
              style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '16px', cursor: 'pointer', fontWeight: '700' }}
            >
              ✕
            </button>
          </div>
          
          <div style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.95 }}>
            {Array.isArray(notificacionToast.detalle) ? (
              notificacionToast.detalle.map((linea, i) => <div key={i}>{linea}</div>)
            ) : (
              <div>{notificacionToast.detalle}</div>
            )}
          </div>
        </div>
      )}

      {/* WIDGET FLOTANTE DEL CHATBOT */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
        {!chatAbierto ? (
          <button
            onClick={() => setChatAbierto(true)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.5)',
              cursor: 'pointer',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            💬
          </button>
        ) : (
          <div style={{
            width: '380px',
            height: '520px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 20px 30px -10px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #cbd5e1'
          }}>
            <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#38bdf8' }}>Asistente PluriOne Trace</h3>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>IA Especializada en Logística</p>
              </div>
              <button onClick={() => setChatAbierto(false)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f8fafc' }}>
              {mensajesChat.map((m, idx) => (
                <div key={idx} style={{
                  alignSelf: m.remitente === 'usuario' ? 'flex-end' : 'flex-start',
                  backgroundColor: m.remitente === 'usuario' ? '#2563eb' : '#ffffff',
                  color: m.remitente === 'usuario' ? '#ffffff' : '#0f172a',
                  padding: '10px 14px',
                  borderRadius: m.remitente === 'usuario' ? '14px 14px 0 14px' : '14px 14px 14px 0',
                  maxWidth: '80%',
                  fontSize: '13px',
                  lineHeight: '1.4',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: m.remitente === 'bot' ? '1px solid #e2e8f0' : 'none',
                  whiteSpace: 'pre-line'
                }}>
                  {m.texto}
                </div>
              ))}

              {cargandoBot && (
                <div style={{ alignSelf: 'flex-start', backgroundColor: '#ffffff', color: '#64748b', padding: '8px 12px', borderRadius: '12px', fontSize: '12px', fontStyle: 'italic', border: '1px solid #e2e8f0' }}>
                  Escribiendo...
                </div>
              )}
            </div>

            <form onSubmit={enviarMensajeChat} style={{ padding: '12px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Pregunta sobre un envío o ruta..."
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
              />
              <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '10px 14px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>

    </div>
  );
}