const product = {
    name : "Monitor de 20 Pul",
    price : 300,
    available : true,
    informacion:{
        medidas: {
            peso : "1kg",
            dimensiones : "20x20x20cm"
        },
        fabricacion:{
            pais: "Argentina"
        }
       
    }
}


const {name,  informacion:{ fabricacion}  , informacion:{medidas:{peso}} } = product;

console.log(name)
console.log(fabricacion)
console.log(peso)