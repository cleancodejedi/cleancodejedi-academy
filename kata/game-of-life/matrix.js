function Matrix () { 
    this.width = 0; 
}

Matrix.prototype.getWidth = function () {
    return this.width; 
};

module.exports = Matrix;
