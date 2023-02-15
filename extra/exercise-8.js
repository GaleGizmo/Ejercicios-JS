const ship1 = {name: "Banca rota", damage: 44, pv: 150};

const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

function attack(nave1, nave2){
let disparo=0    
while (nave2.pv>0){
disparo=(Math.round(Math.random()*nave1.damage))
nave2.pv-=disparo
if (nave2.pv<=0){console.log(`La nave ${nave2.name} ha sido destruida`)}
else {console.log(`A la nave ${nave2.name} le queda ${nave2.pv} de vida`)}
 
} 

}

    attack(ship1, ship2)

