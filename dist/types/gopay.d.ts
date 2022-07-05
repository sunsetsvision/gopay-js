/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
export declare namespace gopay {
    interface Constructor {
        credentials: credentials;
        enviroment: "sandbox" | "production";
        log: boolean;
    }
    type credentials = {
        clientID: string;
        goID: string;
        clientSecret: string;
    };
}
