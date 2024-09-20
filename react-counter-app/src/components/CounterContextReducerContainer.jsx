import CounterContextReducerWrapper from './CounterContextReducerWrapper.jsx';
import { Col, Row } from 'react-bootstrap';
import { ContextCounterReducer } from '../context';
import { counterReducer } from '../reducers';
import { useReducer } from 'react';

export default function () {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  const increment = () => dispatch({ type: 'increment' });

  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <ContextCounterReducer.Provider
        value={{ counter: state.counter, increment, decrement }}
      >
        <Row className="g-4">
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextReducerWrapper />
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextReducerWrapper />
          </Col>
        </Row>
      </ContextCounterReducer.Provider>
    </>
  );
}