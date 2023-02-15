const userAnwsers = [];
const prueba="Prueba"
function confirmExample(description){
    return confirm(description)
     
}

function promptExample(description){
    return  prompt(description)
     
}

function father(description, callback){
userAnwsers.push(callback(description))
}

father('Hola',confirmExample)
father('Que tal',promptExample)
father('Pulsa cancelar', confirmExample)
father('Saluda, por favor', promptExample)
console.log(userAnwsers);