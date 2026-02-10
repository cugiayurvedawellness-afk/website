import React from 'react';

const YogaProgram = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F9F0' }}>
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Back Button */}
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

        {/* Header */}
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
            Yoga & Meditation Program
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#4a5568',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            Experience the transformative power of traditional yoga and meditation practices in the spiritual birthplace of yoga - Rishikesh.
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
            }}>7-21 Days</span>
            <span style={{
              background: '#DDE8CC',
              color: '#6B8E23',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>All Levels Welcome</span>
          </div>
        </div>

        {/* Program Details */}
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
          }}>What's Included</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Daily Yoga Sessions', desc: 'Morning and evening Hatha and Ashtanga yoga classes' },
              { title: 'Meditation Practice', desc: 'Guided meditation and pranayama breathing exercises' },
              { title: 'Accommodation', desc: 'Comfortable rooms with mountain and river views' },
              { title: 'Sattvic Meals', desc: 'Three organic vegetarian meals daily' },
              { title: 'Workshops', desc: 'Philosophy sessions and yoga anatomy classes' },
              { title: 'Nature Walks', desc: 'Peaceful walks along the Ganges and forest trails' }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: '#F5F9F0',
                borderRadius: '15px',
                borderLeft: '4px solid #6B8E23'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '0.5rem'
                }}>{item.title}</h3>
                <p style={{
                  color: '#4a5568',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
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
          }}>Daily Schedule</h2>
          
          {[
            { time: '6:00 AM', activity: 'Morning Meditation & Pranayama' },
            { time: '7:00 AM', activity: 'Hatha Yoga Class' },
            { time: '9:00 AM', activity: 'Healthy Breakfast' },
            { time: '11:00 AM', activity: 'Philosophy Workshop / Free Time' },
            { time: '1:00 PM', activity: 'Lunch' },
            { time: '3:00 PM', activity: 'Personal Practice / Nature Walk' },
            { time: '5:00 PM', activity: 'Ashtanga Yoga Class' },
            { time: '7:00 PM', activity: 'Dinner' },
            { time: '8:00 PM', activity: 'Evening Meditation & Relaxation' }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '2rem',
              padding: '1rem 0',
              borderBottom: index < 8 ? '1px solid #e2e8f0' : 'none'
            }}>
              <span style={{
                fontWeight: '600',
                color: '#6B8E23',
                minWidth: '100px'
              }}>{item.time}</span>
              <span style={{
                color: '#4a5568'
              }}>{item.activity}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
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
          }}>Ready to Begin Your Journey?</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Contact us to reserve your spot in our next yoga retreat
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

export default YogaProgram;
