const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes))

function getFilesToBackup(lastBackup, changes) {
    let res = []
    for (let item of changes) {
        item[1] > lastBackup? res.push(item[0]): null
    }
    res = Array.from(new Set(res)).sort(( a, b) => a - b)
    return res 
  }