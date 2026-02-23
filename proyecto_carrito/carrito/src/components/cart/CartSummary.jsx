import { useCart } from "../../hooks/useCart";

function CartSummary() {
  const { total } = useCart();

  return (
    <div className="card fade-in">
      <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Resumen
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12px",
        fontSize: "16px"
      }}>
        <span>Total</span>
        <strong>${total}</strong>
      </div>

      <button className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
        Finalizar compra
      </button>
    </div>
  );
}

export default CartSummary;
