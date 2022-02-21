function powAndReverse(arr){
    for(i=0;i<arr.length;i++){
        arr[i]= arr[i]**2;
    }
    return arr.reverse();
}
console.log(powAndReverse([1,3,2,4]));