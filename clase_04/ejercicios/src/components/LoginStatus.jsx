function LoginStatus({isLoggedIn}){
 if(isLoggedIn){
    return <h1>Bienvenido</h1>
}else{
    return <h1>Debes iniciar sesión</h1>
}
}

export default LoginStatus