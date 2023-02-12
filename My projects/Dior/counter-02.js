//Добавляем прослушку на всём окне
window.addEventListener('click', function (event) {
    //объявляем переменную через let, т.к. присваивать ей значение будем дальше
    let counter;
    //Проверяем клик строго по кнопкам плюс или минус
    if ((event.target.dataset.action) === 'plus' || (event.target.dataset.action) === 'minus') {
        //находит класс родительского элемента в html
        const counterWrapper = event.target.closest('.counter-wrapper');
        //находим счетчик в html
        counter = counterWrapper.querySelector('[data-counter]');
    }
    //проверяем, является ли элемент кнопкой плюс
    //dataset смотрит на значение data, объекта в html.
    if ((event.target.dataset.action) === 'plus') {
        //обращаемся к свойству counter и перезаписываем его
        counter.innerText = ++counter.innerText;
    }

    //проверяем, является ли элемент кнопкой минус
    if ((event.target.dataset.action) === 'minus') {
        //функция parseInt возвращает тип данных как  целое число. Проверяем, чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }  
    }
});