import CounterTemplate from './CounterTemplate.jsx';
import { useContext } from 'react';
import { ContextCounterCustomHook } from '../context';

const title = 'Counter context + hook';

export default function () {
  const { counter, increment, decrement } = useContext(
    ContextCounterCustomHook
  );

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
