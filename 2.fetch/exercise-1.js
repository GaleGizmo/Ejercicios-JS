async function obtener() {
  const respuesta = await fetch("https://api.agify.io?name=michael");
  console.log(await respuesta.json());
}
obtener();
