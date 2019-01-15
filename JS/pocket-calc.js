var expression= " "
//operations

function one(){
    expression+="1"
    document.getElementById("display").innerHTML = expression;
}
function two(){
    expression+="2"
    document.getElementById("display").innerHTML = expression;
}
function three(){
    expression+="3"
    document.getElementById("display").innerHTML = expression;
}
function four(){
    expression+="4"
    document.getElementById("display").innerHTML = expression;
}
function five(){
    expression+="5"
    document.getElementById("display").innerHTML = expression;
}
function six(){
    expression+="6"
    document.getElementById("display").innerHTML = expression;
}
function seven(){
    expression+="7"
    document.getElementById("display").innerHTML = expression;
}
function eight(){
    expression+="8"
    document.getElementById("display").innerHTML = expression;
}
function nine(){
    expression+="9"
    document.getElementById("display").innerHTML = expression;
}
function multiply(){
   expression+="*"
   document.getElementById("display").innerHTML = expression;
}
function add(){
    expression+="+"
    document.getElementById("display").innerHTML = expression;
}
function subtract(){
    expression+="-"
    document.getElementById("display").innerHTML = expression;
}
function divide(){
    expression+="/"
    document.getElementById("display").innerHTML = expression;
}
function equal(){
    let answer = eval (expression);
    expression = answer;
    document.getElementById("display").innerHTML = answer;
}
function integer(){
    expression = ("-" + expression);
    document.getElementById("display").innerHTML = expression;
}
function erase(){
    document.getElementById("display").innerHTML.clear;
}