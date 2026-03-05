import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"

import styles from "./CardProducto.module.css"

function CardProducto({ titulo, imagen }) {

  const [inCart, setInCart] = useState(false)

  function toggleCart(){
    setInCart(!inCart)
  }

  return (
    <div className={styles.card}>

      <img
        src={imagen}
        alt={titulo}
        className={styles.img}
      />

      <div className={styles.body}>

        <h3 className="text-lg font-semibold">
          {titulo}
        </h3>

        <button
          onClick={toggleCart}
          className={`${styles.btn} ${
            inCart ? styles.agregado : styles.noAgregado
          }`}
        >

          <FaShoppingCart/>

          {inCart
            ? "Agregado al carrito"
            : "Agregar al carrito"
          }

        </button>

      </div>

    </div>
  )
}

export default CardProducto