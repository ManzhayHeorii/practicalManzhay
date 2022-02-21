class ElectricsProvider{
    constructor(type, powerPerdDay){
        this.type = type;
        this.powerPerdDay = powerPerdDay;
    }
    makeSomeEnergy() {
        return this.powerPerdDay;
    }
}
class ElectricsConsumer{
    constructor(flats){
        this.day = 4/1000;
        this.night = 1/1000;
        this.flats = flats;
        this.consumption = this.ConsumpSomeEnergy();
    }
    ConsumpSomeEnergy() {
        return this.day*this.flats+this.night*this.flats;
    }
}
class Line{
    constructor(power, price){
        this.power = power;
        this.price =price;
    }
    SellEnergy(){}
    BuyEnergy(){}
}
class City{
    constructor(){
        this.providers = [];
        this.consumers = [];
        this.lines = [];
    }
}
function Menu(city){
    let input = prompt("Menu\n1. Create electrostantion\n2. Create sunpannel\n3. Create house\n4. Create line\n5. Show statistics\n6. Exit");
    switch(input){
        case "1": 
        while(true){
        input = prompt("Enter electrostantion power from 1 to 100(MW)");
        if(Number(input)>=1&&Number(input)<=100){
            city.providers.push(new ElectricsProvider("Electrostantion", Number(input)));
            alert("Done!");
            break;
        }
        else{
            alert("Read requirements!");
        }
        } 
        Menu(city);
        break;
        case "2": 
        while(true){
            input = prompt("Enter day power from 1 to 5(MW)");
            if(Number(input)>=1&&Number(input)<=5){
                city.providers.push(new ElectricsProvider("Pannel", Number(input)));
                break;
            }else{
                alert("Read requirements!");
            }
            } 
            Menu(city);
        break;
        case "3": 
        while(true){
            input = prompt("Enter amount of flats from 100 to 400 flats");
            if(Number(input)>=100&&Number(input)<=400){
                city.consumers.push(new ElectricsConsumer(Number(input)));
                alert("Done!");
                break;
            }
            else{
                alert("Read requirements!");
            }
            } 
            Menu(city);
        break;
        case "4": 
        while(true){
            let buf;
            input = prompt("Enter bandwidth (MW)");
            if(parseFloat(input)){
                buf = input;
                input = prompt("Enter price for Mw ($)");
                if(parseFloat(input))
                city.lines.push(new Line(Number(buf),Number(input)));
                break;
            }else{
                alert("Read requirements!");
            }
            } 
            Menu(city);
        break;
        case "5": 
        let p = 0;
        let e = 0;
        let hs = 0;
        let fl = 0;
        let totalEnergy = 0;
        let totalConsumption = 0;
        let bw = 0;
        let line = 0;
        let pr = 0;
        city.providers.forEach(element => {
            totalEnergy+=element.makeSomeEnergy();
            if(element.type === "Electrostantion")
            e++;
            else
            p++;
        });
        city.consumers.forEach(element => {
            totalConsumption+=element.ConsumpSomeEnergy();
            hs++;
            fl+=element.flats;
        });
        city.lines.forEach(element => {
           line++;
           bw+=element.power;
           pr+=element.price;
        });
        let stat;
        if(totalConsumption<totalEnergy){
            stat = `\nCity make ${totalEnergy-totalConsumption} Mw of energy. `;
            if(totalEnergy-totalConsumption<bw){
                stat+=` We can sell all for ${(totalEnergy-totalConsumption)*pr}$`;
            }else{
                stat+=`Bandwidth is not enough ${(totalEnergy-totalConsumption)-bw}`;
            }
        }else if(totalConsumption>totalEnergy){
            if(city.lines.length>0)
            stat = `\nCity has lack of energy! ${totalConsumption-totalEnergy}Mw is lack. We can buy it for${(totalConsumption-totalEnergy)*pr}$`;
            else
            stat = `\nCity has lack of energy! There is no lines to buy from`;
        }else{
            stat = `\nWe got Balance!`
        }
        alert("Electrostantions: "+e+`      Houses/flats: ${hs}/${fl}`+"\nSun pannels: "+p+"\n---------------------------------------------"+
        `\n Lines: ${line}    Bandwidth: ${bw}Mw   Price for Mw: ${pr}$`+"\n---------------------------------------------"+`\nConsumption: ${totalConsumption} Mw`+`\nTotal energy: ${totalEnergy} Mw`+stat);
        Menu(city);
        break;
        case "6":
        break;
    }

}

let city = new City();
Menu(city);