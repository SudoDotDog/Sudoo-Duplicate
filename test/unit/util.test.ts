/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { isDate } from "../../src/util";

describe('Given [Util] functions', (): void => {

    const chance: Chance.Chance = new Chance('duplicate-util');

    it('should be able to handle is Date - happy 1', (): void => {

        const date = new Date();

        // tslint:disable-next-line: no-unused-expression
        expect(isDate(date)).to.be.true;
    });

    it('should be able to handle is Date - happy 2', (): void => {

        const date = chance.date();

        // tslint:disable-next-line: no-unused-expression
        expect(isDate(date)).to.be.true;
    });

    it('should be able to handle is Date - bad 1', (): void => {

        const date = chance.string();

        // tslint:disable-next-line: no-unused-expression
        expect(isDate(date)).to.be.false;
    });

    it('should be able to handle is Date - bad 2', (): void => {

        const date = new Date(chance.string());

        // tslint:disable-next-line: no-unused-expression
        expect(isDate(date)).to.be.false;
    });
});
