function calcCartPrice() {
    const cartItems = document.querySelectorAll('.item_cart');
    const totalPriceEl = document.querySelector('.total_price');
    let totalPrice = 0;
    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price-currency-cart');
        // innerText возвращает строку, а parseInt превращает её в число
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    // отображаем цену на странице
    totalPriceEl.innerText = totalPrice;
}
