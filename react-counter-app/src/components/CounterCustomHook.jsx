import CounterTemplate from './CounterTemplate.jsx';
import { useCounter } from '../hooks';

const title = 'Counter hook';

export default function () {
  const [counter, increment, decrement] = useCounter(0);

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
