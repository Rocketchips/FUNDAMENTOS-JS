var counter = 0
const raining = () => {
var state = (Math.random().toFixed(2))
console.warn(`${state}`)
return (parseFloat(state)<.25)
}
do{
    counter++
}while(!raining())

console.error(`Fuiste a la tienda y no llovio durante ${counter} dias`)