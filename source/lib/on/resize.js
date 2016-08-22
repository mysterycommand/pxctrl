export default function resize(context, callback) {
    function onResize(/*event*/) {
        const {
            innerWidth: width,
            innerHeight: height,
        } = context;

        const centerX = width / 2;
        const centerY = height / 2;

        callback({
            width,
            height,
            centerX,
            centerY,
        });
    }

    context.addEventListener('resize', onResize);
    onResize();
}
