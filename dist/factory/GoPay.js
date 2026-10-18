"use strict";
/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoPay = void 0;
const helpers_1 = require("../helpers");
class GoPay {
    constructor({ credentials, enviroment, log }) {
        this.url = "https://gate.gopay.cz/api";
        this.__log = log;
        this.credentials = credentials;
        if (enviroment == "sandbox") {
            this.url = "https://gw.sandbox.gopay.com/api";
        }
        if (log)
            console.log((0, helpers_1.with_gopay)("Initializating..."));
    }
    async getTokens() {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("scope", "payment-create");
        const url = this.url + "/oauth2/token";
        const res = await (0, helpers_1.http)({
            url,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " +
                    (0, helpers_1.createToken)(this.credentials.clientID, this.credentials.clientSecret),
            },
            data: params,
        });
        if (res.status == 200) {
            return res.data;
        }
        else {
            if (this.__log)
                (0, helpers_1.handleError)(res.data);
        }
    }
    async getAccessToken() {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("scope", "payment-create");
        const tokenRequest = {
            url: this.url + "/oauth2/token",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " +
                    Buffer.from(this.credentials.clientID + ":" + this.credentials.clientSecret).toString("base64"),
            },
            data: params,
        };
        try {
            const res = await (0, helpers_1.http)(tokenRequest);
            return res.data.access_token;
        }
        catch (error) {
            (0, helpers_1.handleError)(error);
            throw error;
        }
    }
    log() {
        return this.__log;
    }
}
exports.GoPay = GoPay;
