class Circle{
    constructor(radius ) {
        this.radius = radius;
    }
    getDiameter() {
        return Math.round(2 * Math.PI * this.radius);
    }
    getArea() {
        return Math.round(Math.PI * this.radius * this.radius);
    }
}
module.exports = {
    Circle:Circle
}