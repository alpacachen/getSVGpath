class SVGpath {
    constructor(opt) {
        this.x = opt.x;
        this.y = opt.y;
        this.lineWidth = opt.lineWidth;
        this.width = opt.width;
        this.height = opt.height;
        this.opacity = opt.opacity || 0.4;
        this.path = (opt.default && opt.default.data) || [];
        this.onSure = opt.onSure;
        this.canvas = null;
        this.ctx = null;
        this.div = null;
        this.mode = (opt.default && opt.default.mode) || 'free';
    }
    draw() {
        this.render();
        if (this.mode === 'free') {
            this.mode_free();
        } else if (this.mode === 'line') {
            this.mode_line();
        }
    }
    render() {
        this.div = document.createElement('div');
        this.div.innerHTML = `
            <div id='SVGpath_wrap' style="position:absolute;top:${this.y}px;left:${this.x}px;width:${this.width}px;height:${
            this.height
            }px;background: rgba(0,0,0,${this.opacity});z-index: 1;">
                <canvas id="SVGpath_Canvas" width=${this.width} height=${this.height}></canvas>
                <div style="font-size:16px;padding: 4px;background: rgba(0,0,0,.4);border-radius: 4px;position: absolute;top: 10px;width: 95%;box-sizing: border-box;left: 0;right: 0;margin: auto;display: flex;justify-content: space-between;">
                    <div id="optioncon" style="color:#FFFFFF">
                        <input id="SVGpath_free" style="margin:0 4px;" type="radio" name="mode" value="free" ${this.mode === 'free' ? 'checked' : ''} />free  
                        <input id="SVGpath_line" style="margin:0 4px;" type="radio" name="mode" value="line" ${this.mode === 'line' ? 'checked' : ''} />line
                    </div>
                    <div>
                        <button style="border-radius:4px;border:0;color:#B2B2B2;background:rgba(0,0,0,.6);" id="SVGpath_cancel">cancel</button>
                        <button style="border-radius:4px;border:0;color:#B2B2B2;background:rgba(0,0,0,.6);" id="SVGpath_sure">sure</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(this.div);
        this.canvas = document.getElementById('SVGpath_Canvas');
        this.ctx = this.canvas.getContext('2d');
        document.getElementById('SVGpath_sure').onclick = () => {
            this.onSure({ data: this.path, baseWidth: this.width, mode: this.mode });
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
        // q中点   e起点
        let isDrawing_idx = null;
        let isDrawing_e_idx = null
        this.ctx.lineWidth = 3;
        const findIdx = (x, y) => {
            let idx = {};
            this.path.forEach((item, index) => {
                let tx = item[0]
                let ty = item[1]
                if (x < tx + 15 && x > tx - 15 && y < ty + 15 && y > ty - 15) {
                    idx = { index, type: 'e' }
                    return
                }
                if (!item[2]) {
                    return;
                } else {
                    const ix = item[2][0];
                    const iy = item[2][1];
                    if (x < ix + 15 && x > ix - 15 && y < iy + 15 && y > iy - 15) {
                        idx = { index, type: 'q' }
                    }
                }
            });
            return idx;
        };
        const move_e = e => {
            const idx = findIdx(e.offsetX, e.offsetY); // 判断鼠标在哪点上
            if (idx.index) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = '';
            }
            if (isDrawing_e_idx !== null) {
                this.path[isDrawing_e_idx][0] = e.offsetX
                this.path[isDrawing_e_idx][1] = e.offsetY
                draw_lines();
            }
        }
        const move_q = e => {
            const idx = findIdx(e.offsetX, e.offsetY); // 判断鼠标在哪点上
            if (idx.index) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = '';
            }
            if (isDrawing_idx !== null) {
                this.path[isDrawing_idx][2] = [e.offsetX, e.offsetY]
                draw_lines();
            }
        }
        const draw_lines = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.beginPath();
            for (let i = 0; i < this.path.length; i++) {
                //原点
                this.add_arc(this.path[i][0], this.path[i][1], 5, 0, 2 * Math.PI, false, 'orange');
                this.ctx.moveTo(this.path[i][0], this.path[i][1]);
                this.ctx.save();
                if (this.path[i + 1]) {
                    let qx = this.path[i + 1][2][0];
                    let qy = this.path[i + 1][2][1];
                    this.ctx.quadraticCurveTo(qx, qy, this.path[i + 1][0], this.path[i + 1][1]);
                    this.ctx.stroke();
                    //中点
                    this.ctx.restore();
                    this.add_arc(qx, qy, 5, 0, 2 * Math.PI, false, 'gray');
                    this.ctx.setLineDash([2, 2]);
                    this.add_line(qx, qy, this.path[i][0], this.path[i][1]);
                    this.add_line(qx, qy, this.path[i + 1][0], this.path[i + 1][1]);
                    this.ctx.setLineDash([]);
                }
            }
        }
        draw_lines();
        this.canvas.onmousedown = e => {
            const idx = findIdx(e.offsetX, e.offsetY);
            if (idx.type === 'q') {
                isDrawing_idx = idx.index;
                this.canvas.onmousemove = move_q
                return;
            }
            if (idx.type === 'e') {
                isDrawing_e_idx = idx.index;
                this.canvas.onmousemove = move_e
                return;
            }
            this.path.push([e.offsetX, e.offsetY]);
            if (this.path.length > 1) {
                let len = this.path.length;
                let qx = (e.offsetX + this.path[len - 2][0]) / 2;
                let qy = (e.offsetY + this.path[len - 2][1]) / 2;
                this.path[len - 1].push([qx, qy]);
            }
            draw_lines();
        };
        this.canvas.onmousemove = null
        this.canvas.onmouseup = () => { isDrawing_idx = null; isDrawing_e_idx = null };
        this.canvas.mouseout = () => { isDrawing_idx = null; isDrawing_e_idx = null };
    }
    mode_free() {
        document.body.style.cursor = 'crosshair';
        let isDrawing = false;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.lineWidth = this.lineWidth || 3;
        const drawLine = () => {
            this.ctx.beginPath();
            for (let i = 0; i < this.path.length; i++) {
                this.ctx.lineTo(this.path[i][0], this.path[i][1]);
            }
            this.ctx.stroke();
        };
        this.ctx.strokeStyle = '#ffffff';
        this.canvas.onmousedown = e => {
            isDrawing = true;
            this.path.push([e.offsetX, e.offsetY]);
        };
        this.canvas.onmousemove = throttle(
            e => {
                if (!isDrawing) return;
                this.path.push([e.offsetX, e.offsetY]);
                this.ctx.clearRect(0, 0, this.width, this.height);
                drawLine();
            },
            50,
            60
        );
        this.canvas.onmouseup = () => (isDrawing = false);
        this.canvas.mouseout = () => (isDrawing = false);
        drawLine();
    }
    add_arc(x, y, r, sa, ea, counterclockwise, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, r, sa, ea, counterclockwise);
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }
    add_line(sx, sy, ex, ey) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#ffffff'
        this.ctx.moveTo(sx, sy);
        this.ctx.lineTo(ex, ey);
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
        if (mode === 'free') {
            document.body.style.cursor = 'crosshair';
        } else {
            document.body.style.cursor = '';
        }
    }
    close() {
        try {
            document.body.removeChild(this.div);
            document.body.style.cursor = '';
        } catch (e) {
            console.warn('是不是已经关闭了？');
        }
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
        if (item[2]) {
            chr = `Q${item[2][0] * ratio} ${item[2][1] * ratio}`;
        }
        str += `${chr} ${item[0] * ratio} ${item[1] * ratio} `;
    });
    return str;
};
export default SVGpath;
export { path2string };
