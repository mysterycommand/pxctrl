import './lib/style';
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

(function tick(ts) {
    window.requestAnimationFrame(tick);

    const {
        height: h,
        width: w,
    } = canvas;

    const hh = h / 2;
    const hw = w / 2;

    ctx.clearRect(0, 0, w, h);
})();
