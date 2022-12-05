const boxes = [
    { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2}
  ]

  function fitsInOneBox(boxes) {
    let almacenar = true
    boxes.sort((a, b) => {
        return a.l - b.l
    })
    boxes.reduce((acc, act) => {
        if (act.l <= acc.l || act.w <= acc.w || act.h <= acc.h ) {
            almacenar = false
        }
        return act
    }, 0)

    console.log(boxes)
    console.log(almacenar)

    return almacenar
  }




  fitsInOneBox(boxes)