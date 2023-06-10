import { Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <Col
      as="main"
      sm={9}
      md={10}
      className="d-flex justify-content-center align-items-center"
    >
      <Outlet />
    </Col>
  );
};

export default Main;
