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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
let AuthService = class AuthService {
    constructor(prisma, cacheManager, jwtService, mailService, configService) {
        this.prisma = prisma;
        this.cacheManager = cacheManager;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.configService = configService;
    }
    async login(email, role) {
        try {
            let user;
            if (role === client_1.UserRole.USER) {
                user = await this.prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
            }
            const otp = (0, crypto_1.randomInt)(100000, 1000000);
            const otpId = (0, crypto_1.randomUUID)();
            this.mailService.sendUsersOtp(email, otp);
            this.cacheManager.set(otpId, { otp, user }, 1000 * 60 * 5);
            return { otpId };
        }
        catch (error) {
            if (error.name == 'NotFoundError') {
                throw new common_1.UnauthorizedException(['Invalid Email']);
            }
            throw error;
        }
    }
    async verifyOtp(otpId, otpNew) {
        const otpObject = await this.cacheManager.get(otpId);
        console.log("🚀 ~ AuthService ~ verifyOtp ~ otpObject:", otpObject);
        if (otpObject === undefined) {
            throw new common_1.UnauthorizedException(['Invalid OTP ID']);
        }
        const { otp, user } = otpObject;
        if (otpNew === otp) {
            this.cacheManager.del(otpId);
            const { accessToken, refreshToken } = await this.generateToken(user);
            this.cacheManager.set(refreshToken, user, 1000 * 60 * 60 * 24 * 30);
            return { accessToken, refreshToken };
        }
        throw new common_1.UnauthorizedException(['Invalid OTP']);
    }
    async refresh(refreshToken) {
        const user = await this.cacheManager.get(refreshToken);
        if (user === undefined) {
            throw new common_1.UnauthorizedException(['Invalid refresh token']);
        }
        this.cacheManager.del(refreshToken);
        const { accessToken, refreshToken: newRefreshToken } = await this.generateToken(user);
        this.cacheManager.set(newRefreshToken, user, 60 * 60 * 24 * 30 * 1000);
        return { accessToken, refreshToken: newRefreshToken };
    }
    async generateToken(user) {
        const accessToken = this.jwtService.sign(user, {
            expiresIn: await this.configService.get('ACCESS_TOKEN_EXPIRY'),
            secret: await this.configService.get('ACCESS_TOKEN_SECRET'),
        });
        const refreshToken = this.jwtService.sign(user, {
            expiresIn: await this.configService.get('REFRESH_TOKEN_EXPIRY'),
            secret: await this.configService.get('REFRESH_TOKEN_SECRET'),
        });
        return { accessToken, refreshToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, jwt_1.JwtService,
        mail_service_1.MailService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map