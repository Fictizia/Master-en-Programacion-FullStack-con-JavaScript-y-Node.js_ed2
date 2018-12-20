function impImparFor (){

    var i= prompt("dime un numero)");
    var par = (i % 2 == 0);
    if (par) i++;
     
    for(;i < (i+50); ){    
    console.log(i);

    par ? (i+1) += 2 : i +=2;
    }
    }
    
    
    function impImparWhile () {
    var i = 2;
    
        while(i < 101){
        console.log(i);
        i += 2;
        }
                            }
    
    
    
    function impImparDoWhile (){
    var i = 2;
                                
     do{
    console.log(i);
    i += 2 ;
        }while(i < 101);
                             }
                                
    