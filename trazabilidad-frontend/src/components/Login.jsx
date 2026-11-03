
export default function Login({
  formAuth,
  setFormAuth,
  onSubmit,
  modoAuth,
  setModoAuth,
  alertaAuth,
  setAlertaAuth
}) {
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
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .anim-alerta {
          animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {alertaAuth && (
        <div className="anim-alerta" style={{
          position: 'absolute',
          top: '28px',
          backgroundColor:
            alertaAuth.tipo === 'exito' ? '#10b981' : '#ef4444',
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
          <h1 style={{
            margin: 0,
            fontSize: '26px',
            fontWeight: '800',
            color: '#0f172a'
          }}>
            PluriOne Trace
          </h1>

          <p style={{
            margin: '6px 0 0 0',
            fontSize: '14px',
            color: '#64748b'
          }}>
            {modoAuth === 'login' && 'Ingresa tus credenciales para acceder'}
            {modoAuth === 'register' && 'Crea tu cuenta para comenzar'}
            {modoAuth === 'recuperar' && 'Ingresa tu correo y nueva contraseña'}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >

          {/* Correo electrónico */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '700',
              color: '#334155',
              marginBottom: '6px'
            }}>
              Correo Electrónico
            </label>

            <input
              type="email"
              placeholder="usuario@develop.com.mx"
              value={formAuth.correo}
              onChange={(e) =>
                setFormAuth({ ...formAuth, correo: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              required
            />
          </div>

          {/* Recuperación de contraseña */}
          {modoAuth === 'recuperar' ? (
            <>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#334155',
                  marginBottom: '6px'
                }}>
                  Contraseña Actual
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={formAuth.password_actual || ''}
                  onChange={(e) =>
                    setFormAuth({
                      ...formAuth,
                      password_actual: e.target.value
                    })
                  }
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#334155',
                  marginBottom: '6px'
                }}>
                  Nueva Contraseña
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={formAuth.nueva_password || ''}
                  onChange={(e) =>
                    setFormAuth({
                      ...formAuth,
                      nueva_password: e.target.value
                    })
                  }
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                  required
                />
              </div>
            </>
          ) : (
            /* Inicio de sesión o registro */
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '700',
                color: '#334155',
                marginBottom: '6px'
              }}>
                Contraseña
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={formAuth.password || ''}
                onChange={(e) =>
                  setFormAuth({ ...formAuth, password: e.target.value })
                }
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                required
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            {modoAuth === 'login' && 'Iniciar Sesión'}
            {modoAuth === 'register' && 'Registrar Cuenta'}
            {modoAuth === 'recuperar' && 'Actualizar Contraseña'}
          </button>
        </form>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          fontSize: '13px'
        }}>
          {modoAuth === 'login' ? (
            <>
              <button
                onClick={() => {
                  setAlertaAuth(null);
                  setModoAuth('recuperar');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                ¿Olvidaste tu contraseña?
              </button>

              <button
                onClick={() => {
                  setAlertaAuth(null);
                  setModoAuth('register');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Crear cuenta
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setAlertaAuth(null);
                setModoAuth('login');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontWeight: '700',
                cursor: 'pointer',
                padding: 0,
                margin: '0 auto'
              }}
            >
              Volver a Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
