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
    <>
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundImage: 'url(/hero-meditation.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Enhanced gradient overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%)',
          zIndex: 1
        }}></div>

        {/* Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1000px',
          width: '100%',
          padding: isMobile ? '2rem 1.5rem' : '3rem 2rem'
        }}>
          {/* Trust badge */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              backgroundColor: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{
                color: '#FFD700',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>✨ Limited to 12 Guests • Next Batch March2026</span>
            </div>
          </div>

          {/* Main headline - benefits focused */}
          <h1 style={{
            fontWeight: 900,
            lineHeight: 1.1,
            color: 'white',
            marginBottom: '1rem',
            fontSize: isMobile ? '2.25rem' : isTablet ? '2.85rem' : '3.75rem',
            letterSpacing: '-0.02em',
            filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.5))',
            textAlign: 'center'
          }}>
            Transform Your Life Through<br />
            <span style={{
              background: 'linear-gradient(135deg, #7BC97B, #5CB85C)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              Ancient Ayurvedic Healing
            </span>
          </h1>
            
          {/* Subheading - benefits */}
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.35rem',
            fontWeight: 500,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
            marginBottom: '1.5rem',
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            textAlign: 'center'
          }}>
            Experience profound healing, mental clarity, and spiritual awakening in 12 transformative nights at our exclusive Himalayan sanctuary
          </p>




            {/* CTA Buttons - Redesigned for conversion */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '1.5rem'
            }}>
              <button style={{
                position: 'relative',
                padding: isMobile ? '1rem 2rem' : '1.1rem 2.75rem',
                fontWeight: 800,
                borderRadius: '50px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                border: 'none',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#1a1a1a',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.4)',
                letterSpacing: '0.5px'
              }}
              onClick={() => window.dispatchEvent(new CustomEvent('ayurveda:openBooking'))}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255, 215, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.4)';
              }}>
                🎯 Secure Your Spot Now
              </button>
              
              <button style={{
                position: 'relative',
                padding: isMobile ? '1rem 2rem' : '1.1rem 2.75rem',
                fontWeight: 700,
                borderRadius: '50px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                backgroundColor: 'transparent',
                color: 'white',
                overflow: 'hidden',
                letterSpacing: '0.5px'
              }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              }}>
                👉 Learn More
              </button>
            </div>
          </div>
      </section>

      {/* Three-step flow section - separate from image hero */}
      <section style={{
        backgroundColor: AYUR_LIGHT_BG,
        paddingTop: '4rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
        </div>

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: isMobile ? '1rem' : '1.5rem',
          paddingRight: isMobile ? '1rem' : '1.5rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: AYUR_GREEN,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>Your Journey with Us</span>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.8rem',
              fontWeight: 900,
              color: '#1a1a1a',
              marginBottom: '1rem',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em'
            }}>
              The <span style={{ color: AYUR_GREEN }}>Healing Journey</span> That Transforms
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Experience a carefully designed path from arrival to transformation, guided by ancient Ayurvedic wisdom
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              {
                step: '01',
                title: 'Arrive',
                subtitle: 'Welcome & Assessment',
                color: AYUR_GREEN,
                icon: '🏠',
                benefits: ['Personalized Dosha Assessment', 'Wellness Consultation', 'Comfort & Orientation'],
                description: 'Begin with a comprehensive health assessment and settle into your private sanctuary'
              },
              {
                step: '02',
                title: 'Heal',
                subtitle: 'Transformation & Treatment',
                color: AYUR_GOLD,
                icon: '💆',
                benefits: ['Daily Yoga & Meditation', 'Panchakarma Treatments', 'Ayurvedic Massage'],
                description: 'Immerse in authentic healing practices and daily wellness rituals'
              },
              {
                step: '03',
                title: 'Transform',
                subtitle: 'Integration & Mastery',
                color: '#8B4513',
                icon: '✨',
                benefits: ['Lifestyle Guidance', 'Herb Formulations', 'Lifetime Support'],
                description: 'Return home as a transformed version of yourself with lasting practices'
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: 'white',
                  border: `2px solid ${item.color}20`,
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  transform: activeStep === index + 1 ? 'translateY(-12px)' : 'translateY(0)',
                  boxShadow: activeStep === index + 1 
                    ? `0 20px 40px ${item.color}30` 
                    : '0 8px 20px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={() => setActiveStep(index + 1)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                  transition: 'all 0.3s ease'
                }}></div>

                {/* Step number */}
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  color: `${item.color}15`,
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  {item.step}
                </div>

                {/* Icon */}
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: item.color,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em'
                }}>
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p style={{
                  fontSize: '0.9rem',
                  color: '#999',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {item.subtitle}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#555',
                  marginBottom: '1.5rem'
                }}>
                  {item.description}
                </p>

                {/* Benefits list */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {item.benefits.map((benefit, i) => (
                    <div 
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        backgroundColor: `${item.color}10`,
                        transition: 'all 0.2s ease',
                        transform: activeStep === index + 1 ? 'translateX(8px)' : 'translateX(0)'
                      }}
                    >
                      <span style={{
                        color: item.color,
                        fontWeight: 700,
                        marginTop: '2px',
                        flexShrink: 0
                      }}>✓</span>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#333'
                      }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Hero;