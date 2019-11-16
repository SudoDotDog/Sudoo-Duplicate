/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Duplicate
 */

import { isArray, isDate, isFunction, isMap, isNull, isObject, isRegExp, isSet } from "./util";

export const duplicate = <T extends any>(target: T): T => {

    if (isNull(target)) {
        return target;
    }

    if (isDate(target)) {
        const asserted: Date = target as Date;
        const clone: Date = new Date();
        clone.setTime(asserted.getTime());

        return clone as any as T;
    }

    if (isFunction(target)) {
        return target;
    }

    if (isArray(target)) {
        return target.map((each: any) => duplicate(each)) as T;
    }

    if (isRegExp(target)) {
        return target;
    }

    if (isMap(target)) {
        return new Map(target) as any as T;
    }

    if (isSet(target)) {
        return new Set(target) as any as T;
    }

    if (isObject(target)) {

        const constructorCloned: T | null = constructorCloneObject(target);
        if (constructorCloned) {
            return constructorCloned;
        }
        const prototypeCloned: T | null = prototypeCloneObject(target);
        if (prototypeCloned) {
            return prototypeCloned;
        }

        return target;
    }

    return target;
};

export const constructorCloneObject = <T extends any = any>(target: T): T | null => {

    try {

        const clone: T = new (target as any).constructor();

        for (const entry of Object.entries(target)) {
            (clone as any)[entry[0]] = duplicate(entry[1]);
        }
        return clone;
    } catch (error) {

        return null;
    }
};

export const prototypeCloneObject = <T extends any = any>(target: T): T | null => {

    try {

        const prototype: any = Object.getPrototypeOf(target);
        const clone: any = Object.create(prototype);

        for (const entry of Object.entries(target)) {
            (clone as any)[entry[0]] = duplicate(entry[1]);
        }
        return clone;
    } catch (error) {

        return null;
    }
};
