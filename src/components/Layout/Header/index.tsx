import clsx from 'clsx';

import { Container, Navbar } from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={clsx('bg-white', styles.header)}>
      <Container className="d-flex align-items-center py-3 justify-content-between">
        <Navbar.Brand className={styles.brand}>INVENTORY</Navbar.Brand>
        <div className="d-flex align-items-center">
          <div>
            <div>
              <p>Вторник</p>
            </div>
            <div className="d-flex mt-2">
              <p>06 Апр, 2017</p>
              <p className="ml-2">17:20</p>
            </div>
          </div>
          <div className="ml-3">
            <p>Кол-во сессий: 2</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
