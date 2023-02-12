const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', function(){
    //функция parseInt возвращает тип данных как  целое число. Проверяем, чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }  
});

btnPlus.addEventListener('click', function(){
    //обращаемся к свойству counter и перезаписываем его
    counter.innerText = ++counter.innerText;
});