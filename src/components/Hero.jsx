import React, { useState } from 'react';

// Define the earthy Ayurvedic colors
const AYUR_GREEN = '#6B8E23';
const AYUR_LIGHT_BG = '#F5F9F0';
const AYUR_GOLD = '#D4AF37';

const App = () => {
    return (
        <Hero />
    );
};

const Hero = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      minHeight: 'auto',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: AYUR_LIGHT_BG,
      color: '#1f2937',
      paddingTop: isMobile ? '2rem' : '3rem',
      paddingBottom: isMobile ? '2rem' : '3rem'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(60px)',
          opacity: 0.25,
          animation: 'blob 8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95)',
          backgroundColor: AYUR_GREEN,
          top: '4rem',
          left: '2rem'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(60px)',
          opacity: 0.25,
          animation: 'blob 8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95)',
          backgroundColor: AYUR_GOLD,
          top: '8rem',
          right: '2rem',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(60px)',
          opacity: 0.25,
          animation: 'blob 8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95)',
          backgroundColor: AYUR_GREEN,
          bottom: '-3rem',
          left: '5rem',
          animationDelay: '4s'
        }}></div>
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(107, 142, 35, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 142, 35, 0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}></div>

      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: isMobile ? '1rem' : '1.5rem',
        paddingRight: isMobile ? '1rem' : '1.5rem'
      }}>
        {/* Header badge */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.25rem',
            background: 'linear-gradient(135deg, white, rgba(245, 249, 240, 0.8))',
            border: `2px solid ${AYUR_GREEN}30`,
            borderRadius: '9999px',
            boxShadow: '0 8px 20px rgba(107, 142, 35, 0.25)',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '9999px',
              backgroundColor: AYUR_GREEN,
              boxShadow: `0 0 10px ${AYUR_GREEN}80`,
              animation: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}></span>
            <span style={{
              color: '#1f2937',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em'
            }}>AUTHENTIC AYURVEDIC RETREAT IN RISHIKESH</span>
          </div>
        </div>

        {/* Main hero content */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          marginTop: '1rem',
          paddingTop: '0.5rem',
          animation: 'slideUp 1s ease-out 0.3s both'
        }}>
          <h1 style={{
            fontWeight: 800,
            lineHeight: 1.2,
            backgroundImage: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_GOLD})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '0.75rem',
            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.25rem',
            letterSpacing: '-0.02em',
            filter: `drop-shadow(0 4px 12px ${AYUR_GREEN}30)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <span>Himalayan Ayurveda Retreat</span>
          </h1>
          
          <h2 style={{
            fontSize: isMobile ? '1.125rem' : isTablet ? '1.375rem' : '1.75rem',
            fontWeight: 600,
            maxWidth: '56rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.4,
            marginBottom: '1rem',
            color: '#374151'
          }}>
            <span style={{
              fontWeight: 500,
              display: 'inline-block'
            }}>
              Discover Ancient Wisdom in the Spiritual Heart of Rishikesh
            </span>
          </h2>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#4b5563',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7,
            marginBottom: '1.5rem'
          }}>
            Immerse yourself in authentic Ayurvedic healing, yoga, and meditation 
            with comfortable accommodation in the serene Himalayan foothills.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '0.75rem',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '1rem'
          }}>
            <button style={{
              position: 'relative',
              padding: '0.875rem 1.75rem',
              fontWeight: 700,
              borderRadius: '0.875rem',
              fontSize: '1rem',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: AYUR_GREEN,
              color: 'white',
              overflow: 'hidden',
              boxShadow: `0 15px 35px -5px ${AYUR_GREEN}60`
            }}
            onClick={() => window.dispatchEvent(new CustomEvent('ayurveda:openBooking'))}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.querySelector('.btn-hover-overlay').style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.querySelector('.btn-hover-overlay').style.opacity = '0';
            }}>
              <div className="btn-hover-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${AYUR_GOLD}40, ${AYUR_GREEN}20)`,
                opacity: 0,
                transition: 'opacity 0.4s ease'
              }}></div>
              <span style={{ position: 'relative', zIndex: 1 }}>Book Your Retreat</span>
            </button>
            
            <button style={{
              position: 'relative',
              padding: '0.875rem 1.75rem',
              fontWeight: 600,
              borderRadius: '0.875rem',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: `2.5px solid ${AYUR_GREEN}`,
              backgroundColor: 'transparent',
              color: AYUR_GREEN,
              overflow: 'hidden'
            }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${AYUR_GREEN}10`;
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Explore Services
            </button>
          </div>
        </div>

        {/* Three-step flow */}
        <div style={{
          maxWidth: '1100px',
          margin: '3.5rem auto 0',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            <h3 style={{
              fontSize: isMobile ? '1.75rem' : '2.25rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '0.5rem'
            }}>
              Your <span style={{ color: AYUR_GREEN }}>Healing Journey</span>
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Experience transformation through ancient Ayurvedic practices
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: window.innerWidth < 768 ? 'center' : 'stretch',
            position: 'relative'
          }}>
            {/* Step 1: Arrive - Left */}
            <div style={{
              flex: window.innerWidth >= 768 ? '1' : '1',
              animation: 'flowSlideIn 0.8s ease-out backwards'
            }}
            onMouseEnter={() => setActiveStep(1)}
            onMouseLeave={() => setActiveStep(null)}>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: AYUR_GREEN,
                  boxShadow: `0 0 0 8px ${AYUR_GREEN}20`,
                  transform: activeStep === 1 ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: '28px', height: '28px' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              <div style={{
                transition: 'all 0.4s ease',
                transform: activeStep === 1 ? 'translateY(-5px)' : 'translateY(0)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    opacity: 0.4,
                    letterSpacing: '0.05em',
                    color: AYUR_GREEN
                  }}>01</span>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    transition: 'all 0.3s ease',
                    color: AYUR_GREEN
                  }}>Arrive</h3>
                </div>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  fontSize: '0.9375rem',
                  textAlign: 'center'
                }}>
                  Begin your journey in Rishikesh with personalized consultation and comfortable accommodation
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {['Dosha Assessment', 'Personalized Plan', 'Welcome Ceremony'].map((feature, i) => (
                    <div key={i} style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: `${AYUR_GREEN}20`,
                      borderLeft: `3px solid ${AYUR_GREEN}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: AYUR_GREEN }}>→</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Heal - Center */}
            <div style={{
              flex: window.innerWidth >= 768 ? '1' : '1',
              animation: 'flowSlideIn 0.8s ease-out 0.3s backwards'
            }}
            onMouseEnter={() => setActiveStep(2)}
            onMouseLeave={() => setActiveStep(null)}>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: AYUR_GOLD,
                  boxShadow: `0 0 0 8px ${AYUR_GOLD}20`,
                  transform: activeStep === 2 ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: '28px', height: '28px' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              
              <div style={{
                transition: 'all 0.4s ease',
                transform: activeStep === 2 ? 'translateY(-5px)' : 'translateY(0)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    opacity: 0.4,
                    letterSpacing: '0.05em',
                    color: AYUR_GOLD
                  }}>02</span>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    transition: 'all 0.3s ease',
                    color: AYUR_GOLD
                  }}>Heal</h3>
                </div>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  fontSize: '0.9375rem',
                  textAlign: 'center'
                }}>
                  Experience authentic Ayurvedic treatments, yoga sessions, and therapeutic practices
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {['Daily Yoga & Meditation', 'Panchakarma Therapy', 'Ayurvedic Massage'].map((feature, i) => (
                    <div key={i} style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: `${AYUR_GOLD}20`,
                      borderLeft: `3px solid ${AYUR_GOLD}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: AYUR_GOLD }}>→</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Transform - Right */}
            <div style={{
              flex: window.innerWidth >= 768 ? '1' : '1',
              animation: 'flowSlideIn 0.8s ease-out 0.6s backwards'
            }}
            onMouseEnter={() => setActiveStep(3)}
            onMouseLeave={() => setActiveStep(null)}>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: '#8B4513',
                  boxShadow: '0 0 0 8px #8B451320',
                  transform: activeStep === 3 ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: '28px', height: '28px' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
              </div>
              
              <div style={{
                transition: 'all 0.4s ease',
                transform: activeStep === 3 ? 'translateY(-5px)' : 'translateY(0)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    opacity: 0.4,
                    letterSpacing: '0.05em',
                    color: '#8B4513'
                  }}>03</span>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    transition: 'all 0.3s ease',
                    color: '#8B4513'
                  }}>Transform</h3>
                </div>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  fontSize: '0.9375rem',
                  textAlign: 'center'
                }}>
                  Return home renewed with sustainable wellness practices and lifelong knowledge
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {['Lifestyle Guidance', 'Herbal Formulations', 'Follow-up Support'].map((feature, i) => (
                    <div key={i} style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#8B451320',
                      borderLeft: '3px solid #8B4513'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#8B4513' }}>→</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0px, 0px) scale(1) rotate(0deg); 
          }
          33% { 
            transform: translate(40px, -60px) scale(1.15) rotate(120deg); 
          }
          66% { 
            transform: translate(-30px, 30px) scale(0.9) rotate(240deg); 
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flowSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default App;
