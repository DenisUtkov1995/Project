const selectFirst = document.querySelector(".charter-first")
const selectSecond = document.querySelector(".charter-second")
const characterNode = document.querySelector(".characteristics")
const testNode = document.querySelector(".test");
let firstFighterNode = document.querySelector(".first-fighter")


const allPersonage = {
        daredevil: {
            name: 'Daredevil',
            strenge: 3,
            agility:6,
            protaction: 3,
            stamina: 15,
        },
        elektra: {
            name: 'Elektra',
            strenge: 5,
            agility: 7,
            protaction: 1,
            stamina: 13
        }
}


const daredevil = [];
daredevil.push(allPersonage.daredevil.strenge);
daredevil.push(allPersonage.daredevil.agility);
daredevil.push(allPersonage.daredevil.protaction);
daredevil.push(allPersonage.daredevil.stamina);

const elektra = [];
elektra.push(allPersonage.elektra.strenge);
elektra.push(allPersonage.elektra.agility);
elektra.push(allPersonage.elektra.protaction);
elektra.push(allPersonage.elektra.stamina);


function getSelectValue(e){
    let selectedValue = e.target.value;
    let html = '';

    switch(selectedValue) {
        case 'daredevil':
            html += `
                <div>
                    ${daredevil}
                </div>    
            `;
            testNode.innerHTML = html;
            break;
        case 'elektra':
            html += `
                <div>
                    ${elektra}
                </div>    
            `;
            testNode.innerHTML = html;
            break;
    } 
}
  
firstFighterNode.addEventListener('change', function(e) {  
    getSelectValue(e)
});

/*

function render() {
    console.log(daredevil)
    let html ='';

    daredevil.forEach(firstFighterNode => {
        if(firstFighterNode.done) {
            return;
        }
        html += `
            <div>
                ${daredevil}
            </div>    
        `;
    })
    testNode.innerHTML = html;
}

render();
*/



let firstHealth = allPersonage.daredevil.stamina;
let secondHealth = allPersonage.elektra.stamina;

const firstDamage = allPersonage.daredevil.strenge;
const secondDamage = allPersonage.elektra.strenge;

const firstMove = allPersonage.daredevil.agility;
const secondMove = allPersonage.elektra.agility;

const firstProt = allPersonage.daredevil.protaction;
const secondProt = allPersonage.elektra.protaction;


function fight (agil1, agil2) {
    let hp1 = firstHealth;
    let hp2 = secondHealth;
    if(agil1  > agil2) {
        hp2 = (secondHealth - firstDamage) + secondProt; 
        return secondHealth = hp2;
    }else if (agil2 > agil1) {
        hp1 = (firstHealth - secondDamage) + firstProt;
        return firstHealth = hp1;
    }
}

//console.log(fight(firstMove, secondMove));








/* 
function choice(text) {
    switch (text) {
        case "Daredevil": 
            for (let personageOne in allPersonage.personage.daredevil){
            document.write(`${personageOne} : ${allPersonage.personage.daredevil[personageOne]} `);}
        case "Elektra":
            for (let personageOne in allPersonage.personage.elektra){
                document.write(`${personageOne} : ${allPersonage.personage.elektra[personageOne]} `);}  
    }

}

choice("Daredevil")
choice("Elektra")
*/