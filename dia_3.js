const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
    let carga = contarTotal(packOfGifts)
    let capacidad = contarTotal(reindeers) * 2
    return capacidad / carga >> 0
}

function contarTotal(lista) {
    return lista.reduce( (acc, act) => {return acc + act.length}, 0)
}

console.log(distributeGifts(packOfGifts, reindeers))