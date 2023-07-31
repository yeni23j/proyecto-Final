let userAdmin = 'jos@gmail.com'
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
        alert ('Bienvenido a su Cuenta');
        location.href = '../pages/cuenta.html'
    } else {
        var mensaje = document.createElement("span");
        mensaje.innerHTML = "Los datos ingresados no son correctos";
        mensaje.style.color = "red";
        document.getElementById("form").appendChild(mensaje);
        document.getElementById("form").reset();

    }
}

formulario.onsubmit = validarFormulario
