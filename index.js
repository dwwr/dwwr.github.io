// Made with Zdog

Zfont.init(Zdog);

var font = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf",
});

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
  // zoom: 4,
  // enable rotating scene with dragging
  dragRotate: true,
  // resize: 'fullscreen',
  onResize: function (width, height) {
    this.zoom = Math.floor(Math.min(width, height) / 24);
  },
});

let boxGroup = new Zdog.Group({
  addTo: illo,
  width: 300,
  height: 300,
  depth: 300,
  // stroke: false,
  // color: '#C25', // default face color
  // leftFace: '#EA0',
  // rightFace: '#E62',
  // topFace: '#ED0',
  // bottomFace: '#636',
  updateSort: true,
  backface: false,
});

let box = new Zdog.Box({
  addTo: boxGroup,
  width: 300,
  height: 300,
  depth: 300,
  stroke: false,
  color: "#C25", // default face color
  leftFace: "#EA0",
  rightFace: "#E62",
  topFace: "#ED0",
  bottomFace: "#636",
  updateSort: true,
});

[4, 2, 1, -4].forEach((d) =>
  [false, true].forEach((isFixed) => {
    let textGroup = new Zdog.Group({
      translate: { z: 1 },
      addTo: box,
      rotate: { y: Zdog.TAU / d },
    });

    new Zdog.Text({
      translate: { z: 151 },
      addTo: textGroup,
      font: font,
      value: "sweet BBJ!!",
      fontSize: 50,
      stroke: 2,
      textAlign: "center",
      textBaseline: "middle",
      color: "#fff",
      fill: true,
      // backface: false,
    });

    if (isFixed) {
      new Zdog.Text({
        translate: { z: 300 },
        addTo: textGroup,
        font: font,
        visible: false,
        fontSize: 50,
        stroke: 0,
        textAlign: "center",
        textBaseline: "middle",
        color: "#fff",
        fill: true,
        backface: false,
      });
    }
  })
);

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
