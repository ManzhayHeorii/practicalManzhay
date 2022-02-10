let numb = 10000;
let result = 51;
let counter = 0;
while(result>50){
    numb = numb/2;
    result = numb;
    counter++;
}
console.log("Result: "+result, "Iterations: "+counter);