function Layout({ header, content, footer }) {
  return (
    <div
      style={{
        minHeight: "100vh", //ocupa toda la altura de la ventana
        display: "flex",
        flexDirection: "column"
      }}
    >
      <header style={{ background: "#a1006b", color: "white", padding: "10px" }}>
        {header}
      </header>

      <main
        style={{
          padding: "20px",
          flex: 1, // esto empuja el footer hacia abajo
          textAlign: "center"
        }}
      >
        {content}
      </main>

      <footer style={{ background: "#333", color: "white", padding: "10px", textAlign: "center" }}>
        {footer}
      </footer>
    </div>
  );
}

export default Layout;

