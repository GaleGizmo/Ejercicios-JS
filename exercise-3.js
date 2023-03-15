async function getOrders() {
  const raw = await fetch("http://localhost:3000/orders");
  const orders = await raw.json();
  const ordersByDate = orders
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();
  return ordersByDate;
}
const contenedor = document.getElementById("container");
async function pintaPedidos() {
  const pedidosPorFecha = await getOrders();
  for (const pedido of pedidosPorFecha) {
    const fechaPedido = document.createElement("p");
    fechaPedido.innerHTML = `FECHA DEL PEDIDO: <span id="fecha">${pedido.date}</span>`;
    console.log(contenedor);
    contenedor.appendChild(fechaPedido);
    let producto = {};
    for (const producto of pedido.products) {
      const pid = producto.productId;
      const pname = await fetch(`http://localhost:3000/products/${pid}`);
      const nombre = await pname.json();
      producto.nombre = nombre.name;
      producto.cantidad = producto.quantity;
      const nombreDeProducto = document.createElement("span");
      nombreDeProducto.style.color = "#11cc";
      nombreDeProducto.innerHTML = `${producto.nombre}: `;
      const cantidadDeProducto = document.createElement("span");
      cantidadDeProducto.className = "cantidad";
      cantidadDeProducto.innerHTML = `${producto.cantidad}`;
      const divProdCant=document.createElement('div')
      divProdCant.className='div-prod-cant'
      contenedor.appendChild(divProdCant)
      divProdCant.appendChild(nombreDeProducto);
      divProdCant.appendChild(cantidadDeProducto);
    }
  }
}
pintaPedidos();
