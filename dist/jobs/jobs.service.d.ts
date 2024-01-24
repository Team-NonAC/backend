import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class JobsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createJobDto: CreateJobDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        link: string;
        pwdId: number;
    }, unknown, never> & {})[]>;
    findOne(id: number): string;
    update(id: number, updateJobDto: UpdateJobDto): string;
    remove(id: number): string;
}
