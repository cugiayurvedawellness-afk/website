import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import YogaProgram from './components/YogaProgram.jsx';
import PanchakarmaProgram from './components/PanchakarmaProgram.jsx';
import MeditationProgram from './components/MeditationProgram.jsx';
import BookingForm from './components/BookingForm.jsx';

const App = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    
    // Listen for booking form open event
    const handleOpenBooking = () => setIsBookingOpen(true);
    window.addEventListener('ayurveda:openBooking', handleOpenBooking);
    
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('ayurveda:openBooking', handleOpenBooking);
    };
  }, []);

  // simple hash router
  const renderRoute = () => {
    const path = (route.replace('#', '') || '/').toLowerCase();
    if (path.startsWith('/services/yoga')) return <YogaProgram />;
    if (path.startsWith('/services/panchakarma')) return <PanchakarmaProgram />;
    if (path.startsWith('/services/meditation')) return <MeditationProgram />;

    // default: landing sections
    return (
      <>
        <Hero />
        <About />
        <Services />
        <Features />
        <Contact />
      </>
    );
  };

  return (
    <div>
      <Navbar />
      {renderRoute()}
      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;
