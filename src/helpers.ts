/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import chalk from "chalk";

export const with_gopay = (...args: any[]) =>
  chalk.blueBright("[GOPAY] ") + chalk.green(args.join(" "));

export const createToken = (clientID: string, clientSecret: string) =>
  Buffer.from(clientID + ":" + clientSecret).toString("base64");

/**
 * An AxiosError carries the request config and socket, which hold the
 * Authorization header (client secret or access token). Log only this.
 */
export const safeError = (error: any) =>
  error?.isAxiosError
    ? { message: error.message, status: error.response?.status, data: error.response?.data }
    : error;

export const handleError = (error: Error) => {
  console.log(safeError(error));
};
