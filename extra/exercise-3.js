const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
function countA(array){
    let counter=0
        for (item of array){
            for(let i=0; i<item.length;i++){
                item[i]==="a"? counter++ : ""
                
            }
        }
        return counter
}
console.log(countA(animals))