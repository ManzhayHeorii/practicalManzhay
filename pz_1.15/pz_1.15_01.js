function splitToDigits(number){
    let obj = new Object();
    obj.Units = 0;
    obj.Dozens = 0;
    obj.Hundreds = 0;
    obj.Thousands = 0;
    if(Number(number)>=1&&Number(number)<=9999){
        for(let i=3;i>-1;i--){
            switch(i){
                case number.length-1:
                    if(number[i]!==undefined)
                    obj.Units = number[i];
                    break;
                case number.length-2:
                    if(number[i]!==undefined)
                    obj.Dozens = number[i];
                    break;
                case number.length-3:
                    if(number[i]!==undefined)
                    obj.Hundreds = number[i];
                    break;
                case number.length-4:
                    if(number[i]!==undefined)
                    obj.Thousands = number[i];
                    break;
            }
        }
        return obj;
    }else{
        console.log("Wrong format");
        return new Object();
    }
    
}
console.log(splitToDigits("251"));