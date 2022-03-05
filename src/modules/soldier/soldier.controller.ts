import { Body, Controller, Post } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import { Docs } from './soldier.docs';
import { RegisterSoldierDto, RegisterSoldierResponseDto } from './soldier.dto';

@Controller('soldier')
export class SoldierController {
	@Docs.RegisterSoldier()
	@Post('register')
	async register(
		@Body() dto: RegisterSoldierDto,
	): Promise<RegisterSoldierResponseDto> {
		void dto;
		return {
			soldierId: uuidV4(),
		};
	}
}
