function Check(number){
    let zn;
    let prost ="Simple";

    zn = number>0?"Positive":"Negative";
    for(i=2;i<number;i++){
        if(number%i==0)
        prost = "Ordinary";
        break;
    }
    let div = "Divides on: ";
    if(number%2==0)
    div+="2 ";
    if(number%3==0)
    div+="3 ";
    if(number%5==0)
    div+="5 ";
    if(number%6==0)
    div+="6 ";
    if(number%9==0)
    div+="9 ";
    
    console.log(number+' is '+zn, prost, div);
}
Check(18);