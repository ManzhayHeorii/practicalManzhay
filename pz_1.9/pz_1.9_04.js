const readline = require('readline');

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question('Введіть кількість рядків', (favNum) => {
    let floors = favNum;

    for(let i = 0; i < floors; i++)
    {
        let s = "";
        for (let L = 0; L <= i; L++){
            s += "*";
        }
        for (let spaces = 0; spaces < floors - i; spaces++){
            s += "  ";
        }
        for (let A = 0; A < i + 1 + i; A++){
            s += "*";
        }
        if (i < floors/2){
            for (let spaces = 0; spaces < floors - i; spaces++) {
                s += "  ";
            }
            for (let X = 0; X < i + 1 + i; X++) {
                s += "*";
            }
        }
        else{
            s += " ";
            for (let spaces = 0; spaces < floors; spaces++) {
                s += " ";
            }
            for (let X = 0; X < (floors - i) + (floors - 1 - i); X++){
                s += "*";
            }
        }
        console.log(s);
    }
    userInput.close();
});