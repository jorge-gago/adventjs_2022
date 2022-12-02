const year = 2022
const holidays = ['01/06', '04/01', '12/25']

function countHours(year, holidays) {
    let horasExtra = 0
    holidays.map(day => {
        let date = `${day}/${year}`
        console.log(date)
        let weekday = new Date(date)
        date = weekday.getDay()
        console.log(date)
        if ( date !== 0 && date !== 6) {
            horasExtra += 2
        }
    })
    return horasExtra
  }
  
  console.log('final ', countHours(year, holidays))