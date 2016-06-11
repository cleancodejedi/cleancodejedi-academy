var assert = require('chai').assert; 
var Matrix = require('../matrix.js');

describe('The Game of Life', function () {
    it('should have a matrix', function () {
        var matrix = new Matrix(); 
    
        assert.notEqual(matrix, undefined);
    });
    it('should have a width', function () {
        var matrix = new Matrix();
        matrix.width = 100;

        assert.equal(matrix.getWidth(), 100);
    });
});