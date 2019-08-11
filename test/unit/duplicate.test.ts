/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Duplicate
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { duplicate } from "../../src/duplicate";

describe('Given [Duplicate] function', (): void => {

    const chance: Chance.Chance = new Chance('duplicate-duplicate');

    it('should be able to deep clone object - simple types', (): void => {

        const stringTarget: string = chance.string();
        const numberTarget: number = chance.natural();
        const booleanTarget: boolean = chance.bool();
        const nullTarget: null = null;
        const undefinedTarget: undefined = undefined;

        expect(duplicate(stringTarget)).to.be.equal(stringTarget);
        expect(duplicate(numberTarget)).to.be.equal(numberTarget);
        expect(duplicate(booleanTarget)).to.be.equal(booleanTarget);
        expect(duplicate(nullTarget)).to.be.equal(nullTarget);
        expect(duplicate(undefinedTarget)).to.be.equal(undefinedTarget);
    });
});
