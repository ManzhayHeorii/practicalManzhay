class Worker{
    constructor(name, surname, rate, days){
        this.name =name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    static getSalary(...args){
        args.forEach(element => {
            console.log("Salary per this time: "+element.rate*element.days+"$");
        });
    }
}
let w1 = new Worker("John", "Doe", 1500, 15);
let w2 = new Worker("Jane", "Doe", 1000, 10);
Worker.getSalary(w1,w2);
