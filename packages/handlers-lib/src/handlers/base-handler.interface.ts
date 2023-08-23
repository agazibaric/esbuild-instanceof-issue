import type { Context } from 'aws-lambda';

export interface IHandler<E, R> {
    process(event: E, context?: Context): Promise<R>;
    handler(event: E, context?: Context): Promise<R>;
}
