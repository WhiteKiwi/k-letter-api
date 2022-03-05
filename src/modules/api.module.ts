import { Module } from '@nestjs/common';

import { SoldierModule } from './soldier';

@Module({
	imports: [SoldierModule],
})
export class ApiModule {}
