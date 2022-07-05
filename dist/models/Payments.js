"use strict";
/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("../helpers");
class Payments {
    constructor({ client }) {
        this.__sufix = "/payments/payment";
        this.__client = client;
    }
    /**
     *
     * @param data
     * @returns
     */
    async createPayment(data) {
        const res = await (0, axios_1.default)({
            url: this.__client.url + this.__sufix,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + (await this.__client.getAccessToken()),
            },
            //TODO: add additional params
            data: {
                payer: {
                    allowed_payment_instruments: data.payment_info.allowed_payment_instruments,
                    default_payment_instrument: data.payment_info.default_payment_instrument,
                    allowed_swifts: data.payment_info.allowed_swifts,
                    default_swift: data.payment_info.default_swift,
                    contact: {
                        first_name: data.contact.first_name,
                        last_name: data.contact.last_name,
                        email: data.contact.email,
                        phone_number: data.contact.phone_number,
                        city: data.contact.city,
                        street: data.contact.street,
                        postal_code: data.contact.postal_code,
                        country_code: data.contact.country_code,
                    },
                },
                target: {
                    type: "ACCOUNT",
                    goid: this.__client.credentials.goID,
                },
                items: data.items,
                amount: data.order_info.amount,
                currency: data.order_info.currency,
                order_number: data.order_info.order_number,
                order_description: data.order_info.order_description,
                lang: data.order_info.lang,
                callback: {
                    return_url: data.callback.return_url,
                    notification_url: data.callback.notification_url,
                },
            },
        });
        if (res.status == 200) {
            return res.data;
        }
        else {
            if (this.__client.__log)
                (0, helpers_1.handleError)(res.data);
        }
    }
    /**
     *
     * @param payment_id
     * @returns
     */
    async getStatus(payment_id) {
        const res = await (0, axios_1.default)({
            url: this.__client.url + this.__sufix + "/" + payment_id,
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + (await this.__client.getAccessToken()),
            },
        });
        if (res.status == 200) {
            return res.data;
        }
        else {
            if (this.__client.__log)
                (0, helpers_1.handleError)(res.data);
        }
    }
    /**
     *
     * @param payment_id
     * @param amount
     * @returns
     */
    async refundPayment(payment_id, amount) {
        const params = new URLSearchParams();
        params.append("amount", String(amount));
        const res = await (0, axios_1.default)({
            url: this.__client.url + this.__sufix + "/" + payment_id + "/refund",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer " + (await this.__client.getAccessToken()),
            },
            data: params,
        });
        if (res.status == 200) {
            return res.data;
        }
        else {
            if (this.__client.__log)
                (0, helpers_1.handleError)(res.data);
        }
    }
    /**
     *
     * @param data
     * @returns
     */
    async createRecurrence(data) {
        const res = await (0, axios_1.default)({
            url: this.__client.url + this.__sufix,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + (await this.__client.getAccessToken()),
            },
            //TODO: add aditional params
            data: {
                amount: data.amount,
                currency: data.currency,
                order_number: data.order_number,
                order_description: data.order_discription,
                items: data.items,
            },
        });
        if (res.status == 200) {
            return res.data;
        }
        else {
            if (this.__client.__log)
                (0, helpers_1.handleError)(res.data);
        }
    }
}
exports.Payments = Payments;
