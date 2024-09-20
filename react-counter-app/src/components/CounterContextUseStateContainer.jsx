import CounterContextUseStateWrapper from './CounterContextUseStateWrapper.jsx';
import { Col, Row } from 'react-bootstrap';
import { ContextCounterUseState } from '../context';
import { useState } from 'react';

export default function () {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevVal) => prevVal + 1);

  const decrement = () => setCounter((prevVal) => prevVal - 1);

  return (
    <>
      <ContextCounterUseState.Provider
        value={{ counter, increment, decrement }}
      >
        <Row className="g-4">
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextUseStateWrapper />
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextUseStateWrapper />
          </Col>
        </Row>
      </ContextCounterUseState.Provider>
    </>
  );
}
