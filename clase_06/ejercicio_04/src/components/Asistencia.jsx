
function Asistencia() {
  const alumnas = [
    { id: 1, nombre: "Ana", asistio: true },
    { id: 2, nombre: "Lucía", asistio: false },
    { id: 3, nombre: "Martina", asistio: true },
    { id: 4, nombre: "Sofía", asistio: true },
    { id: 5, nombre: "Carla", asistio: false },
  ];

  const presentes = alumnas.filter((a) => a.asistio).length;

  return (
    <div className="asistencia-container">
      <div className="asistencia-card">
        <h2>📚 Asistencia de alumnas</h2>

        <p className="contador">
          Presentes: <span>{presentes}</span> / {alumnas.length}
        </p>

        <ul className="lista">
          {alumnas.map((alumna) => (
            <li key={alumna.id} className="item">
              {alumna.asistio ? (
                <span className="presente">✅</span>
              ) : (
                <span className="ausente">❌</span>
              )}
              <span className="nombre">{alumna.nombre}</span>

              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Asistencia;
