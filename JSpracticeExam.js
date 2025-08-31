const div = document.querySelector('div')
console.log(div.textContent)//displays the CSS hidden
console.log(div.innerText)//hides it

const desk= document.getElementById('pen')

console.log(pen.textContent)
console.log(pen.innerText)

const ball = document.createElement('div')
ball.textContent = "HIIIIIIIIII!"
desk.append(ball)
console.log(pen)
 