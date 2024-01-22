import { CacheModule, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { redisStore } from 'cache-manager-redis-yet';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          store: await redisStore({
            socket: {
              host: configService.get('REDIS_HOST'),
              port: configService.get('REDIS_PORT'),
            },
            password: configService.get('REDIS_PASSWORD'),
            database: 0,
          }),
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule,
    MailModule,
    UsersModule,
    JobsModule,
  ],
})
export class AppModule { }
