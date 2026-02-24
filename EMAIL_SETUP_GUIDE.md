# Email Notification Setup Guide

This project now includes email notification functionality for booking requests using **EmailJS**.

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### Step 2: Create Email Service
1. Go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email account
5. Save the **Service ID** (you'll need this)

### Step 3: Create Email Templates

#### Template 1: Customer Confirmation Email
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set as default:
   - **Template Name**: `template_booking_confirmation`
   - **Template ID**: `template_booking_confirmation`
   
4. Copy this template code:
```
Subject: Booking Confirmation - Your Retreat Awaits! 🧘

Dear {{customer_name}},

Thank you for booking your Ayurvedic Retreat with us! We're excited to welcome you.

**Your Booking Details:**
- Service: {{service}}
- Duration: {{days}}
- Booking Date: {{booking_date}}
- Contact: {{customer_email}}
- Phone: {{customer_phone}}

**Next Steps:**
Our team will contact you within 24 hours to confirm your reservation and discuss any special requirements.

Best regards,
**Ayurvedic Retreat Team**
🧘 Healing. Wellness. Transformation.
```

#### Template 2: Admin Notification Email
1. Create another template:
   - **Template Name**: `template_admin_notification`
   - **Template ID**: `template_admin_notification`

2. Copy this template code:
```
Subject: New Booking Request - {{customer_name}}

New booking request received!

**Customer Details:**
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}

**Booking Info:**
- Service: {{service}}
- Duration: {{days}}
- Booking Date: {{booking_date}}

Please review and contact the customer to confirm.
```

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables

Create a `.env` file in the project root with:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
REACT_APP_EMAILJS_SERVICE_ID=service_ayurvedic
REACT_APP_EMAILJS_TEMPLATE_ID=template_booking_confirmation
REACT_APP_ADMIN_EMAIL=your-admin-email@gmail.com
```

**Replace with your actual values:**
- `YOUR_EMAILJS_PUBLIC_KEY` - From EmailJS Account page
- `your-admin-email@gmail.com` - Where admin notifications go

### Step 6: Test It
1. Start your development server: `npm start`
2. Click "Book Now" on the website
3. Fill out the form and submit
4. Check your email for confirmation

## File Changes Made

### New Files:
- `src/utils/emailService.js` - Email service utility functions
- `.env.example` - Environment variables template (copy to `.env`)

### Modified Files:
- `src/components/BookingForm.jsx` - Added email sending logic
- `package.json` - Added `@emailjs/browser` dependency

## Features

✅ **Customer Confirmation Emails** - Customers receive instant confirmation
✅ **Admin Notifications** - Admin gets notified of new bookings
✅ **Google Sheets Integration** - Bookings still saved to Google Sheets (backup)
✅ **Loading State** - Submit button shows loading indicator
✅ **Error Handling** - Graceful fallbacks if email fails

## Troubleshooting

### Emails not sending?
1. Check `.env` file has correct PublicKey
2. Verify EmailJS Service ID and Template IDs match
3. Check browser console for error messages
4. Ensure EmailJS email service is connected to email account

### Test Email Directly
```javascript
// In browser console:
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('service_ayurvedic', 'template_booking_confirmation', {
  to_email: 'test@email.com',
  customer_name: 'Test User',
  service: 'Test Service',
  days: '7 Days'
});
```

## Security Notes

- **Public Key Safe**: The Public Key is meant to be public (no sensitive data)
- **No Exposed Secrets**: Admin email and Service IDs are in `.env`
- **Add to .gitignore**: Make sure `.env` is in `.gitignore`

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: support@emailjs.com

---

**Need Help?** Check EmailJS documentation or contact support@emailjs.com
