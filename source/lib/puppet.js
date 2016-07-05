import Composite from './composite';

const FN_KEYS = [
    '_x',
    '_y',
    '_z',
    '_width',
    '_height',
];

export default class Puppet extends Composite {
    constructor(opts) {
        super();
        this.update(0);

        FN_KEYS
            .filter(key => !!opts[key])
            .forEach(key => this[key] = opts[key]);
    }

    get x() {
        return (this.parent)
            ? this.parent.x + this._x(this._ts)
            : this._x(this._ts);
    }

    get y() {
        return (this.parent)
            ? this.parent.y + this._y(this._ts)
            : this._y(this._ts);
    }

    get z() {
        return this._z(this._ts);
    }

    get width() {
        return this._width(this._ts);
    }

    get height() {
        return this._height(this._ts);
    }

    get fillStyle() {
        return this._fillStyle(this._ts);
    }

    update(ts) {
        this._ts = ts;
        this._children.forEach(child => child.update(ts));
    }

    draw(ctx) {
        ctx.save();

        ctx.lineWidth = 3;
        ctx.strokeStyle = `hsl(210,80%,${30 + 20 * this.z}%)`;
        ctx.fillStyle = this.fillStyle;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    flat() {
        return this._children
            .reduce((children, child) => {
                return children.concat(child.flat());
            }, [this])
            .sort((a, b) => a.z - b.z);
    }

    _x(ts) { return 0; }
    _y(ts) { return 0; }
    _z(ts) { return 0; }
    _width(ts) { return 10; }
    _height(ts) { return 10; }
    _fillStyle(ts) { return `hsl(200,80%,${30 + 20 * this.z}%)`}
}
