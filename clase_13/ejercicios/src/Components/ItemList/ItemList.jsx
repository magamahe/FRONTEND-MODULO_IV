import styles from "./ItemList.module.css";

function ItemList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            item.tipo === "error"
              ? styles.error
              : styles.success
          }`}
        >
          {item.nombre}
        </div>
      ))}
    </div>
  );
}

export default ItemList;