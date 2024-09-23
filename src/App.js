import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualize a importação
import Home from './components/Home';
import About from './components/About'; // Importando o componente About
import PrivacyPolicy from './components/PrivacyPolicy'; // Importando o componente PrivacyPolicy
import Footer from './components/Footer';
import SatisfactionChart from './components/SatisfactionChart';
// ... outros imports ...

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Substitua Switch por Routes */}
          <Route path="/" element={<Home />} /> {/* Atualize a sintaxe */}
          <Route path="/about" element={<About />} /> {/* Rota para a página Sobre */}
          <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Rota para a Política de Privacidade */}
          <Route path="/satisfaction" element={<SatisfactionChart/>} /> {/* Rota para a Página de Satisfação */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
