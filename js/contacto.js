console.log('formulario de carga de productos');

let productos = []
//función 

function cargarProductos () {

    // tomamos los datos de la función
console.log('Tu producto se cargo en la baseData');

//tomamos los datos mediante el formulario:
let nombreProducto = document.getElementById('nombreProducto').value;
let precioProducto = document.getElementById('precioProducto').value;

//guardamos los datos en el array:
//productos.push(nombreProducto, precioProducto)

console.log(typeof precioProducto);


//creo un objeto literal:
const producto = {
    nombre: nombreProducto,
    precio: precioProducto
}
//imprimimos el objeto:
console.log(producto);
productos.push(producto)

//imprimimos los datos de los productos
console.log(productos);
//llamo a la funcion cargar productos:

// utilizamos el localstorage:

//1. creamos una variable para que podamos convertir los datos a json:
let misProductos = JSON.stringify(productos);

// 2. le pasamos la variable al localStorage:
