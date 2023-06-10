import { Routes, Route } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import { Orders, Products } from '../../../pages';

const Main = () => {
  return (
    <Col
      as="main"
      sm={9}
      md={10}
      className="d-flex justify-content-center align-items-center"
    >
      <Container fluid>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Container>
    </Col>
  );
};

export default Main;
