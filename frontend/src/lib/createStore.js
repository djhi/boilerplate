import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

let reduxStore = null;

export const getReducer = client => combineReducers({
    apollo: client.reducer(),
});

export const createMiddleware = (apolloClientMiddleware) => {
    const middleware = applyMiddleware(apolloClientMiddleware);

    if (process.browser && window.devToolsExtension) {
        return compose(middleware, window.devToolsExtension());
    }
    return middleware;
};

export default (apolloClientMiddleware, initialState) => {
    let store;

    if (!process.browser || !reduxStore) {
        const middleware = createMiddleware(apolloClientMiddleware.middleware())
        store = createStore(getReducer(apolloClientMiddleware), initialState, middleware)
        if (!process.browser) {
            return store;
        }
        reduxStore = store;
    }
    return reduxStore;
};
