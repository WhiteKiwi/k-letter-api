import { Docs } from '@core/decorators';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import { RegisterSoldierDto, RegisterSoldierResponseDto } from './soldier.dto';

@Controller({
	version: '1',
	path: 'soldiers',
})
export class SoldierController {
	@Docs({
		summary: '군인 등록',
		description: '군인을 등록합니다.',
		body: {
			type: RegisterSoldierDto,
		},
		responses: {
			status: HttpStatus.CREATED,
			type: RegisterSoldierResponseDto,
		},
	})
	@HttpCode(HttpStatus.CREATED)
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
