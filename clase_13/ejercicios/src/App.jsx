import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import ItemList from "./Components/ItemList/ItemList";

function App() {
  const datos = [
    { nombre: "Servidor caído", tipo: "error" },
    { nombre: "Backup completado", tipo: "success" },
    { nombre: "Usuario bloqueado", tipo: "error" },
    { nombre: "Datos sincronizados", tipo: "success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-10 space-y-16">

      {/* ACTIVIDAD 1 */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Actividad 1 - Botón simple
        </h1>

        <div className="flex gap-6">
          <Button tipo="error" />
          <Button tipo="success" />
        </div>
      </section>

      {/* ACTIVIDAD 2 */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Actividad 2 - Card con múltiples estilos
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card tipo="alert" destacado={true} />
          <Card tipo="alert" />
          <Card destacado={true} />
          <Card />
        </div>
      </section>

      {/* ACTIVIDAD 3 */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Actividad 3 - Lista con estilos dinámicos
        </h1>

        <div className="bg-white p-6 rounded-3xl shadow-xl max-w-md">
          <ItemList items={datos} />
        </div>
      </section>

    </div>
  );
}

export default App;