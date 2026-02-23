import { products } from "../../services/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      flexWrap: "wrap"
    }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
