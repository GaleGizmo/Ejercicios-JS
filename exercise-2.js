
async function  getData(){
    let entradasDiario=[]
    const data=await fetch('http://localhost:3000/diary')
    const diaryData= await data.json()
  entradasDiario=await diaryData.sort((a,b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
     
  const divHoja=document.getElementById('b-hoja')
  const botonAtras=document.getElementById('boton-atras')
  const botonDelante=document.getElementById('boton-delante')
  botonAtras.setAttribute("disabled", true)
      
  let hoja=0
  const divContenidoHoja=document.createElement('div')
  function dibujarHoja(numero){
  divContenidoHoja.innerHTML=""
  divContenidoHoja.setAttribute('id',`b-hoja-contenido`)
  const titulo=document.createElement('h3')
  titulo.innerText=entradasDiario[hoja].title
  const fecha=document.createElement('h5')
  fecha.innerText=entradasDiario[hoja].date
  const descripcion=document.createElement('p')
  descripcion.innerText=entradasDiario[hoja].description
  const botonBorrar=document.createElement('button')
  botonBorrar.innerText="Borrar entrada"
  botonBorrar.addEventListener('click',()=>{
    entradasDiario.splice(hoja,1)
    if(hoja===0){
    botonAtras.setAttribute("disabled", true)
    botonDelante.removeAttribute("disabled")

    }
    console.log(hoja, entradasDiario.length)
     if (hoja===entradasDiario.length){
        botonAtras.removeAttribute("disabled")
    botonDelante.setAttribute("disabled", true)
    hoja --
   
    }
    if (entradasDiario.length===0){divContenidoHoja.innerText="NO QUEDAN ENTRADAS EN EL DIARIO"
    divContenidoHoja.style.alignSelf='center'
    divContenidoHoja.style.height="100%"
    divContenidoHoja.style.display='flex'
    divContenidoHoja.style.alignItems='center'
    botonDelante.setAttribute("disabled", true)
    botonAtras.setAttribute("disabled", true)


return}
    dibujarHoja(hoja)
  })  
  divContenidoHoja.appendChild(titulo)
  divContenidoHoja.appendChild(fecha)
  divContenidoHoja.appendChild(descripcion)
  divContenidoHoja.appendChild(botonBorrar)
  botonAtras.insertAdjacentElement('afterend',divContenidoHoja)
  }
  botonDelante.addEventListener('click',()=>{
    if (hoja<entradasDiario.length-1){
        botonDelante.removeAttribute("disabled")
        botonAtras.removeAttribute('disabled')
        hoja++
        dibujarHoja(hoja)
        if (hoja===entradasDiario.length-1) {botonDelante.setAttribute("disabled", true)}
    }
   
    
  })
  botonAtras.addEventListener('click',()=>{
    if (hoja>0){
        botonAtras.removeAttribute('disabled')
        botonDelante.removeAttribute("disabled")
        hoja--
        dibujarHoja(hoja)
        if (hoja===0) {botonAtras.setAttribute("disabled", true)}
    }
    
    
  })

dibujarHoja(hoja)
}  
getData()
// const divHoja=document.getElementById('b-hoja')
// const botonAtras=document.getElementById('boton-atras')
// const botonDelante=document.getElementById('boton-delante')
// console.log( entradasDiario);

    
// let hoja=0
// const divContenidoHoja=document.createElement('div')
// divContenidoHoja.setAttribute('id',`b-hoja-contenido-${hoja}`)
// const titulo=document.createElement('h3')
// titulo.innerText=entradasDiario[hoja].title
// const fecha=document.createElement('h5')
// fecha.innerText=entradasDiario[hoja].date
// const descripcion=document.createElement('p')
// descripcion.innerText=entradasDiario[hoja].description
// divContenidoHoja.appendChild(titulo)
// divContenidoHoja.appendChild(fecha)
// divContenidoHoja.appendChild(descripcion)
// botonAtras.insertAdjacentElement(divContenidoHoja)


// // muestraDiario()
