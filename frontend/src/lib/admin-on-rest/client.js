import { buildApolloClient } from './graphql';
import createApolloClient from '../createApolloClient';

export default async (graphqlEndPoint = 'http://localhost:3000/graphql/') => {
    const apolloClient = createApolloClient(graphqlEndPoint);
    return buildApolloClient({ client: apolloClient });
};
