import { Env } from '@config/env';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

export function setupSwagger(
	app: INestApplication,
	configService: ConfigService<Env>,
): void {
	app.use(
		['/docs', '/docs-json'],
		basicAuth({
			challenge: true,
			users: {
				[configService.get('DOC_ID')]: configService.get('DOC_PASSWORD') || '',
			},
		}),
	);

	const options = new DocumentBuilder()
		.setTitle('K-Letter API Docs')
		.setVersion('0.0.1')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('docs', app, document);
}
