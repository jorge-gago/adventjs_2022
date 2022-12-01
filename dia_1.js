const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)


function wrapping(gifts) {
    let res = []
    for( item of gifts) {
        // let borders = []*item.length
        let borders = new Array(item.length + 2)
        let temp = []
        borders.fill('*')
        borders = borders.join('')
        temp = `${borders}\n*${item}*\n${borders}`
        res.push(temp)
    }
    return res
  }
  
//   console.log(temp)
//   console.log(item, item.length)