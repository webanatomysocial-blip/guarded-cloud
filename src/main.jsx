import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/index.css';
import Home from '../src/pages/Home.jsx'; // Import the Home component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>
);