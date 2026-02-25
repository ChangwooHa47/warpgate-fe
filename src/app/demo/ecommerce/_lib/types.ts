export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: Category;
  price: number;
  description: string;
  details: string[];
  images: string[];
  variants?: Variant[];
  stock: "in_stock" | "low_stock" | "out_of_stock";
  isNew?: boolean;
}

export type Category = "apparel" | "home" | "desk" | "wellness";

export interface Variant {
  label: string;
  options: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: OrderStatus;
  timeline: TimelineEvent[];
  shippingAddress: ShippingAddress;
  totalPrice: number;
  createdAt: string;
}

export type OrderStatus =
  | "confirmed"
  | "preparing"
  | "shipping"
  | "delivered";

export interface TimelineEvent {
  status: OrderStatus;
  label: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface ShippingAddress {
  name: string;
  phone: string;
  zipCode: string;
  address: string;
  addressDetail: string;
}

export type CheckoutStep = "shipping" | "payment" | "confirmation";
