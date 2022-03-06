import { LetterStatus, LetterStatusEnum } from '@core/types';
import { ApiProperty } from '@nestjs/swagger';

export class FindLetterDto {
	@ApiProperty({ enum: LetterStatusEnum })
	status!: LetterStatus;
}

export class FindLetterResponseDto {
	@ApiProperty({ example: 1 })
	id!: number;

	@ApiProperty({ description: '편지 처리 상태', enum: LetterStatusEnum })
	status!: LetterStatus;

	@ApiProperty({ example: 'ece39985-76f4-40ab-bd31-7284b43c0f46' })
	soldierId!: string;

	@ApiProperty({ example: '장지훈' })
	작성자!: string;

	@ApiProperty({ example: '제목제목' })
	제목!: string;

	@ApiProperty({ example: '내용내용내용' })
	내용!: string;
}
