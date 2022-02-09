let secondArr = [1, 1, 1, 2, 1];
function findUniq(...arr){
    return arr[0].filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}
console.log(findUniq(secondArr));