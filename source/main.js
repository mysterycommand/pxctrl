import './lib/style';
import './main.scss';

import resize from './lib/on/resize';
import tick from './lib/on/tick';

import { tri } from './lib/util/math';
import { getStepFn } from './lib/util/wave';

import load from './lib/on/load';
load([
    './images/megaman-00.png',
    './images/megaman-01.png',
    './images/megaman-02.png',
], results => {
    const cvs = document.getElementById('js-canvas');
    const ctx = cvs.getContext('2d');

    const frameFn = getStepFn(tri, 500, 0.5, 2.5);

    let fts = -1, pts = -1, dts;
    let w, h, hw, hh, frames = results;

    resize(window, function ({ width, height, centerX, centerY }) {
        cvs.width = w = width;
        cvs.height = h = height;
        hw = centerX;
        hh = centerY;
    });

    tick(function ({ ts, dts }) {
        ctx.clearRect(0, 0, w, h);
        ctx.imageSmoothingEnabled = false;

        const f = frameFn(ts);
        ctx.drawImage(frames[f], hw - 96, hh - 96, 192, 192);

        ctx.fillStyle = '#fff';
        ctx.font = '24px monospace';
        ctx.fillText((1000 / dts).toFixed(2), 8, 28);
        ctx.fillText(f, 8, 56);
    });
});
