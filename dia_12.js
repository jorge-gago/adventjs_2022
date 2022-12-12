const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Dancer"

function selectSleigh(distance, sleighs) {
    const carga = 20
    let lista = [null]

    for (let item of sleighs) {
        if (item.consumption * distance <= carga) {
            lista.push(item.name)
        }
    }

    return lista.at(-1) 
}