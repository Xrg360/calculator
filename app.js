let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
// let screenvalue='';
for(item of buttons){
    item.addEventListener('click', r =>{
        buttontext = r.target.innerText;
        console.log(buttontext)
        if(buttontext == 'C'){
            screen.value = '';
            // screenvalue='';
        }
        else if(buttontext == 'x'){
            buttontext = '*'
            screen.value+=buttontext
            screenvalue+=buttontext
        }
     
        else if(buttontext == '='){
            screen.value=eval(screen.value);
        }
        else{
            // screenvalue+=buttontext;
            screen.value+=buttontext;
        }

    })
}
