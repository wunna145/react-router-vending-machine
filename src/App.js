import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './snacks/Soda';
import Chips from './snacks/Chips';
import Sardine from './snacks/Sardine';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<VendingMachine />} />
        <Route path="/snacks/1" element={<Soda />} />
        <Route path="/snacks/2" element={<Chips />} />
        <Route path="/snacks/3" element={<Sardine />} />
      </Routes>
    </Router>
  );
};

export default App;
