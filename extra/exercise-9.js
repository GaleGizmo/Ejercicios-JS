const frutas = ['pera', 'manzana', 'tomate' ,'piña','naranja']

function modifyArray(array){
    let n=5
    for (i=0;i<array.length;i++){
        array[i]="*".repeat(n)+"\n*"+array[i]+"*\n"+"*".repeat(n)
        n++
    }
    return array
}
console.log(modifyArray(frutas))