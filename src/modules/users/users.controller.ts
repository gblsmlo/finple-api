import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '../auth/auth.guard'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('/me')
	me(@Req() request: any) {
		return this.usersService.getUserById(request.userId)
	}
}
