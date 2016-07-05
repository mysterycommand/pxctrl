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
        return 40;
    },

    _height(ts) {
        return 100;
    },
});

puppet.addChild(new Puppet({
    _x(ts) { return this.parent.width - 10; },

    _y(ts) { return this.parent.height - 10; },

    _width(ts) {
        return 20;
    },

    _height(ts) {
        return 20;
    },
}));

puppet.addChild(new Puppet({
    _x(ts) { return -10; },

    _y(ts) { return -10; },

    _z(ts) { return 2; },

    _width(ts) {
        return 20;
    },

    _height(ts) {
        return 20;
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
        .forEach(part => part.draw(ctx));

    pts = ts;
})();
