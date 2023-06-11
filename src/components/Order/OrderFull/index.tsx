import React from 'react';
import clsx from 'clsx';

import { Order, Product } from '../../../models';
import removeIcon from '../../../assets/remove.svg';

import styles from './OrderFull.module.scss';
import { Col, Row } from 'react-bootstrap';

interface OrderFullProps {
  order: Order;
  className?: string;
}

const OrderFull: React.FC<OrderFullProps> = ({ order, className }) => {
  return (
    <div className={clsx(className, styles.order)}>
      <h2 className="font-weight-bold h3">{order.title}</h2>
      <div>
        {order.products?.map((product) => (
          <React.Fragment key={product.id}>
            <hr />
            <ProductItem product={product} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

interface ProductItemProps {
  product: Product;
  className?: string;
  onDelete?: (id: number) => void;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;
// const ProductItem: React.FC<ProductItemProps> = ({ product, className, onDelete }) => {
//   return (
//     <div className={clsx(styles.product_item, className)}>
//       <div className={styles.product_item__marker}></div>
//       <img draggable="false"
//         className={styles.product_item__photo}
//         src={`${BASE_URL}${product.photo}`}
//         alt={product.title}
//       />
//       <div>
//         <h5 className="h5">{product.title}</h5>
//         <p className={styles.product_item_secondary_text}>
//           {product.specification}
//         </p>
//       </div>
//       <img draggable="false"
//         className={styles.product_item__remove_icon}
//         src={removeIcon}
//         alt="remove_icon"
//         role="button"
//       />
//     </div>
//   );
// };
const ProductItem: React.FC<ProductItemProps> = ({
  product,
  className,
  onDelete,
}) => {
  return (
    <Row className={clsx(styles.product_item, className)}>
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
        <img
          draggable="false"
          className={styles.product_item__remove_icon}
          src={removeIcon}
          alt="remove_icon"
          role="button"
          onAbort={() => onDelete && onDelete(product.id)}
        />
      </Col>
    </Row>
  );
};

export default OrderFull;
