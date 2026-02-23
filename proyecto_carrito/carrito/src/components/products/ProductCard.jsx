import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "200px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>{product.name}</h3>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <button 
        onClick={() => addItem(product)}
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
