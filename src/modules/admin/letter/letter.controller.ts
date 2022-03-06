import { Docs } from '@core/decorators';
import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth';
import {
	AgreeLetterDto,
	FindLetterDto,
	FindLetterResponseDto,
	RejectLetterDto,
} from './letter.dto';

@ApiBearerAuth()
@ApiTags('admin/letters')
@UseGuards(JwtAuthGuard)
@Controller({
	version: '1',
	path: 'admin/letters',
})
export class LetterController {
	@Docs('편지 요청 건 목록 조회', {
		description: '편지 요청 건 목록들을 조회합니다',
		responses: { type: FindLetterResponseDto, isArray: true },
	})
	@Get()
	find(@Query() dto: FindLetterDto): FindLetterResponseDto[] {
		void dto;
		return [
			{
				id: 1,
				status: 'RECEIVED',
				soldierId: 'ece39985-76f4-40ab-bd31-7284b43c0f46',
				작성자: '장지훈',
				제목: '테스트제목',
				내용: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
			},
			{
				id: 2,
				status: 'SENDED',
				soldierId: 'ece39985-76f4-40ab-bd31-7284b43c0f46',
				작성자: '이민혁',
				제목: '테스트제목',
				내용: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
			},
			{
				id: 3,
				status: 'REJECTED',
				soldierId: 'ddd33333-76f4-40ab-bd31-7284b43c0f46',
				작성자: '고태건',
				제목: '테스트제목',
				내용: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
			},
		];
	}

	@Docs('편지 승인', {
		description: '편지 발송을 승인합니다',
		body: { type: AgreeLetterDto },
		responses: {
			status: HttpStatus.NO_CONTENT,
			description: '성공 리스폰스 없음 (empty)',
		},
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('agree')
	agree(): void {}

	@Docs('편지 거부', {
		description: '편지 발송을 거부합니다',
		body: { type: RejectLetterDto },
		responses: {
			status: HttpStatus.NO_CONTENT,
			description: '성공 리스폰스 없음 (empty)',
		},
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('reject')
	reject(): void {}
}
