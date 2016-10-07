import Canvas from 'canvas';
import GIFEncoder from 'gifencoder';

/*
Still need to install the above, but first run: `brew install pkg-config cairo
libpng jpeg giflib`. Probably need a way to expose start/stop/tick from the app
so that I can call it with an idealized frame time and shove the context at a
GIFEncoder instance.

Not sure if I want to pass a global context around either, or how I feel about
the app being resize and tick (though I guess that's functional composition).
Lol, who am I writing to right now.
*/

import app from '../app/app';

const SIZE = 540;

app({
    innerWidth: SIZE,
    innerHeight: SIZE,
    addEventListener() {},
}, new Canvas(SIZE, SIZE));
