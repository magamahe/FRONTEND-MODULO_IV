

function Users({ usuario, onEliminar }) {
  return (
    <li>
      {usuario.nombre} - {usuario.edad} años
      <button onClick={() => onEliminar(usuario.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Users;