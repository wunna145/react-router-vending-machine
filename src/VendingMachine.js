import React from 'react';
import { Link, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Soda from './snacks/Soda';
import Chips from './snacks/Chips';
import Sardine from './snacks/Sardine';

const VendingMachine = () => {
  const snacks = [
    { id: 1, name: 'Soda' },
    { id: 2, name: 'Chips' },
    { id: 3, name: 'Sardine' },
  ];

  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {/* Define routes for each snack */}
        {snacks.map(snack => (
          <Route key={snack.id} path={`/snacks/${snack.id}`} element={getSnackComponent(snack.id)} />
        ))}
        <Route path="*" element={<Outlet />}>
          {/* This will catch any other paths and navigate to the main vending machine page */}
          <Route index element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

// Function to return the corresponding snack component based on the snack id
const getSnackComponent = (snackId) => {
  switch (snackId) {
    case 1:
      return <Soda />;
    case 2:
      return <Chips />;
    case 3:
      return <Sardine />;
    default:
      return <Navigate to="/" />;
  }
};

export default VendingMachine;
