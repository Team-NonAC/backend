import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CustomError } from './interface';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Prisma.PrismaPromise<{
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
    findAllBasedOnFilter(filter: string): string;
    findOne(id: number): Prisma.Prisma__UserClient<{
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
    dashboard(id: number): Promise<{
        userDetails: {
            id: number;
            name: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            pwd: string[];
            domains: string[];
        };
        jobsWhereAppliedDetails: {
            id: number;
            name: string;
            domain: string[];
        }[];
        jobsWhereDomainMatchDetails: {
            id: number;
            name: string;
            domain: string[];
        }[];
    }>;
    handleError(error: CustomError): void;
}
