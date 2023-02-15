const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

function namesAnacleto(array){
    if (array.name[0]==="A") {array.name="Anacleto"}
    return array.name
}
console.log(users.map(namesAnacleto))
