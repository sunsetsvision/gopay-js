/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { gopay } from "../types/gopay";
export declare class GoPay {
    url: string;
    credentials: gopay.credentials;
    __log: boolean;
    constructor({ credentials, enviroment, log }: gopay.Constructor);
    getTokens(): Promise<any>;
    getAccessToken(): Promise<any>;
    log(): boolean;
}
