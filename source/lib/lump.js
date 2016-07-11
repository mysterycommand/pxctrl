export default class Lump {
    constructor({x = 0, y = 0, z = -1, r = 0, sprite = null}) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._r = r;

        this._sprite = sprite;

        this._parent = null;
        this._children = [];
    }

    get x() { return this._x; }
    get globalX() {
        return (this.parent)
            ? this.parent.globalX + this.x
            : this.x;
    }

    get y() { return this._y; }
    get globalY() {
        return (this.parent)
            ? this.parent.globalY + this.y
            : this.y;
    }

    get z() { return this._z; }
    get globalZ() {
        return (this.parent)
            ? this.parent.globalZ + this.z
            : this.z;
    }

    get r() { return this._r; }
    get globalR() {
        return (this.parent)
            ? this.parent.globalR + this.r
            : this.r;
    }

    get sprite() { return this._sprite; }
    get parent() { return this._parent; }

    addLump(lump) {
        if (lump.parent) {
            lump.parent.removeLump(lump);
        }

        lump._parent = this;
        lump._z = this._children.push(lump);
    }

    removeLump(lump) {
        if (lump.parent !== this) {
            throw new Error(`tried to remove lump: ${lump} from parent: ${this}`);
        }

        lump._parent = null;

        const { z } = lump;
        this._children.splice(z, 1);
        this._children.slice(z).forEach((lump, i) => {
            lump._z = z + i;
        });

        lump._z = -1;
    }
}
