
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base/_reset.scss';
import Energia from './pages/Energia.tsx';
import { BrowserRouter, Routes, Route } from "react-router";
import EnergiaEletrica from './pages/EnergiaEletrica.tsx';
import EnergiaMecanica from './pages/EnergiaMecanica.tsx';
import EnergiaQuimica from './pages/EnergiaQuimica.tsx';
import EnergiaOptica from './pages/EnergiaOptica.tsx';
import EnergiaAcustica from './pages/EnergiaAcustica.tsx';
import EnergiaNuclear from './pages/EnergiaNuclear.tsx';
import EnergiaTermica from './pages/EnergiaAcustica.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Energia />} />
      <Route path="/eletrica" element={<EnergiaEletrica />} />
      <Route path="/mecanica" element={<EnergiaMecanica />} />
      <Route path="/quimica" element={<EnergiaQuimica />} />
      <Route path="/optica" element={<EnergiaOptica />} />
      <Route path="/acustica" element={<EnergiaAcustica />} />
      <Route path="/nuclear" element={<EnergiaNuclear />} />
      <Route path="/termica" element={<EnergiaTermica />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
