import config from 'config';
import { PgPool } from 'co-postgres-queries';

import postRepository from '../post/repository';
import userRepository from '../user/repository';

const pool = new PgPool(config.db);

export const connectToDBMiddleware = connect => async (ctx, next) => {
    try {
        ctx.client = await connect();
        ctx.postRepository = postRepository(ctx.client);
        ctx.userRepository = userRepository(ctx.client);
    } catch (err) {
        console.error(`Unable to connect to database: ${err.message}`, { err });
        ctx.throw(503, 'Unable to connect to database');
    }

    try {
        await next();
    } catch (error) {
        // Since there was an error somewhere down the middleware,
        // then we need to throw this client away.
        ctx.client.end();

        throw error;
    } finally {
        console.log('debug', 'Closing DB connection');
        ctx.client.release();
    }
};

export default connectToDBMiddleware(pool.connect);
