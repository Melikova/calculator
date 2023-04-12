const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let first_value = '';
let is_first_value = false;
let second_value = '';
let is_second_value = false;
let sign = '';
let result_value = 0;

clear.addEventListener('click', function(){
    if(this.innerHTML == 'AC'){
        result.innerHTML = 0;
        first_value = '';
        is_first_value = false;
        second_value = '';
        is_second_value = false;
        sign = '';
        result_value = 0;
    }else{
        this.innerHTML = 'AC';
    }
})

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', e =>{
        clear.innerHTML = 'C';
        let atr = e.target.getAttribute('value');
        if(is_first_value === false){
            getFirstValue(atr);
        }
        if(is_second_value === false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el){
    result.innerHTML = '';
    first_value += el;
    result.innerHTML = first_value;
}

function getSecondValue(el){
    if(first_value != '' && sign != ''){
        second_value += el;
        result.innerHTML = second_value;
    }
}

function getSign(){
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', e=>{
            sign = e.target.getAttribute('value');
            is_first_value = true;
        })
    }
}

getSign();

equals.addEventListener('click', ()=>{
    result.innerHTML = "";
    if(sign === "+"){
        result_value = parseInt(first_value) + parseInt(second_value);
    }else if(sign === "-"){
        result_value = parseInt(first_value) - parseInt(second_value);
    }else if(sign === "x"){
        result_value = parseInt(first_value) * parseInt(second_value);
    }else if(sign === "/"){
        result_value = parseInt(first_value) / parseInt(second_value);
    }
    result.innerHTML = result_value;
    first_value = result_value;
    second_value = '';
    checkResultLength();
})

function checkResultLength(){
    result_value = JSON.stringify(result_value);
    if(result_value.length >=8){
        result_value = JSON.parse(result_value);
        result.innerHTML = result_value.toFixed(5);
    }
}

negative.addEventListener('click', ()=>{
    result.innerHTML = '';
    if(first_value !== ''){
        result_value = -first_value;
        first_value = result_value;
    }
    if(first_value !== '' && second_value !== '' && sign!== ''){
        result_value = -result_value;
    }
    result.innerHTML = result_value;
})

percent.addEventListener('click', ()=>{
    result.innerHTML = '';
    if(first_value !== ''){
        result_value = first_value/100;
        first_value = result_value;
    }
    if(first_value !== '' && second_value !== '' && sign!== ''){
        result_value = result_value/100;
    }
    result.innerHTML = result_value;
})

