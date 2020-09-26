interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  details: string;
}

interface CartItem {
  id: string;
  quantity: Number;
  product: Product;
}

interface Cart {
  id: string;
  quantity: number;
  products: Product[];
}
