var assert = require('chai').assert;
var Cell = require('../cell.js');

describe('In the Game of Life,', function () {
    describe('The cell', function () {
        it('should exist', function () {
            var cell = new Cell();

            assert.notEqual(cell, undefined);
        });

        it('should have an indicator for presence of life or death', function () {
            var cell = new Cell(); 
            cell.isAlive = true; 

            assert.equal(cell.isAlive, true);
        });
    });
});