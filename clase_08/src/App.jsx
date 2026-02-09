import './App.css'
import InputControlado from './components/InputControlado'
import SoloNumeros from './components/SoloNumeros'
import InputNoControlado from './components/InputNoControlado'

function App() {
  return (
    <div className="main-container">
      <header className="app-header">
        <h1>Workshop de Inputs en React</h1>
      </header>

      <section className="grid-ejercicios">
        <div className="ejercicio-card">
          <h1>Ejercicio 1: Input Controlado</h1>
          <InputControlado />
        </div>

        <div className="ejercicio-card">
          <h1>Ejercicio 2: Solo Números</h1>
          <SoloNumeros />
        </div>

        <div className="ejercicio-card">
          <h1>Ejercicio 3: Input No Controlado</h1>
          <InputNoControlado />
        </div>

      </section>
    </div>
  )
}

export default App;