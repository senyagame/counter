import CounterTemplate from './CounterTemplate.jsx';
import { counterReducer } from '../reducers';
import { useReducer } from 'react';

const title = 'Counter reducer';

export default function () {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  const increment = () => dispatch({ type: 'increment' });

  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <CounterTemplate
        title={title}
        counter={state.counter}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}
