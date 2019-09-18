/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Util
 */

// tslint:disable-next-line: array-type
export const isArray = (array: any): array is Array<any> => {

    return Array.isArray(array);
};

export const isDate = (date: any): date is Date => {

    if (!(date instanceof Date)) {
        return false;
    }

    if (isNaN(date.getTime())) {
        return false;
    }

    return true;
};

// tslint:disable-next-line: ban-types
export const isFunction = (func: any): func is Function => {

    return typeof func === 'function';
};

export const isNull = (target: any): target is null => {

    return target === null;
};

// tslint:disable-next-line: ban-types
export const isObject = (object: any): object is Object => {

    if (isNull(object)) {
        return false;
    }

    const type = typeof object;
    return type === 'object';
};

export const isError = (err: any): err is Error => {

    if (err instanceof Error) {
        return true;
    }
    return false;
};

export const isRegExp = (target: any): target is RegExp => {

    return target instanceof RegExp;
};
