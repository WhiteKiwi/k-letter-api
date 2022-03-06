import { applyDecorators, Type } from '@nestjs/common';
import {
	ApiBody,
	ApiOperation,
	ApiProperty,
	ApiResponse,
} from '@nestjs/swagger';

export function Docs(
	summary: string,
	{ description, body, responses }: DocsParams,
): MethodDecorator {
	const decorators: Array<MethodDecorator> = [];
	decorators.push(ApiOperation({ summary, description }));
	if (body) decorators.push(ApiBody({ type: body.type }));
	if (responses) {
		if (!Array.isArray(responses)) responses = [responses];
		for (const response of responses) {
			decorators.push(
				ApiResponse({
					status: response.status,
					description: response.description,
					type: makeResponse(response.type, response.isArray),
				}),
			);
		}
	}

	return applyDecorators(...decorators);
}
interface DocsParams {
	description?: string;
	body?: {
		type?: Type<unknown> | Function | [Function] | string;
	};
	responses?: ResponseDoc | ResponseDoc[];
}

interface ResponseDoc {
	status?: number;
	description?: string;
	type?: Type<unknown>;
	isArray?: boolean;
}

function makeResponse(type?: Type<unknown>, isArray?: boolean) {
	if (!type) return;

	class Response {
		@ApiProperty({ type, isArray })
		data!: unknown;
	}
	return Response;
}
