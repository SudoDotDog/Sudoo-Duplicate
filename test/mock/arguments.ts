/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Arguments
 * @override Mock
 */

export type ClassContractorObject = {

    readonly a: number;
};

export class ArgumentClass {

    private _number: number;

    public constructor(args: ClassContractorObject) {

        this._number = args.a;
    }

    public get() {

        return this._number;
    }

    public add() {

        this._number++;
    }
}
