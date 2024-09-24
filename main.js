const btns_numbers_wrapper = document.querySelector('.btns-numbers-wrapper')
const small_calculation = document.querySelector('.small-calculation')
const main_calculation = document.querySelector('.main-calculation')

const btns = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*','C','.','=']

let calculation = []
let operator;

function calculate(e){
  const getTextTarget = e.target.textContent;
  main_calculation.value += getTextTarget;

  if(getTextTarget==='+'){
    operator = '+'
    small_calculation.value = main_calculation.value;
    main_calculation.value = ''
    calculation.push(parseFloat(small_calculation.value))
    const totalAdd = calculation.reduce((accum, curVal)=>accum+curVal)
    small_calculation.value = totalAdd + '+'
  }else if(getTextTarget==='='){
    if(operator==='+'){
      const rightSide = parseFloat(main_calculation.value)
      const leftSide = parseFloat(small_calculation.value)
      const total = leftSide + rightSide;
      small_calculation.value = leftSide + '+' + rightSide + '=' + total;
      main_calculation.value = total
    }else if(operator==='-'){
      const rightSide = parseFloat(main_calculation.value)
      const leftSide = parseFloat(small_calculation.value)
      const total = leftSide - rightSide;
      small_calculation.value = leftSide + '-' + rightSide + '=' + total;
      main_calculation.value = total
    }else if(operator==='*'){
      const leftSide = parseFloat(small_calculation.value)
      const rightSide = parseFloat(main_calculation.value)
      const total = leftSide * rightSide;
      small_calculation.value = leftSide + '*' + rightSide + '=' + total;
      main_calculation.value = total
    }else if(operator==='/'){
      const leftSide = parseFloat(small_calculation.value)
      const rightSide = parseFloat(main_calculation.value)
      const total = leftSide / rightSide;
      small_calculation.value = leftSide + '/' + rightSide + '=' + total;
      main_calculation.value = total
    }
  }else if(getTextTarget==='-'){
    operator = '-'
    small_calculation.value = main_calculation.value;
    main_calculation.value = ''
    calculation.push(parseFloat(small_calculation.value))
    const total = calculation.reduce((accum, curVal)=>accum-curVal)
    small_calculation.value = total + '-'
  }else if(getTextTarget==='*'){
    operator = '*'
    small_calculation.value = main_calculation.value;
    main_calculation.value = ''
    calculation.push(parseFloat(small_calculation.value))
    const total = calculation.reduce((accum, curVal)=>accum*curVal)
    small_calculation.value = total + '*'
  }else if(getTextTarget==='/'){
    operator = '/'
    small_calculation.value = main_calculation.value
    main_calculation.value = ''
    calculation.push(parseInt(small_calculation.value))
    const total = calculation.reduce((accum, curVal)=>accum/curVal)
    small_calculation.value = total + '/'
  }else if(getTextTarget==='C'){
    small_calculation.value = ''
    main_calculation.value = ''
    calculation = []
    operator = ''
  }
}

btns.forEach((btn)=>{
  const btn_el = document.createElement('button')
  btn_el.classList.add('numberBtns')
  btn_el.textContent = btn
  btns_numbers_wrapper.append(btn_el)
  btn_el.addEventListener('click', calculate)
})


