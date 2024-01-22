import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { OtpDto } from './dto/otp.dto';
import { RefreshDto } from './dto/refrest.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        otpId: string;
    }>;
    verifyOtp(otpDto: OtpDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshDto: RefreshDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
