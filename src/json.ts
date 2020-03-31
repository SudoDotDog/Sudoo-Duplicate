/**
 * @author WMXPY
 * @namespace Duplicate
 * @description JSON
 */

export const jsonDuplicate = <T extends any>(content: T): T => {

    return JSON.parse(JSON.stringify(content));
};
