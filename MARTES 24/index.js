const boleto=27
function obtenerRandomEntre(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
function buscarBoleto(){
for (let i = 0; i < 101; i++) {
    
     if (obtenerRandomEntre(10, 30)===boleto){
        console.log("Lo encontraste en el intento "+i)
        break
     }
}

}
buscarBoleto()