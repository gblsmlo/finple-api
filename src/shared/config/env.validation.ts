import { plainToInstance } from 'class-transformer'
import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsString,
	Max,
	Min,
	validateSync,
} from 'class-validator'

enum Environment {
	Development = 'development',
	Production = 'production',
	Test = 'test',
}

class EnvironmentVariables {
	@IsEnum(Environment)
	@IsNotEmpty()
	NODE_ENV: Environment

	@IsNumber()
	@IsNotEmpty()
	@Min(0)
	@Max(65535)
	PORT: number

	@IsString()
	@IsNotEmpty()
	JWT_SECRET: string

	@IsString()
	@IsNotEmpty()
	JWT_EXPIRES_IN: string

	@IsString()
	@IsNotEmpty()
	DATABASE_URL: string
}

export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToInstance(EnvironmentVariables, config, {
		enableImplicitConversion: true,
	})

	const errors = validateSync(validatedConfig, { skipMissingProperties: false })

	if (errors.length > 0) {
		throw new Error(errors.toString())
	}

	return validatedConfig
}
