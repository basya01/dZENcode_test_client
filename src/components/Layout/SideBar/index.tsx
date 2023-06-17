import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import styles from './SideBar.module.scss';

const sidebarItems = [
  { id: 1, value: 'Приход', to: '/' },
  { id: 2, value: 'Продукты', to: '/products' },
];

const SideBar = () => {
  const [active, setActive] = useState<number | null>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    switch (location.pathname) {
      case '/':
        setActive(1);
        break;
      case '/products':
        setActive(2);
        break;
      default:
        setActive(null);
    }
  }, [location]);

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
