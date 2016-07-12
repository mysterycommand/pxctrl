import './lib/style';
import './main.scss';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

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

addEventListener('resize', onResize);
onResize();

const frames = [];
for (let i = 0, l = 3; i < l; ++i) {
    const img = new Image(48, 48);
    img.src = `./images/megaman-0${i}.png`;
    frames.push(img);
}

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

    if (frames[0]) {
        ctx.drawImage(frames[0], hw - 96, hh - 96, 192, 192);
    }

    // update the 'previous timestamp'
    pts = ts;
}

requestAnimationFrame(tick);
