import './lib/style';
import './main.scss';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const π = Math.PI;
const ππ = 2 * Math.PI;

let fts, pts, dts;
let w, h, hw, hh;
let p = 1500;

function onResize(/*event*/) {
    const {
        innerHeight: height,
        innerWidth: width,
    } = window;

    canvas.height = h = height;
    canvas.width = w = width;
    hh = h / 2;
    hw = w / 2;
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

class Part {
    constructor({ x, y, r, children, }) {
        this.x = x || this.x;
        this.y = y || this.y;
        this.r = r || this.r;

        this.children = children || [];
    }

    x(ts) { return 0; }
    y(ts) { return 0; }
    r(ts) { return 0; }

    pos(ts) {
        const x = this.x(ts);
        const y = this.y(ts);
        const r = this.r(ts);

        return { x, y, r, };
    }
}

const part = new Part({
    x: function x(ts) { return hw; },
    y: function y(ts) { return hh - 60; },

    children: [
        new Part({
            x: sinWave(-20, 20, p),

            y: function y(ts) {
                return 70;
            },

            r: function r(ts) {
                return Math.atan2(this.y(ts) - 40, this.x(ts)) - π / 2;
            },

            children: [
                new Part({
                    y: function y(ts) {
                        return 60;
                    },

                    r: sinWave(0, π / 4, p, 500),
                }),
            ],
        }),

        new Part({
            x: cosWave(-20, 20, p),

            y: function y(ts) {
                return 70;
            },

            r: function r(ts) {
                return Math.atan2(this.y(ts) - 40, this.x(ts)) - π / 2;
            },

            children: [
                new Part({
                    y: function y(ts) {
                        return 60;
                    },

                    r: cosWave(0, π / 4, p, 500),
                }),
            ],
        }),

        new Part({
            x: sinWave(-20, 20, p, -p / 4),

            r: function r(ts) {
                return Math.atan2(this.y(ts) + 30, this.x(ts)) - π / 2;
            },

            children: [
                new Part({
                    y: function y(ts) {
                        return 60;
                    },

                    r: sinWave(0, -π / 4, p, 500),
                }),
            ],
        }),

        new Part({
            x: cosWave(-20, 20, p, 200),

            r: function r(ts) {
                return Math.atan2(this.y(ts) + 30, this.x(ts)) - π / 2;
            },

            children: [
                new Part({
                    y: function y(ts) {
                        return 60;
                    },

                    r: cosWave(0, -π / 4, p, 500),
                }),
            ],
        }),
    ],
});

function draw(ctx, ts, part) {
    ctx.save();

    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(255,255,0,0.65)';
    ctx.strokeStyle = 'rgba(255,0,255,0.85)';

    const { x, y, r, } = part.pos(ts);
    ctx.translate(x, y);
    ctx.rotate(r);

    ctx.beginPath();
    ctx.arc(0, 0, 20, π, 0);
    ctx.arc(0, 60, 20, 0, π);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    part.children.forEach((child) => draw(ctx, ts, child));

    ctx.restore();
}

(function tick(ts = Date.now()) {
    window.requestAnimationFrame(tick);

    fts || (fts = ts);
    pts || (pts = fts);

    ts -= fts;
    dts = ts - pts;

    ctx.clearRect(0, 0, w, h);
    draw(ctx, ts, part);

    pts = ts;
})();
