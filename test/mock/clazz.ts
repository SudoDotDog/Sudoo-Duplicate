/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Clazz
 * @override Mock
 */

export class MockClass {

    private _number: number;

    public constructor() {

        this._number = 0;
    }

    public get() {

        return this._number;
    }

    public add() {

        this._number++;
    }
}
