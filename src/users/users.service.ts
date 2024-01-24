import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CustomError } from './interface';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    try {
      const users = this.prismaService.user.findMany(
        {
          select: {
            id: true,
            name: true,
            email: true,
            pwd: true,
            createdAt: true,
            updatedAt: true
          }
        }
      );
      return users

    }
    catch (error) {
      this.handleError(error);
    }
  }

  findAllBasedOnFilter(filter: string) {
    // try {
    //   if (filter.toLowerCase().trim() === "pwd") {
    //     return this.prismaService.user.findMany({
    //       where: {
    //         pwd: {

    //         }
    //       }
    //     });
    //   }
    // }
    // catch (error) {
    //   this.handleError(error);
    // }
    return `asd`
  }

  findOne(id: number) {
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
    } catch (error) {
      this.handleError(error);
    }
  }


  async dashboard(id: number) {
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
      })

      const jobsWhereApplied = await this.prismaService.jobs.findMany({
        where: {
          users: {
            some: {
              id: user.id
            }
          }
        },
        include: {
          domain: true,
          pwd: true
        }
      })

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

      const userDetails = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        pwd: user.pwd.map(pwd => pwd.name),
        domains: user.domains.map(domain => domain.name)
      }
      const jobsWhereAppliedDetails = jobsWhereApplied.map(job => {
        return {
          id: job.id,
          name: job.name,
          domain: job.domain.map(domain => domain.name)

        }
      })

      const jobsWhereDomainMatchDetails = jobsWhereDomainMatch.map(job => {
        return {
          id: job.id,
          name: job.name,
          domain: job.domain.map(domain => domain.name)
        }
      })
      // need to check where the user has applied 
      return {
        userDetails,
        jobsWhereAppliedDetails,
        jobsWhereDomainMatchDetails
      };

    }
    catch (error) {
      this.handleError(error);
    }
  }
  /**
  * Handles errors thrown by Prisma.
  * @param error - The error thrown by Prisma.
  * @throws {ConflictException} - If a unique constraint would be violated.
  * @throws {NotFoundException} - If no student is found.
  * @throws {InternalServerErrorException} - If an unknown database error occurs.
  * @throws {InternalServerErrorException} - If the database client could not be initialized.
  * @throws {InternalServerErrorException} - If the database engine crashed.
  * @throws {Error} - If an unknown error occurs.
  */
  handleError(error: CustomError) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          throw new ConflictException(
            'A unique constraint would be violated on Student. Details: ' +
            error.meta?.cause,
          );
        case 'P2025':
          throw new NotFoundException('No Student found');
        default:
          throw new InternalServerErrorException('Unknown database error');
      }
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      throw new InternalServerErrorException('Unknown database error');
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
      throw new InternalServerErrorException(
        'Could not initialize database client',
      );
    } else if (error instanceof Prisma.PrismaClientRustPanicError) {
      throw new InternalServerErrorException('Database engine crashed');
    } else {
      throw error;
    }
  }
}
