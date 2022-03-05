import { ApiProperty } from '@nestjs/swagger';
import {
	IsDateString,
	IsEnum,
	IsNotEmpty,
	IsPhoneNumber,
	IsString,
} from 'class-validator';
import {
	관계,
	관계CodeMap,
	군종,
	군종CodeMap,
	성분,
	성분CodeMap,
	입영부대,
	입영부대CodeMap,
} from 'the-camp';

export class RegisterSoldierDto {
	@ApiProperty({ enum: Object.keys(관계CodeMap), example: '팬' })
	@IsEnum(Object.keys(관계CodeMap))
	관계!: 관계;

	@ApiProperty({ enum: Object.keys(군종CodeMap), example: '육군' })
	@IsEnum(Object.keys(군종CodeMap))
	군종!: 군종;

	@ApiProperty({ enum: Object.keys(성분CodeMap), example: '예비군인/훈련병' })
	@IsEnum(Object.keys(성분CodeMap))
	성분!: 성분;

	@ApiProperty({
		enum: Object.keys(입영부대CodeMap),
		example: '육군훈련소-논산',
	})
	@IsEnum(Object.keys(입영부대CodeMap))
	입영부대!: 입영부대;

	@ApiProperty({
		description: 'yyyy-MM-dd',
		example: '2001-01-01',
	})
	@IsNotEmpty()
	@IsDateString()
	생년월일!: string;

	@ApiProperty({ example: '홍길동' })
	@IsNotEmpty()
	@IsString()
	이름!: string;

	@ApiProperty({
		description: 'yyyy-MM-dd',
		example: '2022-02-01',
	})
	@IsNotEmpty()
	@IsDateString()
	입영일!: string;

	@ApiProperty({
		description: '전화번호 국가코드 & "-" 없이',
		example: '01012345678',
	})
	@IsNotEmpty()
	@IsPhoneNumber('KR')
	전화번호!: string;
}

export class RegisterSoldierResponseDto {
	@ApiProperty({ description: 'soldier id' })
	soldierId!: string;
}
