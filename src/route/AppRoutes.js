import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
// import About from './pages/About';
import Contact from '../components/ContactUs/Contact';

// Centralized Routes
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
