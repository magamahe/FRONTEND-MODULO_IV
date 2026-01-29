export default function ListaProductos() {
  const productos = [
    { nombre: "Teclado", precio: 250 },
    { nombre: "Monitor", precio: 15 },
    { nombre: "Mouse", precio: 99 },
    { nombre: "Auriculares", precio: 300 },
    { nombre: "Placa de video", precio: 45 },
  ];
  return (
    <div className="contenedor-productos">
      {productos.map((producto, index) => (
        <div className="card-producto" key={index}>
          
          {producto.precio < 100 && (
            <div className="oferta">
              OFERTA
            </div>
          )}

          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}
