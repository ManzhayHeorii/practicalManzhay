let str = "I wrote some code here to find how much vowel letters is here";
let buf = str.split(" ").join('');
const reg = new RegExp("[aioyueAIOYUE]", 'g')
let vow = str.match(reg).length;

console.log(str+` ||  vowels: ${vow}, consonats: ${buf.length-vow}`);