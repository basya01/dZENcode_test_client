import { Container } from 'react-bootstrap';
import clsx from 'clsx';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={clsx('bg-white', styles.header)}>
      <Container className="d-flex align-items-center py-3 justify-content-between">
        <h1 className={styles.brand}>INVENTORY</h1>
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
