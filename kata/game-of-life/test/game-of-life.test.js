var assert = require('chai').assert; 

describe('The Game of Life', function () {
    it('should have a matrix', function () {
        var matrix = new Matrix(); 

        assert.notEqual(matrix, undefined);
    });
});