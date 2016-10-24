"use strict";

import {expect} from "chai";
import Numeric from "../src/numeric.js";

describe("Numeric", () => {
    it("shall have an value property", () => {
        let numeric = new Numeric();

        numeric.value = 100;
        expect(numeric.value).to.equal(100);
    });
});
