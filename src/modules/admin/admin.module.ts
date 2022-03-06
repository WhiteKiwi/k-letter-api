import { Module } from '@nestjs/common';

import { AuthModule } from './auth';
import { LetterModule } from './letter';

@Module({
	imports: [LetterModule, AuthModule],
})
export class AdminModule {}
