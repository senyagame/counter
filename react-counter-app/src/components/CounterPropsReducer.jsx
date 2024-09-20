import CounterTemplate from './CounterTemplate.jsx';
import { counterReducer } from '../reducers';
import { useReducer } from 'react';
import { Col, Row } from 'react-bootstrap';

const title = 'Counter props + reducer';

export default function () {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  const increment = () => dispatch({ type: 'increment' });

  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <Row className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}>
          <CounterTemplate
            title={title}
            counter={state.counter}
            increment={increment}
            decrement={decrement}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <CounterTemplate
            title={title}
            counter={state.counter}
            increment={increment}
            decrement={decrement}
          />
        </Col>
      </Row>
    </>
  );
}
