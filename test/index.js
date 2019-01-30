import SVGpath, { path2string } from '../index'
const { x, y, width, height } = document.getElementById('inner').getBoundingClientRect()
let svg = new SVGpath({
    x,
    y,
    width,
    height,
    opacity: 0.5,
    lineWidth: 3,
    onSure: function (res) {
        console.log(res)
        console.log(path2string(res.data))
        document.getElementById('data').innerHTML = path2string(res.data)
    }
})
document.getElementById('start').onclick = () => svg.draw()