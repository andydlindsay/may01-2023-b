export interface Product {
  id?: number;
  product: string;
  price: number;
}

const myObj: Product = {
  id: 42,
  product: 'bouncy ball',
  price: 1.99,
};

const products: Product[] = [];
products.push(myObj);
// products.push({});
