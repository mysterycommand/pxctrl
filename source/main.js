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
