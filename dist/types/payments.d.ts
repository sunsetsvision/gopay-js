/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { GoPay } from "../factory/goPay";
export declare namespace payments {
    interface Constructor {
        client: GoPay;
    }
    interface DefaultPayment {
        payment_info: payment_info;
        contact: contact;
        order_info: order_info;
        callback: callback;
        items: object;
    }
    type payment_info = {
        allowed_payment_instruments: object;
        default_payment_instrument: string;
        allowed_swifts: object;
        default_swift: string;
    };
    type order_info = {
        amount: number;
        currency: string;
        order_number: string;
        order_description: string;
        lang: string;
    };
    type callback = {
        return_url: string;
        notification_url: string;
    };
    type contact = {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        city: string;
        street: string;
        postal_code: string;
        country_code: string;
    };
    interface Recurrence {
        amount: number;
        currency: string;
        order_number: string;
        order_discription: string;
        items: object;
    }
}
