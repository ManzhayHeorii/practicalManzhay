function lOUdEr(str){
    const reg = new RegExp("[aioyue]");
    let louder = str;
    while(str.match(reg)!==null){
        let letter = str.match(reg);
         louder = louder.replace(letter[0], letter[0].toLocaleUpperCase());
        str = str.substring(letter.index+1);
        console.log(letter);
    }
    console.log(louder);
}
console.log(lOUdEr("rad mad dad fence fantastic"));