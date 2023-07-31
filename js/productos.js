console.log('estamos en la página de productos')

const productos = [
  {
      id: 'nukeLapacho',
      nombre: 'Nuke Lapacho 50',
      precio: 200000,
      imagen: "../imagen/1ÑUKE EN LA COCINA.png"
    },
    {
      id: 'nukeMulti',
      nombre: "Nuke Multi Eco",
      precio: 200000,
      imagen: "../imagen/1nuke-multi-eco.1-1.png"
    },
    {
      id: 'nukeWichi',
      nombre: "Nuke Wichi 60",
      precio: 200000,
      imagen: "../imagen/1nuke-wichi-60.3-1.png"
    },
    {
      id: 'fogonNuke',
      nombre: "Fogón Nuke 60",
      precio: 150000,
      imagen: "../imagen/FOGON-NUKE.png"
    },
    {
      id: 'tromenKalafate',
      nombre: "Estufa Tromen Calafate",
      precio: 200000,
      imagen: "../imagen/1CALAFATE2-1.png"
    }
];
  
localStorage.setItem("productos", JSON.stringify(productos));
console.log( productos)



const cargarProducto = () => {
  
let producto = document.getElementsByClassName('productos');
//trae el archivo html
for (let i = 0; i < producto.length; i++) {
  producto[i].addEventListener('click', function() {
    console.log(producto[i]);
  });
}
// trae el array productos
for (let i = 0; i < productos.length; i++) {
console.log(productos[i]);
}
}


