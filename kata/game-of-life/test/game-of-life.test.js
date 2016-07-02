var assert = require('chai').assert;
var Matrix = require('../matrix.js');
var Cell = require('../cell.js');

describe('In the Game of Life,', function () {
    describe('The matrix', function () {
        it('should exist', function () {
            var matrix = new Matrix();

            assert.notEqual(matrix, undefined);
        });

        it('should have the ability to create an X x Y dimensional grid', function () {
            var matrix = new Matrix(); 
            matrix.create(50, 100);

            assert.equal(matrix.getWidth(), 50);
            assert.equal(matrix.getHeight(), 100);
            
        });

        it("should have ability to add cells to the Matrix", function () {
            var matrix = new Matrix(); 
            matrix.create(5, 5);
            var cell = new Cell();
            cell.name = 'Bob';
            cell.isAlive = true;
            
            matrix.insertCell(cell, 1,1);
            var bob = matrix.getCell(1,1);

            assert.equal(bob.name, cell.name);
            assert.equal(bob.isAlive, cell.isAlive);  
        });


    });
});