import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Main = () => {
  return (
    <Col
      as="main"
      sm={9}
      md={10}
      className="d-flex justify-content-center align-items-center"
    >
      <Container fluid>Main</Container>
    </Col>
  );
};

export default Main;
