import EstadoCarga from "./components/EstadoCarga";
import LoginStatus from "./components/LoginStatus";
import Mensajes from "./components/Mensajes";
import Notificaciones from "./components/Notificaciones";

function App() {
  return (
    <div>
      <h1>Clase 4 - Renderizado condicional</h1>

      {/* Ejercicio 01 */}
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />

      {/* Ejercicio 02 */}
      <Notificaciones cantidad={6} />

      {/* Ejercicio 03 */}
      <EstadoCarga loading={true} />
      <EstadoCarga loading={false} />

      {/* Ejercicio 04 */}
      <Mensajes hayMensajes={true} />
      <Mensajes hayMensajes={false} />
    </div>
  );
}

export default App;
