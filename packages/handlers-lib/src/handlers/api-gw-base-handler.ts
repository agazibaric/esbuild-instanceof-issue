import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { LambdaResponse } from '../helpers/response/lambda-response';
import { mapErrorToResponse } from '../helpers/response/map-error-to-response';
import type { IHandler } from './base-handler.interface';

export abstract class ApiGatewayBaseHandler implements IHandler<APIGatewayProxyEvent, APIGatewayProxyResult> {
    abstract process(event: APIGatewayProxyEvent, context?: Context): Promise<APIGatewayProxyResult>;

    public async handler(event: APIGatewayProxyEvent, context?: Context): Promise<APIGatewayProxyResult> {
        try {
            return await this.process(event, context);
        } catch (e) {
            const { message, statusCode } = mapErrorToResponse(e);

            return LambdaResponse.build({ message }, statusCode);
        }
    }
}
