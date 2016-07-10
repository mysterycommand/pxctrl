import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const { PI: π } = Math;
const ππ = π * 2;

let fts = -1, pts = -1, dts;
let w, h, hw, hh;

let fx, fy, r = 100, p = 128;

function onResize(/*event*/) {
    const {
        innerHeight: height,
        innerWidth: width,
    } = window;

    canvas.height = h = height;
    canvas.width = w = width;
    hh = h / 2;
    hw = w / 2;

    fx = cosine(hw - r, hw + r, p);
    fy = sine(hh - r, hh + r, p);
}

window.addEventListener('resize', onResize);
onResize();

function toDeg(rad) {
    return rad * 180 / π;
}

function tick(ts) {
    // window.requestAnimationFrame(tick);

    if (fts === -1) { fts = ts; }
    ts -= fts;

    if (pts === -1) { pts = ts; }
    dts = ts - pts;

    // do work with ts or dts here
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < p; ++i) {
        ctx.save();

        let x = fx(i);
        let y = fy(i);
        let a = Math.atan2(y - hh, x - hw);
        let h = (ππ * r) / p;

        ctx.translate(x, y);
        ctx.rotate(a);

        ctx.fillStyle = `hsl(${toDeg(a) + 90},100%,50%)`;
        ctx.fillRect(0, -h / 2, 25, h);

        ctx.restore();
    }

    pts = ts;
};

window.requestAnimationFrame(tick);
