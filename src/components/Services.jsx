import React from 'react';
import { trackEvent } from '../utils/analytics.js';

const AYUR_GREEN = '#6B8E23';
const AYUR_GOLD = '#D4AF37';
const AYUR_WARM = '#CD8B65';

const Services = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { 
      title: 'Yoga & Meditation',
      tagline: 'Transform Mind & Body',
      desc: 'Experience traditional Hatha and Ashtanga yoga with guided meditation sessions in the serene Himalayan atmosphere',
      image: 'yoga.webp',
      benefits: ['Increased Flexibility', 'Mental Clarity', 'Stress Relief', 'Better Sleep'],
      stats: { duration: '7-21 Days', level: 'All Levels' },
      popular: true
    },
    { 
      title: 'Panchakarma Treatment',
      tagline: 'Complete Detoxification',
      desc: 'Complete detoxification and rejuvenation through authentic five-step Ayurvedic cleansing therapies',
      image: 'panchakarma.webp',
      benefits: ['Total Body Detox', 'Immune Boost', 'Digestive Health', 'Rejuvenation'],
      stats: { duration: '14-28 Days', level: 'Customized' }
    },
    { 
      title: 'Therapeutic Massage',
      tagline: 'Deep Healing & Relaxation',
      desc: 'Healing Ayurvedic massages using herbal oils, including Abhyanga, Shirodhara, and Kizhi treatments',
      image: 'massage.webp',
      benefits: ['Pain Relief', 'Muscle Relaxation', 'Better Circulation', 'Skin Radiance'],
      stats: { duration: '3-14 Days', level: 'Relaxation & Healing' }
    },
    { 
      title: 'Ayurvedic Consultation',
      tagline: 'Personalized Health Assessment',
      desc: 'Personalized health assessment with experienced Ayurvedic physicians to balance your doshas',
      image: 'consultation.webp',
      benefits: ['Dosha Analysis', 'Custom Protocol', 'Lifestyle Guidance', 'Ongoing Support'],
      stats: { duration: 'Single Session', level: 'Individual' }
    },
    { 
      title: 'Herbal Medicine',
      tagline: "Nature's Healing Power",
      desc: 'Custom herbal formulations prepared fresh using traditional methods and pure Himalayan ingredients',
      image: 'herbal.webp',
      benefits: ['100% Organic', 'Fresh Preparation', 'Proven Efficacy', 'Safe & Pure'],
      stats: { duration: 'Ongoing', level: 'Personalized' }
    },
  ];

  const handleBooking = (serviceTitle) => {
    trackEvent('service_booking_clicked', { service: serviceTitle });
    window.dispatchEvent(new CustomEvent('ayurveda:openBooking', { detail: { service: serviceTitle } }));
  };

  const handleLearnMore = (serviceTitle) => {
    trackEvent('service_learn_more_clicked', { service: serviceTitle });
  };

  return (
    <section id="services" style={{
      padding: isMobile ? '3rem 1rem' : '5rem 2rem',
      background: `linear-gradient(135deg, #FEF7F0 0%, #FFFAF5 50%, #FAF3EB 100%)`,
      position: 'relative',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, ${AYUR_WARM}08 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Title Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '4rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.6rem 1.5rem',
            background: `${AYUR_GOLD}15`,
            borderRadius: '30px',
            marginBottom: '1.5rem',
            border: `1.5px solid ${AYUR_GOLD}40`
          }}>
            <span style={{
              color: AYUR_GREEN,
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.5px'
            }}>✨ EXPLORE OUR PROGRAMS</span>
          </div>
          <h2 style={{
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: 900,
            color: '#2d3748',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Ayurvedic <span style={{ color: AYUR_GREEN }}>Retreat Services</span>
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.15rem',
            color: '#6B7280',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Ancient healing wisdom meets modern comfort in the sacred land of Rishikesh
          </p>
        </div>

        {/* Service Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '2rem' : '3rem'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : index % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                gap: isMobile ? '2rem' : '3rem',
                alignItems: 'center',
                background: '#ffffff',
                borderRadius: '28px',
                padding: isMobile ? '1.5rem' : '2.5rem',
                border: `2px solid ${AYUR_GOLD}20`,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 25px 60px ${AYUR_WARM}25`;
                e.currentTarget.style.borderColor = AYUR_WARM;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = `${AYUR_GOLD}20`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Section */}
              <div style={{
                order: isMobile ? 2 : index % 2 === 0 ? 2 : 1,
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                height: isMobile ? '280px' : '400px',
                boxShadow: `0 12px 40px ${AYUR_WARM}20`,
                width: '100%',
                background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`
              }}>
                <img 
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Content Section */}
              <div style={{
                order: isMobile ? 1 : index % 2 === 0 ? 1 : 2,
                padding: isMobile ? '0.5rem' : '1rem'
              }}>
                {service.popular && (
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: `${AYUR_WARM}15`,
                    borderRadius: '24px',
                    marginBottom: '1rem',
                    fontSize: '0.85rem',
                    color: AYUR_WARM,
                    fontWeight: 700,
                    border: `1px solid ${AYUR_WARM}30`
                  }}>
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <h3 style={{
                  fontSize: isMobile ? '1.75rem' : '2.25rem',
                  fontWeight: 900,
                  color: AYUR_GREEN,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: AYUR_WARM,
                  fontWeight: 700,
                  marginBottom: '1rem',
                  letterSpacing: '0.3px'
                }}>
                  {service.tagline}
                </p>
                
                <p style={{
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontSize: isMobile ? '0.95rem' : '1.05rem'
                }}>
                  {service.desc}
                </p>

                {/* Benefits Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem',
                      backgroundColor: `${AYUR_GREEN}08`,
                      borderRadius: '10px',
                      border: `1px solid ${AYUR_GREEN}20`
                    }}>
                      <span style={{ color: AYUR_WARM, fontSize: '1.1rem', fontWeight: 'bold' }}>✓</span>
                      <span style={{ color: AYUR_GREEN, fontWeight: 700, fontSize: '0.85rem' }}>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Duration & Level */}
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  fontSize: '0.95rem'
                }}>
                  <div style={{ fontWeight: 700, color: AYUR_WARM }}>
                    📅 {service.stats.duration}
                  </div>
                  <div style={{ fontWeight: 700, color: AYUR_GREEN }}>
                    🎯 {service.stats.level}
                  </div>
                </div>

                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <button onClick={() => handleBooking(service.title)} style={{
                    background: `linear-gradient(135deg, ${AYUR_GOLD}, ${AYUR_WARM})`,
                    color: 'white',
                    padding: isMobile ? '0.85rem 1.75rem' : '0.95rem 2.25rem',
                    borderRadius: '28px',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: `0 10px 30px ${AYUR_WARM}30`,
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = `0 15px 40px ${AYUR_WARM}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = `0 10px 30px ${AYUR_WARM}30`;
                  }}>
                    🎯 Book Now
                  </button>
                  
                  <button onClick={() => handleLearnMore(service.title)} style={{
                    background: 'transparent',
                    color: AYUR_GREEN,
                    padding: isMobile ? '0.85rem 1.75rem' : '0.95rem 2.25rem',
                    borderRadius: '28px',
                    border: `2.5px solid ${AYUR_GREEN}40`,
                    fontWeight: 700,
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${AYUR_GREEN}08`;
                    e.target.style.borderColor = AYUR_GREEN;
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = `${AYUR_GREEN}40`;
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    👉 Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #services h2 {
            font-size: 2.2rem !important;
          }
          #services h3 {
            font-size: 1.75rem !important;
          }
        }

        @media (max-width: 640px) {
          #services {
            padding: 2rem 1rem !important;
          }
          #services h2 {
            font-size: 1.8rem !important;
          }
          #services h3 {
            font-size: 1.5rem !important;
          }
          #services button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
