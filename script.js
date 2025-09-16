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
  } else if (o === '/' && b === 0){
    const div = document.getElementById('output');
    div.style.fontSize='25px';
    div.style.textAlign= 'center';
    div.innerText = `Thou Shalt Not
     Divide By 
     Zero`;
  } else if (o === '/'){
    displayArray.push(divide(a,b))
    display(); 
  }; 
  numOne= Number(displayArray);
  numTwo= '';
  displayArray= [];
}


let numOne= '';
let numTwo= '';
let operator= '';
let displayArray = [];


function outputDisplay(x){
  displayArray.push(x); 
  display();
};

function display(){
  const div = document.getElementById('output');
  const join = displayArray.join('')
  const dec = Math.floor(`${join}` * 100) / 100;
  div.innerText = dec; 
  if (operator === ''){
    numOne= Number(join);}
    else if (operator !== '' && numTwo !== ''){
      numOne= Number(join);
    }
    else{
      numTwo= Number(join);
    };
  
};

function operatorChoice(x){
  
  if (operator !==''){
    
    operate(operator,[numOne,numTwo]);
    operator = `${x}`;
    console.log(numOne, numTwo);
     
  } else if (operator === ''){
  displayArray.length = 0;
  operator = `${x}`;
  };
};

function clearButton(){
numOne= '';
numTwo= '';
operator= '';
displayArray.length = 0;
const div = document.getElementById('output');
div.textContent = 'JPCalculator';

}
