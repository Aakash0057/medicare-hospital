import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import Toast from './components/Toast';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleOpenAppointmentModal = (doctorName = null) => {
    setSelectedDoctorForModal(doctorName);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctorForModal(null);
  };

  const handleShowToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleCloseToast = () => {
    setIsToastVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-medicare-secondary selection:text-white relative">
      {/* 1. Navbar (Sticky, shrinks on scroll) */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 3. Announcement Ticker */}
        <Ticker />

        {/* 4. Core Services Section */}
        <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 5. Stats Banner */}
        <Stats />

        {/* 6. About MediCare Hospital Section */}
        <About />

        {/* 7. Doctors / Staff Section */}
        <Doctors onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Contact & Enquiry Section */}
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* 10. Footer Section */}
      <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Appointment Modal (Accessible Dialog) */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        selectedDoctor={selectedDoctorForModal}
      />

      {/* Floating Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
}
