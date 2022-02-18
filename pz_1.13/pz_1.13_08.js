class TaskToDo{
    constructor(name, description, start, end){
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
    }
}
class Proccess extends TaskToDo{
    constructor(name, description, start, end, percent, flag){
        super(name, description, start, end);
        this.percent = percent;
        this.flag = flag;
    }
}
let mainTask = new TaskToDo("Труби", "Викопати яму", new Date(2022,2,1), new Date(2022,2,2), "Непередбачений параметр");
let supTask = new Proccess("Труби", "Викопати яму", new Date(2022,2,1), new Date(2022,2,2), "50%", "У процесі");
//supTask = mainTask;
console.log(supTask);
console.log(mainTask);