import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SatisfactionChart from './components/SatisfactionChart';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/satisfaction" element={<SatisfactionChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
