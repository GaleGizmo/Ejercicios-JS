const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]
let orderedList=[]
function order(array){
    for (item of array){
        orderedList[item.order-1]=item
    }
return orderedList
}
console.log(order(list))
