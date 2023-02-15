const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`
function capitalizarPrimeraLetra(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
function changeText(array){
let newText=array.split('-')
return newText.map(capitalizarPrimeraLetra).join(" ")
}
console.log(changeText(text))