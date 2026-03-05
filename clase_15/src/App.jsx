import Tarjeta from "./Components/tarjeta"
import Button from "./Components/Button"
import CardProducto from "./Components/CardProducto"

import notebook from "./assets/notebook.jpg"
import teclado from "./assets/teclado.jpg"
import mouse from "./assets/mouse.jpg"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-10">

      {/* TITULO */}

      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-3">
          React Styling Practice
        </h1>

        <p className="text-slate-500">
          Ejercicios de estilos en React usando Inline Styles, CSS Modules y Tailwind
        </p>
      </header>


      {/* ACTIVIDAD 1 */}

      <section className="mb-16 backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-6">
          Actividad 1 — Estilos en Línea
        </h1>

        <Tarjeta />

      </section>


      {/* ACTIVIDAD 2 */}

      <section className="mb-16 backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-6">
          Actividad 2 — CSS Modules
        </h1>

        <div className="flex gap-5">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>

      </section>


      {/* ACTIVIDAD 3 */}

      <section className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-semibold mb-8">
          Actividad 3 — Card de Producto
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <CardProducto
            titulo="Notebook Data Science"
            imagen={notebook}
          />

          <CardProducto
            titulo="Teclado Mecánico"
            imagen={teclado}
          />

          <CardProducto
            titulo="Mouse Gamer"
            imagen={mouse}
          />

        </div>

      </section>

    </div>
  )
}

export default App