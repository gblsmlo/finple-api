import { UsersService } from '@/modules/users/users.service'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	imports: [
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, UsersService],
})
export class AuthModule {}
