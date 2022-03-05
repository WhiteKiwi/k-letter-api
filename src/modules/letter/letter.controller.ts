import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { Docs } from './letter.docs';
import { SendLetterDto } from './letter.dto';

@Controller('letters')
export class LetterController {
	@Docs.SendLetter()
	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('send')
	async register(@Body() dto: SendLetterDto): Promise<void> {
		void dto;
	}
}
