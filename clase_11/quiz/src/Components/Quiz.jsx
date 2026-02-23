import { useEffect, useState } from "react";
import Pregunta from "./Pregunta";

export default function Quiz() {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [tiempo, setTiempo] = useState(10);
  const [finalizado, setFinalizado] = useState(false);

  // ✅ CARGA + SHUFFLE
  useEffect(() => {
    fetch("/preguntas.json")
      .then(res => res.json())
      .then(data => {
        const mezcladas = [...data].sort(() => Math.random() - 0.5);
        setPreguntas(mezcladas);
      });
  }, []);

  // ⏱ TEMPORIZADOR
  useEffect(() => {
    if (finalizado) return;

    const id = setInterval(() => setTiempo(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [indice, finalizado]);

  // ⏰ SI TERMINA TIEMPO
  useEffect(() => {
    if (tiempo === 0) siguientePregunta(null);
  }, [tiempo]);

  const siguientePregunta = seleccion => {
    const actual = preguntas[indice];
    if (!actual) return;

    if (seleccion === actual.correcta) setPuntaje(p => p + 1);

    setRespuestasUsuario(prev => [...prev, { ...actual, seleccion }]);

    if (indice + 1 < preguntas.length) {
      setIndice(i => i + 1);
      setTiempo(10);
    } else setFinalizado(true);
  };

  const reiniciar = () => window.location.reload();

  if (!preguntas.length) return <p className="quiz-container">Cargando...</p>;

  if (finalizado) {
  return (
    <div className="quiz-container fade">
      <h2>Resultado final</h2>
      <p className="puntaje">Puntaje: {puntaje}</p>

      <div className="tabla-resultados">
        {respuestasUsuario.map((r, i) => {
          const correcta = r.seleccion === r.correcta;

          return (
            <div key={i} className="fila">
              <span className="preg">{r.pregunta}</span>

              <span className="resp">
                {r.opciones[r.seleccion] || "Sin responder"}
              </span>

              <span className={correcta ? "ok" : "mal"}>
                {correcta ? "✔" : "✖"}
              </span>

              {!correcta && (
                <span className="correcta">
                  {r.opciones[r.correcta]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <button className="btn" onClick={() => window.location.reload()}>
        Reiniciar
      </button>
    </div>
  );
}


  return (
    <div className="quiz-container fade">
      <p className="puntaje">
        Pregunta {indice + 1} / {preguntas.length}
      </p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${((indice + 1) / preguntas.length) * 100}%` }}
        ></div>
      </div>

      <p className="puntaje">Tiempo: {tiempo}</p>

      <Pregunta data={preguntas[indice]} onResponder={siguientePregunta} />

      <p className="puntaje">Puntaje: {puntaje}</p>
    </div>
  );
}
