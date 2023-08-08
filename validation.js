function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please inter a number fast";
    }
    return num1 + num2;
}
const myNumber = sum(12, 4);
// console.log(myNumber);
// ------------------------------------
function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}
const number = multiply(5, 8);
console.log(number);