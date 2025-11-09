import React, { useState } from 'react';
import Button from '../atoms/Button';

const Counter = () => {
  // 1. El ESTADO interno
  const [count, setCount] = useState(0);

  // 2. La función que actualiza el ESTADO
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <Button label="Incrementar" onClick={increment} />
    </div>
  );
};

export default Counter;
