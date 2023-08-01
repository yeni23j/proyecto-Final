console.log('ESTOY EN MI CUENTA');

































































//eventos con addevent
//1. obtenemos el elemento tarjet
let miBoton = document.getElementById('carrito')
//2. le cargamos el evento al botón
miBoton.addEventListener('click',(e) =>{

    e.preventDefault();
    console.log(e);
    console.log(e.tarjet);
    cargarTabla()
}) 

const cargarCarrito = () => {
    
    //traemos la tabla
    let tabla = document.getElementById('carritoCompras');
    //limpiar la tabla antes que el for cargue de nuevo:
    tabla.innerText = '';
    
//    let misProductos = localStorage.getItem ('productos')
    // convierto el string en objeto JSON
    let misProductos = JSON.parse(localStorage.getItem ('productos'))

    for (let i = 0; i < misProductos.length; i++) {
    
    //crear un elemento tr:
    let filaNombre = document.createElement("tr")
    //creamos un elemento td:
    let celdaNombre = document.createElement("td")
    let celdaPrecio = document.createElement("td")
    //agregamos el dato a la celda del nombre de producto:
    celdaNombre.textContent = misProductos[i].nombre;
    celdaPrecio.textContent = misProductos[i].precio;
    
    //ponemos el td dentro del tr y el tr dentro del tboby:
    filaNombre.appendChild(celdaNombre);
    filaNombre.appendChild(celdaPrecio);
    tabla.appendChild(filaNombre);
    
    //imprimimos los objetos en el array de productos:
    console.log(misProductos[i]);
    }
    }
    