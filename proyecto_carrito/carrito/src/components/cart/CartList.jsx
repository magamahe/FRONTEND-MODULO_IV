import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";

function CartList() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="card fade-in">
        <p>Tu carrito está vacío 😢</p>
      </div>
    );
  }

  return (
    <div className="card fade-in">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
