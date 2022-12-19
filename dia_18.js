console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]

console.log(dryNumber(2, 20)) // [2, 12, 20]

function dryNumber(dry, numbers) {
    let res = []
    for ( let i = 1; i <= numbers; i++ ) {
        if (i.toString().includes(dry)) {
            // console.log(i)
            res.push(i)
        }
    }
    return res
}