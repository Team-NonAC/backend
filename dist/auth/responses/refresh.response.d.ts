declare class RefreshSuccessfulInterface {
    accessToken: string;
    refreshToken: string;
}
declare class InvalidRefreshTokenInterface {
    message: string;
    error: string;
    statusCode: number;
}
declare class BadRefreshRequestInterface {
    message: Array<string>;
    error: string;
    statusCode: number;
}
export declare const RefreshSuccessfulResponse: {
    description: string;
    type: typeof RefreshSuccessfulInterface;
    status: number;
};
export declare const InvalidRefreshTokenResponse: {
    description: string;
    type: typeof InvalidRefreshTokenInterface;
    status: number;
};
export declare const BadRefreshRequestResponse: {
    description: string;
    type: typeof BadRefreshRequestInterface;
    status: number;
};
export {};
