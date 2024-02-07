import React from 'react';
import { Link } from 'react-router-dom';

const Sardine = () => {
  return (
    <div>
      <h2>Sardine</h2>
      <p>You don't eat the sardines, The sardines, they eat you!</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Sardine;
