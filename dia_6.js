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
    let superior = []
    let inferior = []

    // formamos los lados el cubo segun su tamaño
    const ladoSup = lateralSup.repeat(size)
    const ladoInf = lateralInf.repeat(size)
    let frontal = ''
    let frontalInf = ''
    let espacios = ''

    //creamos la mitad superior del cubo
    for (let i = 1; i <= size; i++) {
        espacios = ' '.repeat(size - i)
        frontal = sup.repeat(i)
        frontalInf = inf.repeat(size - (i - 1))
        superior.push(`${espacios}${sup.repeat(i)}${ladoSup}`)
        inferior.push(`${' '.repeat((size - 1) - (size - i))}${frontalInf}${ladoInf}`)
        superior.push('\n')
        inferior.push('\n')
    }
    inferior = inferior.slice(0,-1)
    
    superior = superior.join('')
    inferior = inferior.join('')
    res = `${superior}${inferior}`

    //creamos la mitad inferior del cubo
    // for (let i = size; i > 0; i--) {
    //     espacios = ' '.repeat(size - i)
    //     frontal = inf.repeat(i)
    //     res +=`${espacios}${frontal}${ladoInf}\n`
    // }

    // res = res.slice(0, -1)

  return res
}