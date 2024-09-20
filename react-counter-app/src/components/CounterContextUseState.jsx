import CounterTemplate from './CounterTemplate.jsx';
import { useContext } from 'react';
import { ContextCounterUseState } from '../context';

const title = 'Counter context + useState';

export default function () {
  const { counter, increment, decrement } = useContext(ContextCounterUseState);

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
