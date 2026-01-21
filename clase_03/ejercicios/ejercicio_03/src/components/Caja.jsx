function Caja({ children }) {
  return (
    <div style={{
      border: "2px solid #333",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      {children}
    </div>
  );
}

export default Caja;