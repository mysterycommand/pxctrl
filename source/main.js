if (process.env.NODE_ENV !== 'production') {
    const cb = window.webpackHotUpdate;

    window.webpackHotUpdate = (...args) => {
        const links = document.querySelectorAll('link[rel=stylesheet]');

        for (let link of links) {
            let { href } = link;
            link.href = 'about:blank';
            link.href = href;
        }

        return cb(...args);
    }
}

import './main.scss';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

function onResize(/*event*/) {
    const {
        innerHeight: height,
        innerWidth: width,
    } = window;

    canvas.height = height;
    canvas.width = width;
}

window.addEventListener('resize', onResize);
onResize();

function part(ctx, x, y, width, height, rotation) {
    ctx.save();

    ctx.fillStyle = 'rgba(255,255,0,0.65)';
    ctx.strokeStyle = 'rgba(255,0,255,0.85)';

    ctx.translate(x, y);
    ctx.rotate(rotation);

    ctx.beginPath();

    ctx.arc(0, 0, width / 2, Math.PI, 0);
    ctx.lineTo(width / 2, height);
    ctx.arc(0, 0 + height, width / 2, 0, Math.PI);

    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

function tick(ts) {
    window.requestAnimationFrame(tick);

    const {
        height: h,
        width: w,
    } = canvas;

    const hh = h / 2;
    const hw = w / 2;

    ctx.clearRect(0, 0, w, h);

    part(ctx, hw, hh, 40, 80, Math.PI / 4);
    part(ctx, hw, hh + 80, 40, 80, Math.PI / 6);
}
tick();
