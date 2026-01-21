import Bienvenida from "./components/Bienvenida";

function App() {
  const nombre = "Gabi";
  const edad = 43;

  return (
    <>
      <h2>Hola {nombre}</h2>
      <p>Edad: {edad}</p>
      <p>{edad >= 18 ? "Mayor de edad" : "Menor de edad"}</p>
    </>
  );
}

export default App;