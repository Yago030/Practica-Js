
function Producto(nombre, precio){
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true;
}


const producto2 = new Producto('Monitor 24 pulgadas', 500)
console.log(producto2)