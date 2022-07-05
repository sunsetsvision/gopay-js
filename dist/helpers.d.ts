/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
export declare const with_gopay: (...args: any[]) => string;
export declare const createToken: (clientID: string, clientSecret: string) => string;
export declare const handleError: (error: Error) => void;
