class TeboStaticSet extends Set {
    constructor(items) {
        super(items);

        delete this.add;
        delete this.delete;
        delete this.clear;
    }
}