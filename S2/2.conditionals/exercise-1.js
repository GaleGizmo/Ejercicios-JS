const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}]
    
    for (let alumn of alumns) {
        // alumn.isApproved=false
        // if ((alumn.T1==true && alumn.T2==true) || (alumn.T1==true && alumn.T3==true) || (alumn.T2==true && alumn.T3==true)) 
        //  {
        //     alumn.isApproved=true;
        // }
        ((alumn.T1==true && alumn.T2==true) || (alumn.T1==true && alumn.T3==true) || (alumn.T2==true && alumn.T3==true)) ? alumn.isApproved=true : 
        alumn.isApproved=false
    }
    console.log(alumns)
