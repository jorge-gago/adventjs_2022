const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
    let carga = contarTotal(packOfGifts)
    let capacidad = contarTotal(reindeers) * 2

    console.log(carga)
    console.log(capacidad)
    return capacidad / carga >> 0
}

function contarTotal(lista) {
    let total = 0
    lista.map(item => {
        total += item.length
    })
    return total
}

console.log(distributeGifts(packOfGifts, reindeers))