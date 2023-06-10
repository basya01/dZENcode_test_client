import { Col } from 'react-bootstrap';
import clsx from 'clsx';

import styles from './SideBar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const sidebarItems = [
  { id: 1, value: 'Приход', to: '/' },
  { id: 2, value: 'Продукты', to: '/products' },
];

const SideBar = () => {
  const [active, setActive] = useState(1);

  return (
    <Col
      sm={3}
      md={2}
      className="bg-light d-flex justify-content-center align-items-center"
    >
      <ul
        className={clsx(
          'd-flex flex-column text-center font-weight-bold text-uppercase',
          styles.sidebar__list
        )}
      >
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            role="button"
            className={clsx(
              'pb-1 pointer',
              styles.sidebar__list__item,
              active === item.id && styles.sidebar__list__item_active
            )}
            onClick={() => setActive(item.id)}
          >
            <Link to={item.to}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default SideBar;
