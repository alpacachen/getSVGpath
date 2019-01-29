class SVGpath {
    constructor(opt) {
        // if (!SVGpath.instance) {    目前不需要单例模式
        this.x = opt.x;
        this.y = opt.y;
        this.lineWidth = opt.lineWidth;
        this.width = opt.width;
        this.height = opt.height;
        this.opacity = opt.opacity || 0.8;
        this.path = [];
        this.onSure = opt.onSure;
        this.canvas = null
        this.ctx = null
        this.div = null
        this.mode = 'free'
        // SVGpath.instance = this
        // }
        // return SVGpath.instance
    }
    // static getInstance(opt) {
    //     if (!this.instance) {
    //         this.instance = new SVGpath(opt)
    //     }
    //     return this.instance
    // }
    draw() {
        this.render()
        this.mode_free()
    }
    render() {
        this.div = document.createElement('div');
        this.div.innerHTML = `
            <div id='SVGpath_wrap' style="position:absolute;top:${this.y}px;left:${this.x}px;width:${this.width}px;height:${
            this.height
            }px;box-shadow: 0 0 10px #000;background: #fff;opacity:${this.opacity};border-radius: 4px;z-index: 1;">
                <canvas id="SVGpath_Canvas" width=${this.width} height=${this.height}></canvas>
                <div style="text-align: right;position: relative;top: -28px;padding: 0 8px;">
                    <button id="SVGpath_cancel">取消</button>
                    <button id="SVGpath_sure">确定</button>
                </div>
                <div style="text-align: right;position: relative;top: -28px;padding: 0 8px;">
                    <button id="SVGpath_free">自由模式</button>
                    <button id="SVGpath_line">连线模式</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.div);
        this.canvas = document.getElementById('SVGpath_Canvas');
        this.ctx = this.canvas.getContext('2d')
        document.getElementById('SVGpath_sure').onclick = () => {
            this.onSure({ data: this.path, baseWidth: this.width });
            document.body.removeChild(this.div);
        };
        document.getElementById('SVGpath_cancel').onclick = () => {
            document.body.removeChild(this.div);
        };
        document.getElementById('SVGpath_free').onclick = () => {
            this.cmode('free')
            this.clear()
            this.mode_free()
        };
        document.getElementById('SVGpath_line').onclick = () => {
            this.cmode('line')
            this.clear()
            this.mode_line()
        };
    }
    mode_line() {
        this.path = [];
        let lastX = null;
        let lastY = null;
        const draw_lines = () => {
            this.ctx.beginPath()
            for (let i = 0; i < this.path.length; i++) {
                this.ctx.fillStyle = "red";
                this.ctx.arc(this.path[i][0], this.path[i][1], 5, 0, 2 * Math.PI)
                this.fillStyle = 'orange'
                this.ctx.fill()
                this.ctx.moveTo(this.path[i][0], this.path[i][1])
                if (this.path[i + 1]) this.ctx.lineTo(this.path[i + 1][0], this.path[i + 1][1])
                this.ctx.stroke()
            }
        }
        this.canvas.onmousedown = e => {
            this.ctx.beginPath()
            this.ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI)
            this.ctx.fillStyle = "orange";
            this.ctx.fill();
            this.ctx.moveTo(e.offsetX, e.offsetY);
            this.ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
        }
        this.canvas.onmousemove = e => {
            if (lastX === null || lastY === null) return
            draw_lines()
            this.ctx.clearRect(0, 0, this.width, this.height)
            this.ctx.moveTo(lastX, lastY)
            this.ctx.lineTo(e.offsetX, e.offsetY)
            this.ctx.stroke()
        }
    }
    mode_free() {
        this.path = [];
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        const drawLine = e => {
            if (!isDrawing) return;
            this.ctx.beginPath();
            this.ctx.lineWidth = this.lineWidth || 5;
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
        }
        this.canvas.onmousemove = throttle(drawLine, 50, 60)
        this.canvas.onmouseup = () => (isDrawing = false)
        this.canvas.mouseout = () => (isDrawing = false)
    }
    clear() {
        this.path = []
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.mouseout = null
    }
    cmode(mode) {
        this.mode = mode
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
