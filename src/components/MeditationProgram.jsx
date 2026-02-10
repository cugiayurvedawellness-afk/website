import React from 'react';

const MeditationProgram = () => {
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
            Meditation & Mindfulness Retreat
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#4a5568',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            Discover inner peace and mental clarity through ancient meditation techniques practiced in the tranquil setting of the Himalayas. Learn from experienced teachers and immerse yourself in silence and self-reflection.
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
            }}>7-14 Days</span>
            <span style={{
              background: '#DDE8CC',
              color: '#6B8E23',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Beginner Friendly</span>
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
          }}>Meditation Practices</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Vipassana Meditation', desc: 'Insight meditation for deep self-awareness' },
              { title: 'Mindfulness Practice', desc: 'Present moment awareness and concentration' },
              { title: 'Loving-Kindness Meditation', desc: 'Cultivate compassion and positive emotions' },
              { title: 'Chakra Meditation', desc: 'Balance and energize your energy centers' },
              { title: 'Sound Meditation', desc: 'Healing through mantras and singing bowls' },
              { title: 'Walking Meditation', desc: 'Mindful movement in nature' }
            ].map((practice, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: '#F5F9F0',
                borderRadius: '15px',
                borderLeft: '4px solid #8B4513'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '0.5rem'
                }}>{practice.title}</h3>
                <p style={{
                  color: '#4a5568',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>{practice.desc}</p>
              </div>
            ))}
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
          }}>Benefits of Regular Practice</h2>
          
          <ul style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '1rem',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {[
              'Reduced stress and anxiety',
              'Improved focus and concentration',
              'Better emotional regulation',
              'Enhanced self-awareness',
              'Lower blood pressure',
              'Better sleep quality',
              'Increased compassion',
              'Greater mental clarity'
            ].map((benefit, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                <span style={{
                  color: '#6B8E23',
                  fontSize: '1.5rem'
                }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
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
          }}>Find Your Inner Peace</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Begin your meditation journey in the serene Himalayas
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
            Book Your Retreat
          </button>
        </div>
      </section>
    </div>
  );
};

export default MeditationProgram;
