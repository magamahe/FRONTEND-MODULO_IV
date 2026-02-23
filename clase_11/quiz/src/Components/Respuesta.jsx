export default function Respuesta({ texto, seleccionada, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid gray",
        margin: "5px",
        padding: "8px",
        background: seleccionada ? "#dbeafe" : "white",
        cursor: "pointer"
      }}
      dangerouslySetInnerHTML={{ __html: texto }}
    />
  );
}
