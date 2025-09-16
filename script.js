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

function operate(o, [a,b]){
  if (o === '+'){
    return add(a,b)
  } else if (o === '-'){
    return subtract (a,b)
  } else if (o === '*'){
    return multiply(a,b)
  } else if (o === '/'){
    return divide(a,b)
  } 
}


let numOne= '';
const numTwo= '';
const operand= '';


let displayArray = [];


function outputDisplay(x){
  displayArray.push(`${x}`)
  console.log(`${x}`)
  display();
};

function display(){
  const div = document.getElementById('output');
  const join = displayArray.join('')
  div.innerText = `${join}`;
}



