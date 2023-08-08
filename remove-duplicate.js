var names = ['abul', 'babul', 'chabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'chabul', 'babul', 'abul', 'abul'];
function removeDuplicateName(names){
    const unice = [];
    for(var i = 0; i < names.length; i++){
        const name = names[i];
        if(unice.includes(name) === false){
            unice.push(name);
        }
    }
    return unice;
}
const result = removeDuplicateName(names);
console.log(result);