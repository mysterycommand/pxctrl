import load from '../lib/on/load';
import resize from '../lib/on/resize';
import tick from '../lib/on/tick';

import { tri } from '../lib/util/math';
import { getStepFn } from '../lib/util/wave';

export default function app(context, canvas) {
    const ctx = canvas.getContext('2d');
    const frameFn = getStepFn(tri, 500, 0.5, 2.5);

    let fts = -1, pts = -1, dts;
    let w, h, hw, hh, frames;

    load([
        './images/megaman-00.png',
        './images/megaman-01.png',
        './images/megaman-02.png',
    ], results => {
        frames = results;

        resize(context, function ({ width, height, centerX, centerY }) {
            canvas.width = w = width;
            canvas.height = h = height;
            hw = centerX;
            hh = centerY;
        });

        tick(context, function ({ ts, dts }) {
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
}
