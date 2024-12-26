//COPIAR OBJETOS:




const product = {
    name : "Monitor de 20 Pul",
    price : 300,
    available : true
}

const medidas = {
    heiht : 223,
    width : 200,
    color : "red"
}


console.log(product)
console.log(medidas)



//fusionar en un objecto ambos objetos: 

const fusion1 = Object.assign(product, medidas);
console.log(fusion1)


//FUSIONAR CON SPREAD , MAS USADO:
const resultado2 = { ...product, ...medidas}
console.log(resultado2)