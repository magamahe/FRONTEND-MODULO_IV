import "./App.css";
import Producto from "./components/Products";
import Users from "./components/Users";
import { useState } from "react";
function App() {
  /* ejercicio 01 */
  const frutas = [
    { id: 1, nombre: "Manzana" },
    { id: 2, nombre: "Banana" },
    { id: 3, nombre: "Cereza" },
  ];

  /* ejercicio 02 */
  const tareas = [
    { id: 1, descripcion: "Estudiar React", completada: false },
    { id: 2, descripcion: "Hacer la compra", completada: true },
    { id: 3, descripcion: "Lavar el auto", completada: false },
  ];

  /* ejercicio 03 */
  const productos = [
    { id: 1, nombre: "Camisa", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Zapatos", precio: 60 },
  ];
  /* ejercicio 04 */
  const [usuarios, setusuarios] = useState([
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "María", edad: 28 },
  ]);

  const eliminarUsers = (id) => {
    setusuarios(usuarios.filter((u) => u.id !== id));
  };

  return (
    <>
      {/* ejercicio 01 */}
      <div>
        <h2>Lista de frutas</h2>
        <ul>
          {frutas.map((fruta) => (
            <li key={fruta.id}>{fruta.nombre}</li>
          ))}
        </ul>
      </div>

      {/* ejercicio 02 */}
      <div>
        <h2>Lista de tareas</h2>
        <ul>
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                color: tarea.completada ? "green" : "red",
              }}
            >
              {tarea.descripcion}
            </li>
          ))}
        </ul>
      </div>
      {/* ejercicio 03 */}
      <div>
        <h2>Lista de productos</h2>
        <ul>
          {productos.map((p) => (
            <Producto key={p.id} nombre={p.nombre} precio={p.precio} />
          ))}
        </ul>
      </div>
      {/* ejercicio 04 */}
      <div>
        <h2>Lista de Usuarios</h2>
        <ul>
          {usuarios.map((u) => (
            <Users key={u.id} usuario={u} onEliminar={eliminarUsers} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
