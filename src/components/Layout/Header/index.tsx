import clsx from 'clsx';

import { Container, Navbar } from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={clsx("bg-white", styles.header)}>
      <Navbar>
        <Container>
          <Navbar.Brand className={styles.brand}>INVENTORY</Navbar.Brand>
          <div>
            <div>
              <p>Вторник</p>
            </div>
            <div className="d-flex mt-2">
              <p>06 Апр, 2017</p>
              <p className="ml-2">17:20</p>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
