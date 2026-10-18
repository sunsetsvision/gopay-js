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
exports.handleError = exports.safeError = exports.createToken = exports.with_gopay = void 0;
const chalk_1 = __importDefault(require("chalk"));
const with_gopay = (...args) => chalk_1.default.blueBright("[GOPAY] ") + chalk_1.default.green(args.join(" "));
exports.with_gopay = with_gopay;
const createToken = (clientID, clientSecret) => Buffer.from(clientID + ":" + clientSecret).toString("base64");
exports.createToken = createToken;
/**
 * An AxiosError carries the request config and socket, which hold the
 * Authorization header (client secret or access token). Log only this.
 */
const safeError = (error) => {
    var _a, _b;
    return (error === null || error === void 0 ? void 0 : error.isAxiosError)
        ? { message: error.message, status: (_a = error.response) === null || _a === void 0 ? void 0 : _a.status, data: (_b = error.response) === null || _b === void 0 ? void 0 : _b.data }
        : error;
};
exports.safeError = safeError;
const handleError = (error) => {
    console.log((0, exports.safeError)(error));
};
exports.handleError = handleError;
