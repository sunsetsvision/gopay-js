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
exports.handleError = exports.createToken = exports.with_gopay = void 0;
const chalk_1 = __importDefault(require("chalk"));
const js_base64_1 = require("js-base64");
const with_gopay = (...args) => chalk_1.default.blueBright("[GOPAY] ") + chalk_1.default.green(args.join(" "));
exports.with_gopay = with_gopay;
const createToken = (clientID, clientSecret) => {
    return js_base64_1.Base64.btoa(clientID + ":" + clientSecret);
    // Buffer.from(clientID + ":" + clientSecret).toString("base64");
};
exports.createToken = createToken;
const handleError = (error) => {
    console.log(error);
};
exports.handleError = handleError;
