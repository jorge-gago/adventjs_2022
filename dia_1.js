const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)


function wrapping(gifts) {
    return gifts.map(item => {
        let papel = new Array(item.length + 2)
        papel.fill('*')
        papel = papel.join('')
        return `${papel}\n*${item}*\n${papel}`
      })
  }
  
