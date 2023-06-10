import clsx from 'clsx';
import React from 'react';

import { Order } from '../../../models';
import { getDateData } from '../../../utils';
import calculateTotalAmount from '../../../utils/calcTotaPriceProducts';

import styles from './OrderPreview.module.scss';

import listIcon from '../../../assets/list.svg';
import removeIcon from '../../../assets/remove.svg';

interface OrderPreviewProps {
  order: Order;
  short?: boolean;
  className?: string;
  onOpen?: (order: Order) => void;
}

const OrderPreview: React.FC<OrderPreviewProps> = ({
  order,
  className,
  short,
  onOpen,
}) => {
  const { day, month, year, monthStr } = getDateData(order.createdAt);
  const { usd, uah } = calculateTotalAmount(order.products || []);

  return (
    <div className={clsx(styles.order, className)}>
      {!short && <h3 className="w-50">{order.title}</h3>}
      <div
        className={clsx(
          'd-flex justify-content-between align-items-center',
          !short ? 'w-50' : 'w-100'
        )}
      >
        <div className="d-flex align-items-center">
          <div
            className={styles.order__list_icon_wrapper}
            role="button"
            onClick={() => onOpen && onOpen(order)}
          >
            <img
              className={styles.order__list_icon}
              src={listIcon}
              alt="open_products_icon"
            />
          </div>
          <div className="ml-2">
            <p>{order.products?.length}</p>
            <p className={styles.order_secondary_text}>Продукта</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className={styles.order_secondary_text}>{`${day} / ${month}`}</p>
          <p>{`${day} / ${monthStr} / ${year}`}</p>
        </div>
        {!short && (
          <>
            <div className="d-flex flex-column align-items-center">
              <p className={styles.order_secondary_text}>{`${usd} $`}</p>
              <p>{`${uah} UAH`}</p>
            </div>
            <img
              className={styles.order__remove_icon}
              src={removeIcon}
              alt="remove_icon"
              role="button"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPreview;