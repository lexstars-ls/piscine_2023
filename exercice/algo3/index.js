import movies from './movies.json' assert {type: 'json'}

console.log(movies[0].title)

// a. Logger le premier element du tableau movies
console.log(movies[0])
// b. Logger l'annee du 4eme element du tableau movies
console.log(movies[3].year)
// c. Logger le titre du dernier element du tableau movies
console.log(movies[movies.length -1].title)
// d. Logger le titre du film qui a la meilleure note

let bestMovie = movies[0]
movies.forEach((element)=>{
    if(element.rate> bestMovie.rate){
      bestMovie = element 
    }
})
console.log(bestMovie.title)
// e. Logger le titre du film le plus ancien
let oldestMovie = movies[0]
movies.forEach((element , indice) => {
    if(element.year <oldestMovie.year)
    oldestMovie= element
});
console.log(oldestMovie.title)


//f


let moviesTitles= []
movies.forEach((element)=>{
    if(element.actors.length>= 3){
      moviesTitles.push(element.title)
    }
})
console.log(moviesTitles)

//  ecrire une foncion qui prend en parametre le ta bleau movies et qui retourne un nouveau tableau de tous les titres de films

let newarr = []
let moviesTitles2 = []
 movies.forEach(element => {

    newarr.push(element.title)

});
console.log(newarr)
//console.log(moviesTitles2)

console.log(getAllTitles(movies))

function getAllTitles(arr){
    let titles = []
    arr.forEach(element => {
        titles.push(element.title)
    });
    return titles
}


// console.log(getAllDirectors(movies))

// function getAllDirectors(arr){
//     // let director = []
//     // arr.forEach((element)=>{
      
//     //   director.push(element.director)
//     // })
//     // return director

//     // let director = arr.map((element)=>{
//     //     return element.director
//     // })
//     // return director 

//     return arr.map((element) => element.director)
// }

// console.log(getAllYears(movies))
//  function getAllYears(arrYears){
//    return arrYears.map((element)=> element.year)
//  }


//  const arrExamples = [3, 5, 9]

//  console.log(getAllNumbers(arrExamples))
 
//  function getAllNumbers(arr){
//      return arr.map((element) => element * 10)
//  } 
 
let users = [
    {
        name: 'Paul',
        role: 'user',
        hasCar: 2
    },
    {
        name: 'Rihab',
        role: 'admin',
        hasCar: "2"
    },
    {
        name: 'Laurian',
        role: 'admin',
        hasCar: 2
    },
    {
        name: 'Céline',
        role: 'client',
        hasCar: "2"
    }
]

let admins = users.filter(element => element.role === 'admin')
console.log(admins)

let numbers = [5, 9, 12, 1, 7, 15]
let multipleOfThree = numbers.filter(el => el % 3 === 0)
console.log(multipleOfThree);
// A l'aide de la méthode .filter, récupérons un nouveau tableau qui ne contient que les multiples de 3

let userWithCar = users.filter(element => element.hasCar === 2)
console.log(userWithCar)

