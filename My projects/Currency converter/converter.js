//задаём ставки валют
const RATES = {
    usd: 0.014 ,
    eur: 0.013
};

//создаём функцию, которая проверяет правильно ли выбрана валюта и умножает рубль на ставку
function convert({ rub, currency }) {
    if (!RATES[currency]) {
        return null;
    }

    return rub * RATES[currency];
}