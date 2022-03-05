import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { SendLetterDto } from './letter.dto';

export const Docs = {
	SendLetter: () =>
		applyDecorators(
			ApiOperation({ summary: '군인 등록', description: '군인을 등록합니다.' }),
			ApiResponse({
				status: HttpStatus.NO_CONTENT,
				description: '성공 리스폰스 없음 (empty)',
			}),
			ApiBody({
				type: SendLetterDto,
			}),
		),
} as const;
