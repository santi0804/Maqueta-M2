// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Enrutador from './routes/Enrutador'; // Asegúrate de la ruta correcta

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Enrutador />
  </React.StrictMode>
);
