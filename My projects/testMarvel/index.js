const selectFirst = document.querySelector(".charter-first")
const selectSecond = document.querySelector(".charter-second")
const characterNode = document.querySelector(".characteristics")

const allPersonage = {
    personage: {
        daredevil: {
            name: 'Daredevil',
            strenge: 3,
            agility: 6,
            protaction: 3,
            stamina: 15
        },
        elektra: {
            name: 'Elektra',
            strenge: 2,
            agility: 7,
            protaction: 1,
            stamina: 13
        }
    }
}




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

