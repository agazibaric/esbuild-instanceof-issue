import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ApiGatewayBaseHandler, LambdaResponse } from 'handlers-lib';
import type { TestType } from '../../types/test.type';
import { testValidator } from '../../validators/test.validator';

export class TestHandler extends ApiGatewayBaseHandler {
    constructor() {
        super();
    }

    public parse(event: APIGatewayProxyEvent): TestType {
        return testValidator.parse({
            value: event.pathParameters?.value
        });
    }

    public async process(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
        const parsed = this.parse(event);

        return LambdaResponse.build(parsed, 200);
    }
}
