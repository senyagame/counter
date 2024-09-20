import CounterTemplate from './CounterTemplate.jsx';
import { useContext } from 'react';
import { ContextCounterReducer } from '../context';

const title = 'Counter context + reducer';

export default function () {
  const { counter, increment, decrement } = useContext(ContextCounterReducer);

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
