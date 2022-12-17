decorateTree('B P R P')

// decorateTree('B B')

function decorateTree(base) {
   let temp = base.split(' ')
   let res = [[...temp]]
   let add
   let a
   let b
//    console.log(temp)
   for ( let index = 0; index < temp.length - 1; index++) {
    // console.log( res[index])
    add = []
    // console.log(res[index])
    // console.log(res[index].length - 1)
    for ( let inside = 0; inside <= res[index].length - 1; inside++) {
        a = res[index][inside]
        b = res[index][inside + 1]
        if ( a == b ) {
            add.push(a)
            continue
        }
        if ( (a == 'B'|| a == 'P') && (b == 'B'|| b == 'P') ) {
            add.push('R')
            continue
        }
        if ( (a == 'R'|| a == 'P') && (b == 'R'|| b == 'P') ) {
            add.push('B')
            continue
        }
        if ( (a == 'B'|| a == 'R') && (b == 'B'|| b == 'R') ) {
            add.push('P')
        }
    }
    // console.log(add)
    res.push(add)
   }
   res = res.map(item => {
    return item.join(' ')
   })
//    console.log(res.reverse())
   return res.reverse()
}