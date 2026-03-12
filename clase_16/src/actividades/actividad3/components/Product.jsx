import { useState } from "react";
import style from "./Producto.module.css";
import { ShoppingCart } from "lucide-react";

const Producto = ({ nombre, precio, disponible, imagen, sumarCarrito }) => {
  const [agregado, setAgregado] = useState(false);

  const agregar = () => {
    if (!agregado) {
      setAgregado(true);
      sumarCarrito();
    }
  };

  return (
    <article className={style.card}>
      
      <img src={imagen} alt={nombre} className={style.imagen} />

      <h3 className={style.nombre}>{nombre}</h3>

      <p className={style.precio}>${precio}</p>

      {!disponible && (
        <p className={style.noDisponible}>No disponible</p>
      )}

      {disponible && (
        <button
          onClick={agregar}
          disabled={agregado}
          className={`${style.boton} ${agregado ? style.agregado : ""}`}
        >
          <ShoppingCart size={18} />

          {agregado
            ? "Producto en el carrito ✅"
            : "Agregar al carrito"}
        </button>
      )}
    </article>
  );
};

export default Producto;