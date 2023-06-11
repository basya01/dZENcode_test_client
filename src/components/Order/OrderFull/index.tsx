import clsx from 'clsx';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { RemoveButton } from '../..';
import { Order, Product } from '../../../models';

import styles from './OrderFull.module.scss';

interface OrderFullProps {
  order: Order;
  className?: string;
  onClose?: () => void;
}

const OrderFull: React.FC<OrderFullProps> = ({ order, className, onClose }) => {
  return (
    <div className={clsx(className, styles.order)}>
      <h2 className="font-weight-bold h3">{order.title}</h2>
      <div className={styles.order__products}>
        {order.products?.map((product) => (
          <React.Fragment key={product.id}>
            <hr />
            <ProductItem product={product} />
          </React.Fragment>
        ))}
      </div>
      <div
        className={styles.order__close_button}
        role="button"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </div>
  );
};

interface ProductItemProps {
  product: Product;
  className?: string;
  onDelete?: () => void;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  className,
  onDelete,
}) => {
  return (
    <Row className={clsx(styles.product_item, className, 'm-0 p-0')}>
      <Col
        className="d-flex align-items-center justify-content-between"
        md={1.5}
      >
        <div className={styles.product_item__marker}></div>
        <img
          draggable="false"
          className={styles.product_item__photo}
          src={`${BASE_URL}${product.photo}`}
          alt={product.title}
        />
      </Col>
      <Col>
        <h5 className="h5">{product.title}</h5>
        <p className={styles.product_item_secondary_text}>
          {product.specification}
        </p>
      </Col>
      <Col className="d-flex">
        <RemoveButton className="ml-auto" onClick={onDelete} />
      </Col>
    </Row>
  );
};

export default OrderFull;
