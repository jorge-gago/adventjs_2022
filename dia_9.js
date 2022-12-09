const leds = [0, 0, 1, 0, 0]
countTime(leds)

function countTime(leds) {
    let copia = [...leds]
    let temp = []
    // console.log(copia)
    //console.log(copia.includes(0))
    let contador = 0
    for ( let i in copia ) {
        // console.log(copia)
        if (!copia.includes(0)) {
            break
        }
        contador += 7
        temp = copia.map((val, pos) => {
            console.log('copia -1', copia.at(pos - 1))
            if (copia.at(pos - 1)) {
                return 1
            }
            return val
        })
        copia  = [...temp]
        console.log(i, copia)
        
    }

    
    console.log(contador)
    return contador
}

// for ( let i in copia ) {
    //     console.log('while')
    //     copia.reduce((ant, act) => {
    //         if (copia[act]) {
    //             copia[act + 1] = 1
    //             // return ant + 2
    //         }
    //         return ant + 1
    //     }, -1)
        
    //     console.log(i, copia)
    //     if (!copia.includes(0)) {
    //         break
    //     }
    //     contador += 7
    // }