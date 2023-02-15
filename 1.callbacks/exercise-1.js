const numbersList = [];

function sum(a,b){
return a+b
}

function substract(a,b){
return a-b
}

function father(a,b, callback){
numbersList.push(callback(a,b))
}

father(3,7,sum)
father(9,2, substract)
father(8,1, substract)

console.log(numbersList);