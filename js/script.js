let virgola=1;
function key_down(key)
{
    let index=0;
    if(key==1) {document.getElementById("display").value +=1;}
    else if(key==2){document.getElementById("display").value+=2;}
    else if(key==3){document.getElementById("display").value+=3;}
    else if(key==4){document.getElementById("display").value+=4;}
    else if(key==5){document.getElementById("display").value+=5;}
    else if(key==6){document.getElementById("display").value+=6;}
    else if(key==7){document.getElementById("display").value+=7;}
    else if(key==8){document.getElementById("display").value+=8;}
    else if(key==9){document.getElementById("display").value+=9;}
    else if(key==0){document.getElementById("display").value+=0;}
    else if(key==-1){
        if(!trova_operatori(document.getElementById("display").value))
           {   document.getElementById("display").value+='+';}
        else{window.alert('Questa calcolatrice non permette espressioni complesse.Inserisci il secondo valore e poi premi il tasto uguale');}      
    }
    else if(key==-10){
        if(!trova_operatori(document.getElementById("display").value))
           {   document.getElementById("display").value+='-';}
        else{window.alert('Questa calcolatrice non permette espressioni complesse.Inserisci il secondo valore e poi premi il tasto uguale');}   
    }
    else if(key==-100){
        if(!trova_operatori(document.getElementById("display").value))
           {   document.getElementById("display").value+='*';}
        else{window.alert('Questa calcolatrice non permette espressioni complesse.Inserisci il secondo valore e poi premi il tasto uguale');}   
    }
    else if(key==-110){
        if(!trova_operatori(document.getElementById("display").value))
           {   document.getElementById("display").value+='/';}
        else{window.alert('Questa calcolatrice non permette espressioni complesse.Inserisci il secondo valore e poi premi il tasto uguale');}   
    }
    else if(key==-120){document.getElementById("display").value='';}
    else if(key==-130){
        if(!trova_operatori(document.getElementById("display").value)&& virgola<2)
           {   
               virgola++;
               document.getElementById("display").value+='.';
            
         }
        else if(virgola==2){document.getElementById("display").value+='.';}
         else{window.alert('Un numero puà avere solo un separatore (.) per i decimali.');}   
    }
    else if(key==-140){
        let expr =document.getElementById("display").value;
        let op_index=0, val_1='', val_2='';
        op_index=trova_operatori(expr);
        val_1=parseFloat(expr.slice(0,op_index+1));
        console.log(val_1);
        val_2=parseFloat(expr.slice(op_index+1));
        console.log(val_2);
        document.getElementById("display").value=trova_operatori(expr,val_1,val_2);


    }
     
}
function trova_operatori(expr,val_1,val_2 ){
    let op=['*','/','+','-','.'];
    let index=-1;
    
    if(expr.indexOf('*',0)!=-1) 
    {
        index=expr.indexOf('*',0);
        if(val_1 && val_2) 
        {
            return val_1 * val_2;
        }
        return index;
    }    
     else if(expr.indexOf('/',0)!=-1) {
        if((val_1 && val_2)&& val_2!=0) 
        {
            return val_1 / val_2;
        }
        else if (val_2==0) {window.alert("Division by zero!")}
        index=expr.indexOf('/',0);
        return index;
    }
    else if(index=expr.indexOf('+',0)!=-1){
        if(val_1 && val_2) 
        {
            return val_1 + val_2;
        }
        
        index=expr.indexOf('+',0); 
        return index;   
    }
     else if(index=expr.indexOf('-',0)!=-1){ 
        if(val_1 && val_2) 
        {
            return val_1 - val_2;
        }
       
        index=expr.indexOf('-',0); 
       return index;
     }
     

    
}
