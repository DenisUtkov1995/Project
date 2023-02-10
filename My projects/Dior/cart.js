let firstNumber = document.querySelector(".first_number");
let secondNumber = document.querySelector(".second_number");

let cart = {
    'first_product' : {
        'name': 'qwer',
        'count': 0
    },
    'second_product' : {
        'name': 'zxc',
        'count': 0
    }
}

document.onclick = event => {
    if(event.target.classList.contains('btn_plus')) {
        plusFunction (event.target.dataset.id);
    }else if(event.target.classList.contains('btn_minus')){
        minusFunction (event.target.dataset.id);
    }
}

//увеличение количества товаров
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}
//уменьшение количества товаров
const minusFunction = id => {
    if(cart[id]['count'] == 0){
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}
//удаление товара
const deleteFunction = id => {
    delete cart[id]['count'];
    renderCart();
}

const renderCart = () => {
    firstNumber.innerHTML = cart.first_product.count;
    secondNumber.innerHTML = cart.second_product.count;
}
renderCart();

