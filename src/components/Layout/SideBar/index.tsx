import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './SideBar.module.scss';

const sidebarItems = [
  { id: 1, value: 'Приход', to: '/' },
  { id: 2, value: 'Продукты', to: '/products' },
];

const SideBar = () => {
  const [active, setActive] = useState(1);

  return (
    <Col sm={3} md={2} className={styles.sidebar}>
      <ul
        className={clsx(
          'd-flex flex-column text-center font-weight-bold text-uppercase',
          styles.sidebar__list
        )}
      >
        {sidebarItems.map((item) => (
          <Link key={item.id} to={item.to}>
            <li
              role="button"
              className={clsx(
                'pb-1 pointer',
                styles.sidebar__list__item,
                active === item.id && styles.sidebar__list__item_active
              )}
              onClick={() => setActive(item.id)}
            >
              {item.value}
            </li>
          </Link>
        ))}
      </ul>
    </Col>
  );
};

export default SideBar;
