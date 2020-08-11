let clear = document.getElementById("clear");
let point = document.getElementById("point");
let displayValElement = document.getElementById('calc-display-val');
let calcNumBtn = document.getElementsByClassName('calc-btn-num');
let calcOperator = document.getElementsByClassName('calc-btn-operator');
let displayVal = '';
let pendingVal;
let currentVal;
let currentOperend;
let evalStringArray = [];

 let updateDisplayVal = (clickobj) => {
   let btnText = clickobj.target.innerText;
   if(displayVal == '0')
      displayVal='';
    displayVal+= btnText;
    const floatNumber = parseFloat(displayVal);
    displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
 }
function add (){
  pendingVal = displayVal;
   displayVal='';
  evalStringArray.push(pendingVal);
  let evaluation = eval(evalStringArray.join(''));
  const floatNumber = parseFloat(evaluation);
  displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
  evalStringArray.push('+');
  currentOperend = '+';
}
function subtract (){
      pendingVal = displayVal;
      displayVal = '';
      evalStringArray.push(pendingVal);
      let evaluation = eval(evalStringArray.join(''));
      const floatNumber = parseFloat(evaluation);
      displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
      evalStringArray.push('-');
      currentOperend = '-';
}
function multiplication (){
      pendingVal = displayVal;
      displayVal = '';
      evalStringArray.push(pendingVal);
      let evaluation = eval(evalStringArray.join(''));
      const floatNumber = parseFloat(evaluation);
      displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
      evalStringArray.push('*');
      currentOperend = '*';
}
function divide(){
      pendingVal = displayVal;
      displayVal = '';
      evalStringArray.push(pendingVal);
      let evaluation = eval(evalStringArray.join(''));
      const floatNumber = parseFloat(evaluation);
      displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
      evalStringArray.push('/');
      currentOperend = '/';
}
function equals(){
      evalStringArray.push(displayVal);
      currentVal = displayVal;
      let evaluation = eval(evalStringArray.join(''));
      displayVal = evaluation;
      const floatNumber = parseFloat(displayVal);
      displayValElement.innerText =floatNumber.toLocaleString('en-US', { maximumFractionDigits: 15});
      evalStringArray = [];
      evalStringArray.push(evaluation);
      evalStringArray.push(currentOperend);
      displayVal= currentVal;
}
let operate = (clickobj) => {
  let operat = clickobj.target.innerText;
  if(operat =='+'){
     add();
  }else if(operat =='-'){
    subtract ();
}else if(operat =='×'){
  multiplication ();
}else if(operat =='÷'){
  divide();
}else if(operat == '='){
  equals();
  }
}
for (let i=0;i<calcNumBtn.length;i++){
  calcNumBtn[i].addEventListener("click", updateDisplayVal,false);
}
for (let i=0;i<calcOperator.length;i++){
  calcOperator[i].addEventListener("click", operate,false);
}
clear.onclick = () => {
  displayVal ='0';
  pendingVal='';
  currentOperend='';
  currentVal='';
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}
point.onclick = () => {
  if(!displayVal.includes('.'))
  displayVal+='.';
  displayValElement.innerHTML = displayVal;
}
