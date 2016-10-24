import {expect} from "chai";
import Grid from "../src/grid";
import Numeric from "../src/numeric";

describe("Grid", () => {
   it("shall have the ability to create a new matrix using width and height", () => {
      let grid = new Grid();
      let width = new Numeric();
      let height = new Numeric();

      width.value = 100;
      height.value = 100;
      grid.create(width, height);

      expect(grid.getWidth()).to.equal(width);
      expect(grid.getHeight()).to.equal(height);
   });
});