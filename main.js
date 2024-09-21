// const btnsWrapper = document.querySelector('.btns-numbers-wrapper')
// const mainCalculationInput = document.querySelector('.main-calculation')

// const btns = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*','=', '.','C']

// let leftCalc;
// let rightCalc;
// let operator;
// let calculation;
// let decimal;

// function createBtns(){
//   btns.forEach((btn)=>{
//     const btn_el = document.createElement('button')
//     btn_el.classList.add('numberBtns')
//     btn_el.textContent = btn
//     btnsWrapper.append(btn_el)
//   })
//   triggerCalculation()
// }

// function triggerCalculation(){
//   btnsWrapper.addEventListener('click', (e)=>{
//     const getTextTarget = e.target.textContent
//     mainCalculationInput.value += getTextTarget;
//     const getMainInputValue = mainCalculationInput.value;
//     waitForFullCalculation(getTextTarget, getMainInputValue)
//   })
// }

// function waitForFullCalculation(getTextTarget, getMainInputValue){
//   const smallCalculationInput = document.querySelector('.small-calculation')
//   if(getTextTarget==='+'){
//     leftCalc = parseInt(getMainInputValue.slice(0, -1))
//     operator = '+'
//     smallCalculationInput.value = getMainInputValue
//     mainCalculationInput.value = ''  
//   }else if(getTextTarget==='-'){
//     leftCalc = parseInt(getMainInputValue.slice(0, -1))
//     operator = '-'
//     smallCalculationInput.value = getMainInputValue
//     mainCalculationInput.value = ''
//   }else if(getTextTarget==='*'){
//     leftCalc = parseInt(getMainInputValue.slice(0, -1))
//     operator = '*'
//     smallCalculationInput.value = getMainInputValue
//     mainCalculationInput.value = ''
//   }else if(getTextTarget==='/'){
//     leftCalc = parseInt(getMainInputValue.slice(0, -1))
//     operator = '/'
//     smallCalculationInput.value = getMainInputValue
//     mainCalculationInput.value = ''
//   }else if(getTextTarget==='C'){
//    operator = ''
//    leftCalc = ''
//    rightCalc = ''
//    smallCalculationInput.value = ''
//    mainCalculationInput.value = ''
//   }
//   else if(getTextTarget==='='){
//     rightCalc = parseInt(getMainInputValue.slice(0, -1))
//     smallCalculationInput.value += rightCalc;
//     if(operator==='+'){
//       calculation = leftCalc + rightCalc;
//       smallCalculationInput.value = `${leftCalc} ${operator} ${rightCalc} = ${calculation}`
//       mainCalculationInput.value = calculation
//     }else if(operator==='-'){
//       calculation = leftCalc - rightCalc;
//       smallCalculationInput.value = `${leftCalc} ${operator} ${rightCalc} = ${calculation}`
//       mainCalculationInput.value = calculation
//     }else if(operator==='*'){
//       calculation = leftCalc * rightCalc;
//       smallCalculationInput.value = `${leftCalc} ${operator} ${rightCalc} = ${calculation}`
//       mainCalculationInput.value = calculation
//     }else if(operator==='/'){
//       calculation = leftCalc / rightCalc;
//       smallCalculationInput.value = `${leftCalc} ${operator} ${rightCalc} = ${calculation}`
//       mainCalculationInput.value = calculation
//     }
//   }
// }

// createBtns()


