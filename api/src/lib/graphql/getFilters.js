export default (filter) => {
    if (typeof filter === 'string' && filter.length) {
        return JSON.parse(filter);
    }

    if (typeof filter === 'object') {
        return filter;
    }

    return {};
};
