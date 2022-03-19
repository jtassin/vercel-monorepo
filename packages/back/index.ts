import fastify from 'fastify';
import { name } from '@jtassin/vercel-monorepo-lib';

export const instance = fastify();

instance.get('/', async () => {
    return { hello: name() };
})