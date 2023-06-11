import { Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <Col
      as="main"
      sm={9}
      md={10}
      className="mt-5"
    >
      <Outlet />
    </Col>
  );
};

export default Main;
