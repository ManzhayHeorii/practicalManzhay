function repeatWord (text) {
	const regExp = /\s* \s*/;
	let arr = text.split(regExp);
	let result = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = i + 1; j < arr.length; j++){
			if(arr[i] == arr[j]){
				if(!result.includes(arr[i])){
					result += `${arr[i]} `;
				}
			}
		}
	}
	return result;
}
let text = 'jeff nipple nipple fax jam jam jeff sfea';
console.log(repeatWord(text));