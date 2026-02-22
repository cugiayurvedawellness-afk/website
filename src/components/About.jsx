import React from 'react';

const AYUR_GREEN = '#6B8E23';
const AYUR_GOLD = '#D4AF37';
const AYUR_WARM = '#CD8B65';
const AYUR_LIGHT_BG = '#FEF7F0';

const About = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentLeftSlide, setCurrentLeftSlide] = React.useState(0);
  const [currentRightSlide, setCurrentRightSlide] = React.useState(0);

  const mobileCarouselImages = [
    { src: '/about4.webp', alt: 'Group yoga class' },
    { src: '/about2.webp', alt: 'Woman in yoga stretch' },
    { src: '/about6.jpeg', alt: 'Spa and massage treatment' },
    { src: '/about5.jpeg', alt: 'Himalayan sanctuary views' }
  ];

  const leftCarouselImages = [
    { src: '/about4.webp', alt: 'Group yoga class' },
    { src: '/about5.jpeg', alt: 'Spa and massage treatment' }
  ];

  const rightCarouselImages = [
    { src: '/about2.webp', alt: 'Woman in yoga stretch' },
    { src: '/about6.jpeg', alt: 'Himalayan sanctuary views' }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileCarouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileCarouselImages.length) % mobileCarouselImages.length);
  };

  const nextLeftSlide = () => {
    setCurrentLeftSlide((prev) => (prev + 1) % leftCarouselImages.length);
  };

  const prevLeftSlide = () => {
    setCurrentLeftSlide((prev) => (prev - 1 + leftCarouselImages.length) % leftCarouselImages.length);
  };

  const nextRightSlide = () => {
    setCurrentRightSlide((prev) => (prev + 1) % rightCarouselImages.length);
  };

  const prevRightSlide = () => {
    setCurrentRightSlide((prev) => (prev - 1 + rightCarouselImages.length) % rightCarouselImages.length);
  };

  return (
    <>
      {/* Main About Section */}
      <section id="about" style={{
        position: 'relative',
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #FEF7F0 0%, #FFF9F3 50%, #FAF3EB 100%)',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Heading */}
          <h2 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 900,
            background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: isMobile ? '2.5rem' : '4rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            About Our Retreat
          </h2>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '300px 1fr 300px',
            gap: isMobile ? '2rem' : '3rem',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Left Image Carousel */}
            {!isMobile && (
              <div className="left-image" style={{
                position: 'sticky',
                top: '2rem',
                height: 'fit-content'
              }}>
                <div style={{
                  width: '100%',
                  height: '360px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(205, 139, 101, 0.2)',
                  backgroundColor: '#e8f0dc',
                  border: `1px solid ${AYUR_GOLD}30`,
                  position: 'relative'
                }}>
                  {/* Images with absolute positioning */}
                  {leftCarouselImages.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentLeftSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        pointerEvents: currentLeftSlide === index ? 'auto' : 'none'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          display: 'block'
                        }}
                      />
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevLeftSlide}
                    style={{
                      position: 'absolute',
                      left: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      color: AYUR_GREEN,
                      fontWeight: 'bold',
                      zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = AYUR_GREEN;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = AYUR_GREEN;
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}>
                    ←
                  </button>

                  <button
                    onClick={nextLeftSlide}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      color: AYUR_GREEN,
                      fontWeight: 'bold',
                      zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = AYUR_GREEN;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = AYUR_GREEN;
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}>
                    →
                  </button>

                  {/* Dot Indicators */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.3rem',
                    zIndex: 10
                  }}>
                    {leftCarouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentLeftSlide(index)}
                        style={{
                          width: currentLeftSlide === index ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: currentLeftSlide === index ? AYUR_GOLD : 'rgba(255, 255, 255, 0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          if (currentLeftSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (currentLeftSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Center Content */}
            <div style={{
              textAlign: 'center',
              padding: isMobile ? '0' : '2rem',
              zIndex: 2
            }}>
              {/* Main Tagline */}
              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                lineHeight: '1.7',
                color: '#6B7280',
                marginBottom: '1rem',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                At <span style={{ fontWeight: 900, background: `linear-gradient(135deg, ${AYUR_GREEN}, ${AYUR_WARM})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Divineretreat Retreat</span>
              </p>

              {/* Subheading */}
              <h3 style={{
                fontSize: isMobile ? '1.15rem' : '1.4rem',
                lineHeight: '1.6',
                color: '#1f2937',
                marginBottom: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}>
                Experience Authentic Healing in the Heart of Rishikesh
              </h3>

              {/* Description */}
              <p style={{
                fontSize: isMobile ? '0.95rem' : '1.05rem',
                lineHeight: '1.75',
                color: '#4b5563',
                marginBottom: '2rem',
                fontWeight: 400
              }}>
                Nestled in the serene foothills of the Himalayas, our retreat sanctuary combines 5,000 years of Ayurvedic wisdom with modern wellness practices. We've created a transformative space where ancient healing traditions meet contemporary comfort.
              </p>

              {/* Service Pills with Enhanced Colors */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: isMobile ? '0.6rem' : '0.8rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}>
                {[
                  { name: 'Yoga & Meditation', icon: '🧘' },
                  { name: 'Panchakarma', icon: '💆' },
                  { name: 'Ayurvedic Therapy', icon: '🌿' }
                ].map((service, i) => (
                  <span key={i} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.3rem',
                    background: `linear-gradient(135deg, ${AYUR_GOLD}20, ${AYUR_WARM}15)`,
                    borderRadius: '24px',
                    color: AYUR_GREEN,
                    fontWeight: 700,
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    letterSpacing: '0.3px',
                    border: `1.5px solid ${AYUR_GOLD}40`,
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${AYUR_GOLD}, ${AYUR_WARM})`;
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = `0 10px 30px ${AYUR_WARM}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${AYUR_GOLD}20, ${AYUR_WARM}15)`;
                      e.target.style.color = AYUR_GREEN;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}>
                    <span>{service.icon}</span> {service.name}
                  </span>
                ))}
              </div>

              {/* Key Benefits */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '1.25rem',
                marginBottom: '2rem'
              }}>
                {[
                  { label: '12 Days', value: 'Transformative Program' },
                  { label: 'Expert', value: 'Ayurvedic Practitioners' },
                  { label: 'Himalayan', value: 'Mountain Sanctuary' }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '1.25rem',
                    backgroundColor: 'rgba(212, 175, 55, 0.08)',
                    borderRadius: '16px',
                    border: `1px solid ${AYUR_GOLD}30`,
                    transition: 'all 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${AYUR_GOLD}15`;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                    <div style={{ fontWeight: 900, fontSize: '0.85rem', color: AYUR_WARM, letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: AYUR_GREEN }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Extended Description */}
              <p style={{
                fontSize: isMobile ? '0.95rem' : '1.05rem',
                lineHeight: '1.75',
                color: '#4b5563',
                fontWeight: 400
              }}>
                Our team of certified Ayurvedic doctors, yoga masters, and wellness experts works exclusively with small batches of guests—never more than 12—to deliver highly personalized healing journeys that transform body, mind, and spirit.
              </p>
            </div>

            {/* Right Image Carousel */}
            {!isMobile && (
              <div className="right-image" style={{
                position: 'sticky',
                top: '2rem',
                height: 'fit-content'
              }}>
                <div style={{
                  width: '100%',
                  height: '360px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(205, 139, 101, 0.2)',
                  backgroundColor: '#e8f0dc',
                  border: `1px solid ${AYUR_GOLD}30`,
                  position: 'relative'
                }}>
                  {/* Images with absolute positioning */}
                  {rightCarouselImages.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentRightSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        pointerEvents: currentRightSlide === index ? 'auto' : 'none'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          display: 'block'
                        }}
                      />
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevRightSlide}
                    style={{
                      position: 'absolute',
                      left: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      color: AYUR_GREEN,
                      fontWeight: 'bold',
                      zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = AYUR_GREEN;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = AYUR_GREEN;
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}>
                    ←
                  </button>

                  <button
                    onClick={nextRightSlide}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      color: AYUR_GREEN,
                      fontWeight: 'bold',
                      zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = AYUR_GREEN;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = AYUR_GREEN;
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}>
                    →
                  </button>

                  {/* Dot Indicators */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.3rem',
                    zIndex: 10
                  }}>
                    {rightCarouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentRightSlide(index)}
                        style={{
                          width: currentRightSlide === index ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: currentRightSlide === index ? AYUR_GOLD : 'rgba(255, 255, 255, 0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          if (currentRightSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (currentRightSlide !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Carousel */}
            {isMobile && (
              <div style={{
                position: 'relative',
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 12px 30px rgba(205, 139, 101, 0.15)',
                backgroundColor: '#e8f0dc',
                border: `1px solid ${AYUR_GOLD}20`
              }}>
                {/* Images with absolute positioning */}
                {mobileCarouselImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: currentSlide === index ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      pointerEvents: currentSlide === index ? 'auto' : 'none'
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}

                {/* Mobile Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: AYUR_GREEN,
                    fontWeight: 'bold',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = AYUR_GREEN;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = AYUR_GREEN;
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}>
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: AYUR_GREEN,
                    fontWeight: 'bold',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = AYUR_GREEN;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.color = AYUR_GREEN;
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}>
                  →
                </button>

                {/* Mobile Dot Indicators */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '0.4rem',
                  zIndex: 10
                }}>
                  {mobileCarouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        width: currentSlide === index ? '24px' : '10px',
                        height: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: currentSlide === index ? AYUR_GOLD : 'rgba(255, 255, 255, 0.6)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        if (currentSlide !== index) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentSlide !== index) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


    </>
  );
};

export default About;
