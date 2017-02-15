import load from '../lib/on/load';
import resize from '../lib/on/resize';
import tick from '../lib/on/tick';

import { tri, toRadians } from '../lib/util/math';
import { getStepFn } from '../lib/util/wave';

export default function app(context, canvas) {
    const ctx = canvas.getContext('2d');
    const frameFn = getStepFn(tri, 800, 0.5, 2.5);

    let fts = -1, pts = -1, dts;
    let w, h, hw, hh, frames;

    load([
        './images/megaman-00.png',
        './images/megaman-01.png',
        './images/megaman-02.png',
    ], results => {
        frames = results;

        function size({ width, height, centerX, centerY }) {
            canvas.width = w = width;
            canvas.height = h = height;
            hw = centerX;
            hh = centerY;
        }

        function limb(ctx, { x, y, r }) {
            ctx.save();
            ctx.fillStyle = `rgba(255,0,255,0.5)`;
            ctx.translate(x, y);
            ctx.rotate(toRadians(r));
            ctx.beginPath();
            ctx.moveTo(68, -8);
            ctx.lineTo(92, -8);
            ctx.lineTo(92, 48);
            ctx.lineTo(68, 48);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function draw({ ts, dts }) {
            ctx.clearRect(0, 0, w, h);
            ctx.imageSmoothingEnabled = false;

            const f = frameFn(ts);
            ctx.drawImage(frames[f], hw - 96, hh - 96, 192, 192);

            limb(ctx, { x: hw + 24, y: hh - 48, r: 40 });
            limb(ctx, { x: hw - 108, y: hh - 78, r: 40 });

            ctx.fillStyle = '#fff';
            ctx.font = '24px monospace';
            ctx.fillText((1000 / dts).toFixed(2), 8, 28);
            ctx.fillText(f, 8, 56);
        }

        resize(context, size);
        // tick(context, draw);
        draw({ ts: 0, dts: 0 });
    });
}
