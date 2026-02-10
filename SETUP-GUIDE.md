# Quick Setup & Customization Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   Website will open at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

## Key Customizations

### 1. Update Contact Information

**Files to edit:**
- `src/components/Contact.jsx` - Contact form and info
- `src/components/Navbar.jsx` - Booking modal (lines 200-230)
- `src/components/Footer.jsx` - Footer contact info

**Replace:**
- `cugiayurvedawellness@gmail.com` with your email
- `+91 XXXXX XXXXX` with your phone number
- Update address details

### 2. Add Your Images

**Image locations needed:**
- `public/yoga.webp` - Yoga & Meditation service
- `public/panchakarma.webp` - Panchakarma treatment
- `public/massage.webp` - Therapeutic massage
- `public/consultation.webp` - Ayurvedic consultation
- `public/herbal.webp` - Herbal medicine
- `public/about2.png` & `public/about4.png` - About section images

**Recommendation:** Use .webp format for better performance, or .jpg/.png

### 3. Customize Services

**Edit:** `src/components/Services.jsx`

Update the `services` array (lines 4-25) with your:
- Service names
- Descriptions
- Durations
- Difficulty levels

### 4. Modify Retreat Programs

**Edit service detail pages:**
- `src/components/YogaProgram.jsx`
- `src/components/PanchakarmaProgram.jsx`
- `src/components/MeditationProgram.jsx`

Update:
- Program descriptions
- Schedules
- Pricing (if displayed)
- What's included

### 5. Update Branding

**Navbar:** `src/components/Navbar.jsx` (line 48)
- Change "Himalayan Ayurveda" to your retreat name

**Footer:** `src/components/Footer.jsx`
- Update retreat name and description

**Colors:** If you want different colors, search and replace:
- `#6B8E23` (main green) throughout all files
- `#8FBC8F` (light green)
- `#D4AF37` (gold accent)

### 6. Add Social Media Links

**Edit:** `src/components/Footer.jsx` (lines 127-145)

Replace `href="#"` with your actual social media URLs:
- Facebook page URL
- Instagram profile URL
- WhatsApp contact link

### 7. SEO & Meta Information

**Edit:** `public/index.html`

Update:
- `<title>` tag
- `<meta name="description">` 
- Add your favicon
- Add Google Analytics (if needed)

## Common Modifications

### Change Accommodation Section

**Edit:** `src/components/Features.jsx` (lines 6-40)

Modify the `features` array to highlight your retreat's unique facilities.

### Update About Section

**Edit:** `src/components/About.jsx` (lines 66-105)

Customize the retreat description and highlight specialties.

### Modify Hero Section

**Edit:** `src/components/Hero.jsx`

Update:
- Main headline (lines 155-162)
- Tagline (lines 164-178)
- Call-to-action buttons (lines 207-242)

## Adding New Services

1. Add service to `src/components/Services.jsx` services array
2. Create new component file in `src/components/` (e.g., `TherapyProgram.jsx`)
3. Import in `src/App.js`
4. Add route in `src/App.js` renderRoute function

## Testing

Before deploying:
1. Test all navigation links
2. Verify contact form works
3. Check responsive design on mobile
4. Test all service detail pages
5. Ensure booking modal appears correctly

## Deployment Options

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detects React settings

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder contents to your web host
3. Configure server to serve index.html for all routes

## Support & Troubleshooting

**Website not starting?**
- Ensure Node.js is installed (v14+)
- Delete `node_modules` and run `npm install` again

**Images not showing?**
- Check image filenames match exactly
- Ensure images are in `public` folder
- Use correct file extensions

**Styling issues?**
- Clear browser cache
- Check for CSS conflicts
- Ensure no typos in style properties

## Next Steps

1. Replace placeholder images with professional photos
2. Update all contact information
3. Customize content to match your retreat
4. Add Google Maps embed to Contact section (optional)
5. Set up contact form backend (currently shows alert)
6. Add actual booking system integration

---

Need help? Review the README.md file for more detailed information.
