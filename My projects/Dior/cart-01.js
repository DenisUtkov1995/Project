const cartWrapper = document.querySelector('.cart_container');

window.addEventListener('click', function (event) {
    //проверяем, что клик был на кнопке купить
    //hasAttribute проверяет на наличие аттрибута в html(можно проверять картинки по src или alt)
    //т.к. hasAttribute работатет с аттрибутами, то в скобки передаём data-cart без []
    if (event.target.hasAttribute('data-cart')) {
        //находим карточку товара, по которой был совершён клик
        const card = event.target.closest('.card');
        //собираем данные с этого товара и записываем их в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
        };
        //собранные данные подставим в шаблон для товара в корзине
        const cartItemHTML = `<div class="cart-item" data-id="01">
        <img  class= "product_img" src="images/miss_dior_cart.png" alt="miss_dior">
        <div class="cart-item_title">${productInfo.title}</div>
        <div class="items counter-wrapper">
            <button class="items_control" data-action="minus">-</button>
            <p class="items_current" data-counter>1</p>
            <button class="items_control" data-action="plus">+</button> 
        </div>
    </div>`;
        //отобразим товар в корзине
        //метод insertAdjacentHTML позволяет вставлять кусок html разметки внутрь элемента
        //он принимает два аргумента 1- куда именно хотим добавить элемент, 2- сам html код
        //beforeend - добавляет в конец
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
});
