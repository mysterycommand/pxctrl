import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

let fts = -1, pts = -1, dts = -1;
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

function tick(ts) {
    // window.requestAnimationFrame(tick);

    if (fts === -1) { fts = ts; }
    ts -= fts;

    if (pts === -1) { pts = ts; }
    if (dts === -1) { dts = ts; }
    dts = ts - pts;

    // do work with ts or dts here
    // console.log('fts:', fts.toFixed(3));
    // console.log('pts:', pts.toFixed(3));
    // console.log(' ts:', ts.toFixed(3));
    // console.log('dts:', dts.toFixed(3));
    // console.log('fps:', (1000 / dts).toFixed(3));
    // console.log('');

    pts = ts;
};

window.requestAnimationFrame(tick);
