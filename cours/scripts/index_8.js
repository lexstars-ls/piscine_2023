/**
 * addEventListener() // removeEventListener()
 * 
 * setTimeout(fonctionExecuteApresDelai, delai)
 */

const myTitle = document.querySelector('.my-title')

const onClick = (event) => {
    const tg = event.currentTarget
    tg.classList.add('text-changed')

    setTimeout(() => {
        tg.classList.remove('text-changed')
        tg.removeEventListener('click', onClick)
    }, 2000)
}

const afficheEnConsole = () => {
    console.log('hello world')
}

myTitle.addEventListener('click', onClick)


/**
* Exo sur les 3 boutons qui change la couleur du titre
 */

const btns = document.querySelectorAll('.btn')

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', (e) => {
//         console.log(e.currentTarget)
//     })
// }
// Ajouter un atrtibut data-bg-color dans le .html, et l'utiliser en js pour changer le css
btns.forEach((element) => {
    element.addEventListener('click', (e) => {
        myTitle.style.color = e.currentTarget.getAttribute('data-color')
        myTitle.style.background =  e.currentTarget.getAttribute('data-backgroud-color')
      /// ajt d'un 2e att
        setTimeout(()=>{
            myTitle.style.color ="black"
            myTitle.style.background =  "white"
        },1000)
    })
   
})

