/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { misc } from "../types/misc";
export declare class Misc {
    private __client;
    constructor({ client }: misc.Constructor);
    /**
     *
     * @param currency
     * @returns
     */
    getAllowedMethodes(currency: string): Promise<any>;
    /**
     *
     * @param data
     * @returns
     */
    accountStatement(data: misc.accountStatement): Promise<any>;
}
