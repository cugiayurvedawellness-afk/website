import React from 'react';

const Services = () => {
  const services = [
    { 
      title: 'Yoga & Meditation', 
      desc: 'Experience traditional Hatha and Ashtanga yoga with guided meditation sessions in the serene Himalayan atmosphere',
      image: 'yoga.webp',
      stats: { duration: '7-21 Days', level: 'All Levels' }
    },
    { 
      title: 'Panchakarma Treatment', 
      desc: 'Complete detoxification and rejuvenation through authentic five-step Ayurvedic cleansing therapies',
      image: 'panchakarma.webp',
      stats: { duration: '14-28 Days', level: 'Customized' }
    },
    { 
      title: 'Therapeutic Massage', 
      desc: 'Healing Ayurvedic massages using herbal oils, including Abhyanga, Shirodhara, and Kizhi treatments',
      image: 'massage.webp',
      stats: { duration: '3-14 Days', level: 'Relaxation & Healing' }
    },
    { 
      title: 'Ayurvedic Consultation', 
      desc: 'Personalized health assessment with experienced Ayurvedic physicians to balance your doshas',
      image: 'consultation.webp',
      stats: { duration: 'Single Session', level: 'Individual' }
    },
    { 
      title: 'Herbal Medicine', 
      desc: 'Custom herbal formulations prepared fresh using traditional methods and pure Himalayan ingredients',
      image: 'herbal.webp',
      stats: { duration: 'Ongoing', level: 'Personalized' }
    },
  ];

  return (
    <section id="services" style={{
      padding: '5rem 2rem',
      background: 'radial-gradient(ellipse at center, #ffffff 0%, #fafff6 45%, #f0f9ea 85%)',
      position: 'relative'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(107, 142, 35, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        {/* Title Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: '#F5F9F0',
            borderRadius: '25px',
            marginBottom: '1rem',
            border: '1px solid #DDE8CC'
          }}>
            <span style={{
              color: '#6B8E23',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>EXPLORE OUR PROGRAMS</span>
          </div>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '1rem'
          }}>
            Ayurvedic <span style={{ color: '#6B8E23' }}>Retreat Services</span>
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#4a5568',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Ancient healing wisdom meets modern comfort in the sacred land of Rishikesh
          </p>
        </div>

        {/* Service Cards - Staggered Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: '3rem',
                alignItems: 'center',
                background: '#ffffff',
                borderRadius: '35px',
                padding: '2rem',
                border: '2px solid #f5f5f5',
                transition: 'all 0.4s ease',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(107, 142, 35, 0.15)';
                e.currentTarget.style.borderColor = '#DDE8CC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#f5f5f5';
              }}
            >
              {/* Image Section */}
              <div style={{
                order: index % 2 === 0 ? 1 : 2,
                position: 'relative',
                borderRadius: '25px',
                overflow: 'hidden',
                height: '450px',
                minHeight: '400px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                width: '100%',
                background: 'linear-gradient(135deg, #6B8E23 0%, #8FBC8F 100%)'
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
                    display: 'block',
                    opacity: 1
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
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  color: '#6B8E23'
                }}>
                  {service.stats.level}
                </div>
              </div>

              {/* Content Section */}
              <div style={{
                order: index % 2 === 0 ? 2 : 1,
                padding: '1rem'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  background: '#F5F9F0',
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: '#6B8E23',
                  fontWeight: '600'
                }}>
                  {service.stats.duration}
                </div>
                
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#2d3748',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  fontSize: '1.05rem'
                }}>
                  {service.desc}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <button style={{
                    background: 'linear-gradient(135deg, #6B8E23 0%, #8FBC8F 100%)',
                    color: 'white',
                    padding: '0.9rem 2.5rem',
                    borderRadius: '25px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(107, 142, 35, 0.3)'
                  }}
                  onClick={() => window.dispatchEvent(new CustomEvent('ayurveda:openBooking', { detail: { service: service.title } }))}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(107, 142, 35, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(107, 142, 35, 0.3)';
                  }}>
                    Book Now
                  </button>
                  
                  <button style={{
                    background: 'transparent',
                    color: '#6B8E23',
                    padding: '0.9rem 2.5rem',
                    borderRadius: '25px',
                    border: '2px solid #DDE8CC',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F5F9F0';
                    e.target.style.borderColor = '#6B8E23';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = '#DDE8CC';
                  }}
                  onClick={() => {
                    const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                    window.location.hash = `/services/${slug}`;
                    window.scrollTo(0, 0);
                  }}
                  >
                    Learn More
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
          #services > div > div:nth-child(2) > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          #services > div > div:nth-child(2) > div > div {
            order: 1 !important;
          }
          #services > div > div:nth-child(2) > div > div:first-child {
            height: 250px !important;
            min-height: 200px !important;
          }
        }

        @media (max-width: 640px) {
          #services {
            padding: 3rem 1rem !important;
          }
          #services h2 {
            font-size: 1.8rem !important;
          }
          #services > div > div:nth-child(2) > div {
            padding: 1.5rem !important;
          }
          #services > div > div:nth-child(2) > div > div:first-child {
            height: 220px !important;
            min-height: 180px !important;
          }
          #services button {
            width: 100% !important;
            padding: 0.8rem 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          #services > div > div:nth-child(2) > div > div:first-child {
            height: 200px !important;
            min-height: 160px !important;
          }
          #services h3 {
            font-size: 1.5rem !important;
          }
          #services p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
