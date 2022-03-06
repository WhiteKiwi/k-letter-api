import { Env } from '@config/env';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService<Env>,
	) {}

	async login(id: string, password: string) {
		const user = await this.validate(id, password);

		if (!user) {
			throw new UnauthorizedException();
		}

		return {
			accessToken: this.jwtService.sign({}),
		};
	}

	private async validate(id: string, password: string): Promise<unknown> {
		if (
			id === this.configService.get('ADMIN_ID') &&
			password === this.configService.get('ADMIN_PASSWORD')
		) {
			return {};
		}

		return null;
	}
}
