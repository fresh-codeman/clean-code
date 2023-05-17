var should = require('chai').should()
var expect = require('chai').expect
const Square = require('../../shapes/Square.js'); 
 describe('class Square ',function() {
    let square = new Square(5);
    describe('#getArea',function() {
        let area = square.getArea();
        it('return the area', function(){
            area.should.equal(25);
        });
    });

    describe('#getPeriphey',function() {
        let periphery = square.getPeriphey();
        it('return the area', function(){
            expect(periphery).to.equal(20)
        })
    })
 });