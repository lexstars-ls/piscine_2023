let words = ['salut','mon','ton','nom','est','Pierre']
let sentence = ''
// for (let i=0; i<words.length; i ++){
// if(i != 2){
//     sentence += words[i] + ' '
// }
 

// }
// console.log(sentence +'.')


// exeptions = []

// for (let i=0; i<words.length; i ++){
//     if(i == 2){
//       exeptions.push(words[i])
//       continue  
//     }
     
//     sentence += words[i]
//     if(i==words.length -1){
//      sentence += '.'
//     }else{
//         sentence += ' '
//     }
//     }
//     console.log(sentence)


const myTitle = document.querySelector(".my-title")

myTitle.addEventListener('click', onTitleClick)

let setsOfColors = [
    {
        bgColor: 'black',
        textColor: 'white'
    },
    {
        bgColor: 'white',
        textColor: 'black'
    },
    {
        bgColor: 'yellow',
        textColor: 'purple'
    },
    {
        bgColor: 'green',
        textColor: 'red'
    }
]

let colorIndex = 0

function onTitleClick() {
    // if (myTitle.style.color == "black") {
    //     myTitle.style.backgroundColor = "black"
    //     myTitle.style.color = "white"
    // } else {
    //     myTitle.style.backgroundColor = "white"
    //     myTitle.style.color = "black"
    // }

    colorIndex++
    if (colorIndex == setsOfColors.length ) {
        colorIndex = 0
    }

    myTitle.style.backgroundColor = setsOfColors[colorIndex].bgColor
    myTitle.style.color = setsOfColors[colorIndex].textColor
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = setsOfColors[colorIndex].textColor
    }

    colorIndex++
    if (colorIndex == setsOfColors.length) {
        colorIndex = 0
    }
}

