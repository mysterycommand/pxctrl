import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const { PI: π } = Math;
const ππ = π * 2;

let fts = -1, pts = -1, dts;
let w, h, hw, hh;

const p = 12000;
const fx = cosine(-1, 1, p);
const fy = sine(-1, 1, p);

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

function toDeg(rad) {
    return rad * 180 / π;
}

function tick(ts) {
    window.requestAnimationFrame(tick);

    // if there is no 'first timestamp' use the current one
    if (fts === -1) { fts = ts; }

    // make this 'timestamp' relative to the 'first timestamp'
    ts -= fts;

    // if there is no 'previous timestamp' use the current one
    if (pts === -1) { pts = ts; }

    // make the 'delta timestamp' the difference between this 'timestamp'
    // and the 'previous timestamp' (will be 0 on the first frame)
    dts = ts - pts;

    // do work with ts or dts here
    const x = fx(ts);
    const y = fy(ts);
    const a = Math.atan2(y, x);
    const d = toDeg(a) + 90;
    const e = (d + 180) % 360;

    ctx.fillStyle = `hsl(${d},70%,30%)`;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = `hsl(${e},70%,30%)`;
    ctx.shadowBlur = 200;
    ctx.shadowColor = 'rgba(0,0,0,0.65)';
    ctx.fillRect(hw - 100, hh - 100, 200, 200);

    // update the 'previous timestamp'
    pts = ts;
};

window.requestAnimationFrame(tick);
