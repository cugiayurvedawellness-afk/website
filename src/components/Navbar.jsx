import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const onOpenBooking = () => setShowBooking(true);
    window.addEventListener('ayurveda:openBooking', onOpenBooking);
    return () => window.removeEventListener('ayurveda:openBooking', onOpenBooking);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav style={{
        position: 'static',
        width: '100%',
        background: 'transparent',
        transition: 'all 0.15s ease',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.5rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          position: 'relative',
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => window.location.hash = '#/'}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              Himalayan Ayurveda
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul style={{
            display: window.innerWidth <= 768 && !isMenuOpen ? 'none' : 'flex',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center',
            flexWrap: 'nowrap',
            margin: 0,
            padding: 0,
            ...(window.innerWidth <= 768 && isMenuOpen && {
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              flexDirection: 'column',
              background: '#F5F9F0',
              padding: '1rem 0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              gap: '1rem',
              zIndex: 1000
            })
          }}>
            <li>
              <a onClick={() => handleNavClick('about')} style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6B8E23'}
              onMouseLeave={(e) => e.target.style.color = '#1a202c'}>
                About
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('services')} style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6B8E23'}
              onMouseLeave={(e) => e.target.style.color = '#1a202c'}>
                Services
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('features')} style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6B8E23'}
              onMouseLeave={(e) => e.target.style.color = '#1a202c'}>
                Facilities
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('contact')} style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6B8E23'}
              onMouseLeave={(e) => e.target.style.color = '#1a202c'}>
                Contact
              </a>
            </li>
            <li>
              <button onClick={() => setShowBooking(true)} style={{
                background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '40px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(107, 142, 35, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(107, 142, 35, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(107, 142, 35, 0.3)';
              }}>
                Book Retreat
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#1a202c',
              fontSize: '1.75rem',
              lineHeight: 1,
            }}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Simple Booking Modal */}
      {showBooking && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}
        onClick={() => setShowBooking(false)}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#6B8E23',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>Book Your Retreat</h2>
            <p style={{
              textAlign: 'center',
              color: '#4a5568',
              marginBottom: '1.5rem'
            }}>
              Contact us to plan your personalized Ayurvedic retreat experience
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <div style={{
                padding: '1rem',
                background: '#F5F9F0',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <strong>Email:</strong> cugiayurvedawellness@gmail.com
              </div>
              <div style={{
                padding: '1rem',
                background: '#F5F9F0',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <strong>Phone:</strong> +91 8791957138
              </div>
              <div style={{
                padding: '1rem',
                background: '#F5F9F0',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <strong>Location:</strong> Rishikesh, Uttarakhand, India
              </div>
            </div>
            <button onClick={() => setShowBooking(false)} style={{
              width: '100%',
              marginTop: '1.5rem',
              padding: '0.75rem',
              background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav ul {
            display: ${isMenuOpen ? 'flex' : 'none'} !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
