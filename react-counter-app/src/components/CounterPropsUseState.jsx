import CounterTemplate from './CounterTemplate.jsx';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const title = 'Counter props + useState';

export default function () {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevVal) => prevVal + 1);

  const decrement = () => setCounter((prevVal) => prevVal - 1);

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
