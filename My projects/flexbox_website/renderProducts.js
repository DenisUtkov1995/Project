const productsContainer = document.querySelector('.product_container');

getProducts ();

async function getProducts () {
   const response = await fetch('./products.json');
   console.log(response);
   const productsArray =  await response.json();
   console.log(productsArray);
   renderProducts (productsArray);
}


function renderProducts (productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="card" data-id="${item.id}">
        <img class="images" id="product_img" src="images/${item.imgSrc}" alt="images/miss_dior_cart.png">
        <div class="info-product">
            <p class="item-title" id="item-title-miss_dior">${item.title}</p>
            <p class="subtext">Женские ароматы</p>
            <p class="price-currency">${item.price} Р</p>
            <p class="items_current none" data-counter>${item.itemsInBox}</p>
            <button class="btn-product" data-cart type="button">Купить</button>
        </div> 
    </div>
        `;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}