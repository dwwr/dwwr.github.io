Zfont.init(Zdog)

const font = new Zdog.Font({
  // src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf',
  src: '/src/assets/NotoSans-Regular.ttf',
})

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
})

const boxGroup = new Zdog.Group({
  addTo: illo,
  updateSort: true,
})

const box = new Zdog.Box({
  addTo: boxGroup,
  width: 300,
  height: 300,
  depth: 300,
  stroke: false,
  color: '#C25',
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  updateSort: true,
})

;[4, 2, 1, -4].forEach(d =>
  [false, true].forEach(isFixed => {
    const textGroup = new Zdog.Group({
      translate: { z: 1 },
      addTo: boxGroup,
      rotate: { y: Zdog.TAU / d },
    })

    const text = new Zdog.Text({
      translate: { z: 151 },
      addTo: textGroup,
      font: font,
      value: 'sweet BBJ!!\n',
      fontSize: 50,
      stroke: 2,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#fff',
      fill: true,
    })

    if (isFixed) {
      const antiText = new Zdog.Text({
        translate: { z: 300 },
        addTo: textGroup,
        font: font,
        visible: false,
      })
    }
  })
)
;[-4, 4].forEach(d =>
  [false, true].forEach(isFixed => {
    const textGroup = new Zdog.Group({
      translate: { z: 1 },
      addTo: boxGroup,
      rotate: { x: Zdog.TAU / d },
    })

    const text = new Zdog.Text({
      translate: { z: 151 },
      addTo: textGroup,
      font: font,
      value: 'Sweet \nlittle \nprep',
      fontSize: 50,
      stroke: 2,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#fff',
      fill: true,
    })

    if (isFixed) {
      const antiText = new Zdog.Text({
        translate: { z: 300 },
        addTo: textGroup,
        font: font,
        visible: false,
      })
    }
  })
)

const animate = () => {
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}

animate()
