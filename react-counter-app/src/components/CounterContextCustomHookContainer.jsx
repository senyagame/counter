import { Col, Row } from 'react-bootstrap';
import { ContextCounterCustomHook } from '../context';
import { useCounter } from '../hooks';
import CounterContextCustomHookWrapper from './CounterContextCustomHookWrapper';

export default function () {
  const [counter, increment, decrement] = useCounter(0);

  return (
    <>
      <ContextCounterCustomHook.Provider
        value={{ counter, increment, decrement }}
      >
        <Row className="g-4">
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextCustomHookWrapper />
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <CounterContextCustomHookWrapper />
          </Col>
        </Row>
      </ContextCounterCustomHook.Provider>
    </>
  );
}
