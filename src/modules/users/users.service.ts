import { UsersRepository } from '@/shared/database/repositories/users.repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
	constructor(private readonly usersRepo: UsersRepository) {}

	async getUserById(userId: string) {
		const user = await this.usersRepo.findUnique({
			where: {
				id: userId,
			},
			select: {
				name: true,
				email: true,
			},
		})

		return user
	}
}
