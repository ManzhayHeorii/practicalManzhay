function ascii(str){
    let sum = 0;
    for(i=0;i<str.length;i++){
        sum+=Number(str.charCodeAt(i));
    }
    return sum;
}
console.log(ascii("?42l4"));