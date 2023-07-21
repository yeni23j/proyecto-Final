let userAdmin = 'admin@gmail.com'
let passAdmin = 1234


const formulario = document.getElementById('form')
console.log(formulario);


const validarFormulario = (e)=> {
    e.preventDefault()
    console.log(e)
    console.log(formulario.emailLogin.value)
    console.log(formulario.passwordLogin.value)
    
    let user = formulario.emailLogin.value
    let pass = formulario.passwordLogin.value

    if (userAdmin == user  && passAdmin == pass){
        alert ('Login exitoso');
        location.href = '../pages/cuenta.html'
    } else {
        alert ('login incorrecto');
        location.reload();
        
    }
}

formulario.onsubmit = validarFormulario
