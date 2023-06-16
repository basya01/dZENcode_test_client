import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { OrderCard, OrderFull } from '../../components';
import { Order } from '../../models';

import styles from './Orders.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOrders } from '../../store/slices/orders';

const Orders = () => {
  const [selected, setSelected] = useState<Order | null>(null);
  const { orders } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  console.log(orders);

  const handlerSelectProduct = (order: Order) => {
    setSelected(order);
  };

  return (
    <Row>
      <Col>
        <h3 className="h2 mb-4">Приходы / 3</h3>
        <div className={styles.orders}>
          {orders.map((item) => (
            <OrderCard
              selected={item.id === selected?.id}
              key={item.id}
              order={item}
              onOpen={handlerSelectProduct}
              short={!!selected}
            />
          ))}
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
