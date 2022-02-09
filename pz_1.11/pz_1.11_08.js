function calculate(...args){
    let sum =0;
    for(i=0;i<args.length;i++){
        sum+=args[i];
    }
    console.log(sum);
    return sum/args.length;
}
console.log(calculate(1,2,3,4,5));