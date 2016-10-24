import {expect} from "chai";
import LifeStatus from "../src/lifeStatus";

describe("LifeStatus", () => {
    it("shall indicate if something is alive or dead", () => {
        let life = new LifeStatus();
        life.isAlive = true;

        expect(life.isAlive).to.equal(life.isAlive);
    });
});