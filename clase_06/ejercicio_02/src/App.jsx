// App.jsx
import Usuario from "./components/Usuario";
import "./App.css";

function App() {
  const ESTADOS = {
    ACTIVO: "ACTIVO",
    INACTIVO: "INACTIVO",
    INVITADO: "INVITADO",
  };

  const usuarios = [
    { nombre: "Juan Perez", edad: 8, estado: ESTADOS.INVITADO },
    { nombre: "María López", edad: 25, estado: ESTADOS.ACTIVO },
    { nombre: "Carlos Gómez", edad: 40, estado: ESTADOS.INACTIVO },
    { nombre: "Ana Torres", edad: 16, estado: ESTADOS.ACTIVO },
  ];

  return (
    <div className="app">
      <h1 className="titulo">👥 Perfil de Usuarios</h1>
      <p className="subtitulo">Listado con estados y validaciones</p>

      <div className="contenedor-usuarios">
        {usuarios.map((u, index) => (
          <Usuario key={index} usuario={u} />
        ))}
      </div>
    </div>
  );
}

export default App;
