declare module "@emailjs/browser" {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ): Promise<unknown>;

  export function init(userId: string): void;
}
