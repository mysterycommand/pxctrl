import './lib/style';
import './main.scss';

import { saw } from './lib/util/math';
import { getWaveFn } from './lib/util/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

function getFrameFn(period, totalFrames) {
    const sawFn = getWaveFn(saw, period, 0, totalFrames);
    return (ts) => Math.floor(sawFn(ts));
}
const frameFn = getFrameFn(500, 4);

let fts = -1, pts = -1, dts;
let w, h, hw, hh, frames;

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

addEventListener('resize', onResize);
onResize();

function tick(ts) {
    requestAnimationFrame(tick);

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
    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = false;

    const f = frameFn(ts);
    ctx.drawImage(frames[f], hw - 96, hh - 96, 192, 192);

    ctx.fillStyle = '#fff';
    ctx.font = '24px monospace';
    ctx.fillText((1000 / dts).toFixed(2), 8, 28);
    ctx.fillText(f, 8, 56);

    // update the 'previous timestamp'
    pts = ts;
}

addEventListener('click', () => {
    requestAnimationFrame(tick);
});

Promise.all([

    './images/megaman-00.png',
    './images/megaman-01.png',
    './images/megaman-02.png',
    './images/megaman-01.png',

].map(url => new Promise((resolve, reject) => {

    const img = new Image(48, 48);
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', reject);
    img.src = url;

}))).then(results => {

    frames = results;
    requestAnimationFrame(tick);

});
