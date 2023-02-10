import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.scss'; 

/**
 * CreateRoot pour créer un noeud racine qui heberge l'app React avec l'ID de "root"
 * Méthode render pour afficher l'app
 * BrowserRouter pour gérer la navigation
 * StrictMode pour détecter les erreurs potentielles de rendu
 * App = contient le layout et le fichier "Router"
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// Si vous souhaitez mesurer les performances: (reportWebVitals(console.log))
// Plus d'info : https://bit.ly/CRA-vitals
reportWebVitals(); 
