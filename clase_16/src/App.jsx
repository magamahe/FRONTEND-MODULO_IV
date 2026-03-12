import "./App.css";
import Actividad1 from "./actividades/actividad1/Actividad1";
import Actividad2 from "./actividades/actividad2/Actividad2";
import Actividad3 from "./actividades/actividad3/Actividad3";
import ActivityBox from "./components/ActivityBox/ActivityBox";

function App() {
  return (
    <>
      <ActivityBox title="Actividad 1">
        <Actividad1 />
      </ActivityBox>
      <ActivityBox title="Actividad 2">
        <Actividad2 />
      </ActivityBox>
      <ActivityBox title="Actividad 3">
        <Actividad3 />
      </ActivityBox>
    </>
  );
}

export default App;
