import React from 'react';
import Router from "./Router";

import Layout from './components/Layout';

/**
 * @returns {JSX.Element} Layout (Header+Footer), balise main & router
 */
function App() {
    return (
        <Layout>
          <main className='app'>
          <Router />
          </main>
        </Layout>  
    );
}

export default App; 