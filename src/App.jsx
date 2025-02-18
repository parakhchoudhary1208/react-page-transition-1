import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { AnimatePresence } from 'motion/react';

import './App.css';

function App() {

    const location = useLocation();

    return (
        <>
            <Navbar/>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={Home}/>
                    <Route path='/about' element={About}/>
                    <Route path='/contact' element={Contact}/>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
