import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { items } = useCart();

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px",
      borderBottom: "1px solid #ddd"
    }}>
      <h2>🛍️ MiTienda</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Productos</Link>
        <Link to="/cart">🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}

export default Header;
