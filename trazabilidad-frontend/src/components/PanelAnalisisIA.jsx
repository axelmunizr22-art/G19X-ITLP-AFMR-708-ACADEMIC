
export default function PanelAnalisisIA({ analisisIA }) {
  if (!analisisIA) return null;

  return (
    <div style={{
      marginTop: '20px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>

      {/* Encabezado */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px',
        borderBottom: '1px solid #e2e8f0',
        paddingBottom: '10px'
      }}>
        <span style={{ fontSize: '18px' }}>🤖</span>
        <h3 style={{
          margin: 0,
          fontSize: '15px',
          fontWeight: '700',
          color: '#0f172a'
        }}>
          Diagnóstico Inteligente de Riesgo (IA)
        </h3>
      </div>

      {/* Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '16px'
      }}>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #cbd5e1'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            color: '#64748b',
            display: 'block',
            textTransform: 'uppercase',
            marginBottom: '4px'
          }}>
            Nivel de Riesgo
          </span>

          <span style={{
            fontSize: '14px',
            fontWeight: '800',
            color:
              analisisIA.nivel_riesgo === 'Alto'
                ? '#dc2626'
                : analisisIA.nivel_riesgo === 'Medio'
                  ? '#d97706'
                  : '#16a34a'
          }}>
            {analisisIA.nivel_riesgo} ({analisisIA.porcentaje_evaluado ?? 0}%)
          </span>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #cbd5e1'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            color: '#64748b',
            display: 'block',
            textTransform: 'uppercase',
            marginBottom: '4px'
          }}>
            Checkpoints con Retraso
          </span>

          <span style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#0f172a'
          }}>
            {analisisIA.checkpoints_retrasados ?? 0} de{' '}
            {analisisIA.checkpoints_totales ?? 0} registrados
          </span>
        </div>
      </div>

      {/* Diagnóstico y recomendación */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontSize: '12px'
      }}>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '10px 12px',
          borderRadius: '6px',
          border: '1px solid #e2e8f0'
        }}>
          <strong style={{
            color: '#475569',
            display: 'block',
            marginBottom: '2px',
            fontSize: '11px'
          }}>
            DIAGNÓSTICO DEL TRAYECTO:
          </strong>

          <span style={{ color: '#0f172a', lineHeight: '1.4' }}>
            {analisisIA.diagnostico_ia || analisisIA.diagnostico}
          </span>
        </div>

        <div style={{
          backgroundColor: '#eff6ff',
          padding: '10px 12px',
          borderRadius: '6px',
          border: '1px solid #bfdbfe'
        }}>
          <strong style={{
            color: '#1d4ed8',
            display: 'block',
            marginBottom: '2px',
            fontSize: '11px'
          }}>
            RECOMENDACIÓN OPERATIVA:
          </strong>

          <span style={{ color: '#1e3a8a', lineHeight: '1.4' }}>
            {analisisIA.recomendacion ||
              'Tránsito estándar dentro de los parámetros esperados por el sistema.'}
          </span>
        </div>

        {/* Tiempos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginTop: '4px'
        }}>

          <div style={{
            backgroundColor: '#f8fafc',
            padding: '8px 10px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
          }}>
            <span style={{
              fontSize: '10px',
              color: '#64748b',
              display: 'block',
              fontWeight: 'bold'
            }}>
              TIEMPO EN TRÁNSITO:
            </span>

            <span style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#0f172a'
            }}>
              {analisisIA.minutos_en_transito || 0} min
            </span>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            padding: '8px 10px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
          }}>
            <span style={{
              fontSize: '10px',
              color: '#64748b',
              display: 'block',
              fontWeight: 'bold'
            }}>
              TIEMPO ESTIMADO:
            </span>

            <span style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#2563eb'
            }}>
              {analisisIA.minutos_estimados
                ? `${analisisIA.minutos_estimados} min`
                : 'Por definir'}
            </span>
          </div>
        </div>

        <div style={{
          fontSize: '11px',
          color: '#64748b',
          textAlign: 'right',
          marginTop: '2px'
        }}>
          📏 <strong>Distancia de la ruta:</strong>{' '}
          {analisisIA.distancia_km_ruta}
        </div>
      </div>
    </div>
  );
}
