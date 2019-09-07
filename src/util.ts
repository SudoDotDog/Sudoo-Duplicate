/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Util
 */

export const isArray = (array: any): array is any[] => {

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

export const isObject = (object: any): object is Record<any, any> => {

    if (object === null) {
        return false;
    }

    const type = typeof object;
    return type === 'object';
};
