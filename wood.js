function woodRequerement(chairquentity, tablequentity, bedquentity){
    const perchairwood = 3 ;
    const pertablewood = 10;
    const perbedwood = 50;
    const chairwood = chairquentity * perchairwood ;
    const tablewood = tablequentity * pertablewood;
    const bedwood =bedquentity * perbedwood;
    const totalwood =chairwood + tablewood + bedwood;
    return totalwood;
}
const wood =woodRequerement(0, 0, 5);
console.log(wood);