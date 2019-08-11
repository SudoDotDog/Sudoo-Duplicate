/**
 * @author WMXPY
 * @namespace Duplicate
 * @description Other
 */

export const barbaricDuplicate = <T extends any>(target: T): T => {

    return JSON.parse(JSON.stringify(target));
};
