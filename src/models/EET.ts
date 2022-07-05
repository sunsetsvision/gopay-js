/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { GoPay } from "../factory/goPay";
import { eet } from "../types/eet";

export class Misc {
  public __client: GoPay;
  public __sufix = "/payments/payment";

  constructor({ client }: eet.Constructor) {
    this.__client = client;
  }
}
