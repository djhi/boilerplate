import { buildApolloClient } from 'aor-simple-graphql-client';
import createApolloClient from './createApolloClient';

export default async (graphqlEndPoint = 'http://localhost:3000/graphql/') => {
    const apolloClient = createApolloClient(graphqlEndPoint);
    return buildApolloClient({ client: apolloClient });
};
