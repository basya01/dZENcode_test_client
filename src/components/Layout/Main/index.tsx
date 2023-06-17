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
      className={clsx(styles.routes_container)}
    >
      <Outlet />
    </Col>
  );
};

export default Main;
