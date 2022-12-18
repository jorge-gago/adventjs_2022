carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']

carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']

function carryGifts(gifts, maxWeight) {
    let res = []
    let ant =''
    for ( item of gifts) {
        // console.log(item.length)
        // console.log('item up ', item)
        if ( item.length > maxWeight) {
            return []
        }
        if ( ant.length + item.length > maxWeight) {
            // console.log('ant ', ant)
            res.push(ant)
            ant = item
            continue
        }
        ant = `${ant} ${item}`.trim()
        // ant.trim()
        // console.log('item ', item)
    }
    res.push(ant)
    console.log(res)
}