let arr = [[5,4,3,2],[6,-10,15,5],[9,-7,-3,2],[1,9,7,4]];
function makeSome(arr){
    for(i = 0; i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(i===j){
                if(arr[i][j]>0)
                arr[i][j]=1;
                else
                arr[i][j]=0;
            }
        }
    }
    console.log(arr)
}
makeSome(arr);