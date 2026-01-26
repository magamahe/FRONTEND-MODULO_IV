import React from 'react'

function Notificaciones({cantidad}) {
    if(cantidad > 0){
        return <h2>Tienes {cantidad} notificaciones</h2>;
    }else{
        return null;
      } 
}

export default Notificaciones
