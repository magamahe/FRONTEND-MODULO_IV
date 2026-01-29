export default function Tareas() {
  const tareas = [
    { id: 1, texto: "Estudiar React", completa: false },
    { id: 2, texto: "Hacer ejercicios", completa: true },
    { id: 3, texto: "Ordenar apuntes", completa: false },
  ];

  const pendientes = tareas.filter((t) => !t.completa);

  return (
    <div className="app-container">
      <div className="card">
        <h2>📝 Tareas</h2>

        <p className="contador">
          Tareas pendientes: <span>{pendientes.length}</span>
        </p>

        {pendientes.length === 0 ? (
          <p className="mensaje">🎉 No hay tareas pendientes</p>
        ) : (
          pendientes.map((t) => (
            <div key={t.id} className="tarea">
              📌 {t.texto}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
