function game(number, attempt){
    let user = prompt("Я загадав число. Зможеш вгадати?"+number);
    let dt = new Date();
    let log = `${dt.getDate()}.${dt.getMonth()+1}.${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} Спроба ${attempt}, Число: ${user}`;
    let temperature = Math.abs(number-Number(user));
    if(temperature>50){
        alert("Дуже холодно");
        console.log(log);
        attempt++;
        game(number, attempt);
    }else if(temperature>=30){
        alert("Холодно");
        console.log(log);
        attempt++;
        game(number, attempt);
    }else if(temperature>=20){
        alert("Тепліше");
        console.log(log);
        attempt++;
        game(number, attempt);
    }else if(temperature>=10){
        alert("Тепло");
        console.log(log);
        attempt++;
        game(number, attempt);
    }else if(temperature>=5){
        console.log(log);
        attempt++;
        alert("Гаряче");
        game(number, attempt);
    }else if(temperature>=1){
        attempt++;
        console.log(log);
        alert("Дуже гаряче");
        game(number, attempt);
    }else if(temperature==0){
        console.log(log);
        alert(`Це те, що я загадав!\nЗа ${attempt} спроб ви вгадали число ${number}`);
        let c = confirm("Хочеш спробувати ще?");
        if(c){
            game(Math.floor(Math.random() * (101 - 1)) + 1,1);
        }
        
    }
}
game(Math.floor(Math.random() * (101 - 1)) + 1,1);