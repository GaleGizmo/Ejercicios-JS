const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
let sumSellCount=0
for (let product of products){
    sumSellCount+=product.sellCount
}
console.log(sumSellCount, sumSellCount/products.length)

