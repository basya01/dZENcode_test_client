import clsx from 'clsx';
import React, { useState } from 'react';

import { Order } from '../../../models';
import { getDateData } from '../../../utils';
import calculateTotalAmount from '../../../utils/calcTotaPriceProducts';

import styles from './OrderCard.module.scss';

import listIcon from '../../../assets/list.svg';
import arrowIcon from '../../../assets/arrow.svg';

import { ModalDelete, RemoveButton } from '../..';

interface OrderPreviewProps {
  order: Order;
  short?: boolean;
  selected?: boolean;
  className?: string;
  onOpen?: (order: Order) => void;
}

const OrderPreview: React.FC<OrderPreviewProps> = ({
  order,
  className,
  short,
  onOpen,
  selected,
}) => {
  const { day, month, year, monthStr } = getDateData(order.createdAt);
  const { usd, uah } = calculateTotalAmount(order.products || []);
  const [open, setOpen] = useState(false);

  const handlerDeleteOrder = () => {
    setOpen(true);
  };

  const handlerCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className={clsx(styles.order, className)}>
      <ModalDelete
        title="Вы действительно хотите удалить этот приход?"
        open={open}
        onClose={handlerCloseModal}
      >
        <div>
          <p className="h5">{order.title}</p>
          <p>{`${day} / ${monthStr} / ${year}`}</p>
        </div>
      </ModalDelete>
      {!short && <h3 className="w-50">{order.title}</h3>}
      <div
        className={clsx(
          'd-flex justify-content-between align-items-center pr-5',
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
              draggable="false"
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
            <RemoveButton onClick={handlerDeleteOrder} />
          </>
        )}
      </div>
      {selected && (
        <div className={styles.order__selected_arrow}>
          <img
            className={styles.order__selected_arrow__icon}
            src={arrowIcon}
            alt=">"
          />
        </div>
      )}
    </div>
  );
};

export default OrderPreview;
