declare class LoginSuccessfulInterface {
    otpId: string;
}
declare class InvalidEmailInterface {
    message: string;
    error: string;
    statusCode: number;
}
declare class BadRequestInterface {
    message: Array<string>;
    error: string;
    statusCode: number;
}
export declare const LoginSuccessfulResponse: {
    description: string;
    type: typeof LoginSuccessfulInterface;
    status: number;
};
export declare const InvalidEmailResponse: {
    description: string;
    type: typeof InvalidEmailInterface;
    status: number;
};
export declare const BadLoginRequestResponse: {
    description: string;
    type: typeof BadRequestInterface;
    status: number;
};
export {};
