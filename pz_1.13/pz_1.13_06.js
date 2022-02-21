let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
];
function pluck(characters, name){
    let arr = [];
    characters.forEach(element => {
        arr.push(element[name]);
    });
    return arr;
}
console.log (pluck(characters, "name")); //['barney', 'fred'];
