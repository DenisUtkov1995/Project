const buttonNode = document.querySelector(".btn-js");
const buttonTwoNode = document.querySelector(".btn-js-two");
const buttonThreeNode = document.querySelector(".btn-js-three");
const boxNode = document.querySelector(".box");


buttonNode.addEventListener("dblclick", changeColor); // добавляет события на кнопку: при клике вызывается функция
buttonTwoNode.addEventListener("click", changeColor);

function changeColor() {
    let clicked = this;

    boxNode.style.backgroundColor = clicked.dataset.color;
}


buttonThreeNode.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName)
    if (keyName == 'q'){
        
        boxNode.style.backgroundColor = "#AA0000";
    };
}
)






/*

buttonThreeNode.onkeyup = function(event) {
    if(event.key == 'q') {
        let clicked = this;
        boxNode.style.backgroundColor = clicked.dataset.color;
        
    }
}

*/

/*
buttonThreeNode.addEventListener('keyCode', changeColorMore);


function changeColorMore (event) {
    let clicked = this;
    if(event.key == 'q') {
        boxNode.style.backgroundColor = clicked.dataset.color;
    }
}

*/





/*
buttonNode.addEventListener("dblclick", changeColor); // добавляет события на кнопку: при клике вызывается функция
buttonNode.addEventListener("click", changeColorMore);

function changeColor() {
    let clicked = this;

    boxNode.style.backgroundColor = clicked.dataset.color;

}



function changeColorMore() {
    let clicked = this;

    boxNode.style.backgroundColor = clicked.dataset.color.red;
}
*/