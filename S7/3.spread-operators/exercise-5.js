const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colors2=[...colors.filter(x=>x!=colors[2])]
console.log(colors2);