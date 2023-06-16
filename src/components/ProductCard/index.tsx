import clsx from 'clsx';
import React from 'react';

import { Product } from '../../models';

import { Card, Col, Row } from 'react-bootstrap';
import { getDateData } from '../../utils';

import styles from './ProductCard.module.scss';

interface ProductProps {
  product: Product;
  className?: string;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  const startGuarantee = getDateData(product.guarantee.start);
  const endGuarantee = getDateData(product.guarantee.end);

  const [defaultPrice, additionalPrice] = product.price[0].isDefault
    ? product.price
    : product.price.reverse();

  return (
    <Card>
      <Card.Body className={clsx(className)}>
        <Row className="d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <div className={styles.product_card__marker}></div>
            <img
              className={styles.product_card__photo}
              src={`${BASE_URL}${product.photo}`}
              alt={product.title}
            />
          </Col>
          <Col>
            <h4>{product.title}</h4>
          </Col>
          <Col>
            <p>{product.type.name}</p>
          </Col>
          <Col>
            <p>{product.isNew ? 'Новый' : 'Б / У'}</p>
          </Col>
          <Col>
            <div className={styles.product_card__prices}>
              <p className={styles.product_card_secondary_text}>
                {additionalPrice.value} {additionalPrice.symbol}
              </p>
              <p className="mt-2">
                {defaultPrice.value} {defaultPrice.symbol}
              </p>
            </div>
          </Col>
          <Col>
            <div className={styles.product_card__guarantee}>
              <p className={styles.product_card_secondary_text}>c: </p>
              <div className="ml-3">
                <p
                  className={styles.product_card_secondary_text}
                >{`${startGuarantee.day} / ${startGuarantee.month}`}</p>
                <p>{`${startGuarantee.day} / ${startGuarantee.monthStr} / ${startGuarantee.year}`}</p>
              </div>
            </div>
            <div className={styles.product_card__guarantee}>
              <p className={styles.product_card_secondary_text}>по: </p>
              <div className="ml-3">
                <p
                  className={styles.product_card_secondary_text}
                >{`${endGuarantee.day} / ${endGuarantee.month}`}</p>
                <p>{`${endGuarantee.day} / ${endGuarantee.monthStr} / ${endGuarantee.year}`}</p>
              </div>
            </div>
          </Col>
          <Col>
            <p>{product.order.title}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
