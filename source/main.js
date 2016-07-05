import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';
import Puppet from './lib/puppet';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

let fts, pts, dts;
let w, h, hw, hh;

const puppet = new Puppet({
    // _x: sine(hw - 20, hw + 20, 1000),

    _y(ts) {
        return hh - this.height / 2;
    },

    _z(ts) { return 1; },

    _width(ts) {
        return 100;
    },

    _height(ts) {
        return 100;
    },
});

puppet.addChild(new Puppet({
    _x: sine(110, -60, 3000),

    _y(ts) { return this.parent.height - this.height / 2; },

    _z: sine(2, 0, 3000, 3000 / 4),

    _width(ts) {
        return 50;
    },

    _height(ts) {
        return 50;
    },
}));

puppet.addChild(new Puppet({
    _x: sine(-60, 110, 3000),

    _y(ts) { return -this.height / 2; },

    _z: sine(0, 2, 3000, 3000 / 4),

    _width(ts) {
        return 50;
    },

    _height(ts) {
        return 50;
    },
}));

function onResize(/*event*/) {
    const {
        innerHeight: height,
        innerWidth: width,
    } = window;

    canvas.height = h = height;
    canvas.width = w = width;
    hh = h / 2;
    hw = w / 2;

    puppet._x = sine(hw / 2, hw + hw / 2, 5000);
}

window.addEventListener('resize', onResize);
onResize();

(function tick(ts = Date.now()) {
    window.requestAnimationFrame(tick);

    fts || (fts = ts);
    pts || (pts = fts);

    ts -= fts;
    dts = ts - pts;

    ctx.clearRect(0, 0, w, h);
    puppet.update(ts);
    puppet
        .flat()
        .forEach(p => p.draw(ctx));

    pts = ts;
})();
