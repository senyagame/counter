import { useState } from 'react';

export default function (initialState = 0) {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter((prevVal) => prevVal + 1);

  const decrement = () => setCounter((prevVal) => prevVal - 1);

  return [counter, increment, decrement];
}
