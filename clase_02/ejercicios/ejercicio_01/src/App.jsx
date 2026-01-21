
import ListaTareas from './components/ListaTareas'

function App() {
  //probamos opcion con tareas
 /*   const tareas = [
    "Estudiar React",
    "Practicar JSX",
    "Hacer ejercicio",
    "Tomar mate ☕"
  ]; */

  //probamos opcion sin tareas
    const tareas = [
      ];

  return (
    <>
      <h2>Mis tareas</h2>
      <ListaTareas arrayTareas={tareas}/>
    </>
  )
}

export default App
