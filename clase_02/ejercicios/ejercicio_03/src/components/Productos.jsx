function Productos({arrayProductos}) {
    return(
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {arrayProductos.map((producto, index) => (
          <tr key={index}>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>
              {producto.precio > 100 ? "Premium" : "Normal"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}

export default Productos;