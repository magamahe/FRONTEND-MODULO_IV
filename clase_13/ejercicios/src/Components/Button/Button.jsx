import styles from "./Button.module.css";

function Button({ tipo }) {
  const btnClass = `${styles.btn} ${
    tipo === "error" ? styles.error : styles.success
  }`;

  return <button className={btnClass}>Click</button>;
}

export default Button;