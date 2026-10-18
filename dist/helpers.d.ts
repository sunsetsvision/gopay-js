/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
export declare const with_gopay: (...args: any[]) => string;
export declare const createToken: (clientID: string, clientSecret: string) => string;
/**
 * An AxiosError carries the request config and socket, which hold the
 * Authorization header (client secret or access token). Log only this.
 */
export declare const safeError: (error: any) => any;
export declare const handleError: (error: Error) => void;
