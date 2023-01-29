const selectFirst = document.querySelector(".charter-first")
const selectSecond = document.querySelector(".charter-second")
const characterNode = document.querySelector(".characteristics")

const allPersonage = {
    personage: {
        daredevil: {
            name: 'Daredevil',
            strenge: 3,
            agility:6,
            protaction: 3,
            stamina: 15
        },
        elektra: {
            name: 'Elektra',
            strenge: 5,
            agility: 7,
            protaction: 1,
            stamina: 13
        }
    }
}

const daredevil = [];
daredevil.push(allPersonage.personage.daredevil.strenge);
daredevil.push(allPersonage.personage.daredevil.agility);
daredevil.push(allPersonage.personage.daredevil.protaction);
daredevil.push(allPersonage.personage.daredevil.stamina);
console.log(daredevil);

const elektra = [];
elektra.push(allPersonage.personage.elektra.strenge);
elektra.push(allPersonage.personage.elektra.agility);
elektra.push(allPersonage.personage.elektra.protaction);
elektra.push(allPersonage.personage.elektra.stamina);
console.log(elektra);

let firstHealth = allPersonage.personage.daredevil.stamina;
let secondHealth = allPersonage.personage.elektra.stamina;

const firstDamage = allPersonage.personage.daredevil.strenge;
const secondDamage = allPersonage.personage.elektra.strenge;

const firstMove = allPersonage.personage.daredevil.agility;
const secondMove = allPersonage.personage.elektra.agility;

const firstProt = allPersonage.personage.daredevil.protaction;
const secondProt = allPersonage.personage.elektra.protaction;


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

console.log(fight(firstMove, secondMove));








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