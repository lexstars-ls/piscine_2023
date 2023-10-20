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

// let administrators = ['paul','pierre','parfixe','cornichon']

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



// addUserIfAdmin(newAdmin1)
// addUserIfAdmin(newAdmin2)
// addUserIfAdmin(newAdmin3)

// function addUserIfAdmin(user){
//  if(user.admin){
//     administrators.push(user.name)
//  }
// }

// console.log(administrators)


/// 

// let arr2 = []

// let newAdmin1 = {
//         name: 'marianne',
//         admin : true,
//         }
// let newAdmin2 ={
//     name: 'jojo',
//     admin : true,
// }
// let newAdmin3 ={
//     name: 'gogo',
//     admin : false,
// }

// addPresentation(newAdmin1)
// addPresentation(newAdmin2)
// addPresentation(newAdmin3)

// function addPresentation(username){
// if(username.admin){
//   arr2.push(username.name)
// }

// }
// console.log(` bonjour admin ${arr2}`)


// let newAdmin1 = {
//     name: 'marianne',
//     admin : true,
    
//     }
// let newAdmin2 ={
// name: 'caroline',
// admin : true,

// }

// let newAdmin3 ={
// name: 'gégé',
// admin : false,

// }

// displaynName(newAdmin1)
// displaynName(newAdmin2)
// displaynName(newAdmin3)



// function displaynName (user){
//     let stResult = 'Bonjour '
//     if(user.admin ){
//        // if(){} pour déterminer le genre rajt une 
//          stResult += 'administratrice ' 
//     }
    
//      stResult += user.name + ' !'
//      console.log(stResult)
//}

// buildSentence (newAdmin1 , newAdmin2)
// function buildSentence(user1 , user2) {
//     console.log(`bonjour ${user1.name} et ${user2.name}`)
// }

// const town1 = {
//     name: 'Bordeaux',
//     population: 300000,
//     superficy: 50
// }

// const town2 = {
//     name: 'Lyon',
//     population: 500000,
//     superficy: 48
// }

// const town3 = {
//     name: 'Paris',
//     population: 2000000,
//     superficy: 105
// }

// ecrire une fonction qui prend 2 para, et qui affiche dans la console le nom de la ville la plus grande des 2


// cityPopu(town1 ,town2)

// function  cityPopu(city1 , city2){
//     if(city1.population>city2.population){
//         console.log(city1.name)
//     }
//     else{
//         console.log(city2.name)
//     }
// }

// const nb1 =5 
// const nb2 =15

// const sum = addTwoParameters(nb1, nb2)
// console.log(`${nb1} + ${nb2} = ${sum}`)

// function addTwoParameters(arg1, arg2){
//  const result = arg1 + arg2
//  return result
//  }

 
 //écrire la fonction qui retourne le produit des 2 para



 const resultProduct = productOfParameters(4,6)
 console.log(resultProduct)
 function productOfParameters(arg1 , arg2) {
    return arg2*arg1
 }