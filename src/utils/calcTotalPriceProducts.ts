import { Product } from '../models';

const calcTotalPriceProducts = (products: Product[]) => {
  const initialAmount = {
    usd: 0,
    uah: 0,
  };

  const totalAmount = products.reduce((acc, item) => {
    const usdPrice = item.price.find((price) => price.symbol === 'USD');
    const uahPrice = item.price.find((price) => price.symbol === 'UAH');

    acc.usd += usdPrice ? usdPrice.value : 0;
    acc.uah += uahPrice ? uahPrice.value : 0;

    return acc;
  }, initialAmount);

  return totalAmount;
};

export default calcTotalPriceProducts;
