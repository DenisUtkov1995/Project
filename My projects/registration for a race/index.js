const nameInputNode = document.querySelector(".js-input-name");
const ageInputNode = document.querySelector(".js-input-age");
const dateInputNode = document.querySelector(".js-input-date");
const btnNode = document.querySelector(".btn-js");
const outputNode = document.querySelector('.output-js');



btnNode.addEventListener ('click', function() {
    const ageOutput = Number(ageInputNode.value);
    const nameOutput = String(nameInputNode.value);
    const dateOutput = Number(dateInputNode.value);
    let done = true;
    if (dateOutput > 15) {
    done = false;
    }
    let html ='';
    if(done && ageOutput < 18 ){
        html += `
            <div>
                ${nameOutput} ваш номер ${firstNumbers()}
            </div>    
        `;
    } else if (!done && ageOutput < 18){
        html += `
            <div>
                ${nameOutput} ваш номер ${lastNumbers()}
            </div>    
        `;
    } else if (ageOutput >= 18){
        html += `
            <div>
                ${nameOutput} ваш номер ${lastNumbers()}
            </div>    
        `;
    }  else {
        html += `
            <div>
                ${nameOutput} Подойдитн к стойке регитсрации
            </div>    
        `;
    }
    outputNode.innerHTML = html;
}); 

