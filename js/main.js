// Write your DOM code here!
console.log('working')

// red button
const red = document.querySelector('.red')


red.addEventListener('click', () => {
    document.body.classList.toggle('red')
    document.body.classList.remove('blue', 'white', 'yellow')
   
    if (document.body.classList.contains('red')) {
        document.querySelector('h1').style.color = 'white'
        document.querySelector('p').style.color = 'white'
    } else {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    }
}) // Added closing parenthesis here

// white button
const white = document.querySelector('.white')

white.addEventListener('click', () => {
    document.body.classList.toggle('white')
    document.body.classList.remove('red', 'blue', 'yellow')
   
    if (document.body.classList.contains('white')) {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    } else {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    }
}) // Added closing parenthesis here

// blue button
const blue = document.querySelector('.blue')

blue.addEventListener('click', () => {
    document.body.classList.toggle('blue')
    document.body.classList.remove('red', 'white', 'yellow')
   
    if (document.body.classList.contains('blue')) {
        document.querySelector('h1').style.color = 'white'
        document.querySelector('p').style.color = 'white'
    } else {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    }
}) // Added closing parenthesis here

// yellow button
const yellow = document.querySelector('.yellow')

yellow.addEventListener('click', () => {
    document.body.classList.toggle('yellow')
    document.body.classList.remove('red', 'blue', 'white')
   
    if (document.body.classList.contains('yellow')) {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    } else {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('p').style.color = 'black'
    }
})
