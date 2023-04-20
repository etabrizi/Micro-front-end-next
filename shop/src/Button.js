import React, { useState } from 'react';

const Button = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <p className="counter">{counter}</p>
      <button className="m--b-xl" onClick={() => {setCounter(counter + 1)}}>Click to add value</button>
    </>
  )
};

export default Button;
