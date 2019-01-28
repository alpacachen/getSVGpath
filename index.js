class SVGpath {
    constructor(opt) {
        // if (!SVGpath.instance) {    目前不需要单例模式
        this.x = opt.x;
        this.y = opt.y;
        this.lineWidth = opt.lineWidth;
        this.width = opt.width;
        this.height = opt.height;
        this.opacity = opt.opacity || 0.8;
        this.path = [[0, 0]];
        this.onSure = opt.onSure;
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
        this.path = [];
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        const div = document.createElement('div');
        div.innerHTML = `
        <div id='SVGpath_wrap' style="position:absolute;top:${this.y}px;left:${this.x}px;width:${this.width}px;height:${
            this.height
        }px;box-shadow: 0 0 10px #000;background: #fff;opacity:${this.opacity};border-radius: 4px;z-index: 1;">
            <canvas id="SVGpath_Canvas" width=${this.width} height=${this.height}></canvas>
            <div style="text-align: right;position: relative;top: -28px;padding: 0 8px;">
                <button id="SVGpath_cancel">取消</button>
                <button id="SVGpath_sure">确定</button>
            </div>
        </div>
    `;
        document.body.appendChild(div);
        const canvas = document.getElementById('SVGpath_Canvas');
        const ctx = canvas.getContext('2d');
        const drawLine = e => {
            if (!isDrawing) return;
            ctx.beginPath();
            ctx.lineWidth = this.lineWidth || 5;
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
        };
        ctx.strokeStyle = '#666666';
        canvas.addEventListener('mousedown', e => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
            this.path.push([e.offsetX, e.offsetY]);
        });
        canvas.addEventListener('mousemove', throttle(drawLine, 50, 60));
        canvas.addEventListener('mouseup', () => (isDrawing = false));
        canvas.addEventListener('mouseout', () => (isDrawing = false));
        document.getElementById('SVGpath_sure').onclick = () => {
            this.onSure({ data: this.path, baseWidth: this.width });
            document.body.removeChild(div);
        };
        document.getElementById('SVGpath_cancel').onclick = () => {
            document.body.removeChild(div);
        };
    }
}

//节流函数，此处用来快速画直线
const throttle = function(fn, delay, mustRunDelay) {
    let timer = null;
    let t_start;
    return function() {
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
            timer = setTimeout(function() {
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
