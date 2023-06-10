import { useState } from 'react';
import clsx from 'clsx';
import { OrderPreview } from '../../components';
import { Order } from '../../models';

import styles from './Orders.module.scss';

const items: Order[] = [
  {
    id: 1,
    title: 'Длиннючее придлиннючее название прихода',
    description: 'This is a technical order 1.',
    createdAt: '2023-06-03T10:42:55.000Z',
    products: [
      {
        id: 4,
        serialNumber: 3339,
        isNew: false,
        photo: '/uploads/9225ddadd0f1b8d0e0ebce00b52f4ada.jpg',
        title: 'Lenovo IdeaPad 3',
        specification: '82H803D9RA',
        createdAt: '2023-06-04T12:32:37.000Z',
        type: {
          id: 3,
          name: 'Laptops',
        },
        order: {
          id: 1,
          title: 'Order 1',
          description: 'This is a technical order 1.',
          createdAt: '2023-06-03T10:42:55.000Z',
        },
        price: [
          {
            id: 9,
            value: 800,
            symbol: 'USD',
            isDefault: false,
          },
          {
            id: 8,
            value: 25000,
            symbol: 'UAH',
            isDefault: true,
          },
        ],
        guarantee: {
          id: 1,
          start: '2023-06-03T00:00:00.000Z',
          end: '2025-06-03T00:00:00.000Z',
        },
      },
      {
        id: 3,
        serialNumber: 2342,
        isNew: true,
        photo:
          '/uploads/samsung-27-odyssey-g7-c27g75tqsi-lc27g75tqsixci-black.jpg',
        title: 'Samsung Odyssey G7',
        specification: 'LS28BG702EIXUA',
        createdAt: '2023-06-04T12:31:37.000Z',
        type: {
          id: 2,
          name: 'Monitors',
        },
        order: {
          id: 1,
          title: 'Order 1',
          description: 'This is a technical order 1.',
          createdAt: '2023-06-03T10:42:55.000Z',
        },
        price: [
          {
            id: 7,
            value: 1009,
            symbol: 'USD',
            isDefault: true,
          },
          {
            id: 6,
            value: 36700,
            symbol: 'UAH',
            isDefault: false,
          },
        ],
        guarantee: {
          id: 2,
          start: '2021-06-03T00:00:00.000Z',
          end: '2022-12-08T00:00:00.000Z',
        },
      },
      {
        id: 2,
        serialNumber: 1828,
        isNew: true,
        photo: '/uploads/1681828731-sm-a245-galaxy-a24-lte-black-front.jpg',
        title: 'Samsung Galaxy A24',
        specification: 'SM-A245FDRVSEK',
        createdAt: '2023-06-03T10:47:04.000Z',
        type: {
          id: 1,
          name: 'Phones',
        },
        order: {
          id: 1,
          title: 'Order 1',
          description: 'This is a technical order 1.',
          createdAt: '2023-06-03T10:42:55.000Z',
        },
        price: [
          {
            id: 5,
            value: 100,
            symbol: 'USD',
            isDefault: true,
          },
          {
            id: 4,
            value: 3670,
            symbol: 'UAH',
            isDefault: false,
          },
        ],
        guarantee: {
          id: 1,
          start: '2023-06-03T00:00:00.000Z',
          end: '2025-06-03T00:00:00.000Z',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Order 2',
    description: 'This is a technical order 3.',
    createdAt: '2023-06-03T10:43:01.000Z',
    products: [
      {
        id: 7,
        serialNumber: 5297,
        isNew: true,
        photo: '/uploads/70929-0-1200x1200.jpg',
        title: 'ASUS Laptop X515',
        specification: '90NB0TY1-M00VF0',
        createdAt: '2023-06-04T12:35:12.000Z',
        type: {
          id: 3,
          name: 'Laptops',
        },
        order: {
          id: 2,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T10:43:01.000Z',
        },
        price: [
          {
            id: 15,
            value: 420,
            symbol: 'USD',
            isDefault: false,
          },
          {
            id: 14,
            value: 21000,
            symbol: 'UAH',
            isDefault: true,
          },
        ],
        guarantee: {
          id: 2,
          start: '2021-06-03T00:00:00.000Z',
          end: '2022-12-08T00:00:00.000Z',
        },
      },
      {
        id: 6,
        serialNumber: 5412,
        isNew: true,
        photo: '/uploads/6542239_16.jpg',
        title: 'Samsung S24R350',
        specification: 'LS24R350FHIXCI',
        createdAt: '2023-06-04T12:33:31.000Z',
        type: {
          id: 2,
          name: 'Monitors',
        },
        order: {
          id: 2,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T10:43:01.000Z',
        },
        price: [
          {
            id: 13,
            value: 370,
            symbol: 'USD',
            isDefault: false,
          },
          {
            id: 12,
            value: 17000,
            symbol: 'UAH',
            isDefault: true,
          },
        ],
        guarantee: {
          id: 1,
          start: '2023-06-03T00:00:00.000Z',
          end: '2025-06-03T00:00:00.000Z',
        },
      },
      {
        id: 5,
        serialNumber: 1231,
        isNew: true,
        photo: '/uploads/1674808201-s23-green-09.jpg',
        title: 'Samsung Galaxy S23',
        specification: 'SM-S911BZKDSEK',
        createdAt: '2023-06-04T12:33:08.000Z',
        type: {
          id: 1,
          name: 'Phones',
        },
        order: {
          id: 2,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T10:43:01.000Z',
        },
        price: [
          {
            id: 11,
            value: 300,
            symbol: 'USD',
            isDefault: true,
          },
          {
            id: 10,
            value: 13000,
            symbol: 'UAH',
            isDefault: false,
          },
        ],
        guarantee: {
          id: 2,
          start: '2021-06-03T00:00:00.000Z',
          end: '2022-12-08T00:00:00.000Z',
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Order 2',
    description: 'This is a technical order 3.',
    createdAt: '2023-06-03T11:33:15.000Z',
    products: [
      {
        id: 10,
        serialNumber: 4313,
        isNew: false,
        photo: '/uploads/2916626112057081_1_1_1_1.jpg',
        title: 'Acer Aspire 7',
        specification: 'A715-42G-R3EZ',
        createdAt: '2023-06-04T12:36:12.000Z',
        type: {
          id: 3,
          name: 'Laptops',
        },
        order: {
          id: 3,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T11:33:15.000Z',
        },
        price: [
          {
            id: 21,
            value: 700,
            symbol: 'USD',
            isDefault: false,
          },
          {
            id: 20,
            value: 27700,
            symbol: 'UAH',
            isDefault: true,
          },
        ],
        guarantee: {
          id: 1,
          start: '2023-06-03T00:00:00.000Z',
          end: '2025-06-03T00:00:00.000Z',
        },
      },
      {
        id: 9,
        serialNumber: 8273,
        isNew: false,
        photo: '/uploads/176308948.jpg',
        title: 'Asus Curved Gaming',
        specification: 'SM-A546EZKASEK',
        createdAt: '2023-06-04T12:35:52.000Z',
        type: {
          id: 2,
          name: 'Monitors',
        },
        order: {
          id: 3,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T11:33:15.000Z',
        },
        price: [
          {
            id: 19,
            value: 1100,
            symbol: 'USD',
            isDefault: true,
          },
          {
            id: 18,
            value: 40000,
            symbol: 'UAH',
            isDefault: false,
          },
        ],
        guarantee: {
          id: 2,
          start: '2021-06-03T00:00:00.000Z',
          end: '2022-12-08T00:00:00.000Z',
        },
      },
      {
        id: 8,
        serialNumber: 5297,
        isNew: true,
        photo: '/uploads/2772546.jpg',
        title: 'Samsung Galaxy A54',
        specification: 'SM-A546EZKASEK',
        createdAt: '2023-06-04T12:35:32.000Z',
        type: {
          id: 1,
          name: 'Phones',
        },
        order: {
          id: 3,
          title: 'Order 2',
          description: 'This is a technical order 3.',
          createdAt: '2023-06-03T11:33:15.000Z',
        },
        price: [
          {
            id: 17,
            value: 250,
            symbol: 'USD',
            isDefault: true,
          },
          {
            id: 16,
            value: 10000,
            symbol: 'UAH',
            isDefault: false,
          },
        ],
        guarantee: {
          id: 2,
          start: '2021-06-03T00:00:00.000Z',
          end: '2022-12-08T00:00:00.000Z',
        },
      },
    ],
  },
];

const Orders = () => {
  const [selected, setSelected] = useState<Order | null>(null);
  const handlerSelectProduct = (order: Order) => {
    setSelected(order);
  };

  return (
    <div className={clsx('w-100', selected && 'd-flex')}>
      <div className={styles.orders}>
        {items.map((item) => (
          <OrderPreview
            key={item.id}
            order={item}
            onOpen={handlerSelectProduct}
            short={!!selected}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
