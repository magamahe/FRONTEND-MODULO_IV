import Layout from "./components/Layout";

function App() {
  return (
    <Layout
      header={<h1>Mi aplicación</h1>}
      content={
        <>
          <p>Este es el contenido principal.</p>
          <p>Acá irían tus componentes.</p>
        </>
      }
      footer={<p>© 2026 - Gabriela</p>}
    />
  );
}

export default App;
