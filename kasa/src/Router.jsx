import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import FicheLogement from './pages/Fiche-Logement';
import Error404 from './pages/Error404';
import APropos from './pages/A-Propos';


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="fiche-logement/:id" element={<FicheLogement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;