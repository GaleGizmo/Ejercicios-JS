const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let x=0
for (let i=0; i<foodSchedule.length; i++){
    foodSchedule[i].isVegan!=true ? (foodSchedule[i].name=fruits[x], x++) : ""
}
console.log(foodSchedule)