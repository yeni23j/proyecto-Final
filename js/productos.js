console.log('estamos en la página de productos')



const productos = [
  {
      id: 'nukeLapacho',
      nombre: 'Nuke Lapacho 50',
      precio: '$ 200.000',
      imagen: "../imagen/1ÑUKE EN LA COCINA.png"
    },
    {
      id: 'nukeMulti',
      nombre: "Nuke Multi Eco",
      precio: '$ 300.000',
      imagen: "../imagen/1nuke-multi-eco.1-1.png"
    },
    {
      id: 'nukeWichi',
      nombre: "Nuke Wichi 60",
      precio: '$ 250.000',
      imagen: "../imagen/1nuke-wichi-60.3-1.png"
    },
    {
      id: 'fogonNuke',
      nombre: "Fogón Nuke 60",
      precio: '$ 100.000',
      imagen: "../imagen/FOGON-NUKE.png"
    },
    {
      id: 'tromenKalafate',
      nombre: "Estufa Tromen Calafate",
      precio: '$ 400.000',
      imagen: "../imagen/1CALAFATE2-1.png"
    }
];
  
//localStorage.setItem("productos", JSON.stringify(productos));
//console.log( productos)


/* 
const cargarProducto = () => {
  
let producto = document.getElementById('productos');
for (let i = 0; i < productos.length; i++) {
console.log(productos[i]);
}
}
 */

let uno = document.getElementById('uno');
uno.addEventListener('click', function() {
  alert('El producto se añadió al carrito de compras')
  console.log(`Haz hecho clic en: ${productos[0].nombre}, cuyo precio es ${productos[0].precio} y su imagen es ${productos[0].imagen}`);
  localStorage.setItem("productos[0]", JSON.stringify(productos[0]));
});
let dos = document.getElementById('dos');
dos.addEventListener('click', function() {
  alert('El producto se añadió al carrito de compras')
  console.log(`Haz hecho clic en: ${productos[1].nombre}, cuyo precio es ${productos[1].precio} y su imagen es ${productos[1].imagen}`);
  localStorage.setItem("productos[1]", JSON.stringify(productos[1]));
});
let tres = document.getElementById('tres');
tres.addEventListener('click', function() {  
  alert('El producto se añadió al carrito de compras')
  console.log(`Haz hecho clic en: ${productos[2].nombre}, cuyo precio es ${productos[2].precio} y su imagen es ${productos[2].imagen}`);
  localStorage.setItem("productos[2]", JSON.stringify(productos[2]));
});
let cuatro = document.getElementById('cuatro');
cuatro.addEventListener('click', function() {
  alert('El producto se añadió al carrito de compras')
  console.log(`Haz hecho clic en: ${productos[3].nombre}, cuyo precio es ${productos[3].precio} y su imagen es ${productos[3].imagen}`);
  localStorage.setItem("productos[3]", JSON.stringify(productos[3]));
});
let cinco = document.getElementById('cinco');
cinco.addEventListener('click', function() {
  alert('El producto se añadió al carrito de compras')
  console.log(`Haz hecho clic en: ${productos[4].nombre}, cuyo precio es ${productos[4].precio} y su imagen es ${productos[4].imagen}`);
  localStorage.setItem("productos[4]", JSON.stringify(productos[4]));
});