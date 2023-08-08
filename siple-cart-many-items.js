const shoppingCart = [
    {name:'shoe', price: 1200, quentity:5},
    {name:'shirt', price: 2200, quentity:5},
    {name:'pant', price: 3700, quentity:5},
    {name:'belt', price: 600, quentity:5},
];
function totalCost(products){
    let sum = 0;
    for(var i = 0; i < products.length; i++){
        var product = products[i];
        var totalProductCost = product.price * product.quentity;
        sum = sum + totalProductCost;
    }
    return sum;
}
const costOfProducts = totalCost(shoppingCart);
console.log("My total coast of this products:",costOfProducts);