/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import chalk from "chalk";
import { Base64 } from "js-base64";

export const with_gopay = (...args: any[]) =>
  chalk.blueBright("[GOPAY] ") + chalk.green(args.join(" "));

export const createToken = (clientID: string, clientSecret: string) => {
  return Base64.btoa(clientID + ":" + clientSecret);
  // Buffer.from(clientID + ":" + clientSecret).toString("base64");
};

export const handleError = (error: Error) => {
  console.log(error);
};
