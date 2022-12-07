// const a1 = ['bici', 'coche', 'bici', 'bici']
// const a2 = ['coche', 'bici', 'muñeca', 'coche']
// const a3 = ['bici', 'pc', 'pc']

const a1 = ['a', 'a']
const a2 = ['b', 'b']
const a3 = ['c', 'c']
function getGiftsToRefill(a1, a2, a3) {
    let res = []
    let cuenta = 0
    let val1 = [...new Set(a1)]
    let val2 = [...new Set(a2)]
    let val3 = [...new Set(a3)]
    val1 = [...val1,...val2,...val3]
    let total = new Set([...a1,...a2,...a3])
    total = [...total]
    console.log('total ',total)
    console.log(val1)
    for ( let item of total) {
        cuenta = 0
        val1.forEach(act => {
            cuenta += act === item? 1: 0 
        })
        console.log(item, cuenta)
        if ( cuenta === 1) {
            res.push(item)
        }
    }
    return res
}

const gifts = getGiftsToRefill(a1, a2, a3)
console.log(gifts)