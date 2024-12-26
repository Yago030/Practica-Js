
const product = {
    name : "Monitor de 20 Pul",
    price : 300,
    available : true,
    mostrarInfo: function(){
        console.log(`Nombre: ${this.name} Precio: ${this.price} Disponibilidad`)
    }
}


console.log(product.mostrarInfo())