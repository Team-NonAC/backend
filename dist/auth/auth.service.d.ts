import { PrismaService } from '../prisma/prisma.service';
import { Cache } from 'cache-manager';
import { JwtService } from '@nestjs/jwt';
import { UserInterface } from './interfaces/user.interface';
import { MailService } from '../mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { UserRole } from '@prisma/client';
export declare class AuthService {
    readonly prisma: PrismaService;
    readonly cacheManager: Cache;
    readonly jwtService: JwtService;
    readonly mailService: MailService;
    readonly configService: ConfigService;
    constructor(prisma: PrismaService, cacheManager: Cache, jwtService: JwtService, mailService: MailService, configService: ConfigService);
    login(email: string, role: UserRole): Promise<{
        otpId: string;
    }>;
    verifyOtp(otpId: string, otpNew: number): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateToken(user: UserInterface): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
