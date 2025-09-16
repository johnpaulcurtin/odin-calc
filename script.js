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

let numOne= 4;
let numTwo= 3;
let operater = '/';

function operate(o, [a,b]){
  if (o === '+'){
    return add(a,b)
  } else if (o === '-'){
    return subtract (a,b)
  } else if (o === '*'){
    return multiply(a,b)
  } else if (o === '/'){
    displayArray.push(divide(a,b))
    display(); //one possible option for display result
  } 
}





let displayArray = [];


function outputDisplay(x){
  displayArray.push(`${x}`)
  console.log(`${x}`)
  display();
  console.log(displayArray)
};

function display(){
  const div = document.getElementById('output');
  const join = displayArray.join('')
  const dec = Math.floor(`${join}` * 100) / 100;
  div.innerText = `${dec}`;
};

console.log(displayArray)

