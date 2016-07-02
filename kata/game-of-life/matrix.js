function Matrix() {
}
Matrix.prototype.create = function (width, height) {
    var y = 0;

    this.theMatrix = new Array(height);
    for (y = 0; y < height; y++) {
        this.theMatrix[y] = new Array(width);
    }
}
Matrix.prototype.getHeight = function () {
    return this.theMatrix.length;
}
Matrix.prototype.getWidth = function () {
    return this.theMatrix[this.theMatrix.length-1].length;
}

module.exports = Matrix;
