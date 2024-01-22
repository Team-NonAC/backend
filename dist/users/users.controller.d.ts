import { UsersService } from './users.service';
import { UserInterface } from 'src/auth/interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        pwd: (import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
        }, unknown, never> & {})[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(user: UserInterface): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        pwd: (import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
        }, unknown, never> & {})[];
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime").DefaultArgs>;
    dashboard(user: UserInterface): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            pwd: (import("@prisma/client/runtime").GetResult<{
                id: number;
                name: string;
            }, unknown, never> & {})[];
            createdAt: Date;
            updatedAt: Date;
            domains: {
                id: number;
                name: string;
            }[];
        };
        jobsWhereApplied: (import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            link: string;
            pwdId: number;
        }, unknown, never> & {})[];
        jobsWhereDomainMatch: {
            id: number;
            name: string;
            domain: {
                id: number;
                name: string;
            }[];
        }[];
    }>;
}
