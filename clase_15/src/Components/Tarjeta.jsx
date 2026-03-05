function Tarjeta() {

  const contenedor = {
    border: "1px solid black",
    padding: "20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "10px",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }

  const titulo = {
    color: "blue",
    fontSize: "24px"
  }

  const parrafo = {
    color: "gray",
    marginTop: "10px"
  }

  return (
    <div style={contenedor}>

      <h2 style={titulo}>
        Tarjeta con Estilos Inline
      </h2>

      <p style={parrafo}>
        Este componente usa objetos JavaScript para aplicar estilos en React.
      </p>

    </div>
  )
}

export default Tarjeta