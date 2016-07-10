import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const { PI: π } = Math;
const ππ = π * 2;

let fts = -1, pts = -1, dts;
let w, h, hw, hh;

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

    if (fts === -1) { fts = ts; }
    ts -= fts;

    if (pts === -1) { pts = ts; }
    dts = ts - pts;

    pts = ts;
};

window.requestAnimationFrame(tick);
