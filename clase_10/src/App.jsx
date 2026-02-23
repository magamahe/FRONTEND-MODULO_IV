import { useState } from "react";

export default function App() {
  /* =========================
     ACTIVIDAD 1 — MENSAJE
  ==========================*/
  const [mensaje, setMensaje] = useState("");

  /* =========================
     ACTIVIDAD 2 — CONTADOR
  ==========================*/
  const [contador, setContador] = useState(0);

  /* =========================
     ACTIVIDAD 3 — TAREAS
  ==========================*/
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    setTareas((prev) => [...prev, { id: Date.now(), texto }]);
    setTexto("");
  };

  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        Lifting State en React
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* =========================
            ACTIVIDAD 1
        ==========================*/}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-semibold mb-4 text-gray-600">Mensaje compartido</h2>

          <input
            className="w-full border rounded-xl p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Escribí un mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <p className="text-gray-700 bg-pink-50 p-3 rounded-xl">
            {mensaje || "El mensaje aparecerá acá"}
          </p>
        </div>

        {/* =========================
            ACTIVIDAD 2
        ==========================*/}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="font-semibold mb-4 text-gray-600">Contador</h2>

          <p className="text-4xl font-bold text-purple-500 mb-4">{contador}</p>

          <div className="flex justify-center gap-3">
            

            <button
              onClick={() => setContador((c) => c - 1)}
              className="px-4 py-2 bg-red-300 rounded-xl hover:bg-red-400 transition"
            >
              ➖
            </button>
            <button
              onClick={() => setContador((c) => c + 1)}
              className="px-4 py-2 bg-green-300 rounded-xl hover:bg-green-400 transition"
            >
              ➕
            </button>
          </div>
        </div>

        {/* =========================
            ACTIVIDAD 3
        ==========================*/}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-semibold mb-4 text-gray-600">Lista de tareas</h2>

          <form onSubmit={agregarTarea} className="flex gap-2 mb-4">
            <input
              className="flex-1 border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Nueva tarea..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />

            <button className="px-4 bg-blue-300 rounded-xl hover:bg-blue-400 transition">
              +
            </button>
          </form>

          <ul className="space-y-2">
            {tareas.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center bg-blue-50 p-2 rounded-xl"
              >
                {t.texto}

                <button
                  onClick={() => eliminarTarea(t.id)}
                  className="text-red-400 hover:text-red-600 font-bold"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}