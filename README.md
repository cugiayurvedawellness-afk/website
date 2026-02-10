# Himalayan Ayurveda Retreat Website

A modern, responsive website for an authentic Ayurvedic retreat center located in Rishikesh, Uttarakhand, India.

## Overview

This website showcases the services and programs offered by Himalayan Ayurveda Retreat, including:
- Yoga & Meditation Programs
- Panchakarma Treatment
- Therapeutic Massage & Ayurvedic Therapies
- Personalized Ayurvedic Consultations
- Comfortable Accommodation

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Pages**: Detailed information about each retreat program
- **Contact Form**: Easy inquiry system for potential guests
- **Booking System**: Simple booking modal for retreat reservations

## Technology Stack

- **React** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with modern features
- **React Scripts** - Build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
ayurvedic-retreat-website/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── YogaProgram.jsx
│   │   ├── PanchakarmaProgram.jsx
│   │   └── MeditationProgram.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

### Colors

The website uses an earthy, natural color palette suitable for an Ayurvedic retreat:
- Primary Green: `#6B8E23` (Olive/Sage Green)
- Secondary Green: `#8FBC8F` (Light Green)
- Gold Accent: `#D4AF37`
- Background: `#F5F9F0` (Light Mint)

### Content

To update retreat information:
1. Edit `src/components/Services.jsx` to modify service offerings
2. Update `src/components/About.jsx` for retreat description
3. Modify service detail pages in `src/components/` for program details

### Contact Information

Update contact details in:
- `src/components/Contact.jsx`
- `src/components/Navbar.jsx` (booking modal)
- `src/components/Footer.jsx`

## Deployment

This website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages:
```bash
npm run deploy
```

## Location Information

**Himalayan Ayurveda Retreat**
Rishikesh, Uttarakhand, India

Rishikesh is known as the "Yoga Capital of the World" and is located in the foothills of the Himalayas along the banks of the sacred Ganges River.

## License

This project is private and proprietary.

## Support

For website support or customization requests, please contact the development team.
