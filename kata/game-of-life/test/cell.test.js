var assert = require('chai').assert;
var Cell = require('../cell.js');

describe('In the Game of Life,', function () {
    describe('The cell', function () {
        it('should exist', function () {
            var cell = new Cell();

            assert.notEqual(cell, undefined);
        });
        
    });
});