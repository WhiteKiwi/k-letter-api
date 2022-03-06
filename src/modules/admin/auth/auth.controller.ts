import { Docs } from '@core/decorators';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthLoginDto, AuthLoginResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('admin/auth')
@Controller({
	version: '1',
	path: 'admin/auth',
})
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Docs('로그인해서 토큰을 받아옵니다', {
		description: 'Bearer Token으로 쓰면 됨',
		body: {
			type: AuthLoginDto,
		},
		responses: {
			type: AuthLoginResponseDto,
		},
	})
	@Post('login')
	async login(
		@Body() { id, password }: AuthLoginDto,
	): Promise<AuthLoginResponseDto> {
		return await this.authService.login(id, password);
	}
}
