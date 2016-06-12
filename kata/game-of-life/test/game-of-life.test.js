var assert = require('chai').assert;
var Matrix = require('../matrix.js');

describe('In the Game of Life,', function () {
    describe('The matrix', function () {
        it('should exist', function () {
            var matrix = new Matrix();

            assert.notEqual(matrix, undefined);
        });

        it('should have a width', function () {
            var matrix = new Matrix();
            matrix.width = 100;

            assert.equal(matrix.getWidth(), 100);
        });

        it('should have a height', function () {
            var matrix = new Matrix();
            matrix.height = 108;

            assert.equal(matrix.getHeight(), 108);
        });
    });
});