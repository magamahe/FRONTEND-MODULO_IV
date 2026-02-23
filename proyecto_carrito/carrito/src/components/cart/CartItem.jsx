import { useCart } from "../../hooks/useCart";

function CartItem({ item }) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <div className="cart-item fade-in">
      <div>
        <h4 style={{ margin: 0 }}>{item.name}</h4>
        <small style={{ color: "#6b7280" }}>${item.price}</small>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button className="btn btn-ghost" onClick={() => decrement(item.id)}>
          −
        </button>
        <span>{item.quantity}</span>
        <button className="btn btn-ghost" onClick={() => increment(item.id)}>
          +
        </button>
      </div>

      <div style={{ fontWeight: "600" }}>
        ${item.price * item.quantity}
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="btn btn-ghost"
      >
        ❌
      </button>
    </div>
  );
}

export default CartItem;
