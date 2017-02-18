import { MongoClient } from 'mongodb';
import config from 'config';
import postRepository from '../post/repository';

export const mongoClientFactory = MongoClientImpl => async (ctx, next) => {
    ctx.db = await MongoClientImpl.connect(`mongodb://${config.mongo.host}/${config.mongo.dbName}`);
    ctx.postRepository = await postRepository(ctx.db);

    try {
        await next();
    } finally {
        if (!ctx.keepDbOpened) {
            await ctx.db.close();
        }
    }
};

export default mongoClientFactory(MongoClient);
