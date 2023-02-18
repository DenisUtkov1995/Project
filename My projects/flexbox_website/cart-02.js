const cartWrapper = document.querySelector('.cart_container');

window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('#product_img').getAttribute('alt'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price-currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };
        
        //проверяем, есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        //если товар есть в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            //если товара нет в корзине
        const cartItemHTML = `<div class="item_cart" data-id="${productInfo.id}">
        <img class="img-cart" src="${productInfo.imgSrc}" alt="">
        <p class="item-title-cart">${productInfo.title}</p>
        <p class="price-currency-cart">${productInfo.price}</p>
        <div class="items counter-wrapper">
            <button class="items_control" data-action="minus">-</button>
            <p class="items_current" data-counter>${productInfo.counter}</p>
            <button class="items_control" data-action="plus">+</button>
        </div>
    </div>`
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    // отображение статуса корзины пустая / полная
    toggleCartStatus();
    // пересчет общей стоимости корзины
    calcCartPrice();
    }
});