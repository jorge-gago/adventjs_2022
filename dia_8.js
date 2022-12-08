// console.log(checkPart("uwu")) // true
// // "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

// console.log(checkPart("midu")) // false

function checkPart(part) {
    // console.log('----------> ', part)
    let temp = ''
    let otp = ''
    let invert = part.split('')
    temp = invert.reverse()
    if (part === temp.join('')) {
        return true
    }
    for ( index in invert ) {
        temp = invert.filter((value, i) => {
            return i != index
        })
        opt = [... temp]
        opt = opt.reverse()
        opt = opt.join('')
        // console.log(index)
        // console.log('no join', temp)
        // console.log('join ', temp.join(''))
        // console.log('part ', opt)
        // console.log('join ', temp.join(''))
        if (opt == temp.join('')) {
            return true
        }
    }
    // invert = invert.join('')
    // console.log(invert)
    return false
}