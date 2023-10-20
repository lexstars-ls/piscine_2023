let arrei1 =[1,2,3,4,5,6,7]
// console.log(`${arrei1[0]} hololo`)


// let readFirst = true 

// let index

// if(!readFirst){
//     index = 0
// }
// else{
//   index = 1
// }

// console.log(arrei1[index])

// let objExample = {
//     prop1: 'momo',
//     prop2: 'popo',
//     prop3: 'toto',
// }

// console.log(objExample.prop1)
// console.log(arrei1.length / 2, arrei1[arrei1.length/2])

// let middleIndex    // ou // let middleIndex = Math.round(arr1.length/2)

//calculer et obtenir l'élément au milieu du tableau

// if(arrei1.length % 2 == 0){
//     middleIndex = arrei1.length/2
// }
// else{
//    middleIndex = (arrei1.length -1)/2
// }
// let elementInTheMiddle = arrei1[middleIndex]
// // console.log(elementInTheMiddle)

// // méthode pour ajouter un ou des élémets

// // arrei1.push(51)

// // methode pour retirer 1 élément a la fin d'un tableau
// arrei1.pop()



// console.log(arrei1)

let administrators = ['paul','pierre','parfixe','cornichon']

// let newAdmin1 = 'mariane'
// let newAdmin2 = 'coco'
// let newAdmin3 = 'tintin'

// if(administrators.length >=4){
//     administrators.pop(1)
    
// }
// administrators.push(newAdmin1)





// console.log(`liste des admins: ${administrators}`)

///////////////////////////////////////////////////////////////////////


// let newAdmin1 = {
//     name: 'marianne',
//     admin : true,
// }
// let newAdmin2 = {
//     name: 'toto',
//     admin : true,
// }
// let newAdmin3 = {
//     name: 'soso',
//     admin : false,
// }

// if(newAdmin1.admin == true){
//     administrators.push(newAdmin1.name)
// }


// if(newAdmin2.admin == true){
//     administrators.push(newAdmin2.name)
// }


// if(newAdmin3.admin == true){
//     administrators.push(newAdmin3.name)
// }

let newAdmin1 = {
        name: 'marianne',
         admin : true,
        }
let newAdmin2 ={
    name: 'jojp',
    admin : true
}
let newAdmin3 ={
    name: 'gogo',
    admin : false
}

addUserIfAdmin(newAdmin1)
addUserIfAdmin(newAdmin2)
addUserIfAdmin(newAdmin3)

function addUserIfAdmin(user){
 if(user.admin){
    administrators.push(user.name)
 }
}

console.log(administrators)