import Boton from "./components/Boton";

function App() {

  function mostrarMensaje() {
    alert("Hiciste click en el botón Aceptar 🎉");
  }

  return (
    <>
      <h1>Probando props con funciones</h1>

      <Boton texto="Aceptar" onClick={mostrarMensaje} />
      <Boton texto="Cancelar" onClick={() => alert("Cancelado ❌")} />
      <Boton />
    </>
  );
}

export default App;
