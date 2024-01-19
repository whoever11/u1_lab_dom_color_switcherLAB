// Write your DOM code here!
console.log('working')

// red button
const red = document.querySelector('.red')
const redElement = document.querySelector('.red')

red.addEventListener('click', () => {
    document.body.classList.toggle('red')
    document.body.classList.remove('blue', 'white', 'yellow')
    document.querySelector('h1').style.color = 'white'
    document.querySelector('p').style.color = 'white'
})

// white button
const white = document.querySelector('.white')

white.addEventListener('click', () => {
    document.body.classList.toggle('white')
    document.body.classList.remove('red', 'blue', 'yellow')
    document.querySelector('h1').style.color = 'black'
    document.querySelector('p').style.color = 'black'
})

// blue button
const blue = document.querySelector('.blue')

blue.addEventListener('click', () => {
    document.body.classList.toggle('blue')
    document.body.classList.remove('red', 'white', 'yellow')
    document.querySelector('h1').style.color = 'white'
    document.querySelector('p').style.color = 'white'
})

// yellow button
const yellow = document.querySelector('.yellow')

yellow.addEventListener('click', () => {
    document.body.classList.toggle('yellow')
    document.body.classList.remove('red', 'blue', 'white')
    document.querySelector('h1').style.color = 'black'
    document.querySelector('p').style.color = 'black'
})
