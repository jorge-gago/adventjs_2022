const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)

function sortToys(toys, positions) {
    let orden = {}
    let res = []
    let rango = [ Math.min(...positions), Math.max(...positions)]
    for (let item in positions) {
        orden[positions[item]] = toys[item] 
    }
    for ( let i = rango[0]; i <= rango[1]; i++) {
        res.push(orden[i])
    }
    return res
}