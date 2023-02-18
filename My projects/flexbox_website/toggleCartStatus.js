function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart_container');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    const totalPriceEl = document.querySelector('.total_price');
    // проверяем ,если колличество элементов в корзине больше 0, то добаляем классу дива (корзина пуста) класс none, который скрывает див
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
        totalPriceEl.classList.remove('none');
    }else {
        // если количетсво элементов 0, то удаляем класс none и див с текстом 'корзина пуста' начинает отображаться
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
        totalPriceEl.classList.add('none');
    }
}