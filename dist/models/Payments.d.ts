/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
import { payments } from "../types/payments";
export declare class Payments {
    private __sufix;
    private __client;
    constructor({ client }: payments.Constructor);
    /**
     *
     * @param data
     * @returns
     */
    createPayment(data: payments.DefaultPayment): Promise<any>;
    /**
     *
     * @param payment_id
     * @returns
     */
    getStatus(payment_id: number): Promise<any>;
    /**
     *
     * @param payment_id
     * @param amount
     * @returns
     */
    refundPayment(payment_id: number, amount: number): Promise<any>;
    /**
     *
     * @param data
     * @returns
     */
    createRecurrence(data: payments.Recurrence): Promise<any>;
}
