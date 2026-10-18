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
exports.handleError = exports.http = exports.GoPayError = exports.createToken = exports.with_gopay = void 0;
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
const with_gopay = (...args) => chalk_1.default.blueBright("[GOPAY] ") + chalk_1.default.green(args.join(" "));
exports.with_gopay = with_gopay;
const createToken = (clientID, clientSecret) => Buffer.from(clientID + ":" + clientSecret).toString("base64");
exports.createToken = createToken;
/**
 * Error thrown for a failed GoPay request. It keeps only the HTTP status,
 * the error code and GoPay's response body, never the request config, so
 * logging it cannot leak the Authorization header (client secret or token).
 */
class GoPayError extends Error {
    constructor(error) {
        var _a, _b, _c;
        super((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : String(error));
        this.name = "GoPayError";
        this.status = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status;
        this.code = error === null || error === void 0 ? void 0 : error.code;
        this.data = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data;
    }
}
exports.GoPayError = GoPayError;
/** axios request that rejects with a GoPayError instead of an AxiosError. */
const http = async (config) => {
    try {
        return await (0, axios_1.default)(config);
    }
    catch (error) {
        throw new GoPayError(error);
    }
};
exports.http = http;
const handleError = (error) => {
    if (error instanceof GoPayError) {
        const { message, status, code, data } = error;
        console.error((0, exports.with_gopay)("Request failed"), { message, status, code, data });
    }
    else {
        console.error((0, exports.with_gopay)("Request failed"), error);
    }
};
exports.handleError = handleError;
