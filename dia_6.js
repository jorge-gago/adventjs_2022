const cube = createCube(3)
console.log(cube)


function createCube(size) {
    //formas basicas del cubo
    const lateralSup = '_\\'
    const lateralInf = '_/'
    const sup = '/\\'
    const inf = '\\/'

    // variable que retornaremos
    let res = ''

    // formamos los lados el cubo segun su tamaño
    const ladoSup = lateralSup.repeat(size)
    const ladoInf = lateralInf.repeat(size)
    let frontal = ''
    let espacios = ''

    //creamos la mitad superior del cubo
    for (let i = 1; i <= size; i++) {
        espacios = ' '.repeat(size - i)
        frontal = sup.repeat(i)
        res +=`${espacios}${frontal}${ladoSup}\n`
    }

    //creamos la mitad inferior del cubo
    for (let i = size; i > 0; i--) {
        espacios = ' '.repeat(size - i)
        frontal = inf.repeat(i)
        res +=`${espacios}${frontal}${ladoInf}\n`
    }

    res = res.slice(0, -1)

  return res
}