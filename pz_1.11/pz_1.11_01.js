function retArray(number){
    let array = [];
    while(number>=1){
        array.push(number);
        number--;
    }
    return array;
}
console.log(retArray(10));