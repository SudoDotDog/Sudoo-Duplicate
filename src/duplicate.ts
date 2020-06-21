/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Duplicate
 */

import { isArray, isBigint, isDate, isFunction, isMap, isNull, isObject, isRegExp, isSet } from "./util";


const _constructorCloneObject = <T extends any>(
    target: T,
    _duplicate: (target: T, parent?: any) => any,
): T | null => {
    try {
        const clone: T = new (target as any).constructor();
        for (const entry of Object.entries(target as any)) {
            (clone as any)[entry[0]] = _duplicate(entry[1] as any, clone);
        }
        return clone;
    } catch (error) {
        return null;
    }
};

const _prototypeCloneObject = <T extends any>(
    target: T,
    _duplicate: (target: T, parent?: any) => any,
): T | null => {
    try {
        const prototype: any = Object.getPrototypeOf(target);
        const clone: any = Object.create(prototype);
        for (const entry of Object.entries(target as any)) {
            (clone as any)[entry[0]] = _duplicate(entry[1] as any, clone);
        }
        return clone;
    } catch (error) {
        return null;
    }
};

export const duplicate = <T extends any>(target: T): T => {

    const recursiveWatcher: Set<any> = new Set();


    const _duplicate = (innerTarget: T, parent?: any): T => {

        if (recursiveWatcher.has(innerTarget)) {
            return innerTarget;
        }
        recursiveWatcher.add(innerTarget);

        if (isNull(innerTarget)) {
            return innerTarget;
        }

        if (isBigint(innerTarget)) {
            const parsed: number = Number(innerTarget);
            return BigInt(parsed) as any as T;
        }

        if (isDate(innerTarget)) {
            const asserted: Date = innerTarget as Date;
            const clone: Date = new Date();
            clone.setTime(asserted.getTime());

            return clone as any as T;
        }

        if (isFunction(innerTarget)) {
            const asserted: Function = innerTarget as Function;

            return ((...args: any[]) => {
                return asserted.apply(parent, args);
            }) as any as T;
        }

        if (isArray(innerTarget)) {
            return innerTarget.map((each: any) => _duplicate(each, parent)) as T;
        }

        if (isRegExp(innerTarget)) {
            return innerTarget;
        }

        if (isMap(innerTarget)) {
            return new Map(innerTarget) as any as T;
        }

        if (isSet(innerTarget)) {
            return new Set(innerTarget) as any as T;
        }

        if (isObject(innerTarget)) {

            const constructorCloned: T | null = _constructorCloneObject(innerTarget, _duplicate);
            if (constructorCloned) {
                return constructorCloned;
            }
            const prototypeCloned: T | null = _prototypeCloneObject(innerTarget, _duplicate);
            if (prototypeCloned) {
                return prototypeCloned;
            }
            return innerTarget;
        }
        return innerTarget;
    };
    return _duplicate(target);
};
