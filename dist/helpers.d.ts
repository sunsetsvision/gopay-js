/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { AxiosRequestConfig } from "axios";
export declare const with_gopay: (...args: any[]) => string;
export declare const createToken: (clientID: string, clientSecret: string) => string;
/**
 * Error thrown for a failed GoPay request. It keeps only the HTTP status,
 * the error code and GoPay's response body, never the request config, so
 * logging it cannot leak the Authorization header (client secret or token).
 */
export declare class GoPayError extends Error {
    status?: number;
    code?: string;
    data?: unknown;
    constructor(error: any);
}
/** axios request that rejects with a GoPayError instead of an AxiosError. */
export declare const http: (config: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const handleError: (error: unknown) => void;
