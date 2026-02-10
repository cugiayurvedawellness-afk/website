import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    duration: '7 days'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Google Apps Script URL (should be the usercontent/exec version, not /dev)
      const googleSheetURL = 'https://script.google.com/macros/s/AKfycbyOZATyHWcnqpdv_F91ZeCg23alAojleXIQODBhDhCLo64VFXtgiqogMTtgFUej1fJSDQ/exec';
      
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('duration', formData.duration);
      formPayload.append('message', formData.message);
      formPayload.append('timestamp', new Date().toLocaleString());

      const response = await fetch(googleSheetURL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });

      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '', duration: '7 days' });
    } catch (error) {
      console.error('Error:', error);
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '', duration: '7 days' });
    }
  };

  return (
    <section id="contact" style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #F5F9F0 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '1rem'
          }}>
            Plan Your <span style={{ color: '#6B8E23' }}>Healing Journey</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Contact us to customize your Ayurvedic retreat experience in Rishikesh
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '1.5rem'
            }}>Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>Preferred Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="7 days">7 Days</option>
                  <option value="14 days">14 Days</option>
                  <option value="21 days">21 Days</option>
                  <option value="28 days">28 Days</option>
                  <option value="custom">Custom Duration</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button type="submit" style={{
                width: '100%',
                padding: '0.875rem',
                background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(107, 142, 35, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(107, 142, 35, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(107, 142, 35, 0.3)';
              }}>
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '1.5rem'
              }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '1.25rem' }}>📧</span>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#2d3748', fontWeight: '600' }}>Email</h4>
                    <p style={{ margin: 0, color: '#4a5568' }}>cugiayurvedawellness@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '1.25rem' }}>📱</span>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#2d3748', fontWeight: '600' }}>Phone</h4>
                    <p style={{ margin: 0, color: '#4a5568' }}>+91 8791957138</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '1.25rem' }}>📍</span>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#2d3748', fontWeight: '600' }}>Location</h4>
                    <p style={{ margin: 0, color: '#4a5568' }}>
                      Himalayan Ayurveda Retreat<br/>
                      Rishikesh, Uttarakhand<br/>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #6B8E23, #8FBC8F)',
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>Best Time to Visit</h4>
              <p style={{ margin: 0, opacity: 0.95 }}>
                Our retreat is open year-round. The ideal months are September to November and February to April for pleasant weather.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
