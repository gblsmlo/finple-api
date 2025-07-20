import type { INestApplication } from '@nestjs/common'
import { Test, type TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('/ (GET)', () => {
		return request(app.getHttpServer())
			.get('/')
			.expect(200)
			.expect('Welcome to Finple API - Financial management for couples!')
	})

	it('/health (GET)', () => {
		return request(app.getHttpServer())
			.get('/health')
			.expect(200)
			.expect((res) => {
				expect(res.body).toHaveProperty('status', 'ok')
				expect(res.body).toHaveProperty('timestamp')
			})
	})
})
