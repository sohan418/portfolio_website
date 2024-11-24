import React, { useState } from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./parts/Footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./route/AppRoutes";

function App() {
  

  return (
    <div className="App">
     
     <Router>
     <Navbar></Navbar>
      <AppRoutes />
        </Router>
        <Footer></Footer>
        </div>
  );
}

export default App;
