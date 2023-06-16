import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { OrderCard, OrderFull, SkeletonCard } from '../../components';
import { Order, Status } from '../../models';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOrders } from '../../store/slices/orders';
import styles from './Orders.module.scss';

const Orders = () => {
  const [selected, setSelected] = useState<Order | null>(null);
  const { orders, totalOrders, status } = useAppSelector(
    (state) => state.orders
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const handlerSelectProduct = (order: Order) => {
    setSelected(order);
  };

  return (
    <Row>
      <Col>
        <h3 className="h2 mb-4">Приходы / {totalOrders}</h3>
        <div className={styles.orders}>
          {status === Status.PENDING &&
            [...new Array(7)].map((_, index) => (
              <SkeletonCard key={index} width="100%" height={78} />
            ))}
          {status === Status.SUCCEEDED &&
            orders.map((item) => (
              <OrderCard
                selected={item.id === selected?.id}
                key={item.id}
                order={item}
                onOpen={handlerSelectProduct}
                short={!!selected}
              />
            ))}
          {status === Status.FAILED && (
            <p className="h3">😿 Не удалось загрузить данные</p>
          )}
        </div>
      </Col>
      {selected && (
        <Col lg={12} xl={8}>
          <OrderFull order={selected} onClose={() => setSelected(null)} />
        </Col>
      )}
    </Row>
  );
};

export default Orders;
