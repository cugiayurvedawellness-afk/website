import React, { useState } from 'react';

const AYUR_GREEN = '#6B8E23';
const AYUR_GOLD = '#D4AF37';
const AYUR_WARM = '#CD8B65';
const AYUR_LIGHT_BG = '#FEF7F0';

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      title: 'Corporate Executive',
      image: 'testimonial1.JPEG',
      certificate: 'certificate1.webp',
      text: 'This retreat transformed my life completely. Within just two weeks, my chronic anxiety melted away, and I found a sense of peace I never knew was possible. The personalized Panchakarma treatment was incredibly effective, and the team\'s expertise is unmatched.',
      rating: 5,
      duration: '14 Days',
      program: 'Panchakarma & Meditation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Singapore',
      title: 'Business Owner',
      image: 'testimonial2.JPEG',
      certificate: 'certificate2.webp',
      text: 'The yoga sessions at dawn overlooking the Ganges were magical. I improved my flexibility, my digestion normalized, and most importantly, I learned practices I can continue at home. The Ayurvedic consultations were incredibly personalized to my needs.',
      rating: 5,
      duration: '21 Days',
      program: 'Yoga & Wellness'
    },
    {
      id: 3,
      name: 'Emma Richardson',
      location: 'London, UK',
      title: 'Healthcare Professional',
      image: 'testimonial3.JPEG',
      certificate: 'certificate3.webp',
      text: 'As a doctor, I was skeptical. But after experiencing the Ayurvedic treatments here, I\'m convinced. The scientific approach combined with ancient wisdom is remarkable. My sleep quality has improved dramatically, and my energy levels are at their peak.',
      rating: 5,
      duration: '10 Days',
      program: 'Therapeutic Massage'
    },
    {
      id: 4,
      name: 'Rajesh Patel',
      location: 'Mumbai, India',
      title: 'Software Engineer',
      image: 'testimonial4.webp',
      certificate: 'certificate4.webp',
      text: 'Coming back to my roots through this Ayurvedic journey was deeply enriching. The team\'s knowledge of ancient practices is profound. My doctor confirmed that my health markers have significantly improved - reduced stress, better metabolism, and overall wellness.',
      rating: 5,
      duration: '14 Days',
      program: 'Ayurvedic Consultation'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      location: 'Sydney, Australia',
      title: 'Fitness Instructor',
      image: 'testimonial5.webp',
      certificate: 'certificate5.webp',
      text: 'The holistic approach here resonated with everything I believe about wellness. The herbal medicines were incredibly effective for my chronic pain, and the meditation practices have become my daily anchor. Highly recommend to anyone seeking true healing.',
      rating: 5,
      duration: '21 Days',
      program: 'Herbal Medicine & Yoga'
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      location: 'Toronto, Canada',
      title: 'Family Physician',
      image: 'testimonial6.webp',
      certificate: 'certificate6.webp',
      text: 'I attended with my entire family. The retreat accommodated everyone\'s needs beautifully - from my arthritic mother to my teenage daughter. The results speak for themselves: better health, stronger family bonds, and lasting friendships with other guests.',
      rating: 5,
      duration: '12 Days',
      program: 'Family Wellness Program'
    }
  ];

  return (
    <>
      <section id="testimonials" style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: `linear-gradient(135deg, ${AYUR_LIGHT_BG} 0%, #FFF9F3 50%, ${AYUR_LIGHT_BG} 100%)`,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Back Button - Hidden when on home page */}
          <div style={{
            marginBottom: '2rem',
            display: window.location.hash.includes('testimonials') ? 'block' : 'none'
          }}>
            <button
              onClick={() => window.location.hash = '#/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${AYUR_GREEN}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              ← Back to Home
            </button>
          </div>

          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '2.5rem' : '4rem'
          }}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '3.5rem',
              fontWeight: 900,
              background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Guest Transformations & Stories
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Real healing stories from guests who discovered their true potential through our holistic Ayurvedic programs
            </p>
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : window.innerWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: '3rem'
          }}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => setSelectedTestimonial(testimonial)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${AYUR_GOLD}20`,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 15px 40px ${AYUR_WARM}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Image Section */}
                <div style={{
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#e8f0dc',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  {/* Rating Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: `linear-gradient(135deg, ${AYUR_GOLD}, ${AYUR_WARM})`,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'flex',
                    gap: '0.25rem',
                    alignItems: 'center'
                  }}>
                    {'★ '.repeat(testimonial.rating)}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: isMobile ? '1.5rem' : '2rem'
                }}>
                  {/* Name & Location */}
                  <div style={{
                    marginBottom: '0.75rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: AYUR_GREEN,
                      margin: '0 0 0.25rem 0'
                    }}>
                      {testimonial.name}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: AYUR_WARM,
                      margin: 0,
                      fontWeight: 600
                    }}>
                      {testimonial.title} • {testimonial.location}
                    </p>
                  </div>

                  {/* Program & Duration */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      backgroundColor: `${AYUR_GOLD}15`,
                      color: AYUR_WARM,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      {testimonial.program}
                    </span>
                    <span style={{
                      backgroundColor: `${AYUR_GREEN}15`,
                      color: AYUR_GREEN,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      📅 {testimonial.duration}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#4b5563',
                    fontWeight: 400,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    margin: 0
                  }}>
                    "{testimonial.text}"
                  </p>

                  {/* View Details Button */}
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: `1px solid ${AYUR_GOLD}20`
                  }}>
                    <button style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 6px 20px ${AYUR_GREEN}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      View Full Story & Certificate →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '2rem',
            marginTop: '4rem',
            padding: `${isMobile ? '2rem 1.5rem' : '3rem'}`,
            background: `linear-gradient(135deg, ${AYUR_GREEN}10, ${AYUR_WARM}10)`,
            borderRadius: '20px'
          }}>
            {[
              { number: '500+', label: 'Guests Healed' },
              { number: '95%', label: 'Satisfaction Rate' },
              { number: '35+', label: 'Countries Represented' },
              { number: '15 yrs', label: 'In Operation' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? '1.75rem' : '2.5rem',
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: '#6B7280',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Story & Certificate */}
      {selectedTestimonial && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setSelectedTestimonial(null)}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: isMobile ? '1.5rem' : '2.5rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: `${AYUR_LIGHT_BG}`,
                border: 'none',
                fontSize: '1.75rem',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: AYUR_GREEN
              }}>
              ✕
            </button>

            {/* Header with Image */}
            <div style={{
              display: isMobile ? 'block' : 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '250px 1fr',
              gap: isMobile ? '1.5rem' : '2rem',
              marginBottom: '2rem',
              alignItems: 'start'
            }}>
              {/* Guest Image */}
              <div style={{
                width: isMobile ? '100%' : '250px',
                height: '250px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#e8f0dc'
              }}>
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>

              {/* Guest Info */}
              <div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  color: AYUR_GREEN,
                  margin: '0 0 0.5rem 0'
                }}>
                  {selectedTestimonial.name}
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: AYUR_WARM,
                  fontWeight: 600,
                  margin: '0 0 1rem 0'
                }}>
                  {selectedTestimonial.title} • {selectedTestimonial.location}
                </p>
                <div style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    backgroundColor: `${AYUR_GOLD}20`,
                    color: AYUR_WARM,
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    {selectedTestimonial.program}
                  </span>
                  <span style={{
                    backgroundColor: `${AYUR_GREEN}20`,
                    color: AYUR_GREEN,
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    📅 {selectedTestimonial.duration}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.25rem'
                }}>
                  {'★ '.repeat(selectedTestimonial.rating)}
                </div>
              </div>
            </div>

            {/* Full Testimonial */}
            <div style={{
              backgroundColor: `${AYUR_LIGHT_BG}`,
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              borderLeft: `4px solid ${AYUR_WARM}`
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#2c3e50',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{selectedTestimonial.text}"
              </p>
            </div>

            {/* Certificate Section */}
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: AYUR_GREEN,
                marginBottom: '1rem'
              }}>
                Completion Certificate
              </h3>
              <div style={{
                width: '100%',
                height: '300px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#f0f0f0',
                border: `2px solid ${AYUR_GOLD}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={selectedTestimonial.certificate}
                  alt={`Certificate for ${selectedTestimonial.name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <p style={{
                fontSize: '0.85rem',
                color: '#6B7280',
                marginTop: '0.75rem',
                textAlign: 'center',
                fontWeight: 500
              }}>
                Official Completion & Certification from Divine Retreat Ayurveda
              </p>
            </div>

            {/* Close Button at Bottom */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              style={{
                width: '100%',
                padding: '1rem',
                background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${AYUR_GREEN}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
