interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  details: string;
}

interface CartItem {
  quantity: number;
  product: Product;
}

interface Cart {
  products: CartItem[];
}
