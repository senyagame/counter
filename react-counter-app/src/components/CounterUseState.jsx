import CounterTemplate from './CounterTemplate.jsx';
import { useState } from 'react';

const title = 'Counter useState';

export default function () {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevVal) => prevVal + 1);

  const decrement = () => setCounter((prevVal) => prevVal - 1);

  return (
    <>
      <CounterTemplate
        title={title}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}
