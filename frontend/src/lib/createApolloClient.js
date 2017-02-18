import ApolloClient, { createNetworkInterface } from 'apollo-client';

let apolloClient = null;

function createClient(graphqlEndPoint, headers) {
    return new ApolloClient({
        ssrMode: !process.browser,
        headers,
        dataIdFromObject: result => result._id || null,
        networkInterface: createNetworkInterface({
            uri: graphqlEndPoint,
            opts: {
                credentials: 'same-origin',
            },
        }),
    });
}

export default (graphqlEndPoint, headers) => {
    if (!process.browser) {
        return createClient(graphqlEndPoint, headers);
    }
    if (!apolloClient) {
        apolloClient = createClient(graphqlEndPoint, headers);
    }
    return apolloClient;
};
