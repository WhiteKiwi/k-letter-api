import { Env } from '@config/env';
import { setupSwagger } from '@core/setup';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	setupSwagger(app);

	const configService: ConfigService<Env> = app.get(ConfigService);
	const port = configService.get<number>('PORT') || 3000;
	await app.listen(port, () => {
		console.log(`SERVER LISTENING ON port ${port}`);
	});
}
bootstrap();
