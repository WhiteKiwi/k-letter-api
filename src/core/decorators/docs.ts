import { applyDecorators, Type } from '@nestjs/common';
import {
	ApiBody,
	ApiOperation,
	ApiProperty,
	ApiResponse,
} from '@nestjs/swagger';

export function Docs({
	summary,
	description,
	body,
	responses,
}: DocsParams): MethodDecorator {
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
					type: makeResponse(response.type),
				}),
			);
		}
	}

	return applyDecorators(...decorators);
}
interface DocsParams {
	summary: string;
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
}

function makeResponse(type?: Type<unknown>) {
	if (!type) return;

	class Response {
		@ApiProperty({ type })
		data!: unknown;
	}
	return Response;
}
