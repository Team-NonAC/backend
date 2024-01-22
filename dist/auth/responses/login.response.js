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
exports.BadLoginRequestResponse = exports.InvalidEmailResponse = exports.LoginSuccessfulResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginSuccessfulInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginSuccessfulInterface.prototype, "otpId", void 0);
class InvalidEmailInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Invalid Email' }),
    __metadata("design:type", String)
], InvalidEmailInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Unauthorized' }),
    __metadata("design:type", String)
], InvalidEmailInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 401 }),
    __metadata("design:type", Number)
], InvalidEmailInterface.prototype, "statusCode", void 0);
class BadRequestInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ['Invalid email address format.'],
    }),
    __metadata("design:type", Array)
], BadRequestInterface.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Bad Request' }),
    __metadata("design:type", String)
], BadRequestInterface.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 400 }),
    __metadata("design:type", Number)
], BadRequestInterface.prototype, "statusCode", void 0);
exports.LoginSuccessfulResponse = {
    description: 'Login Successful',
    type: LoginSuccessfulInterface,
    status: 201,
};
exports.InvalidEmailResponse = {
    description: 'Invalid Email',
    type: InvalidEmailInterface,
    status: 401,
};
exports.BadLoginRequestResponse = {
    description: 'Not proper Mail',
    type: BadRequestInterface,
    status: 400,
};
//# sourceMappingURL=login.response.js.map