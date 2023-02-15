const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const myDiv=document.querySelector('[data-function]', 'printHere')
const ul=document.createElement('ul')
myDiv.appendChild(ul)
for (const car of cars){
ul.innerHTML+=`<li data-function="printHere">${car}</li>`
}
