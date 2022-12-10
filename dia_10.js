const heights = [1, 2, 1]
console.log(checkJump(heights)) // true


function checkJump(heights) {
    let temp = []
    let max = heights.indexOf(Math.max(...heights))
    temp = heights.slice(max)
    max = heights.slice(0, max )
    
    let resUp = max.every((item, index) => {
        return item >= (max[index - 1] || 0)
    })

    let resDown = temp.every((item, index) => {
        return item <= (temp[index - 1] || item)
    })

    return (
        resUp && 
        resDown && 
        max[0]<temp[0] && 
        temp[0]>temp.at(-1) 
    )? true: false
  }