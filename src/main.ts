import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors({
		origin: process.env.FRONTEND_URL || 'http://localhost:3000',
		credentials: true,
	})

	app.useGlobalPipes(new ValidationPipe())
	app.setGlobalPrefix('api')

	const port = process.env.PORT
	await app.listen(port)

	console.log(`🚀 Finple API is running on port ${port}`)
}

bootstrap()
