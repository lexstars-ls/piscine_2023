// const person_1 ={
//     name: "Pierre",
//     hasCar : true,
//     hasBike : true,
//     isSick : true
// }

// const person_2 ={
//     name: "Méalanie",
//     hasCar : true,
//     hasBike : false,
//     isSick : false
// }

// const person_3 ={
//     name: "Paul",
//     hasCar : false,
//     hasBike : true,
//     isSick : false
// }

// const person_4 ={
//     name: "Sophie",
//     hasCar : false,
//     hasBike : false,
//     isSick : false
// }
// cnGoToUniversity (person_1)
// cnGoToUniversity (person_2)
// cnGoToUniversity (person_3)
// cnGoToUniversity (person_4)

// cnGoToTopOfMountain(person_1)
// cnGoToTopOfMountain(person_2)
// cnGoToTopOfMountain(person_3)
// cnGoToTopOfMountain(person_4)

// //Opérateur complexe : OR || vérifie si un para ou l'autres est true

// function cnGoToUniversity(person){
//  if(!person.isSick &&( person.hasCar||person.hasBike)){  
//   console.log(`${person.name} peut aller a l'université`)
// } 
// else{
//     console.log(`${person.name}ne peut pas aller a l'université`)  
// }
// }
// //Opérateir de comparaison comple : AND && vérifie si plusieur par sont true
// function cnGoToTopOfMountain(person){
//     if(person.hasCar && person.hasBike && !person.isSick){
//         console.log( `${person.name} peut aller au sommet de la montagne`)
//     }
//     else{
//         console.log( `${person.name}  ne peut pas aller au sommet de la montagne`)
//     }
// }

//-------------------------------------------------------------------------------------------//

//LES BOUCLES
// boucle de 0 a 15
// for(i = 0 ; i <=15 ; i++){
//  console.log('lvl: '+i)
// }

// let arr= [1,2,3,4,5,42,45]

// for(let i = 0; i< arr.length; i++){
//     console.log('tableau element :' + arr[i])
// }

// for(let i = 0; i< arr.length; i++){
//     if(arr[i] >=5){
//         console.log('nombre supérieur ou égal a 5 :' + arr[i])
//     }
// }
// // affiche la somme
// let numbers = [3,5,12,8,1,4]
// let sum = 0
// for(let i=0; i< numbers.length; i++){
//   sum += numbers[i]
// }
// console.log(sum)

// let max =0;


// // affiche le plus grand nbr d'un tableau
// for(let i=0; i< numbers.length; i++){
//     if(numbers[i]> max){
//      max = numbers[i]
//     }
//     }
// console.log(max)
// affficher uniquement les nbr > 4


// for(let i=0; i< numbers.length; i++){
//     if(4<=numbers[i]){
//         console.log(numbers[i])  
//     }
//     }
    
//     let filteredNumbers = []
//     for(let n = 0; n<numbers.length; n++){
//       if(numbers[n]>5){
//         filteredNumbers.push(numbers[n])
//       }
//     }
// console.log(filteredNumbers)

//const arrayResult = filterArray(4)

// afficher uniquement les nombres strictement supérieurs à 4 ==> 5, 12, 8 

// let filteredNumbers = []

// for (let n = 0; n < numbers.length; n++) {
//     if (numbers[n] > 5) {
//         filteredNumbers.push(numbers[n])
//     }
// }

// console.log(filteredNumbers)

// Encapsuler le script précédent dans une fonction et y ajouter le paramètre limit

// const arrayResult = filterArray(7)

// // console.log(arrayResult);

// function filterArray(limit) {
//     let filteredNumbers = []

//     for (let n = 0; n < numbers.length; n++) {
//         if (numbers[n] > limit) {
//             filteredNumbers.push(numbers[n])
//         }
//     }

//     console.log(filteredNumbers)
//     //return filteredNumbers;
// }

// Ecrire une boucle for pour trier afficher dans un nouveau tableau toutes 
//les personnes malades (isSi == true)

const persons = [{
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick: true
}, {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick: false
}]

// let sickPersons = []
// for (let i=0;i<persons.length;i++) {
//  if(persons[i].isSick){
//   sickPersons.push(persons[i].name)
//  }
// }
// console.log(sickPersons)

// difficulté suplémentaire, encapsuler la boucle dans une fonction et passer le tableau en para
const persons_2 = [{
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick: true
}, {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Nathalie",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Laurence",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Adèle",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Stéphane",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Théa",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Léo",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Romane",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Max",
    hasCar: false,
    hasBike: false,
    isSick: false
}]

const result = findSickPeople(persons_2)
console.log(result);

function findSickPeople(arr) {
    let sickPersons = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isSick) {
            sickPersons.push(arr[i])
        }
    }

    return sickPersons;
}