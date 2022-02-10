let count = 0;
while(count<100){
    let b = true;
    for(i = 2; i<count;i++){
        if(count%2==0){
            b=false;
            break;
        }
    }
    if(b&&count!==0)
    console.log(count);
    count++;
}