import type { APIGatewayProxyEvent } from 'aws-lambda';
import { expect } from 'vitest';
import { TestHandler } from './test.handler';

describe('Test Handler', async () => {
    describe('when handler method is invoked', () => {
        it('should return 400 when validation fails', async () => {
            const getDataHandler = new TestHandler();
            const request = {
                pathParameters: { value: 'has to be a number but it is not' }
            } as unknown as APIGatewayProxyEvent;
            const response = await getDataHandler.handler(request);

            expect(response.statusCode).toBe(400);
        });
    });
});
