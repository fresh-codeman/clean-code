var assert = require('assert');
const {Circle} = require('../../shapes/Circle.js');
 describe('class Circle',function() {
    describe('#getDiameter', function(done){
        it('return diameter', function(done) {
            let circle = new Circle(5);
            assert.equal(circle.getDiameter(),31);
           done()
        });
    });

    describe('#getArea', function(done){
        it('Test2. Circle area', function(done) {
         
            let circle = new Circle(25);
            assert.equal(circle.getArea(), 1963);
            done()
        });
    })
 });