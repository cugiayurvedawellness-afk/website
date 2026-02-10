import React, { useState } from 'react';

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Yoga & Meditation',
    days: '7 Days'
  });

  const services = [
    'Yoga & Meditation',
    'Panchakarma Treatment',
    'Therapeutic Massage',
    'Ayurvedic Consultation',
    'Herbal Medicine'
  ];

  const days = [
    '7 Days',
    '14 Days',
    '21 Days',
    '28 Days',
    'Custom Duration'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Google Apps Script URL for Booking Form
      const googleSheetURL = 'https://script.google.com/macros/s/AKfycbyOZATyHWcnqpdv_F91ZeCg23alAojleXIQODBhDhCLo64VFXtgiqogMTtgFUej1fJSDQ/exec';
      
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('service', formData.service);
      formPayload.append('days', formData.days);
      formPayload.append('timestamp', new Date().toLocaleString());
      formPayload.append('formType', 'inquiry');
      formPayload.append('bookingService', formData.service);

      const response = await fetch(googleSheetURL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });

      alert('Booking request submitted! We will contact you soon to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Yoga & Meditation',
        days: '7 Days'
      });
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Booking request submitted! We will contact you soon to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Yoga & Meditation',
        days: '7 Days'
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            float: 'right',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#999'
          }}
        >
          ×
        </button>

        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#2d3748',
          marginBottom: '0.5rem',
          marginTop: 0
        }}>
          Book Your <span style={{ color: '#6B8E23' }}>Retreat</span>
        </h2>
        
        <p style={{
          color: '#4a5568',
          marginBottom: '1.5rem',
          fontSize: '0.95rem'
        }}>
          Fill in your details to reserve your healing journey with us
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your full name"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Phone Number *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              placeholder="+91 XXXXXXXXXX"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* Retreat Service Dropdown */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Select Retreat Service *</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border 0.3s',
                backgroundColor: '#fff',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Days Dropdown */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>Duration *</label>
            <select
              value={formData.days}
              onChange={(e) => setFormData({ ...formData, days: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border 0.3s',
                backgroundColor: '#fff',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6B8E23'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
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
              boxShadow: '0 4px 15px rgba(107, 142, 35, 0.3)',
              marginBottom: '0.75rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(107, 142, 35, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(107, 142, 35, 0.3)';
            }}
          >
            Book Now
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            style={{
              width: '100%',
              padding: '0.875rem',
              background: '#f0f0f0',
              color: '#2d3748',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#e0e0e0';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#f0f0f0';
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
