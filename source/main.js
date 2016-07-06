import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';

const { PI: π } = Math;
const ππ = π * 2;

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

let fts, pts, dts;
let w, h, hw, hh;

const bkgdX = sine(0, 360, 60000);
const bkgdY = cosine(0, 360, 60000);
const bkgd = (ts) => {
    const x = bkgdX(ts);
    const y = bkgdY(ts);

    return Math.atan2(y, x) * 180 / π;
};

const foreX = sine(0, 360, 60000, 30000);
const foreY = cosine(0, 360, 60000, 30000);
const fore = (ts) => {
    const x = foreX(ts);
    const y = foreY(ts);

    return Math.atan2(y, x) * 180 / π;
};

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

(function tick(ts = performance.now()) {
    window.requestAnimationFrame(tick);

    fts || (fts = ts);
    pts || (pts = fts);

    ts -= fts;
    dts = ts - pts;
    // ts = Math.random() * 60000;
    // console.log(ts.toFixed(2), bkgd(ts).toFixed(2), fore(ts).toFixed(2));
    console.log(ts);

    ctx.fillStyle = `hsl(${bkgd(ts)}, 50%, 50%)`;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = `hsl(${fore(ts)}, 50%, 50%)`;
    ctx.fillRect(hw - 50, hh - 50, 100, 100);

    pts = ts;
})();
