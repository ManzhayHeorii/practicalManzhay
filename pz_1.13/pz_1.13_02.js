function Desk(height, width){
    this.height = height;
    this.width = width;
    this.draw = function(){
        for(i = height;i>0;i--){
            let row = i;
            for(j=0;j<=width;j++){
                if(j%2==0)
                row+="#";
                else
                row+="@";
            }
            console.log(row);
        }
        let lastRow = " ";
        let unicode = 65;
        for(c = 0; c<width; c++){
            lastRow+= String.fromCodePoint(unicode);
            unicode++;
        }
        console.log(lastRow);
    }
}
let desk = new Desk(5,8);
desk.draw();