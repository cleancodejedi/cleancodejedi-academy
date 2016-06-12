function Matrix () { 
    this.width = 0;
    this.height = 0;
}

Matrix.prototype.getWidth = function () {
    return this.width; 
};

Matrix.prototype.getHeight = function () {
    return this.height; 
};

module.exports = Matrix;
