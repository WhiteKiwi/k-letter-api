import { Module } from '@nestjs/common';

import { SoldierController } from './soldier.controller';
import { SoldierService } from './soldier.service';

@Module({
	controllers: [SoldierController],
	providers: [SoldierService],
})
export class SoldierModule {}
