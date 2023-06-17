import clsx from 'clsx';
import { Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <Col
      as="main"
      sm={9}
      md={10}
      className={clsx('mt-5 px-5', styles.animated_routes_container)}
    >
      <Outlet />
    </Col>
  );
};

export default Main;
