var assert = require('chai').assert;
var Matrix = require('../matrix.js');

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
    });
});