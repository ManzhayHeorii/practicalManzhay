function CreateGreetable(name){
    this.name = name;
}
CreateGreetable.prototype.greet = function(greeting){console.log(`${greeting}, ${this.name}!`);}
obj = new CreateGreetable('Fella');
obj2 = new CreateGreetable('Neli');
obj.greet("Hello");
obj2.greet("What's up");