import { Module } from '@nestjs/common';

import { AdminModule } from './admin';
import { LetterModule } from './letter';
import { SoldierModule } from './soldier';

@Module({
	imports: [SoldierModule, LetterModule, AdminModule],
})
export class ApiModule {}
