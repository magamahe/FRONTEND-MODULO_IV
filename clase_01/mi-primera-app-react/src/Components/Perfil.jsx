import Titulo from "./Titulo";
import Description from "./Descripcion";
import Boton from "./Boton";
function Perfil() {
    return(
          <div style={styles.card}>
            <Titulo />
            <Description />
            <Boton />
        </div>
    )    
};

const styles = {
  card: {
    width: "600px",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(116, 120, 182, 0.1)",
    backgroundColor: "#15db99",
    margin: "40px auto"
  }};


export default Perfil;