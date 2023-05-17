class Square{
    constructor(side) {
        this.side = side;
    }
    getPeriphery() {
        return 4 * this.side;
    }
    getArea() {
        return this.side * this.side
    }
}
module.exports = Square