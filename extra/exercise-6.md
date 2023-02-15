Al siguiente javascript no funciona como deberia...podrias arreglarlo?

Deberia de imprimir por consola "elGato".

```js
const user = {name: "elGato", surname: "ConZancos"}

function a(user){
    const nama = b(user.nama);
    console.log(nama)
}

function b(name){
    return "Que pasa " + name;
}

a(user);
```