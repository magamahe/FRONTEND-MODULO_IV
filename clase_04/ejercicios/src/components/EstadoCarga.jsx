function EstadoCarga({loading}){
return(
<p>
    {loading ? "Cargando..." : "Datos Listos"}
</p>)
}
export default EstadoCarga