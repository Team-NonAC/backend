declare class OtpSuccessfulInterface {
    accessToken: string;
    refreshToken: string;
}
declare class InvalidOtpInterface {
    message: string;
    error: string;
    statusCode: number;
}
declare class BadOtpRequestInterface {
    message: Array<string>;
    error: string;
    statusCode: number;
}
export declare const OtpSuccessfulResponse: {
    description: string;
    type: typeof OtpSuccessfulInterface;
    status: number;
};
export declare const InvalidOtpResponse: {
    description: string;
    type: typeof InvalidOtpInterface;
    status: number;
};
export declare const BadOtpRequestResponse: {
    description: string;
    type: typeof BadOtpRequestInterface;
    status: number;
};
export {};
