class Grid {
    constructor() {
        this.width = undefined;
        this.height = undefined;
        this.matrix = [];
    }

    create(width, height) {
        this.width = width;
        this.height = height;

        this.matrix = new Array(width.value);

        for(let index= 0; index < width.value; index += 1) {
            this.matrix[index] = new Array(height.value);
            this.matrix[index] = new Array(height.value);
        }
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

export default Grid;