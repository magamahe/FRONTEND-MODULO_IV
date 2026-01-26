function Mensajes({hayMensajes}){
return(
   <div>
      {hayMensajes && <p>Tienes nuevos mensajes</p>}
    </div>
)
}

export default Mensajes