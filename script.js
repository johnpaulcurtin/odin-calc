function add(a,b) {
  return a + b;
}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}



function operate(o, [a, b]){
  console.log(a);
  console.log(b);
  console.log(o);
  displayArray = [];
  if (o === '+'){
    displayArray.push(add(a,b));
    display();
  } else if (o === '-'){
    displayArray.push(subtract(a,b));
    display();
  } else if (o === '*'){
    displayArray.push(multiply(a,b));
    display();
  } else if (o === '/'){
    displayArray.push(divide(a,b))
    display(); //one possible option for display result
  } 
}


let numOne= "";
let numTwo= 2;
let operator= '';
let displayArray = [];


function outputDisplay(x){
  displayArray.push(x); //changed from `${x}`
  console.log(x);
  display();
};

function display(){
  const div = document.getElementById('output');
  const join = displayArray.join('')
  const dec = Math.floor(`${join}` * 100) / 100;
  div.innerText = dec; //changed from `${dec} if issues later revert
};

function operatorChoice(x){
  numOne = (Number(displayArray.join('')));
  operator = `${x}`;
  displayArray.length = 0;
  display();
};



