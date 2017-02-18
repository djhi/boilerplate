import { ApolloProvider, getDataFromTree } from 'react-apollo';
import React from 'react';
import 'isomorphic-fetch';
import createApolloClient from './createApolloClient';
import createStore from './createStore';

export default Component => (
    class extends React.Component {
        static async getInitialProps(ctx) {
            const headers = ctx.req ? ctx.req.headers : {};
            const client = createApolloClient('http://localhost:3000/graphql/', headers);
            const store = createStore(client, client.initialState);

            const props = {
                url: {
                    query: ctx.query,
                    pathname: ctx.pathname,
                },
                ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
            };

            if (!process.browser) {
                const app = (
                    <ApolloProvider client={client} store={store}>
                        <Component {...props} />
                    </ApolloProvider>
                );
                await getDataFromTree(app);
            }

            const state = store.getState();
            return {
                initialState: {
                    ...state,
                    apollo: {
                        data: state.apollo.data,
                    },
                },
                headers,
                ...props,
            };
        }

        constructor(props) {
            super(props);
            this.client = createApolloClient(this.props.headers);
            this.store = createStore(this.client, this.props.initialState);
        }

        render() {
            return (
                <ApolloProvider client={this.client} store={this.store}>
                    <Component {...this.props} />
                </ApolloProvider>
            );
        }
    }
);
