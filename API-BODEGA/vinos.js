import { cargarVinos } from "./api.js";
document.addEventListener("DOMContentLoaded", async () => {
  const vinos = await cargarVinos();
  console.log(vinos);
  const btnTintos = document.getElementById("btn-tintos");
  const btnBlancos = document.getElementById("btn-blancos");
  const btnRosados = document.getElementById("btn-rosados");
  const btnEspumosos = document.getElementById("btn-espumosos");
  btnTintos.addEventListener("click", () => {
    pintarVinos(vinos[0]);
  });
  btnBlancos.addEventListener("click", () => {
    pintarVinos(vinos[1]);
  });
  btnRosados.addEventListener("click", () => {
    pintarVinos(vinos[2]);
  });
  btnEspumosos.addEventListener("click", () => {
    pintarVinos(vinos[3]);
  });
});

const divContenedor$$ = document.querySelector("#contenedor");
const pintarVinos = (vinos) => {
  divContenedor$$.innerHTML = "";
  for (const vino of vinos) {
    const vinoDiv$$ = document.createElement("div");
    vinoDiv$$.className = "card div-vino justify-content-between m-1 p-1";

    const imgDiv$$ = document.createElement("div");
    imgDiv$$.className = "d-flex justify-content-center";

    const vinoImg$$ = document.createElement("img");

    vinoImg$$.setAttribute("src", vino.image);
    vinoImg$$.addEventListener("error", (event) => {
      vinoImg$$.setAttribute(
        "src",
        "https://img3.freepng.es/dy/283c3e45f20fbb9bdd8548c7e3462bc7/L0KzQYm4UsExN6V8R91yc4Pzfri0kvVlNahuhtc2Y3jkfcHohB5mNahuhtc2Z3zkg8S0lvVkfJD3Rdl7YYDrebT6TcVkOJc4fagBZHO1QYa9Tsg5PWY3TKM8MUW3RIa3Usg5Pmo1Sak3cH7q/kisspng-red-wine-champagne-wine-glass-vector-graphics-5c0f3e66dc2156.8855241315445028869017.png"
      );
    });

    vinoImg$$.setAttribute("alt", vino.wine);
    vinoImg$$.setAttribute("height", "200px");

    const textoDiv$$ = document.createElement("div");

    const vinoName$$ = document.createElement("h6");
    vinoName$$.className = "card-title";
    vinoName$$.innerHTML = vino.wine;

    const vinoPais$$ = document.createElement("h6");
    vinoPais$$.className = "card-subtitle mb-2 text-muted";
    vinoPais$$.innerHTML = vino.location.split("\n")[0];

    const vinoBodega$$ = document.createElement("span");
    vinoBodega$$.className = "card-text mb-6";
    vinoBodega$$.innerHTML = vino.winery;

    const ratingDiv$$ = document.createElement("div");
    ratingDiv$$.className = "card-footer";

    const vinoRating$$ = document.createElement("span");
    //vinoRating$$.className = "card-footer start-50 translate-middle-x w-100 mt-1"
    vinoRating$$.innerHTML = `Valoración: ${vino.rating.average} ⭐`;

    imgDiv$$.appendChild(vinoImg$$);
    textoDiv$$.appendChild(vinoName$$);
    textoDiv$$.appendChild(vinoPais$$);
    textoDiv$$.appendChild(vinoBodega$$);
    ratingDiv$$.appendChild(vinoRating$$);

    vinoDiv$$.appendChild(imgDiv$$);
    vinoDiv$$.appendChild(textoDiv$$);
    vinoDiv$$.appendChild(ratingDiv$$);

    divContenedor$$.appendChild(vinoDiv$$);
  }
};
