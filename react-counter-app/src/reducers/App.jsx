import { Col, Container, Row, Stack } from 'react-bootstrap';

import {
  CounterUseState,
  CounterCustomHook,
  CounterReducer,
  CounterPropsUseState,
  CounterPropsReducer,
  CounterPropsCustomHook,
  CounterContextUseStateContainer,
  CounterContextCustomHookContainer,
  CounterContextReducerContainer,
  AppHeader,
} from './components';

function App() {
  return (
    <>
      <header className="p-4 bg-body-tertiary border-bottom">
        <AppHeader />
      </header>
      <main className="p-4 overflow-y-scroll ">
        <Container>
          <Stack gap={4}>
            <Row className="g-4">
              <Col lg={12}>
                <h2>Without sharing state</h2>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterUseState />
              </Col>

              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterCustomHook />
              </Col>

              <Col lg={4} md={4} sm={6} xs={12}>
                <CounterReducer />
              </Col>
            </Row>

            <hr />

            <Row className="g-4">
              <Col lg={12}>
                <h2>Paired by props</h2>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterPropsUseState />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterPropsCustomHook />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterPropsReducer />
              </Col>
            </Row>

            <hr />

            <Row className="g-4">
              <Col lg={12}>
                <h2>Paired by context</h2>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterContextUseStateContainer />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterContextCustomHookContainer />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <CounterContextReducerContainer />
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  );
}

export default App;
