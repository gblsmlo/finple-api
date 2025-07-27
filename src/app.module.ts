import { validate } from '@/shared/config/env.validation'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { DatabaseModule } from './shared/database/database.module'

@Module({
	imports: [
		UsersModule,
		DatabaseModule,
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
			validate,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
