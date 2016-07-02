var assert = require('chai').assert;
var Matrix = require('../matrix.js');

describe('In the Game of Life,', function () {
    describe('The matrix', function () {
        it('should exist', function () {
            var matrix = new Matrix();

            assert.notEqual(matrix, undefined);
        });
    });
});