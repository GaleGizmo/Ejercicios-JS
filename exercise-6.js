const getCharacters = async function () {
  const data = await fetch("http://localhost:3000/characters");
  const characters = await data.json();
  for (const char of characters) {
    char.selected = false;
  }
  
  paintCharacters(characters);
  const botonLuchar = document.querySelector("button");
  botonLuchar.addEventListener("click", () => {
    if (luchadores < 2) {
      alert("Necesitas dos luchadores");
    } else {
      const arrayLuchadores = characters.filter(
        (character) => character.selected === true
      );
      const arena = document.querySelector(".arena");
      arena.innerHTML = "";
      paintCharacters(arrayLuchadores);
      startFight(arrayLuchadores);
    }
  });
};
let luchadores = 0;
const contadorLuchadores = document.getElementById("contador-luchadores");
contadorLuchadores.innerHTML = `${luchadores} DE 2`;
function paintCharacters(char) {
  const divCharacters = document.querySelector(".c-characters");
  divCharacters.innerHTML = "";
  if (char.length===2) divCharacters.className = "c-characters-fight";
  for (let i = 0; i < char.length; i++) {
    const character = document.createElement("div");
    if (char.length === 2) {
      character.setAttribute("id", `${i}`);
    }
    const raza = document.createElement("h1");
    const img = document.createElement("img");
    const stats = document.createElement("div");
    const critText = document.createElement("span");
    const defenseValue = document.createElement("span");
    const defenseText = document.createElement("span");
    const critValue = document.createElement("span");
    const vitalityText = document.createElement("span");
    const vitalityValue = document.createElement("span");
    if (char.length === 2) {
      vitalityValue.setAttribute("id", `vitPlayer${i + 1}`);
    }
    character.className = "c-characters__item";
    stats.className = "c-characters__item__stats";
    critValue.style.color = "red";
    critValue.style.textAlign = "end";
    defenseValue.style.color = "blue";
    defenseValue.style.textAlign = "end";
    vitalityValue.style.color = "green";
    vitalityValue.style.textAlign = "end";

    raza.innerText = char[i].name;
    img.setAttribute("src", char[i].avatar);
    critText.innerText = "CRÍTICO:";
    critValue.innerText = char[i].critic;
    defenseText.innerText = "DEFENSA:";
    defenseValue.innerText = char[i].defense;
    vitalityText.innerText = "VITALIDAD:";
    vitalityValue.innerText = char[i].vitality;
    divCharacters.appendChild(character);
    character.appendChild(raza);
    character.appendChild(img);
    character.appendChild(stats);
    stats.appendChild(critText);
    stats.appendChild(critValue);
    stats.appendChild(defenseText);
    stats.appendChild(defenseValue);
    stats.appendChild(vitalityText);
    stats.appendChild(vitalityValue);
    if (char.length > 2) {
      img.addEventListener("click", () => {
        if (char[i].selected === false && luchadores < 2) {
          character.style.backgroundColor = "blue";
          char[i].selected = true;
          luchadores++;
          contadorLuchadores.innerHTML = `${luchadores} DE 2`;
        } else {
          if (char[i].selected === true) {
            char[i].selected = false;
            character.removeAttribute("style");
            luchadores--;
            contadorLuchadores.innerHTML = `${luchadores} DE 2`;
          }
          if (luchadores === 2) {
            alert("No puedes seleccionar más luchadores");
          }
        }
      });
    }
  }
}

function startFight(fighters) {
  let critPlayer1 = fighters[0].critic;
  let defPlayer1 = fighters[0].defense;
  let vitPlayer1 = fighters[0].vitality;
  let damagePlayer1 = fighters[0].damage;
  let critPlayer2 = fighters[1].critic;
  let defPlayer2 = fighters[1].defense;
  let vitPlayer2 = fighters[1].vitality;
  let damagePlayer2 = fighters[1].damage;
  const divPlayer1 = document.getElementById("0");
  const divPlayer2 = document.getElementById("1");
  const botonAtaquePlayer1 = document.createElement("button");
  botonAtaquePlayer1.innerText = "ATAQUE";
  divPlayer1.insertAdjacentElement("beforeend", botonAtaquePlayer1);
  const botonAtaquePlayer2 = document.createElement("button");
  botonAtaquePlayer2.innerText = "ATAQUE";
  divPlayer2.insertAdjacentElement("beforeend", botonAtaquePlayer2);
  let turno = Math.round(Math.random() * 1);
  if (turno === 0) {
    botonAtaquePlayer2.setAttribute("disabled", true);
    alert(`Empieza a atacar el ${fighters[0].name}`);
  } else {
    botonAtaquePlayer1.setAttribute("disabled", true);
    alert(`Empieza a atacar el ${fighters[1].name}`);
  }
  const spanVitPlayer1 = document.getElementById("vitPlayer1");
  const spanVitPlayer2 = document.getElementById("vitPlayer2");

  botonAtaquePlayer1.addEventListener("click", () => {
    
    botonAtaquePlayer1.setAttribute("disabled", true);
    let totalAttack = lanzaDados(damagePlayer1, critPlayer1, divPlayer2, 67);
    let totalDamage = totalAttack[0] - defPlayer2;
    vitPlayer2 = vitPlayer2 - totalDamage;
    if (vitPlayer2> 0) {
    
    setTimeout( function(){
      spanVitPlayer2.innerHTML = vitPlayer2;
      botonAtaquePlayer2.removeAttribute("disabled");
    }, 1100*totalAttack[1])
  } else {
    
    setTimeout(endOfGame, 1100*totalAttack[1], fighters[0].name, divPlayer2)
    
  }
  });
  

  botonAtaquePlayer2.addEventListener("click", () => {
    
    botonAtaquePlayer2.setAttribute("disabled", true);
    let totalAttack = lanzaDados(damagePlayer2, critPlayer2, divPlayer1, 26);
    let totalDamage = totalAttack[0] - defPlayer1;
    vitPlayer1 = vitPlayer1 - totalDamage;

    if (vitPlayer1> 0) {
    setTimeout( function(){
      
      spanVitPlayer1.innerHTML = vitPlayer1;
      botonAtaquePlayer1.removeAttribute("disabled");
    }, 1100*totalAttack[1])
  } else {
    
   setTimeout(endOfGame, 1100*totalAttack[1], fighters[1].name, divPlayer1)
  }
  });
}

function lanzaDados(playerDamage, playerCrit, divOponent, positionDamage) {
  dicesValues = [];
  let totalDamage = 0;
  for (const dano of playerDamage) {
    const dadoValues = dano.split("d");
    const caras = Number(dadoValues[1]);
    const tiradas = Number(dadoValues[0]);
    const dadoTotal = { caras: caras, tiradas: tiradas };
    dicesValues.push(dadoTotal);
  }
  
  let delay=-1
  let retorno=[]
  for (const dado of dicesValues) {
    delay++
    for (let i = 0; i < dado.tiradas; i++) {
      let damage = Math.floor(Math.random() * dado.caras + 1);
      let critHit = false;
      if (damage === playerCrit) {
        damage = damage * 2;
        
        critHit = true;
      }
      delay++
     
     setTimeout(showDamage, delay*1000, critHit, damage, divOponent, positionDamage);
      // console.log(damage,critHit);
      totalDamage += damage;
    }
  }
  retorno.push(totalDamage)
  retorno.push(delay)
  // showDamage(arrayDamage)
  return retorno;
}

function showDamage(isCrit, damageDone, divOtherPlayer, positionDamage) {
  const divDamage = document.createElement("div");
  divDamage.className = "show-damage";
  divDamage.style.left=`${positionDamage}%`
  const pDamage = document.createElement("p");
  pDamage.innerHTML = damageDone;
  divDamage.appendChild(pDamage);
  divOtherPlayer.style.animation="damaged 0.3s"

  if (isCrit) {
    const showCrit = document.createElement("span");
    showCrit.innerHTML = "¡¡CRÍTICO!!";
    divDamage.appendChild(showCrit);
    divOtherPlayer.style.animation="damaged 0.5s, shake 0.5s"
  }
  const divPlayer1 = document.getElementById("0");
  divPlayer1.style.position="relative"
  const divCharacters = document.querySelector(".c-characters-fight");
  divPlayer1.insertAdjacentElement("afterend", divDamage);
  divDamage.addEventListener("animationend", ()=>{
    divCharacters.removeChild(divDamage);
    divOtherPlayer.removeAttribute("style")
  });
}

function endOfGame(winnerName, divLoser){
  const arena = document.querySelector(".arena");
const divWinner=document.createElement('div')
divWinner.className="winner"
divWinner.innerHTML=`¡El ${winnerName} ha vencido!`
arena.appendChild(divWinner)
divLoser.className="loser"
const botonReload=document.createElement("button")
botonReload.className="boton"
botonReload.innerText="REINICIAR JUEGO"
arena.appendChild(botonReload)
botonReload.addEventListener("click",()=>{
  location.reload()
})
}
getCharacters();
