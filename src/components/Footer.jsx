import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
      color: 'white',
      padding: '3rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Himalayan Ayurveda
            </h3>
            <p style={{
              color: '#cbd5e0',
              lineHeight: '1.7',
              fontSize: '0.95rem'
            }}>
              Authentic Ayurvedic healing and wellness retreat in the spiritual heart of Rishikesh, India. 
              Experience ancient wisdom combined with modern comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#8FBC8F'
            }}>Quick Links</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {['About', 'Services', 'Facilities', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: '#cbd5e0',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#8FBC8F'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e0'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#8FBC8F'
            }}>Our Services</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {['Yoga & Meditation', 'Panchakarma Treatment', 'Therapeutic Massage', 'Ayurvedic Consultation'].map((service) => (
                <li key={service} style={{
                  color: '#cbd5e0',
                  fontSize: '0.95rem'
                }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #4a5568, transparent)',
          margin: '2rem 0'
        }} />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <p style={{
              margin: 0,
              color: '#cbd5e0',
              fontSize: '0.9rem'
            }}>
              © {new Date().getFullYear()} Himalayan Ayurveda Retreat. All rights reserved.
            </p>
            <p style={{
              margin: 0,
              color: '#a0aec0',
              fontSize: '0.85rem'
            }}>
              Powered by SkillKoder
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {[
              { name: 'Facebook', url: 'https://www.facebook.com/share/17yYSm2eeo/?mibextid=wwXIfr', icon: Facebook },
              { name: 'Instagram', url: 'https://www.instagram.com/cugi_ayurveda_wellness?igsh=Z3dlNDN2YWM4cHRk&utm_source=qr', icon: Instagram },
              { name: 'YouTube', url: 'https://youtube.com/@massage.by.cugi001?si=RAicXHosT8uGitLY', icon: Youtube }
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#cbd5e0',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s, transform 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(143, 188, 143, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8FBC8F';
                    e.currentTarget.style.backgroundColor = 'rgba(143, 188, 143, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#cbd5e0';
                    e.currentTarget.style.backgroundColor = 'rgba(143, 188, 143, 0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  title={social.name}
                >
                  <IconComponent size={20} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
