/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Util
 */

export const isArray = (array: any): array is any[] => {

    return Array.isArray(array);
};

export const isBigint = (value: any): value is bigint => {

    return typeof value === 'bigint';
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

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (func: any): func is Function => {

    return typeof func === 'function';
};

export const isNull = (target: any): target is null => {

    return target === null;
};

// eslint-disable-next-line @typescript-eslint/ban-types
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

export const isMap = (target: any): target is Map<any, any> => {

    return target instanceof Map;
};

export const isSet = (target: any): target is Set<any> => {

    return target instanceof Set;
};
