import "./App.css";
import ListaProductos from "./components/ListaProductos";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-6">🛍️ Productos</h1>
        <ListaProductos />
      </div>
    </>
  );
}

export default App;
