// Usuario.jsx


export default function Usuario({ usuario }) {
  const { nombre, edad, estado } = usuario;

  return (
    <div className="card-usuario">
      <h2>{nombre}</h2>
      {estado === "ACTIVO" ? (
        <div className="badge activo">✅ Activo</div>
      ) : estado === "INACTIVO" ? (
        <div className="badge inactivo">⛔ Inactivo</div>
      ) : (
        <div className="badge invitado">👤 Invitado</div>
      )}
      {edad < 18 && (
        <div className="badge menor">👶 Menor de edad</div>
      )}
    </div>
  );
}
