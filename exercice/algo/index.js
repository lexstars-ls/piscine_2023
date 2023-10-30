const resultDiv = document.querySelector('.result')

const numbers = [2, 12, 23, 5, 89, 8, 3, 104]

// 1. Ecrire une fonction qui retourne la valeur minimum contenu dans un tableau passé en paramètre

const result1 = getMinimum(numbers)
resultDiv.textContent = result1

function getMinimum(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }

    return result
}

// 2. Ecrire une fonction qui retourne la valeur maximum contenu dans un tableau passé en paramètre
const resultDiv2 = document.querySelector('.result2')
const numbers4 = [2, 12, 23, 5, 89, 8, 3, 104]


const res2 = getMaximum(numbers4)
resultDiv2.textContent = res2


function getMaximum(arrParam){
 let comparator = arrParam[0]
 for(let n = 1; n< arrParam.length; n++){
   if(arrParam[n] > comparator){
     comparator = arrParam[n]
   }
 }
 return comparator;
}

// 3. Ecrire une fonction qui prend en paramètre un tableau de nombre et qui retourne un nouveau tableau de nombres qui seront tous supérieurs à la moyenne des nombres du tableau en paramètres. 
const resultDiv3 = document.querySelector('.result3')

const nbs = [3, 5, 10,15,20,30] // => [10]
const nbsAbove= getNumbersAboveAverage(nbs)
resultDiv3.textContent = `les valeurs sont : ${nbsAbove}`

function getNumbersAboveAverage(tab) {
    let total = 0
    for (let i = 0; i < tab.length; i++) {
        total += tab[i]
    }
    let avg = total / tab.length

    let filteredNumbers = []
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > avg) {
            filteredNumbers.push(tab[i])
        }
    }
return filteredNumbers;
}

// Exercice des pizzas
const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

const pizzas2 = [
    {
        name: '8 fromages',
        price: 10,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: '12 fromages',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
]

// Ecrire une fonction qui prend en paramètre un tableau de pizzas, et qui retourne un tableau de tous les noms des pizzas

const pizza = document.querySelector('.pizza')

const pizzaNames = getAllName(pizzas)
pizza.textContent = `Nos pizzas: ${pizzaNames}`
console.log(pizzaNames)

function getAllName(arrPizza){
    let names=[]
 for( let i = 0 ; i< arrPizza.length; i++){
   names.push(`${arrPizza[i].name} `)
 }
 return names

}

const moyen = document.querySelector('.moyen')
const pizzaMoyen = moyenPrice(pizzas)
moyen.textContent = pizzaMoyen

function moyenPrice(arrPrice){
    let total = 0
    for (let i = 0; i < arrPrice.length; i++) {
        total += arrPrice[i].price
    }
    console.log(total)
    let avg = (total / arrPrice.length).toFixed(2)
    return avg
}

const pizzaDeLuxe = document.querySelector('.pizzaAverage')
const pizza56 = getNamesAboveAvg(pizzas)
pizzaDeLuxe.textContent = pizza56


function getNamesAboveAvg(arrPizzas) {
    let avg = moyenPrice(arrPizzas);

    let namesAbove = []

    for (let i = 0; i < arrPizzas.length; i++) {
        if (arrPizzas[i].price > avg) {
            namesAbove.push(arrPizzas[i].name)
        }
    }

    return namesAbove;
}

// const pizzas = tableau avec toutes les pizzas

const tabIng = document.querySelector('.ingredients')

tabIng.textContent = getPizzaIng(pizzas ,'Hawaïenne')

function getPizzaIng(arr , pizzaName){
 let tableauPizza = []
 for(let i = 0 ; i<arr.length ; i++){
    if(arr[i].name == pizzaName ){  
        tableauPizza.push(arr[i].ingredients)
    }
 }
 return tableauPizza
}



