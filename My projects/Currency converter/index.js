const valueInputNode = document.querySelector(".js-value-input"); //подключаем инпут из html в js
const currencySelectorNode = document.querySelector(".js-currency-selector");
const outputNode = document.querySelector(".js-output");

function getInput() {
    return {
        rub: Number(valueInputNode.value),
        currency: currencySelectorNode.value
    }
}

function render(result) {
    outputNode.innerText = result;
}

//метод, чтобы при вводе, появлялось значение
valueInputNode.addEventListener('input', function() {
    const result = convert(getInput());

    render(result);
});

currencySelectorNode.addEventListener('change', function() {
    const result = convert(getInput());

    render(result);
})

