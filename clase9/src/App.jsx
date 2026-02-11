import ContadorMultiple from './components/ContadorMultiple';
import InputControlado from './components/InputControlado';
import ListaDinamica from './components/ListaDinamica';
function App() {
  // Simulación de ID de usuario para tus tarjetas de admin
  const CLIENT_ID = "USR-2026-X99"; 

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Panel de Actividades - React Clase 9
        </h1>
        <p className="mt-2 text-slate-400">Práctica de Estados y Hooks</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContadorMultiple userId={CLIENT_ID} />
        <InputControlado userId={CLIENT_ID} />
        <div className="md:col-span-2">
          <ListaDinamica userId={CLIENT_ID} />
        </div>
      </main>
    </div>
  );
}

export default App;