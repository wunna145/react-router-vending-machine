import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chips = () => {
  const [bagsEaten, setBagsEaten] = useState(0);

  const handleEatBag = () => {
    setBagsEaten(prevBagsEaten => prevBagsEaten + 1);
  };

  return (
    <div>
      <h2>Chips</h2>
      <p>Bags Eaten: {bagsEaten}</p>
      <button onClick={handleEatBag}>NOM NOM NOM</button>
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Chips;
