import { Docs } from '@core/decorators';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { SendLetterDto } from './letter.dto';

@Controller({
	version: '1',
	path: 'letters',
})
export class LetterController {
	@Docs({
		summary: '편지 발송 요청',
		description: '편지 발송을 요청합니다.',
		responses: {
			status: HttpStatus.NO_CONTENT,
			description: '성공 리스폰스 없음 (empty)',
		},
		body: {
			type: SendLetterDto,
		},
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('send')
	async register(@Body() dto: SendLetterDto): Promise<void> {
		void dto;
	}
}
