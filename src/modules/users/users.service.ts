import { UsersRepository } from '@/shared/database/repositories/users.repositories'
import { ConflictException, Injectable } from '@nestjs/common'
import { hash } from 'bcrypt'
import { DEFAULT_CATEGORIES } from './constants/default-categories'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
	constructor(private readonly userRepo: UsersRepository) {}

	async create(createUserDto: CreateUserDto) {
		const { name, email, password } = createUserDto

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

		return user
	}
}
