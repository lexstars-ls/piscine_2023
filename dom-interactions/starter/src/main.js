// EXO 1
const circleColor = document.querySelector('.div-to-color-1')
const btnexo1 = document.querySelectorAll('.btn-1')

btnexo1.forEach((element) => {
    element.addEventListener('click', (e) => {
        circleColor.style.background = e.target.textContent
    })
})
                                                                                                                                                                        

// EXO 2
const input3 = document.querySelector('.input-3')
const textToDisplay3 = document.querySelector('.text-to-display-3')

input3.addEventListener('input', onInput3)

function onInput3(event){
    event.preventDefault();
    textToDisplay3.textContent = input3.value
}

// exo 3
const textToDisplay4 = document.querySelector('.text-to-display-4')
const inputs4 = document.querySelectorAll('.input-4')

inputs4.forEach((element) => {
    element.addEventListener('input', () => {
        // Affichage des dates dans le textContent
        textToDisplay4.textContent = `${inputs4[0].value} - ${inputs4[1].value}`

        let date1 = new Date(inputs4[0].value);
        let date2 = new Date(inputs4[1].value);

        textToDisplay4.textContent = `${(date2 - date1) / (1000 * 60 * 60 * 24)} jours`
    })
})


//EXO 4


const form2 = document.querySelector('.form-2')
const input2 = document.querySelector('.input-2')
const textToDisplay2 = document.querySelector('.text-to-display-2')

form2.addEventListener('submit', onForm2Submit)

function onForm2Submit(event) {
    event.preventDefault();
    textToDisplay2.textContent = input2.value
}

//EXO 5

const inputs5 = document.querySelectorAll('.input-5')
const textToDisplay5 = document.querySelector('.text-to-display-5')

for (let i = 0; i < inputs5.length; i++) {
    inputs5[i].addEventListener('input', onInput5)
}

// A EVITER, la boucle for permet d'éviter la répétition du .addEventListener
// inputs5[0].addEventListener('input', onInput5)
// inputs5[1].addEventListener('input', onInput5)
// inputs5[2].addEventListener('input', onInput5)
// inputs5[3].addEventListener('input', onInput5)
// inputs5[4].addEventListener('input', onInput5)
// inputs5[5].addEventListener('input', onInput5)

function onInput5(event) {
    event.target
    textToDisplay5.textContent = event.target.value
}

// exo 6
const textToDisplay6 = document.querySelector('.text-to-display-6')
const select6 = document.querySelector('.select-6')

select6.addEventListener('change', (e) => {
    textToDisplay6.textContent = e.target.value
})

// exo 7

const divToColor7 = document.querySelector('.div-to-color-7')
const input7 = document.querySelector('.input-7')
input7.addEventListener('input', (e) => {
    divToColor7.style.backgroundColor = e.target.value
})


// exo 8
const circleColor2 = document.querySelector('.div-to-color-1')
const btnexo8 = document.querySelectorAll('.btn-1')

btnexo8.forEach((element) => {
    element.addEventListener('click', (e) => {
        circleColor2.style.background = e.currentTarget
    })
})

/**
 * EXO 9
 */

const checkboxes = document.querySelectorAll('.checkbox')
const textToDisplay9 = document.querySelector('.text-to-display-9')

/**
 * OPERATEUR TERNAIRE, une condition if else écrite sur une ligne, pour affecter une même variable
 */

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
        let value1 = checkboxes[0].checked ? checkboxes[0].value : ''
        let value2 = checkboxes[1].checked ? checkboxes[1].value : ''

        textToDisplay9.textContent = `${value1} ${value2}`


        // if (checkboxes[0].checked) {
        //     value1 = checkboxes[0].value
        // } else {
        //     value1 = ''
        // }

        // if (checkboxes[1].checked) {
        //     value2 = checkboxes[1].value
        // } else {
        //     value2 = ''
        // }


        // if (event.currentTarget.checked) {
        //     textToDisplay9.textContent = event.currentTarget.value
        // } else {
        //     textToDisplay9.textContent = ''
        // }

    })
})