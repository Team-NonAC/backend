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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        try {
            const users = this.prismaService.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    pwd: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return users;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    findAllBasedOnFilter(filter) {
        return `asd`;
    }
    findOne(id) {
        try {
            const user = this.prismaService.user.findUniqueOrThrow({
                where: {
                    id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    pwd: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return user;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async dashboard(id) {
        try {
            const user = await this.prismaService.user.findUniqueOrThrow({
                where: {
                    id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    pwd: true,
                    createdAt: true,
                    updatedAt: true,
                    domains: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            const jobsWhereApplied = await this.prismaService.jobs.findMany({
                where: {
                    users: {
                        some: {
                            id: user.id
                        }
                    }
                }
            });
            const jobsWhereDomainMatch = await this.prismaService.jobs.findMany({
                where: {
                    domain: {
                        some: {
                            id: user.domains[0].id
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    domain: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            return {
                user,
                jobsWhereApplied,
                jobsWhereDomainMatch
            };
        }
        catch (error) {
            this.handleError(error);
        }
    }
    handleError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    throw new common_1.ConflictException('A unique constraint would be violated on Student. Details: ' +
                        error.meta?.cause);
                case 'P2025':
                    throw new common_1.NotFoundException('No Student found');
                default:
                    throw new common_1.InternalServerErrorException('Unknown database error');
            }
        }
        else if (error instanceof client_1.Prisma.PrismaClientUnknownRequestError) {
            throw new common_1.InternalServerErrorException('Unknown database error');
        }
        else if (error instanceof client_1.Prisma.PrismaClientInitializationError) {
            throw new common_1.InternalServerErrorException('Could not initialize database client');
        }
        else if (error instanceof client_1.Prisma.PrismaClientRustPanicError) {
            throw new common_1.InternalServerErrorException('Database engine crashed');
        }
        else {
            throw error;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map