/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { GoPay } from "../factory/goPay";
import { eet } from "../types/eet";
export declare class Misc {
    __client: GoPay;
    __sufix: string;
    constructor({ client }: eet.Constructor);
}
