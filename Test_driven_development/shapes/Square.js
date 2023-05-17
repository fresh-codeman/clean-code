class Square{
    constructor(side) {
        this.side = side;
    }
    getArea(){
        return this.side*this.side
    }

    getPeriphey(){
        return this.side * 4
    }

    getSides(){
        return 4
    }
}
module.exports = Square