const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (country of countries) {
  ul.innerHTML+= `<li>${country}</li>`;
}
