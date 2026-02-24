import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
// Get this from EmailJS dashboard after creating an account
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ayurvedic';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_booking_confirmation';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send booking confirmation email to customer
 * @param {Object} bookingData - Customer's booking information
 */
export const sendBookingConfirmationEmail = async (bookingData) => {
  try {
    const templateParams = {
      to_email: bookingData.email,
      customer_name: bookingData.name,
      customer_email: bookingData.email,
      customer_phone: bookingData.phone,
      service: bookingData.service,
      days: bookingData.days,
      booking_date: new Date().toLocaleDateString(),
      message: `Thank you for booking ${bookingData.service} for ${bookingData.days}. We will contact you shortly to confirm your reservation.`
    };

    // Send email to customer
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Booking confirmation email sent:', response);
    return { success: true, message: 'Confirmation email sent successfully!' };
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    return { success: false, message: 'Failed to send email, but booking was recorded.' };
  }
};

/**
 * Send booking notification email to admin
 * @param {Object} bookingData - Customer's booking information
 * @param {string} adminEmail - Admin email address
 */
export const sendBookingNotificationToAdmin = async (bookingData, adminEmail) => {
  try {
    const templateParams = {
      to_email: adminEmail,
      customer_name: bookingData.name,
      customer_email: bookingData.email,
      customer_phone: bookingData.phone,
      service: bookingData.service,
      days: bookingData.days,
      booking_date: new Date().toLocaleDateString(),
      message: `New booking request received from ${bookingData.name}. Please review and contact them to confirm.`
    };

    // Send notification email to admin
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_admin_notification', // Different template for admin
      templateParams
    );

    console.log('Admin notification email sent:', response);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false };
  }
};
