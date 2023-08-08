const cheapestPhone = [
    {name:'Samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
    {name:'Walton', camera:10, storage:'32gb', price:120000, color:'black'},
    {name:'iphone', camera:16, storage:'32gb', price:120000, color:'golden'},
    {name:'Xoami', camera:48, storage:'128gb', price:83000, color:'blue'},
    {name:'Vivo', camera:40, storage:'32gb', price:29000, color:'silver'},
    {name:'Oppo', camera:52, storage:'32gb', price:26000, color:'olive'},
    {name:'Nova', camera:20, storage:'32gb', price:42000, color:'pink'},
];
function phonePrice(phones){
    let cheapest = phones[0];
    for(var i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest;
}
const mySelection = phonePrice(cheapestPhone);
console.log(mySelection);