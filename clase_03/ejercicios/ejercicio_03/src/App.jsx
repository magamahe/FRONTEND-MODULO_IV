import Caja from "./components/Caja";

function App() {
  return (
    <>
      <Caja>
        <h2>Título dentro de la caja</h2>
        <p>Este contenido viene desde App, pero se muestra dentro de Caja.</p>
      </Caja>

      <Caja>
        <p>También puedo meter solo un párrafo.</p>
      </Caja>
    </>
  );
}

export default App;
