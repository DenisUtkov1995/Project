const CURRENT_YEAR = '2023'
const CURRENT_ANSWER = 'Ответ правильный'
const ERROR_ANSWER = 'Ответ неправильный'

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-btn');
const outputNode = document.querySelector('.js-output');
//При клике на кнопке запускается функция.
buttonNode.addEventListener('click', function() {
    const inputValue = inputNode.value; 
    if(!inputValue) {                       //если в инпуте ничего нет, значит функция возвращается
        return;
    }
    const answer = Number(inputNode.value);// переменная присваивает числовое значение в инпуте
    let output = CURRENT_ANSWER
    if(answer != CURRENT_YEAR){
        output = ERROR_ANSWER
    }
    outputNode.innerHTML = output;         //выводит текст в див в html
})
    
