import { DEFAULT_CATEGORIES } from '@/modules/auth/constants/default-categories'
import { SigninDto } from '@/modules/auth/dto/signin.dto'
import { SignupDto } from '@/modules/auth/dto/signup.dto'
import { UsersRepository } from '@/shared/database/repositories/users.repositories'
import {
	ConflictException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare, hash } from 'bcrypt'

@Injectable()
export class AuthService {
	constructor(
		private readonly userRepo: UsersRepository,
		private readonly jwtService: JwtService,
	) {}

	async signin(authenticateDto: SigninDto) {
		const { email, password } = authenticateDto

		const user = await this.userRepo.findUnique({
			where: {
				email,
			},
		})

		if (!user) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const isPasswordValid = await compare(password, user.password)

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const accessToken = await this.generateAccessToken(user.id)

		return {
			accessToken,
		}
	}

	async signup(signupDto: SignupDto) {
		const { name, email, password } = signupDto

		const isEmailAlreadyRegistered = await this.userRepo.findUnique({
			where: {
				email,
			},
			select: { id: true },
		})

		if (isEmailAlreadyRegistered) {
			throw new ConflictException('This email is already in use.')
		}

		const hashedPassword = await hash(password, 12)

		const user = await this.userRepo.create({
			data: {
				name,
				email,
				password: hashedPassword,
				categories: {
					createMany: {
						data: [...DEFAULT_CATEGORIES],
					},
				},
			},
		})

		const accessToken = await this.generateAccessToken(user.id)

		return {
			accessToken,
		}
	}

	private async generateAccessToken(userId: string) {
		const payload = {
			sub: userId,
		}

		return await this.jwtService.signAsync(payload)
	}
}
