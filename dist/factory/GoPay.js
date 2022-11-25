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
exports.GoPay = void 0;
const axios_1 = __importDefault(require("axios"));
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
        const res = await (0, axios_1.default)({
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
            console.log("Getting token", tokenRequest);
            const res = await (0, axios_1.default)(tokenRequest);
            return res.data.access_token;
        }
        catch (error) {
            console.error("Problem creating the token", error);
            throw error;
        }
    }
    log() {
        return this.__log;
    }
}
exports.GoPay = GoPay;
