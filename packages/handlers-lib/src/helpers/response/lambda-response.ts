import type { APIGatewayProxyResult } from 'aws-lambda';

export class LambdaResponse {
    static build<T>(
        data: T,
        statusCode: number,
        headers?: Record<string, string | boolean | number>
    ): APIGatewayProxyResult {
        return {
            body: typeof data === 'string' ? data : JSON.stringify(data),
            statusCode,
            headers
        };
    }
}
