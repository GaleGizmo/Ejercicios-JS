let firstName=""
let Surname=""
function splitName(name){
    let index=name.indexOf(" ")
    firstName=name.substring(0, index)
    Surname=name.substring(index+1)
}
const nombre="Mauro Silva"
splitName(nombre)
console.log(`Nombre: ${firstName} Apellido: ${Surname}`)
