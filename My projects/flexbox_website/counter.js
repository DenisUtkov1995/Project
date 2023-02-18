window.addEventListener('click', function (event) {
    let counter;
    if ((event.target.dataset.action) === 'plus' || (event.target.dataset.action) === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if ((event.target.dataset.action) === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    //проверяем, является ли элемент по которому был совершен клик - минус
    if ((event.target.dataset.action) === 'minus') {
        //проверяем, чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            //изменяем текст в счетчике уменяшая на 1
            counter.innerText = --counter.innerText;
        }else if (event.target.closest('.cart_container') && parseInt(counter.innerText) === 1) {
            //remove полностью удаляет элемент с страницы
            event.target.closest('.item_cart').remove();
            // пересчет общей стоимости товара
            calcCartPrice();
            // отображение статуса корзины пустая / полная
            toggleCartStatus();
        }
    }
    //проверяем на клик + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart_container')) {
        // пересчет общей стоимости товара
        calcCartPrice();
    }
});