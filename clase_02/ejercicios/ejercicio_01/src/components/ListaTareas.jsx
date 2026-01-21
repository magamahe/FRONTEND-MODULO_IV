function ListaTareas({arrayTareas}) {
    // si no hay tares
    if(arrayTareas.length === 0) {
        return <p>No hay tareas pendientes</p>
    }
    //si hay tareas
    return (
        <ul>
            {arrayTareas.map( (tarea, index) => (
                <li key={index}>{tarea}</li>
            ))}
        </ul>
    );

}

export default ListaTareas;