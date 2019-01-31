class SVGpath {
    constructor(opt) {
        this.x = opt.x;
        this.y = opt.y;
        this.lineWidth = opt.lineWidth;
        this.width = opt.width;
        this.height = opt.height;
        this.opacity = opt.opacity || 0.8;
        this.path = [];
        this.onSure = opt.onSure;
        this.canvas = null;
        this.ctx = null;
        this.div = null;
        this.mode = 'free';
    }
    draw() {
        this.render();
        this.mode_free();
    }
    render() {
        this.div = document.createElement('div');
        this.div.innerHTML = `
            <div id='SVGpath_wrap' style="position:absolute;top:${this.y}px;left:${this.x}px;width:${this.width}px;height:${
            this.height
            }px;box-shadow: 0 0 10px #000;background: #fff;opacity:${this.opacity};border-radius: 4px;z-index: 1;">
                <canvas id="SVGpath_Canvas" width=${this.width} height=${this.height}></canvas>
                <div style="text-align: right;position: relative;top: -28px;padding: 0 8px;">
                    <button id="SVGpath_cancel">cancel</button>
                    <button id="SVGpath_sure">sure</button>
                </div>
                <div style="top: -28px;position: absolute;top: -12px;right: 0;">
                    <button id="SVGpath_free">free mode</button>
                    <button id="SVGpath_line">line mode</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.div);
        this.canvas = document.getElementById('SVGpath_Canvas');
        this.ctx = this.canvas.getContext('2d');
        document.getElementById('SVGpath_sure').onclick = () => {
            this.onSure({ data: this.path, baseWidth: this.width });
            document.body.removeChild(this.div);
        };
        document.getElementById('SVGpath_cancel').onclick = () => {
            document.body.removeChild(this.div);
        };
        document.getElementById('SVGpath_free').onclick = () => {
            this.cmode('free');
            this.clear();
            this.mode_free();
        };
        document.getElementById('SVGpath_line').onclick = () => {
            this.cmode('line');
            this.clear();
            this.mode_line();
        };
    }
    mode_line() {
        this.path = [];
        let q_path = []
        let isDrawing_idx = null
        this.ctx.lineWidth = 3;
        const findq = (x, y) => {
            let idx = null
            q_path.forEach((item, index) => {
                const ix = item[0]
                const iy = item[1]
                if (x < ix + 5 && x > ix - 5 && y < iy + 5 && y > iy - 5) {
                    idx = index
                }
            })
            return idx
        }
        const draw_lines = () => {
            this.ctx.beginPath();
            for (let i = 0; i < this.path.length; i++) {
                //原点
                this.add_arc(this.path[i][0], this.path[i][1], 5, 0, 2 * Math.PI, false, 'orange')
                this.ctx.moveTo(this.path[i][0], this.path[i][1]);
                if (this.path[i + 1]) {
                    let qx = q_path[i][0]
                    let qy = q_path[i][1]
                    this.ctx.quadraticCurveTo(qx, qy, this.path[i + 1][0], this.path[i + 1][1]);
                    this.ctx.stroke();
                    //中点
                    this.add_arc(qx, qy, 5, 0, 2 * Math.PI, false, 'gray')
                }
            }
        };
        this.canvas.onmousedown = e => {
            const inq = findq(e.offsetX, e.offsetY)
            if (inq !== null) {
                isDrawing_idx = inq
                return
            }
            // [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
            if (this.path.length > 1) {
                let len = this.path.length
                let qx = (e.offsetX + this.path[len - 2][0]) / 2
                let qy = (e.offsetY + this.path[len - 2][1]) / 2
                q_path.push([qx, qy])
            }
            draw_lines()
        };
        this.canvas.onmousemove = throttle(e => {
            const idx = findq(e.offsetX, e.offsetY) // 判断鼠标在哪个中点上
            if (idx !== null) {
                document.body.style.cursor = 'pointer'
            } else {
                document.body.style.cursor = 'default'
            }
            if (isDrawing_idx !== null) {
                q_path.splice(isDrawing_idx, 1, [e.offsetX, e.offsetY])
                this.ctx.clearRect(0,0,this.width,this.height)
                draw_lines()
            }
        }, 70, 80)
        this.canvas.onmouseup = () => (isDrawing_idx = null);
        this.canvas.mouseout = () => (isDrawing_idx = null);
    }
    mode_free() {
        this.path = [];
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.lineWidth = this.lineWidth || 5;
        const drawLine = e => {
            if (!isDrawing) return;
            this.ctx.beginPath();
            this.ctx.moveTo(lastX, lastY);
            this.ctx.lineTo(e.offsetX, e.offsetY);
            this.ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
        };
        this.ctx.strokeStyle = '#666666';
        this.canvas.onmousedown = e => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
        };
        this.canvas.onmousemove = throttle(drawLine, 50, 60);
        this.canvas.onmouseup = () => (isDrawing = false);
        this.canvas.mouseout = () => (isDrawing = false);
    }
    add_arc(x, y, r, sa, ea, counterclockwise, color) {
        this.ctx.beginPath()
        this.ctx.fillStyle = color
        this.ctx.arc(x, y, r, sa, ea, counterclockwise);
        this.ctx.fill()
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
    }
    clear() {
        this.path = [];
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.canvas.onmousedown = null;
        this.canvas.onmousemove = null;
        this.canvas.onmouseup = null;
        this.canvas.mouseout = null;
    }
    cmode(mode) {
        this.mode = mode;
    }
}

//节流函数，此处用来快速画直线
const throttle = function (fn, delay, mustRunDelay) {
    let timer = null;
    let t_start;
    return function () {
        let context = this,
            args = arguments,
            t_curr = +new Date();
        clearTimeout(timer);
        if (!t_start) {
            t_start = t_curr;
        }
        if (t_curr - t_start >= mustRunDelay) {
            fn.apply(context, args);
            t_start = t_curr;
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
};

//将二维数组转svg path格式
const path2string = (array = [], ratio = 1) => {
    let str = '';
    array.forEach((item, index) => {
        let chr = 'L';
        if (index === 0) {
            chr = 'M';
        }
        str += `${chr}${item[0] * ratio} ${item[1] * ratio} `;
    });
    return str;
};
export default SVGpath;
export { path2string };
