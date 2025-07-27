import { DEFAULT_CATEGORIES } from '@/modules/auth/constants/default-categories'
import { UsersRepository } from '@/shared/database/repositories/users.repositories'
import { ConflictException, Injectable } from '@nestjs/common'
import { hash } from 'bcrypt'
import { SignupDto } from '../auth/dto/signup.dto'

@Injectable()
export class UsersService {}
