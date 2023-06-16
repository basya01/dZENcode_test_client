import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

import {
  getDateData,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../../utils';

import styles from './Header.module.scss';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Header = () => {
  const [sessionCount, setSessionCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(Date.now());

  useEffect(() => {
    let id = getLocalStorageItem('id');
    if (!id) {
      id = uuidv4();
      setLocalStorageItem('id', id);
    }

    const socket = io(BASE_URL, { query: { id } });

    socket.on('sessionCount', (count) => {
      setSessionCount(count);
    });

    const interval = setInterval(() => {
      setCurrentDate(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const { year, monthStr, day, hours, minutes, dayOfWeek } =
    getDateData(currentDate);
  return (
    <header className={clsx('bg-white', styles.header)}>
      <Container className="d-flex align-items-center py-3 justify-content-between">
        <h1 className={styles.brand}>INVENTORY</h1>
        <div className="d-flex align-items-center">
          <div>
            <div>
              <p>{dayOfWeek}</p>
            </div>
            <div className="d-flex mt-2">
              <p>
                {day} {monthStr}, {year}
              </p>
              <p className="ml-2">
                {hours}:{minutes}
              </p>
            </div>
          </div>
          <div className="ml-3">
            <p>Кол-во сессий: {sessionCount}</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
