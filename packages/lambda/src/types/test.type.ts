import type { z } from 'zod';
import type { testValidator } from '../validators/test.validator';

export type TestType = z.infer<typeof testValidator>;
