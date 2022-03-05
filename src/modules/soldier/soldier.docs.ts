import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { RegisterSoldierDto, RegisterSoldierResponseDto } from './soldier.dto';

export const Docs = {
	RegisterSoldier: () =>
		applyDecorators(
			ApiOperation({ summary: '군인 등록', description: '군인을 등록합니다.' }),
			ApiResponse({
				status: HttpStatus.CREATED,
				type: RegisterSoldierResponseDto,
			}),
			ApiBody({
				type: RegisterSoldierDto,
			}),
		),
} as const;
