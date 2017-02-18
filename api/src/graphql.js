/* eslint no-param-reassign: off */
import merge from 'lodash.merge';
import KoaRouter from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import { formatError } from 'apollo-errors';

import { dateSchema, dateResolver } from './lib/graphql/date';

import postSchema from './post/schema';
import postResolvers from './post/resolvers';

const router = new KoaRouter();

const rootSchema = `
type Query {
    dummy: Int
}

type Mutation {
    dummy: Int
}

schema {
    query: Query
    mutation: Mutation
}
`;

const schema = makeExecutableSchema({
    typeDefs: [
        rootSchema,
        postSchema,
        dateSchema,
    ],
    resolvers: merge(postResolvers, dateResolver),
});

router.post('/graphql', graphqlKoa(ctx => ({
    context: ctx,
    formatError,
    schema,
})));

router.get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql',
}));

export default router;
