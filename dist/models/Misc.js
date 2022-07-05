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
exports.Misc = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("../helpers");
class Misc {
    constructor({ client }) {
        this.__client = client;
    }
    /**
     *
     * @param currency
     * @returns
     */
    async getAllowedMethodes(currency) {
        const res = await (0, axios_1.default)({
            url: this.__client.url +
                "/eshops/eshop/" +
                this.__client.credentials.goID +
                "/payment-instruments/" +
                currency,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
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
     * @param data
     * @returns
     */
    async accountStatement(data) {
        const res = await (0, axios_1.default)({
            url: this.__client.url + "/accounts/account-statement",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + (await this.__client.getAccessToken()),
            },
            data: {
                date_from: data.date_from.toDateString(),
                date_to: data.date_to.toDateString(),
                goid: this.__client.credentials.goID,
                currency: data.currency,
                format: data.format,
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
exports.Misc = Misc;
