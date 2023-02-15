const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function masDe18(edad){
    if (edad>18) {
        return edad
    }
}
console.log(ages.filter(masDe18)
)