import Despedida from "./components/Despedida"
import Saludo from "./components/Saludo"

function App() {
  
  return (
    <>
      <h1>Saludos</h1>
      <Saludo nombre="Juan" />
      <Despedida nombre="Juan" />   
    </>
  )
}

export default App
