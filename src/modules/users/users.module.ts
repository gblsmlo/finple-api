import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
