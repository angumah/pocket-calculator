var expression=" "
var displayExpression=" "
var numNums= " "
var on= false;
var firstNum= false;
let ops = false;
console.log(on);

function display(){
if(on == false)
document.getElementById("display").innerHTML = " ";
}
function onOff(){
  if(on == false){
    on = true;
    numNums= 0
    displayExpression = "0";
    document.getElementById("display").innerHTML = displayExpression;
    console.log(on);
    firstNum= true;
  }else if(on == true){
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
function operations(operation){
  if(operation == '+' && symbol == true){
      expression+='+';
      displayExpression='';
      document.getElementById("display").innerHTML='0';
      symbol=false;
  }
  if(operation == '-' && symbol == true){
      expression+='-';
      displayExpression='';
      document.getElementById("display").innerHTML='0';
      symbol=false;
  }
  if(operation == 'x' && symbol == true){
      expression+='*';
      displayExpression='';
      document.getElementById("display").innerHTML='0';
      symbol=false;
  }
  if(operation == '/' && symbol == true){
      expression+='/';
      displayExpression='';
      document.getElementById("display").innerHTML='0';
      symbol=false;
  }
}
function insert(num){
if(numNums < 9){
if(firstNum == true){
  if(num = '1')
  expression+=(num).toString();
  displayExpression = (num).toString();
  document.getElementById("display").innerHTML = displayExpression.toLocaleString('en');
  firstNum = false;
  numNums++;
} else if(firstNum == false){
  displayExpression+= (num).toString();
  expression+=(num).toString();
  document.getElementById("display").innerHTML = displayExpression.toLocaleString('en');
  numNums++;

}
}
}
function clearCalc(){
  displayExpression="0";
  expression=" ";
  numNums= 0
  firstNum= true;
  document.getElementById("display").innerHTML = displayExpression;
}

function equal(){
  let answer = eval(expression);
  if(answer > 999999999 || answer < -999999999){
    answer = answer.toExponential(9)
  }else{
    expression = answer;
    document.getElementById("display").innerHTML = expression;

  if(answer === "Infinity" || answer === "∞" || answer === "NaN") {
    document.getElementById("display").innerHTML = "ERROR";
  }
}
}
function numberNegation(){
}

function numberPercentage(){
 
  }

  
function decimalInsert(num){

}
function piInsert(num){
 
}
