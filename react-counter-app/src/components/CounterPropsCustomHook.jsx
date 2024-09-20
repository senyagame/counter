import CounterTemplate from './CounterTemplate.jsx';
import { Col, Row } from 'react-bootstrap';
import { useCounter } from '../hooks';

const title = 'Counter props + hook';

export default function () {
  const [counter, increment, decrement] = useCounter(0);

  return (
    <>
      <Row className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}>
          <CounterTemplate
            title={title}
            counter={counter}
            increment={increment}
            decrement={decrement}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <CounterTemplate
            title={title}
            counter={counter}
            increment={increment}
            decrement={decrement}
          />
        </Col>
      </Row>
    </>
  );
}
