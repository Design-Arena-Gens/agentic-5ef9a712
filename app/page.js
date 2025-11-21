'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('comparacion')

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          padding: '40px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>🚛 Frenos de Motor</h1>
          <p style={{ margin: 0, fontSize: '1.2em', opacity: 0.9 }}>
            Comparación técnica entre sistemas de frenado
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '2px solid #e0e0e0',
          background: '#f8f9fa'
        }}>
          {['comparacion', 'escape', 'jacobs'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '20px',
                border: 'none',
                background: activeTab === tab ? 'white' : 'transparent',
                color: activeTab === tab ? '#1e3c72' : '#666',
                fontSize: '1.1em',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '3px solid #667eea' : 'none',
                transition: 'all 0.3s'
              }}
            >
              {tab === 'comparacion' ? '📊 Comparación' :
               tab === 'escape' ? '💨 Freno de Escape' :
               '⚙️ Freno Jacobs'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          {activeTab === 'comparacion' && <ComparacionTab />}
          {activeTab === 'escape' && <EscapeTab />}
          {activeTab === 'jacobs' && <JacobsTab />}
        </div>
      </div>
    </div>
  )
}

function ComparacionTab() {
  return (
    <div>
      <h2 style={{ color: '#1e3c72', marginBottom: '30px' }}>Diferencias Principales</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <ComparisonCard
          title="Freno de Escape"
          icon="💨"
          color="#3498db"
          points={[
            'Válvula en el sistema de escape',
            'Crea contrapresión de gases',
            'Más simple y económico',
            'Efectividad moderada',
            'Menos desgaste del motor',
            'Fácil instalación'
          ]}
        />
        <ComparisonCard
          title="Freno Jacobs (Jake Brake)"
          icon="⚙️"
          color="#e74c3c"
          points={[
            'Actúa en válvulas de escape',
            'Libera compresión del cilindro',
            'Sistema más complejo',
            'Mayor efectividad de frenado',
            'Más potencia de retención',
            'Requiere modificación del motor'
          ]}
        />
      </div>

      <div style={{
        background: '#f8f9fa',
        padding: '30px',
        borderRadius: '15px',
        border: '2px solid #667eea'
      }}>
        <h3 style={{ color: '#1e3c72', marginTop: 0 }}>📋 Tabla Comparativa</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#667eea', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left' }}>Característica</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Freno de Escape</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Freno Jacobs</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ubicación', 'Sistema de escape', 'Culata del motor'],
              ['Principio', 'Contrapresión de gases', 'Liberación de compresión'],
              ['Complejidad', 'Baja', 'Alta'],
              ['Costo', '$500-$1,500', '$2,000-$5,000'],
              ['Potencia frenado', 'Moderada (40-60%)', 'Alta (80-90%)'],
              ['Ruido', 'Moderado', 'Alto (característico)'],
              ['Mantenimiento', 'Bajo', 'Medio-Alto'],
              ['Vida útil motor', 'Mayor preservación', 'Más exigente']
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'white' : '#f8f9fa' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>{row[0]}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{row[1]}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function EscapeTab() {
  return (
    <div>
      <h2 style={{ color: '#3498db', marginBottom: '20px' }}>💨 Freno de Motor de Escape</h2>

      <InfoSection
        title="¿Cómo Funciona?"
        color="#3498db"
        content={[
          'Una válvula mariposa o compuerta se cierra en el tubo de escape',
          'Bloquea la salida de gases de combustión',
          'Crea una contrapresión en el sistema de escape',
          'Los pistones deben trabajar contra esta presión',
          'El motor actúa como compresor de aire consumiendo energía',
          'Esta resistencia ayuda a desacelerar el vehículo'
        ]}
      />

      <InfoSection
        title="✅ Ventajas"
        color="#27ae60"
        content={[
          'Sistema más económico de instalar',
          'Menor complejidad mecánica',
          'Fácil mantenimiento',
          'Menos desgaste en componentes del motor',
          'Compatible con la mayoría de motores diesel',
          'Ruido menos intenso que el freno Jacobs'
        ]}
      />

      <InfoSection
        title="❌ Desventajas"
        color="#e67e22"
        content={[
          'Menor potencia de frenado que el Jacobs',
          'Efectividad limitada en pendientes pronunciadas',
          'Aumento de temperatura en el sistema de escape',
          'Puede causar contrapresión excesiva',
          'Menos eficiente en descensos largos',
          'Requiere combinación con frenos convencionales'
        ]}
      />

      <InfoSection
        title="🎯 Aplicaciones Típicas"
        color="#9b59b6"
        content={[
          'Camiones de carga ligera a mediana',
          'Vehículos con uso urbano frecuente',
          'Flotas que buscan economía de operación',
          'Terrenos con pendientes moderadas',
          'Aplicaciones donde el ruido es una consideración'
        ]}
      />
    </div>
  )
}

function JacobsTab() {
  return (
    <div>
      <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>⚙️ Freno Jacobs (Jake Brake)</h2>

      <InfoSection
        title="¿Cómo Funciona?"
        color="#e74c3c"
        content={[
          'Modifica el ciclo de trabajo del motor diesel',
          'En el tiempo de compresión, se acumula presión en el cilindro',
          'Antes del punto muerto superior (PMS), abre la válvula de escape',
          'Libera bruscamente el aire comprimido (energía acumulada)',
          'El motor no recupera esta energía en la expansión',
          'Convierte el motor en un compresor que consume potencia',
          'Resultado: fuerte efecto de frenado sin usar frenos de fricción'
        ]}
      />

      <InfoSection
        title="✅ Ventajas"
        color="#27ae60"
        content={[
          'Potencia de frenado superior (80-90% del frenado motor)',
          'Muy efectivo en descensos prolongados',
          'Reduce significativamente el desgaste de frenos',
          'Mayor seguridad en terrenos montañosos',
          'Control preciso de velocidad en descensos',
          'Ahorro en mantenimiento de frenos convencionales',
          'Sistema probado y confiable en la industria'
        ]}
      />

      <InfoSection
        title="❌ Desventajas"
        color="#e67e22"
        content={[
          'Costo de instalación más elevado',
          'Mayor complejidad mecánica',
          'Ruido característico muy alto',
          'Prohibido en algunas áreas urbanas por contaminación acústica',
          'Requiere modificación del tren de válvulas',
          'Mayor estrés en componentes del motor',
          'Mantenimiento especializado necesario',
          'No compatible con todos los motores'
        ]}
      />

      <InfoSection
        title="🎯 Aplicaciones Típicas"
        color="#9b59b6"
        content={[
          'Camiones pesados de carga',
          'Vehículos que operan en montañas',
          'Transporte de larga distancia',
          'Flotas de alto tonelaje',
          'Autobuses de pasajeros en rutas con pendientes',
          'Aplicaciones donde la seguridad es crítica'
        ]}
      />

      <div style={{
        marginTop: '30px',
        padding: '25px',
        background: '#fff3cd',
        border: '2px solid #ffc107',
        borderRadius: '15px'
      }}>
        <h3 style={{ color: '#856404', marginTop: 0 }}>🔊 Nota sobre el Ruido</h3>
        <p style={{ margin: 0, color: '#856404', lineHeight: '1.6' }}>
          El freno Jacobs es famoso por su sonido característico fuerte y explosivo.
          Este ruido es tan distintivo que muchas ciudades tienen regulaciones que
          prohíben su uso en áreas residenciales. Las señales de tránsito "No Jake Brake"
          son comunes en zonas urbanas de Estados Unidos y otros países.
        </p>
      </div>
    </div>
  )
}

function ComparisonCard({ title, icon, color, points }) {
  return (
    <div style={{
      padding: '25px',
      background: 'white',
      border: `3px solid ${color}`,
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        color: color,
        marginTop: 0,
        fontSize: '1.5em',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{ fontSize: '1.3em' }}>{icon}</span>
        {title}
      </h3>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0
      }}>
        {points.map((point, i) => (
          <li key={i} style={{
            padding: '10px 0',
            borderBottom: i < points.length - 1 ? '1px solid #eee' : 'none',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <span style={{ color: color, marginRight: '10px', fontWeight: 'bold' }}>•</span>
            <span style={{ flex: 1 }}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InfoSection({ title, color, content }) {
  return (
    <div style={{
      marginBottom: '30px',
      padding: '25px',
      background: '#f8f9fa',
      borderLeft: `5px solid ${color}`,
      borderRadius: '10px'
    }}>
      <h3 style={{ color: color, marginTop: 0, fontSize: '1.3em' }}>{title}</h3>
      <ul style={{
        margin: 0,
        paddingLeft: '20px',
        lineHeight: '1.8'
      }}>
        {content.map((item, i) => (
          <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
