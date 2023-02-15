const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
const smallMovie=[]
const mediumMovie=[]
const largeMovie=[]
for (let movie of movies) {
    movie.durationInMinutes<100 ? smallMovie.push(movie.name) :
    movie.durationInMinutes<200 && movie.durationInMinutes>=100 ? mediumMovie.push(movie.name) :
    movie.durationInMinutes>=200 ? largeMovie.push(movie.name) : ""
}
console.log(smallMovie, mediumMovie, largeMovie)
