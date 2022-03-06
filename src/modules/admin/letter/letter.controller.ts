import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Docs } from '../../../core/decorators';
import { FindLetterDto, FindLetterResponseDto } from './letter.dto';

@ApiTags('admin')
@Controller('admin/letters')
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

	@Post('agree')
	agree() {}

	@Post('reject')
	reject() {}
}
