const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista=document.createElement('ul')
document.body.appendChild(lista)
for (const app of apps){
    lista.innerHTML+=`<li>${app}</li>`
}

