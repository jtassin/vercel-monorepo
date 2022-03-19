console.time('import')
import { VercelRequest, VercelResponse } from '@vercel/node';
import { instance } from '@jtassin/vercel-monorepo-back';
console.timeEnd('import')


export default async (req: VercelRequest, res: VercelResponse) => {
    console.time('appReady')
    await instance.ready();
    console.timeEnd('appReady')
    console.time('request')
    instance.server.emit('request', req, res);
    console.timeEnd('request')
}
