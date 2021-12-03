function validarForma(forma){
    let usuario = forma.usuario;
    if(usuario.value === "" || usuario.value.length <8){
        alert("El usuario debe contener al menos 8 letras");
        usuario.focus();
        usuario.select();
        return false;
        console.log("usuario");
    }
    let password = forma.password;
    if(password.value === "" || password.value.length < 8){
       alert("El password debe tener al menos 8 letras/numeros");
       password.focus();
       password.select();
       console.log("pass");
       return false;
    }
    let tecnologias = forma.tecnologia;
    let checkSeleccionado = false;
    
    for(let i= 0; i <tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe elegir al menos una tecnologia");
        return false;
    }
    
    let generos = forma.genero;
    let radioSeleccionado = false;
    
    for(let i = 0; i< generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
                    }
    }
    if(!radioSeleccionado){
        alert("Debe elegir un genero");
        return false;
    }
    let ocupacion = forma.ocupacion;
    if(ocupacion.value === ""){
        alert("Debe elegir al menos una ocupacion");
        return false;
    }
    // formulario es valido
    alert("Formulario valida, enviando al servidor");
    return true;
}