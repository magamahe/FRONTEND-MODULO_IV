 import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import PadreHijo from "./components/PadreHijo";
import TextoColor from "./components/TextoColor";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-800">
        Clase 7 · useState
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6">
        <Card titulo="🧮 Contador">
          <Contador />
        </Card>

        <Card titulo="📝 Formulario">
          <Formulario />
        </Card>

        <Card titulo="📋 Lista de tareas">
          <ListaTareas />
        </Card>

        <Card titulo="🎨 Texto con color">
          <TextoColor />
        </Card>

        <Card titulo="👨‍👧 Padre e Hijo">
          <PadreHijo />
        </Card>
      </div>
    </div>
  );
}

function Card({ titulo, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-700">
        {titulo}
      </h2>
      {children}
    </div>
  );
}

export default App;
 