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
exports.BadRefreshRequestResponse = exports.InvalidRefreshTokenResponse = exports.RefreshSuccessfulResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class RefreshSuccessfulInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RefreshSuccessfulInterface.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RefreshSuccessfulInterface.prototype, "refreshToken", void 0);
class InvalidRefreshTokenInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Invalid refresh token' }),
    __metadata("design:type", String)
], InvalidRefreshTokenInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Unauthorized' }),
    __metadata("design:type", String)
], InvalidRefreshTokenInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 401 }),
    __metadata("design:type", Number)
], InvalidRefreshTokenInterface.prototype, "statusCode", void 0);
class BadRefreshRequestInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ['refreshToken must be a jwt string'],
    }),
    __metadata("design:type", Array)
], BadRefreshRequestInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bad Request' }),
    __metadata("design:type", String)
], BadRefreshRequestInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 400 }),
    __metadata("design:type", Number)
], BadRefreshRequestInterface.prototype, "statusCode", void 0);
exports.RefreshSuccessfulResponse = {
    description: 'Refresh Successful',
    type: RefreshSuccessfulInterface,
    status: 201,
};
exports.InvalidRefreshTokenResponse = {
    description: 'Invalid Refresh Token',
    type: InvalidRefreshTokenInterface,
    status: 401,
};
exports.BadRefreshRequestResponse = {
    description: 'Invalid Refresh Token Format',
    type: BadRefreshRequestInterface,
    status: 400,
};
//# sourceMappingURL=refresh.response.js.map