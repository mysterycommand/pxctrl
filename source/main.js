import './lib/style';
import './main.scss';

import { getSinFn } from './lib/util/wave';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const frameFn = getSinFn(5000, -0.5, 2.5);

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
    // requestAnimationFrame(tick);

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

    const f = Math.round(frameFn(ts));
    console.log(f);
    ctx.drawImage(frames[f], hw - 96, hh - 96, 192, 192);

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

].map(url => new Promise((resolve, reject) => {

    const img = new Image(48, 48);
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', reject);
    img.src = url;

}))).then(results => {

    frames = results;
    requestAnimationFrame(tick);

});
