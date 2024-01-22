"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadOtpRequestResponse = exports.InvalidOtpResponse = exports.OtpSuccessfulResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class OtpSuccessfulInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpSuccessfulInterface.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpSuccessfulInterface.prototype, "refreshToken", void 0);
class InvalidOtpInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Invalid OTP' }),
    __metadata("design:type", String)
], InvalidOtpInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Unauthorized' }),
    __metadata("design:type", String)
], InvalidOtpInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 401 }),
    __metadata("design:type", Number)
], InvalidOtpInterface.prototype, "statusCode", void 0);
class BadOtpRequestInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ['Error Message'],
    }),
    __metadata("design:type", Array)
], BadOtpRequestInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bad Request' }),
    __metadata("design:type", String)
], BadOtpRequestInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 400 }),
    __metadata("design:type", Number)
], BadOtpRequestInterface.prototype, "statusCode", void 0);
exports.OtpSuccessfulResponse = {
    description: 'Otp Successful',
    type: OtpSuccessfulInterface,
    status: 201,
};
exports.InvalidOtpResponse = {
    description: 'Invalid Otp',
    type: InvalidOtpInterface,
    status: 401,
};
exports.BadOtpRequestResponse = {
    description: 'Invalid OTP Format',
    type: BadOtpRequestInterface,
    status: 400,
};
//# sourceMappingURL=otp.response.js.map