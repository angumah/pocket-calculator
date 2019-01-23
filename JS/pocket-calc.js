var expression=" "
var displayExpression=" "
var numNums= " "
var on= false;
var firstNum= false;
var ops = false;
var dec = false;
console.log(on);

function onOff(){
  if(on === false){
    on = true;
    numNums= 0
    displayExpression = "0";
    document.getElementById("display").innerHTML = displayExpression;
    console.log(on);
    firstNum= true;
    ops = false;
  }else if(on === true){
    on = false;
    displayExpression = " ";
    numNums=" "
    document.getElementById("numButton0").disabled = true;
    document.getElementById("numButton1").disabled = true;
    document.getElementById("numButton2").disabled = true;
    document.getElementById("numButton3").disabled = true;
    document.getElementById("numButton4").disabled = true;
    document.getElementById("numButton5").disabled = true;
    document.getElementById("numButton6").disabled = true;
    document.getElementById("numButton7").disabled = true;
    document.getElementById("numButton8").disabled = true;
    document.getElementById("numButton9").disabled = true;
    document.getElementById("decimal").disabled = true;
    document.getElementById("piButton").disabled = true;
    document.getElementById("display").innerHTML = displayExpression;
    console.log(on + firstNum);
  }
}
function operator(op){
  if(on === true){
  if(op === '+' && ops === false|| op === '-' && ops === false|| op === '/' && ops === false|| op === '*' && ops === false){
    expression+= (op);
    displayExpression= ' ';
    document.getElementById("display").innerHTML = '0';
    numNums = 0;
    ops = true;
    console.log(expression);
} else if(op === '+' && ops === true|| op === '-' && ops === true|| op === '/' && ops === true|| op === '*' && ops === true){
  expression = expression.substring(0, expression.length - 1);
  expression+=(op);
  displayExpression= ' ';
  document.getElementById("display").innerHTML = '0';
  numNums = 0;
  ops = true;
  console.log(expression);
}
}
}
function insert(num){
if(on === true){
if(numNums < 9){
if(num === '1' || num === '2' ||num === '3' ||num === '4' ||num === '5' ||num === '6' ||num === '7' ||num === '8' ||num === '9' ||num === '0'){
if(firstNum == true){
  expression+=(num);
  displayExpression = (num);
  document.getElementById("display").innerHTML = Number(displayExpression).toLocaleString();
  firstNum = false;
  numNums++;
  ops = false;
  console.log(numNums, expression);
  }else if(firstNum == false){
  displayExpression+= (num);
  expression+=(num);
  document.getElementById("display").innerHTML = Number(displayExpression).toLocaleString();
  numNums++;
  ops = false;
  console.log(numNums, expression);
  }
}
}
}
}
function clearCalc(){
  if(on === true){
  displayExpression="0";
  expression=" ";
  numNums= 0
  firstNum= true;
  document.getElementById("display").innerHTML = displayExpression;
  dec = false;
  ops = false;
  }
}

function equal(){
  if(on === true){
  let answer = eval(expression);
  if(answer === Infinity|| -Infinity|| undefined || NaN) {
    document.getElementById("display").innerHTML = "ERROR";
    console.log(expression);
}
else if(answer > 999999999 || answer < -999999999){
  answer = answer.toExponential(9)
  expression = answer;
  document.getElementById("display").innerHTML = answer.toLocaleString();
  }else{
    expression = answer;
    document.getElementById("display").innerHTML = answer.toLocaleString();
    
}
}
}
function numberNegation(){
  if(on === true){
  displayExpression = -displayExpression;
  document.getElementById("display").innerHTML = displayExpression;
  expression = expression.substring(0, expression.length - 2);
  console.log(expression);
  expression+= (displayExpression);
  console.log(expression);
}
}

function numberPercentage(){
 if(on === true){
 let percentage = (expression/100);
 displayExpression = percentage;
 document.getElementById("display").innerHTML = displayExpression;
  }
}

  
function decimalInsert(num){
if(on === true){
if(dec === false){
  expression+='.';
  displayExpression+='.';
  dec = true;
  document.getElementById("display").innerHTML = displayExpression;
} 
}
}
function piInsert(num){
if(on === true){
if(firstNum === true){
  expression+= (num);
  displayExpression = (num);
  firstNum = false;
  document.getElementById("display").innerHTML = displayExpression;
} else if(firstNum === false){
expression = (expression * (num));
displayExpression = (displayExpression* (num));
document.getElementById("display").innerHTML = displayExpression;
}
}
}
function toPower2(){
if(on === true){
expression = (expression * expression);
if(expression > 999999999 || expression < -999999999){
  expression = expression.toExponential(9)
displayExpression = expression;
document.getElementById("display").innerHTML = displayExpression.toLocaleString();
} else{
displayExpression = expression;
document.getElementById("display").innerHTML = displayExpression.toLocaleString();
}
}
}
function toPower3(){
if(on === true){
  expression = (expression * expression * expression);
  if(expression > 999999999 || expression < -999999999){
    expression = expression.toExponential(9)
  displayExpression = expression;
  document.getElementById("display").innerHTML = displayExpression.toLocaleString();
  } else{
  displayExpression = expression;
  document.getElementById("display").innerHTML = displayExpression.toLocaleString();
}
}
}
function rootNum(){
if(on === true){
expression = Math.sqrt(expression);
if(expression > 999999999 || expression < -999999999){
expression = expression.toExponential(9)
displayExpression = expression;
document.getElementById("display").innerHTML = displayExpression.toLocaleString();
} else{
displayExpression = expression;
document.getElementById("display").innerHTML = displayExpression.toLocaleString();
}
}
}
