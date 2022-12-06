const boxes = [
    { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
  ]

  function fitsInOneBox(boxes) {
    let almacenar = false
    let l = boxes.slice()
    let w = boxes.slice()
    let h = boxes.slice()

    orden(l, 'l')
    orden(w, 'w')
    orden(h, 'h')

    if ( l === h ) {
        almacenar = true
    }

    console.log(boxes)
    // console.log(l)
    // console.log(w)
    // console.log(h)
    console.log(almacenar)

    return almacenar
  }

  function orden (lista, valor) {
    lista.sort((a, b) => {
        return a[valor] - b[valor]
    })
    console.log(lista)
  }




  fitsInOneBox(boxes)