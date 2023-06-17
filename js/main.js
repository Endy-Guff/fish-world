const btn = document.querySelector('.fish__btn')
const fish1 = document.querySelector('.fish-1')
const fish2 = document.querySelector('.fish-2')
const fish3 = document.querySelector('.fish-3')
const header = document.querySelector('.header')

const fishArr = [fish1, fish2, fish3]
let currentFish = 0

btn.addEventListener('click', ()=>{
    // if(!fish1.classList.contains('close')){
    //     fish1.classList.add('close')
    // } else{
    //     fish1.classList.remove('close')
    // }
    header.classList.remove(`fish${currentFish+1}`)
    header.classList.add(`fish${currentFish===2?1:currentFish+2}`)
    fishArr[currentFish].classList.add('close')
    fishArr[currentFish].classList.remove('open')
    fishArr[currentFish+1===3?0:currentFish+1].classList.add('open')
    fishArr[currentFish+1===3?0:currentFish+1].classList.remove('close')
    currentFish=currentFish===2?0:currentFish+1
})