function mail(){
    let input = prompt("Enter your e-mail");
    if(input.match(new RegExp("^[a-z0-9]*@[a-z]*.[a-z]*$"))!==null){
        alert("Correct!");
    }else{
        alert("Incorrect!");
        mail();
    }
}
mail();  

