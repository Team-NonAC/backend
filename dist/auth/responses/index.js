"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshResponseDoc = exports.otpResponseDoc = exports.loginResponseDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_response_1 = require("./login.response");
const otp_response_1 = require("./otp.response");
const refresh_response_1 = require("./refresh.response");
const loginResponseDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)(login_response_1.LoginSuccessfulResponse), (0, swagger_1.ApiResponse)(login_response_1.InvalidEmailResponse), (0, swagger_1.ApiBadRequestResponse)(login_response_1.BadLoginRequestResponse));
};
exports.loginResponseDoc = loginResponseDoc;
const otpResponseDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)(otp_response_1.OtpSuccessfulResponse), (0, swagger_1.ApiResponse)(otp_response_1.InvalidOtpResponse), (0, swagger_1.ApiBadRequestResponse)(otp_response_1.BadOtpRequestResponse));
};
exports.otpResponseDoc = otpResponseDoc;
const refreshResponseDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)(refresh_response_1.RefreshSuccessfulResponse), (0, swagger_1.ApiResponse)(refresh_response_1.InvalidRefreshTokenResponse), (0, swagger_1.ApiBadRequestResponse)(refresh_response_1.BadRefreshRequestResponse));
};
exports.refreshResponseDoc = refreshResponseDoc;
//# sourceMappingURL=index.js.map