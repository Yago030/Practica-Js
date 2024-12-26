const product = {
    name : "Monitor de 20 Pul",
    price : 300,
    available : true
}

//destructuring
// const { name}= product;
// const { price}= product;
// const { available}= product;


//simplificando   destructuring
const { name, price, available}= product;


console.log(name)
console.log(price)
console.log(available)