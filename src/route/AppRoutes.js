import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
// import About from './pages/About';
import Contact from '../components/ContactUs/Contact';
import ContactUs from '../components/ContactUs/ContactUs';

// Centralized Routes
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
    );
};

export default AppRoutes;
