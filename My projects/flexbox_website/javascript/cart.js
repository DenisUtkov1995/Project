const cartWrapper = document.querySelector('.cart_container');

window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('#product_img').getAttribute('alt'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('.price-currency').innerText
        };
        
        const cartItemHTML = `<div class="item_cart">
        <img class="img-cart" src="${productInfo.imgSrc}" alt="">
        <p class="item-title-cart">${productInfo.title}</p>
        <p class="price-currency-cart">${productInfo.price}</p>
        <div class="items counter-wrapper">
            <button class="items_control" data-action="minus">-</button>
            <p class="items_current" data-counter>1</p>
            <button class="items_control" data-action="plus">+</button>
        </div>
    </div>`
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
});