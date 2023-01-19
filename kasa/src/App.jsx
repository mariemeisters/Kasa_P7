import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FicheLogement from './pages/Fiche-Logement';
import Error404 from './pages/Error404';
import APropos from './pages/A-Propos';
import './App.scss';

import Layout from './components/Layout';

function App() {
    return (
      <div className='app__container'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Layout>
        </div>
    );
  }
  
  export default App;