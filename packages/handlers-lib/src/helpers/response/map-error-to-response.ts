import { ZodError } from 'zod';
import type { ErrorResponse } from '../../types/error-response.type';
import { createZodMessage } from '../zod/create-zod-message';

export const mapErrorToResponse = (error: unknown): ErrorResponse => {
    let statusCode = 500;
    let message = 'Internal server error';

    if (error instanceof ZodError) {
        statusCode = 400;
        message = createZodMessage(error);
    }

    return { message, statusCode };
};
