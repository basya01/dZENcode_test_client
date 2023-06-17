import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import { ProductCard } from '../../components';
import CardSkeleton from '../../components/SkeletonCard';
import {
  useAppDispatch,
  useAppSelector,
  useFetchProductTypes,
} from '../../hooks';
import { Status } from '../../models';
import { fetchProducts } from '../../store/slices/products';

import styles from './Products.module.scss';

const Products = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<number | null>(
    Number(searchParams.get('type')) || null
  );
  const { products, status, totalProducts } = useAppSelector(
    (state) => state.products
  );
  const { types } = useFetchProductTypes();
  useEffect(() => {
    if (selectedType) {
      dispatch(fetchProducts(selectedType));
      setSearchParams({ type: selectedType.toString() });
      return;
    }
    dispatch(fetchProducts());
    setSearchParams({});
  }, [selectedType]);

  const selectTypeHandler = (eventKey: string | null) => {
    if (eventKey === '0') {
      setSelectedType(null);
      return;
    }
    setSelectedType(Number(eventKey));
  };

  return (
    <div>
      <h3 className="h2 mb-4">Продукты / {totalProducts}</h3>
      <Dropdown onSelect={selectTypeHandler}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {types.find((type) => type.id === selectedType)?.name ||
            'Тип продукта'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={0} disabled={!selectedType}>
            Очистить
          </Dropdown.Item>
          {types.map((type) => (
            <Dropdown.Item
              eventKey={type.id}
              key={type.id}
              active={type.id === selectedType}
            >
              {type.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className={styles.products}>
        {status === Status.PENDING &&
          [...new Array(6)].map((_, index) => (
            <CardSkeleton key={index} width="100%" height={110} />
          ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {status === Status.FAILED && (
          <p className="h3">😿 Не удалось загрузить данные</p>
        )}
      </div>
    </div>
  );
};

export default Products;
