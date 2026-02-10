import React from 'react';

const PanchakarmaProgram = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F9F0' }}>
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <button
          onClick={() => {
            window.location.hash = '#/';
            window.scrollTo(0, 0);
          }}
          style={{
            background: 'transparent',
            border: '2px solid #6B8E23',
            color: '#6B8E23',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            marginBottom: '2rem',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#6B8E23';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#6B8E23';
          }}
        >
          ← Back to Home
        </button>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '1rem'
          }}>
            Panchakarma Treatment Program
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#4a5568',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            Experience the profound cleansing and rejuvenation of authentic Panchakarma therapy - the cornerstone of Ayurvedic healing. This comprehensive detoxification program removes toxins, balances doshas, and restores natural vitality.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: '#DDE8CC',
              color: '#6B8E23',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>14-28 Days</span>
            <span style={{
              background: '#DDE8CC',
              color: '#6B8E23',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Customized Treatment</span>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '1.5rem'
          }}>The Five Purification Therapies</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {[
              { name: 'Vamana', desc: 'Therapeutic vomiting to eliminate Kapha toxins' },
              { name: 'Virechana', desc: 'Purgation therapy for Pitta balance' },
              { name: 'Basti', desc: 'Medicated enema for Vata disorders' },
              { name: 'Nasya', desc: 'Nasal administration for head and neck ailments' },
              { name: 'Raktamokshana', desc: 'Blood purification therapy' }
            ].map((therapy, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: '#F5F9F0',
                borderRadius: '15px',
                borderLeft: '4px solid #D4AF37'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '0.5rem'
                }}>{index + 1}. {therapy.name}</h3>
                <p style={{
                  color: '#4a5568',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>{therapy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>Transform Your Health</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Schedule a consultation to create your personalized Panchakarma program
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('ayurveda:openBooking'))}
            style={{
              background: 'white',
              color: '#6B8E23',
              padding: '1rem 2.5rem',
              borderRadius: '10px',
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default PanchakarmaProgram;
