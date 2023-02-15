const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
function ciudadesVisitadas(array){
    if (array.isVisited===true) {
        array.name+="(Visitado)"
        }
   return array.name      
}
console.log(cities.map(ciudadesVisitadas))