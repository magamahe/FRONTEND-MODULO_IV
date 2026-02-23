import './App.css'
import Boton from './components/boton'
import Card from './components/Card'
import CardsGrid from './components/CardsGrid'
import ModalCard from './components/ModalCard'
import Redes from './components/Redes'
function App() {
  return (
    <>
      <h1>App</h1>
      <div className='p-4 rounded mb-4 w-1/2 mx-auto'><p>------------------------------------EJERCICIO 1: BOTON ---------------------------</p></div>
      <Boton />
<div className='p-4 rounded mb-4 w-1/2 mx-auto'><p>------------------------------------EJERCICIO 2: CARD ---------------------------</p></div>      
      <Card/>

      <div className='p-4 rounded mb-4 w-1/2 mx-auto'><p>------------------------------------EJERCICIO 3: CARDS GRID ---------------------------</p></div>
      <CardsGrid/>

      <div className='p-4 rounded mb-4 w-1/2 mx-auto'><p>------------------------------------EJERCICIO 4: MODAL CARD-----------------------</p></div>
      <ModalCard/>

      <div className='p-4 rounded mb-4 w-1/2 mx-auto'><p>------------------------------------EJERCICIO 5: REDES ---------------------------</p></div>
      <Redes/>
     
    </>
  )
}

export default App
