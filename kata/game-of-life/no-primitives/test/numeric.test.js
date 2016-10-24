"use strict";

import {expect} from "chai";
import Numeric from "../src/numeric.js";

describe("Numeric", () => {
    it("shall have an n property", () => {
        let numeric = new Numeric();

        numeric.n = 100;
        expect(numeric.n).to.equal(100);
    });
});
