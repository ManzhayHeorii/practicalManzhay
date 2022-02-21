function repeats (text) {
	const regExp = /\s* \s*/;
	let arr = text.split(regExp);
    let result = [];
    for (let i = 0; i < arr.length; ++i){
    let a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
    }

    for(let k in result){
        console.log(`Word '${k}' repeats ${result[k]} times`);
    }
}
let text = 'one one two three four four four';
repeats(text);