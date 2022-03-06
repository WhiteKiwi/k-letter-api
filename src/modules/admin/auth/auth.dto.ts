import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
	@ApiProperty()
	id!: string;

	@ApiProperty()
	password!: string;
}

export class AuthLoginResponseDto {
	@ApiProperty()
	accessToken!: string;
}
