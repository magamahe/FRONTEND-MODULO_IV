function Boton({ texto = "Click", onClick }) {
  return (
    <button onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
