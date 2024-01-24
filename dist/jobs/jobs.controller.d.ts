import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(createJobDto: CreateJobDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        link: string;
        pwdId: number;
    }, unknown, never> & {})[]>;
    findOne(id: string): string;
    update(id: string, updateJobDto: UpdateJobDto): string;
    remove(id: string): string;
}
