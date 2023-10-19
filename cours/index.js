///Présentaion des opérateurs arthmétiques

// var myNumber1 = 5+5
// var myNumber2 = 5
// var myResult1 = myNumber1 * myNumber2  

// console.log(myResult1)  (* / - % +)



// Déclaration moderne (en ES6, depuis 2015) de variable


//const

// const myNb1 = 9

// const myNb2 = 3

// const res = myNb1 * myNb2

// console.log(res)


// let permissif
// const myNb1 = 9
// let myNb2 = 2
// myNb2 +=1
// const res2 = myNb1 * myNb2
// console.log(res2)

// LES CHAINES DE CARACTERES (string) '' "" ``

// let myName = `je m'apelle "Paul"`
// const Lastname  = "Doazan"
// const age = 35
// myName += ' ' + Lastname
// myName +=', ' + age + 'ans.'
// console.log(myName)

// les BOOLEENS TRUE OR FALSE

// const myBoolean1 = true
// const myBoolean2 = false

// let myAge = 30
// const legalAge = 18
// const isMinor = myAge <= legalAge

// if(isMinor){
//    console.log('utilisateur mineur')

// }

// if(!isMinor){
//     console.log('utilisateur adulte')
// }

// const is30yearsOld = myAge == 30



// if (is30yearsOld) {
//     console.log('Paul a 30 ans')
// } else {
//     console.log(`Paul n'a pas 30 ans`)
// }


// consigne écrire la condition pour afficher le ^plus grand nombre

// const bigNb1 = 400
// const bigNb2 = 400


// if(bigNb1 > bigNb2){
//     console.log(bigNb2)
// }
// else if(bigNb1<bigNb2){
//     console.log(bigNb2)
// }
// else{
//     console.log(bigNb1, bigNb2 , 'les résultats sont égaux')
// }

// const firstName1 = "prénom1"
// const firstName2 =" prénom2"
// const firstName3 = "prénom3"


// VARIABLES complexe les tableaux ARRAY

let arr1 = [3,5,12,204.5,'hello',true, 'world']
let arrResult1 = `${arr1[4]} ${arr1[6]}`
const firstElement = arr1[0]

let arrResult2

if(arr1 [5]){
   arrResult2 = `${arr1[4]} ${arr1[6]}`
}else{
   arrResult2 = arr1[3] + arr1 [1]
}

console.log(firstElement)

console.log(arrResult1)

console.log(arrResult2)

arr1[4] = "bonjour"
console.log(arr1)

arr1[3] -= 100
console.log(arr1)

// variable complexe 

let obj1 ={
 firstprop : 12,
 secondprop : 14,
 prop3 : 11,
 prop4: "hello",
 prop5: false,

}

console.log(obj1.prop3)

let identity = {
    firstName:'paul',
    lastName:'doazan',
    age:30,
    town: "bordeaux",
}

let resultfinal = `je m'apelle ${identity.firstName} ${identity.lastName} j'ai ${identity.age} ans et j'habite a ${identity.town}`
console.log(resultfinal)

let identity2 ={
    firstName:'roro',
    lastName:'toton',
    age:32,
    town: "toulon",
}

let arridentities = [ identity, identity2]
let resultfinal2 = `je m'appelle ${arridentities[0].firstName} mon meilleur ami s'appelle ${arridentities[1].firstName} il a ${arridentities[1].age} ans et moi ${arridentities[0].age}.`
console.log(resultfinal2)
