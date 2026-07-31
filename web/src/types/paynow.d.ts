declare module "paynow" {
  export class Payment {
    reference: string;
    authEmail: string;
    add(title: string, amount: number): void;
    total(): number;
  }

  export class InitResponse {
    success: boolean;
    hasRedirect: boolean;
    redirectUrl?: string;
    error?: string;
    pollUrl?: string;
    status?: string;
  }

  export class StatusResponse {
    reference?: string;
    amount?: string;
    paynowReference?: string;
    pollUrl?: string;
    status?: string;
    error?: string;
  }

  export class Paynow {
    integrationId: string;
    integrationKey: string;
    resultUrl: string;
    returnUrl: string;

    constructor(
      integrationId?: string,
      integrationKey?: string,
      resultUrl?: string,
      returnUrl?: string,
    );

    createPayment(reference: string, authEmail?: string): Payment;
    send(payment: Payment): Promise<InitResponse | undefined>;
    sendMobile(
      payment: Payment,
      phone: string,
      method: string,
    ): Promise<InitResponse | undefined>;
    pollTransaction(url: string): Promise<StatusResponse | InitResponse | undefined>;
    parseStatusUpdate(response: string): StatusResponse;
  }
}
