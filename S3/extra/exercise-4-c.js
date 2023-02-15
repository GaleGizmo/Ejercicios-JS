const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  function pintaElementos() {
    for (const country of countries) {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const btnDel=document.createElement('button')
      btnDel.innerText="Eliminar"
      div.innerHTML = `<h4>${country.title}</h4> <img src="${country.imgUrl}"><br>`;
      div.appendChild(btnDel)
      btnDel.addEventListener('click',()=>{
        div.remove()
      })
    }
  }
  
  pintaElementos();
  
  const boton$$ = document.querySelector("button");
  boton$$.addEventListener("click", () => {
    const quitar = document.querySelectorAll("div");
    quitar[quitar.length - 1].remove();
    console.log(countries);
  });