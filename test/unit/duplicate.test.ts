/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Duplicate
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { duplicate } from "../../src/duplicate";
import { ArgumentClass } from "../mock/arguments";
import { MockClass } from "../mock/clazz";

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

    it('should be able to deep clone object - object control', (): void => {

        const key: string = chance.string();

        const oldValue: string = chance.string();
        const newValue: string = chance.string();

        const before: Record<string, string> = {
            [key]: oldValue,
        };

        const after: Record<string, string> = before;

        before[key] = newValue;

        expect(before).to.be.deep.equal(after);
        expect(before[key]).to.be.equal(newValue);
        expect(after[key]).to.be.equal(newValue);
    });

    it('should be able to deep clone object - object', (): void => {

        const key: string = chance.string();

        const oldValue: string = chance.string();
        const newValue: string = chance.string();

        const before: Record<string, string> = {
            [key]: oldValue,
        };

        const after: Record<string, string> = duplicate(before);

        before[key] = newValue;

        expect(before).to.be.not.deep.equal(after);
        expect(before[key]).to.be.equal(newValue);
        expect(after[key]).to.be.equal(oldValue);
    });

    it('should be able to deep clone object - array control', (): void => {

        const oldValue: string = chance.string();
        const newValue: string = chance.string();

        const before: string[] = [oldValue];

        const after: string[] = before;

        before[0] = newValue;

        expect(before).to.be.deep.equal(after);
        expect(before[0]).to.be.equal(newValue);
        expect(after[0]).to.be.equal(newValue);
    });

    it('should be able to deep clone object - array', (): void => {

        const oldValue: string = chance.string();
        const newValue: string = chance.string();

        const before: string[] = [oldValue];

        const after: string[] = duplicate(before);

        before[0] = newValue;

        expect(before).to.be.not.deep.equal(after);
        expect(before[0]).to.be.equal(newValue);
        expect(after[0]).to.be.equal(oldValue);
    });

    it('should be able to deep clone object - date control', (): void => {

        const date: Date = new Date();
        date.setFullYear(date.getFullYear() + 2);

        const before: Date = date;

        const after: Date = before;

        before.setFullYear(date.getFullYear() + 2);

        expect(before.getTime()).to.be.equal(after.getTime());
    });

    it('should be able to deep clone object - date', (): void => {

        const date: Date = new Date();
        date.setFullYear(date.getFullYear() + 2);

        const before: Date = date;

        const after: Date = duplicate(before);

        before.setFullYear(date.getFullYear() + 2);

        expect(before.getTime()).to.be.not.equal(after.getTime());
    });

    it('should be able to shallow clone object - map', (): void => {

        const map: Map<string, string> = new Map();

        const key: string = chance.string();
        const value: string = chance.string();

        map.set(key, value);

        const after: Map<string, string> = duplicate(map);

        expect(map).to.be.deep.equal(after);
    });

    it('should be able to shallow clone object - set', (): void => {

        const set: Set<string> = new Set();

        const value: string = chance.string();

        set.add(value);

        const after: Set<string> = duplicate(set);

        expect(set).to.be.deep.equal(after);
    });

    it('should be able to clone prototype', (): void => {

        const object: MockClass = new MockClass();
        const value: string = chance.string();
        const clonal = {

            a: object,
            b: value,
        };

        object.add();
        const after: any = duplicate(clonal);
        after.a.add();

        expect(after.a.get()).to.be.equal(2);
        expect(after.b).to.be.equal(value);
    });

    it('should be able to clone prototype with constructor arguments', (): void => {

        const object: ArgumentClass = new ArgumentClass({
            a: 0,
        });
        const value: string = chance.string();
        const clonal = {

            a: object,
            b: value,
        };

        object.add();
        const after: any = duplicate(clonal);
        after.a.add();

        expect(after.a.get()).to.be.equal(2);
        expect(after.b).to.be.equal(value);
    });
});
