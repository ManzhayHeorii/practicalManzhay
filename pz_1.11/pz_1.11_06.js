let secondArr = [5, 1, 1, 2, 3, 8, 3,2];
function findUniq(arr){
    let narr = [];
    for(i=0;i<arr.length;i++){
        if(i===0)
        narr.push(arr[i]);
        else{
            let un = true;
            for(j=0;j<narr.length;j++){
                if(narr[j]===arr[i]){
                    un = false;
                    break;
                }
            }
            if(un)
            narr.push(arr[i]);
        }
    }
    return narr;
}
console.log(findUniq(secondArr));