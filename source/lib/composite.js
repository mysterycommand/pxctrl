export default class Composite {
    constructor() {
        this._children = [];
    }

    addChild(child) {
        child.parent = this;
        return this._children.push(child);
    }

    removeChild(child) {
        const index = this._children.indexOf(child);
        child.parent = null;
        this._children.splice(index, 1);
        return child;
    }

    getChildAt(index) {
        return this._children[index];
    }
}
