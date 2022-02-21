let twoDiments = [[4, 2, 6],[1,7,5],[7,3,9]];
function makeEasy(...args){
    td = args[0];
    let easy = [];
    for(i=0;i<td.length;i++){
        for(j=0; j<td[i].length; j++){
            easy.push(td[i][j]);
        }
    }
    easy = easy.sort((a,b)=>a-b);
    return easy;
}
console.log(makeEasy(twoDiments));