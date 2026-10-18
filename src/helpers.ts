/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios, { AxiosRequestConfig } from "axios";
import chalk from "chalk";

export const with_gopay = (...args: any[]) =>
  chalk.blueBright("[GOPAY] ") + chalk.green(args.join(" "));

export const createToken = (clientID: string, clientSecret: string) =>
  Buffer.from(clientID + ":" + clientSecret).toString("base64");

/**
 * Error thrown for a failed GoPay request. It keeps only the HTTP status,
 * the error code and GoPay's response body, never the request config, so
 * logging it cannot leak the Authorization header (client secret or token).
 */
export class GoPayError extends Error {
  status?: number;
  code?: string;
  data?: unknown;

  constructor(error: any) {
    super(error?.message ?? String(error));
    this.name = "GoPayError";
    this.status = error?.response?.status;
    this.code = error?.code;
    this.data = error?.response?.data;
  }
}

/** axios request that rejects with a GoPayError instead of an AxiosError. */
export const http = async (config: AxiosRequestConfig) => {
  try {
    return await axios(config);
  } catch (error) {
    throw new GoPayError(error);
  }
};

export const handleError = (error: unknown) => {
  if (error instanceof GoPayError) {
    const { message, status, code, data } = error;
    console.error(with_gopay("Request failed"), { message, status, code, data });
  } else {
    console.error(with_gopay("Request failed"), error);
  }
};
