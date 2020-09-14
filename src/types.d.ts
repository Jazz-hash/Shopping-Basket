interface Product {
  id: string;
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
  id: string;
  cartItems: CartItem[];
}
