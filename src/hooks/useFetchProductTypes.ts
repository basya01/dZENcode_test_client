import { useEffect, useState } from 'react';
import { ProductType, Status } from '../models';
import api from '../apiClient';

const useFetchProductTypes = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [types, setTypes] = useState<ProductType[]>([]);

  useEffect(() => {
    (async () => {
      setStatus(Status.PENDING);
      try {
        const { data } = await api.get('/products/types');
        setTypes(data);
      } catch (e) {
        setStatus(Status.FAILED);
      }
    })();
  }, []);

  return { status, types };
};

export default useFetchProductTypes;
