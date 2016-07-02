function Matrix() {
}

Matrix.prototype.create = function (width, height) {
    var y = 0;

    this.theMatrix = new Array(height);
    for (y = 0; y < height; y++) {
        this.theMatrix[y] = new Array(width);
    }
};

Matrix.prototype.getHeight = function () {
    return this.theMatrix.length;
};

Matrix.prototype.getWidth = function () {
    return this.theMatrix[this.theMatrix.length - 1].length;
};

Matrix.prototype.insertCell = function (cell, x, y) {
    this.theMatrix[y][x] = cell;
};

Matrix.prototype.getCell = function (x, y) {
    return this.theMatrix[y][x];
};

module.exports = Matrix;
