
class Generator {
	constructor () {
		this.value = 0;
		this.upValue = 0;
		this.isFirst = true;
	}
	generator () {
		if (this.isFirst === false){
			this.value += this.upValue;
		}
		return this.value; 
	}
	sequence (start , step) {
		if (this.isFirst) {
			this.value = start;
			this.upValue = step;
			this.isFirst = false;
		} 
		return this.generator();
	}
}
let b = new Generator();
b.sequence(10,5)
console.log(b.value);
console.log(b.generator());
console.log(b.generator());