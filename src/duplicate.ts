/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Duplicate
 */

import { isArray, isDate, isObject } from "./util";

export const duplicate = <T extends any>(target: T): T => {

    if (target === null) {
        return target;
    }

    if (isDate(target)) {

        const asserted: Date = target as Date;
        const clone: Date = new Date();
        clone.setTime(asserted.getTime());

        return clone as any as T;
    }

    if (typeof target === 'function') {

        // tslint:disable-next-line: ban-types
        const asserted: Function = target as Function;
        return function (this: any) {
            // tslint:disable-next-line: no-invalid-this
            return asserted.apply(this, arguments);
        } as any as T;
    }

    if (isArray(target)) {

        return target.map((each: any) => duplicate(each)) as T;
    }

    if (isObject(target)) {

        return Object.entries(target).reduce((previous: Record<any, any>, current: [any, any]) => {
            return {
                ...previous,
                [current[0]]: duplicate(current[1]),
            };
        }, {} as Record<any, any>) as T;
    }

    return target;
};
