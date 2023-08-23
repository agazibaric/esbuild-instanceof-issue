import { z } from 'zod';

export const testValidator = z.object({
    value: z.number()
});
