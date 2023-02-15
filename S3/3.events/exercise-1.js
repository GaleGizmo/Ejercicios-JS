const boton=document.createElement('button')
boton.setAttribute('id','btnToClick')
boton.innerHTML="Botón"
document.body.appendChild(boton)
boton.addEventListener('click',(event)=>{
    console.log(event)
})