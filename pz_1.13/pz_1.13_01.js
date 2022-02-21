let objecto = new Object();
while(true){
    objecto.language = prompt("Оберіть мову. Введіть 'en', або'ua'").toLowerCase();
    let buf = objecto.language.toLowerCase();
    if(buf=="en"||buf=="ua"){
        break;
    }
}
let check = true;
while(check){
    check = false;
    switch(objecto.language){
        case"en":
        objecto.number = prompt("Enter the day number of the week(from 1 to 7)");
        switch(objecto.number){
            case "1":
                alert(objecto.language+" Monday");
                break;
                case "2":
                alert(objecto.language+" Tuesday");
                break;
                case "3":
                alert(objecto.language+" Wednesday");
                break;
                case "4":
                alert(objecto.language+" Thurshday");
                break;
                case "5":
                alert(objecto.language+" Friday");
                break;
                case "6":
                alert(objecto.language+" Saturday");
                break;
                case "7":
                alert(objecto.language+" Sunday");
                break;
                default:
                    check = true;
                    break;
        }
        break;
        case "ua":
        objecto.number =prompt("Введіть номер тижня (від 1 до 7)");
        switch(objecto.number){
            case "1":
                alert(objecto.language+" Понеділок");
                break;
                case "2":
                alert(objecto.language+" Вівторок");
                break;
                case "3":
                alert(objecto.language+" Середа");
                break;
                case "4":
                alert(objecto.language+" Четвер");
                break;
                case "5":
                alert(objecto.language+" П'ятниця");
                break;
                case "6":
                alert(objecto.language+" Субота");
                break;
                case "7":
                alert(objecto.language+" Неділя");
                break;
                default:
                    check = true;
                    break;
        }
    }
}