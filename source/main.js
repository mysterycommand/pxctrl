import './lib/style';
import './main.scss';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const π = Math.PI;
const ππ = 2 * Math.PI;

let ud, lr;
let w, h, hw, hh;
let p = 3000;

function onResize(/*event*/) {
    const {
        innerHeight: height,
        innerWidth: width,
    } = window;

    canvas.height = h = height;
    canvas.width = w = width;
    hh = h / 2;
    hw = w / 2;

    ud = sinWave(0 + hh / 2, h - hh / 2, p);
    lr = cosWave(0 + hw / 2, w - hw / 2, p);
}

window.addEventListener('resize', onResize);
onResize();

function sinWave(min, max, period, offset = 0) {
    return function(ts) {
        return ((max - min) / 2) * (1 + Math.sin((ts + offset) * (ππ / period))) + min;
    }
}

function cosWave(min, max, period, offset = 0) {
    return function(ts) {
        return ((max - min) / 2) * (1 + Math.cos((ts + offset) * (ππ / period))) + min;
    }
}

function draw(ctx, ts) {
    ctx.save();

    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(255,255,0,0.65)';
    ctx.strokeStyle = 'rgba(255,0,255,0.85)';

    const x = lr(ts);
    const y = ud(ts);

    ctx.translate(x, y);
    ctx.rotate(Math.atan2(y - hh, x - hw) + π / 2);
    ctx.beginPath();
    ctx.arc(0, 0, 20, π, 0);
    ctx.arc(0, 60, 20, 0, π);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

(function tick(ts = Date.now()) {
    window.requestAnimationFrame(tick);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0, l = 11; i < l; ++ i) {
        draw(ctx, ts + i * (p / l));
    }
})();
