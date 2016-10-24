import {expect} from "chai";
import Cell from "../src/cell";
import LifeStatus from "../src/lifeStatus";

describe("Cell", () => {
    it("shall have indicator of life", () => {
        let cell = new Cell();
        let alive = new LifeStatus();
        alive.isAlive = true;
        let dead = new LifeStatus();
        dead.isAlive = false;

        cell.life = alive;

        expect(cell.life).to.equal(alive);
        expect(cell.life).to.not.equal(dead);
    });
});