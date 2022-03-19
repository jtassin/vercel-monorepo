import fastify from 'fastify';
import { name } from '@jtassin/vercel-monorepo-lib';

const instance = fastify();

instance.get('/', async () => {
    return { hello: name() };
})