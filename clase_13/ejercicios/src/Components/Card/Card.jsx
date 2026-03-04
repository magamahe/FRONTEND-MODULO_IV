import styles from "./Card.module.css";

function Card({ tipo, destacado }) {
  return (
    <div
      className={`${styles.card}
      ${tipo === "alert" ? styles.alert : ""}
      ${destacado ? styles.destacado : ""}`}
    >
      <h2 className="text-lg font-semibold text-gray-700">
        Card {tipo || "normal"}
      </h2>
      <p className="text-gray-500 mt-2">
        Ejemplo de estilos condicionales.
      </p>
    </div>
  );
}

export default Card;