import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/react-page-transition-1" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path='/*' element={<App /> }/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
