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

	@Docs('로그인', {
		description: 'Authorization 헤더에 `Bearer ${accessToken}`해서 쓰면 됨',
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
