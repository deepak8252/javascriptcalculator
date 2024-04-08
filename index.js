let inputbox =document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");
inputbox.setAttribute("readonly",true)
let string="";
buttons.forEach((item)=>{
   
    item.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            inputbox.value=string
        }
        else if(e.target.innerHTML=="AC"){
             string="";
             inputbox.value=string
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
            inputbox.value=string;
        }
        else if (e.target.innerHTML == "%") {
            // Convert the percentage to a fraction and evaluate
            string = eval(string) / 100;
            inputbox.value = string;
        } 
        else{
            console.log(e.target.innerHTML);
            string +=e.target.innerHTML;
            inputbox.value=string
        }
       
    })
})