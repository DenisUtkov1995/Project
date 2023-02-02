const todosNode = document.querySelector('.js-todos'); //Подключаем html свойство в js
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
let todos = []; //Создаём массив дел

//Создаём функциюю добавления дел с переменной todo, которая имеет текст, стасус выполненно или нет и случайный id. После чего добавляем её в массив todos
function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };
    todos.push(todo);
}
//Создаём функцию для удаления дел. Метод forEach перебирает каждый элемент в массиве todos. Когда он находит в массиве элемент с таким же id, то меняет статус на выполнено
function deleteTodos(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}
//создаём функцию для вывода дел.  С помощью forEach проходим по массиву и если todo имеет статус выполненно, то не выводим её. В html добаляем текст и кнопку сделано.
function render() {
    console.log(todos);
    let html = '';

    todos.forEach( todo => {
        if (todo.done) {
            return;
        }
        html += `
            <div>
                ${todo.text}
                <button data-id='${todo.id}'>Сделано</button>
            </div>
        `;
    })
    todosNode.innerHTML = html; // позволяет менять содержимое в html 
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value;
    addTodo(text);
    render();
} );

todosNode.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON') {
        return;
    }
    const id = event.target.dataset.id;

    deleteTodos(id);

    render();
})
render();