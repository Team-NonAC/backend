import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/auth/auth.decorator';
import { UserInterface } from 'src/auth/interfaces/user.interface';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/auth.guard';

@ApiBearerAuth()
@ApiTags('Users')
@UseGuards(JwtGuard)

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiResponse({ status: 200, description: 'Returns all users' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @ApiResponse({ status: 200, description: 'Returns all users based on filter' })
  // @Get(`:filter`)
  // findAllBasedOnFilter(
  //   @Param(`:filter`) filter: string,
  // ) {
  //   return this.usersService.findAllBasedOnFilter(filter);
  // }

  @ApiResponse({ status: 200, description: 'Returns one user' })
  @Get(`findOne`)
  findOne(@User() user: UserInterface) {
    return this.usersService.findOne(<number>user.id);
  }


  @ApiResponse({ status: 200, description: 'Dashboard' })
  @Get(`dashboard`)
  dashboard(@User() user: UserInterface) {
    return this.usersService.dashboard(<number>user.id);
  }

  

}
