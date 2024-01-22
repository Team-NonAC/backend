"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
const prisma_module_1 = require("./prisma/prisma.module");
const mail_module_1 = require("./mail/mail.module");
const config_1 = require("@nestjs/config");
const config_2 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const jobs_module_1 = require("./jobs/jobs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            common_1.CacheModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        store: await (0, cache_manager_redis_yet_1.redisStore)({
                            socket: {
                                host: configService.get('REDIS_HOST'),
                                port: configService.get('REDIS_PORT'),
                            },
                            password: configService.get('REDIS_PASSWORD'),
                            database: 0,
                        }),
                    };
                },
                inject: [config_2.ConfigService],
            }),
            prisma_module_1.PrismaModule,
            mail_module_1.MailModule,
            users_module_1.UsersModule,
            jobs_module_1.JobsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map