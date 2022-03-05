import { Module } from '@nestjs/common';

import { LetterModule } from './letter';
import { SoldierModule } from './soldier';

@Module({
	imports: [SoldierModule, LetterModule],
})
export class ApiModule {}
