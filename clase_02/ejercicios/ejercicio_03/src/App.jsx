import Productos from "./components/Productos";

function App() {
  const productos = [
    { id: 1, nombre: "Camisa", precio: 90 },
    { id: 2, nombre: "Pantalones", precio: 140 },
    { id: 3, nombre: "Zapatos", precio: 100 },
  ];

  return (
    <>
      <h1>Productos</h1>
      <Productos arrayProductos={productos} />
    </>
  )
}

export default App
