const product = {
    name : "Monitor de 20 Pul",
    price : 300,
    available : true
}

//add new properties
product.money = "USD";
delete product.available;

console.log(product);