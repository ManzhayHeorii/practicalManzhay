class Random{
    static nextDouble(low, high) {
        let range = high - low;
        return low + range * Math.random();
    }
    static nextInt(low, high) {
        low = Math.ceil(low);
        high = Math.floor(high);
        return Math.floor(Math.random() * (high - low) + low);
    }
    static nextElement(array) {
        let index = this.nextInt(0,array.length);
        return array[index];
    }
}
console.log(Random.nextDouble(1,3));
console.log(Random.nextInt(1,5));
console.log(Random.nextElement(["ONE", "TWO","THREE"]));
