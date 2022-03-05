import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendLetterDto {
	@ApiProperty({ example: 'ece39985-76f4-40ab-bd31-7284b43c0f46' })
	@IsNotEmpty()
	@IsString()
	soldierId!: string;

	@ApiProperty({ example: '홍길동' })
	@IsNotEmpty()
	@IsString()
	// TODO: Max Length 제한
	작성자!: string;

	@ApiProperty({ example: '거긴 어때' })
	@IsNotEmpty()
	@IsString()
	// TODO: Max Length 제한
	제목!: string;

	@ApiProperty({ example: '여긴 좋아 내용내용..\n내용...' })
	@IsNotEmpty()
	@IsString()
	// TODO: Max Length 제한
	내용!: string;
}
