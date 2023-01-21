import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FicheLogement from './pages/Fiche-Logement';
import Error404 from './pages/Error404';
import APropos from './pages/A-Propos';

import Layout from './components/Layout';

function App() {
    return (
        <Layout>
          <main className='app'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          </main>
        </Layout>
        
    );
  }
  
  export default App;