interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  details: string;
}

interface CartItem {
  id: string;
  quantity: number;
  products: Product;
}

interface Cart {
  product: Product;
  quantity: Number;
}
