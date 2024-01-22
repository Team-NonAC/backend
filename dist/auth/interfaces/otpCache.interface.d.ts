import { UserRole } from "@prisma/client";
export interface otpCache {
    otp: number;
    user: {
        id: number;
        name: string;
        role: UserRole;
    };
}
