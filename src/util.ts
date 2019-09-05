/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Util
 */

export const isDate = (date: any): date is Date => {

    if (!(date instanceof Date)) {
        return false;
    }

    if (isNaN(date.getTime())) {
        return false;
    }

    return true;
};
