getOptimalPath([[0], [2, 3]]) // 2
// // 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// // 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// // 1 -> 1 -> 5 -> 1

getOptimalPath([[-1], [-1, -5], [-7, -5, -8], [-9, -4, -1, -3]])

function getOptimalPath(path) {
let rutas = [...path[0]]
let temp = []

for ( let inside = 0; inside < path.length - 1; inside ++) {
    temp = []
    for ( let item = 0; item < path[inside].length; item++) {
        temp.push((rutas[inside][item] ||rutas[inside]) + path[inside + 1][item])
        temp.push((rutas[inside][item] ||rutas[inside]) + path[inside + 1][item + 1])
    }
    rutas.push(temp)
}
// temp = temp.sort((a, b) => a-b)
// console.log(temp[0])
// console.log(Math.min(...temp))
return Math.min(...temp)
}



// [1], 
// [1, 5], 
// [7, 5, 8], 
// [9, 4, 1, 3]








//     // console.log(path[index])
//     // console.log('+1 ',path[index + 1])
    
//     // console.log(path[inside])
//     console.log('ruta ', rutas[inside])
//     temp = []
//     for ( let item = 0; item < path[inside].length; item++) {
//         // console.log( path[inside][item], path[inside + 1][item])
//         // console.log( path[inside][item], path[inside + 1][item + 1])

//         // console.log( rutas[inside][item] ||rutas[inside], path[inside + 1][item])
//         // console.log( rutas[inside][item] ||rutas[inside], path[inside + 1][item + 1])

//         // temp = [...rutas]

//         // console.log( 'rutas  >', temp, path[inside + 1][item])
//         // console.log( temp, path[inside + 1][item + 1])

//         // rutas[inside][item]
//         // rutas[inside][item], 

//         temp.push((rutas[inside][item] ||rutas[inside]) + path[inside + 1][item])
//         temp.push((rutas[inside][item] ||rutas[inside]) + path[inside + 1][item + 1])
        

        

//         // temp.push([path[inside][item], path[inside + 1][item]]) 
//         // temp.push(path[inside][item], path[inside + 1][item + 1])

//         // temp.push([path[inside][item] + path[inside + 1][item]]) 
//         // temp.push([path[inside][item] + path[inside + 1][item + 1]])
//     }
//     rutas.push(temp)

// }
// console.log('temp ', temp)
// console.log(Math.min(...temp))