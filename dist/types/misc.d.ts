/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { GoPay } from "../factory/goPay";
import { format } from "./public";
export declare namespace misc {
    interface Constructor {
        client: GoPay;
    }
    interface accountStatement {
        date_from: Date;
        date_to: Date;
        currency: string;
        format: format;
    }
}
