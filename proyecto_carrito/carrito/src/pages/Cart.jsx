import "../styles/cart.css";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

function Cart() {
  return (
    <div className="cart-page">
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        🛒 Tu carrito
      </h2>

      <div className="cart-layout">
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
