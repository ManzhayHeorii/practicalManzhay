function Add(a,b){return a+b};
function Sub(a,b){return a-b};
function Mul(a,b){return a*b};
function Div(a,b){return b!=0?a/b:0};
function Calc(a,b,funct){
    try{
        console.log(funct(a,b));
        throw new Error("Wrong format")
    }catch(error){
        console.log(error.message);
    }
}
Calc(5,7, Add);