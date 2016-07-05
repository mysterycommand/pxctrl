import './lib/style';
import './main.scss';

import { sine, cosine } from './lib/wave';
import Puppet from './lib/puppet';

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

let fts, pts, dts;
let w, h, hw, hh;

const p0 = 5000;
const p1 = 8000;
const p2 = 13000;

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
    _x: sine(110, -60, p1),
    _y: sine(75, -25, p1),
    _z: sine(2, 0, p1, p1 / 4),
    _width: (ts) => 50,
    _height: (ts) => 50,
}));

puppet.addChild(new Puppet({
    _x: sine(-60, 110, p1),
    _y: sine(-25, 75, p1),
    _z: sine(0, 2, p1, p1 / 4),
    _width: (ts) => 50,
    _height: (ts) => 50,
}));

puppet.addChild(new Puppet({
    _x: cosine(150, -75, p2, p2 / 2),
    _y: cosine(150, -75, p2),
    _z: cosine(2, 0, p2, p2 / 4),
    _width: (ts) => 25,
    _height: (ts) => 25,
}));

puppet.addChild(new Puppet({
    _x: cosine(-75, 150, p2, p2 / 2),
    _y: cosine(-75, 150, p2),
    _z: cosine(0, 2, p2, p2 / 4),
    _width: (ts) => 25,
    _height: (ts) => 25,
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

    puppet._x = sine(hw / 2, hw + hw / 2, p0);
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
