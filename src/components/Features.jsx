import React, { useState } from 'react';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Comfortable Accommodation",
      description: "Peaceful rooms with modern amenities in traditional Himalayan style architecture.",
      color: "#6B8E23"
    },
    {
      title: "Organic Ayurvedic Meals",
      description: "Freshly prepared sattvic food using local organic ingredients and herbs.",
      color: "#8FBC8F"
    },
    {
      title: "Experienced Practitioners",
      description: "Certified Ayurvedic doctors and yoga teachers with decades of experience.",
      color: "#D4AF37"
    },
    {
      title: "Riverside Location",
      description: "Serene setting along the sacred Ganges with mountain views.",
      color: "#6B8E23"
    },
    {
      title: "Personalized Programs",
      description: "Custom treatment plans tailored to your unique dosha constitution.",
      color: "#8B4513"
    },
    {
      title: "Holistic Wellness",
      description: "Complete mind-body-spirit healing through ancient Ayurvedic wisdom.",
      color: "#556B2F"
    }
  ];

  return (
    <section id="features" style={{
      position: 'relative',
      padding: '3rem 1.5rem',
      background: 'linear-gradient(135deg, #F5F9F0 0%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: '-6%',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${features[activeIndex].color}10 0%, transparent 70%)`,
        transition: 'all 1s ease',
        filter: 'blur(48px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '-3%',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${features[activeIndex].color}08 0%, transparent 70%)`,
        transition: 'all 1s ease',
        filter: 'blur(48px)'
      }} />

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#2d3748',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}>
              Why Choose <span style={{
                background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Our Retreat</span>?
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#4a5568',
              maxWidth: '550px'
            }}>
              Experience authentic Ayurvedic healing in the spiritual heart of India
            </p>
          </div>
          <div style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              style={{
                background: activeIndex === 0 ? '#e2e8f0' : '#6B8E23',
                color: activeIndex === 0 ? '#94a3b8' : 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s'
              }}
            >
              ←
            </button>
            <button
              onClick={() => setActiveIndex(Math.min(features.length - 1, activeIndex + 1))}
              disabled={activeIndex === features.length - 1}
              style={{
                background: activeIndex === features.length - 1 ? '#e2e8f0' : '#6B8E23',
                color: activeIndex === features.length - 1 ? '#94a3b8' : 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: activeIndex === features.length - 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s'
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                background: activeIndex === index 
                  ? `linear-gradient(135deg, ${feature.color}08, white)`
                  : 'white',
                borderRadius: '20px',
                padding: '2rem',
                border: activeIndex === index 
                  ? `2px solid ${feature.color}40`
                  : '2px solid #f0f0f0',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: activeIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: activeIndex === index 
                  ? `0 20px 40px ${feature.color}15`
                  : '0 5px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '15px',
                background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                transition: 'transform 0.4s',
                transform: activeIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
              }}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  style={{ 
                    width: '32px', 
                    height: '32px'
                  }}
                >
                  {index === 0 && <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>}
                  {index === 1 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>}
                  {index === 2 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>}
                  {index === 3 && <path d="M21 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 5.25 8 13 8 13s8-7.75 8-13zm-8 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>}
                  {index === 4 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>}
                  {index === 5 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>}
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#2d3748',
                marginBottom: '0.75rem',
                transition: 'color 0.3s',
                ...(activeIndex === index && { color: feature.color })
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4a5568'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #features > div > div:first-child {
            flex-direction: column;
            align-items: flex-start !important;
          }
          #features h2 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
