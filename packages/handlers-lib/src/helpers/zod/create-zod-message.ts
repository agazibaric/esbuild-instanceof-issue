import type { ZodError } from 'zod';

export const createZodMessage = (err: ZodError): string => {
    return err.issues
        .map((issue) => {
            return `Field ${issue.path.join('->')}: ${issue.message}`;
        })
        .join('. ');
};
