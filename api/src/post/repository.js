import uuid from 'uuid';

export const getSortDirection = sort => (
    sort.toLowerCase() === 'asc'
    ? 1
    : -1
);

export const getFilters = (filter) => {
    if (typeof filter === 'string' && filter.length) {
        return JSON.parse(filter);
    }

    if (typeof filter === 'object') {
        return filter;
    }

    return {};
};

export const create = collection => post =>
    collection
        .insertOne({ ...post, id: uuid() })
        .then(({ ops: [value] }) => value);

export const removeOneById = collection => id =>
    collection
        .remove({ id })
        .then(() => true)
        .catch(() => false);

export const findOneById = collection => id =>
    collection.findOne({ id });

export const findPage = collection => async ({
    page = 0,
    perPage = 20,
    sortField = 'reference',
    sortOrder = 'ASC',
    filter,
}) => {
    const items = await collection
        .find(getFilters(filter))
        .skip(page * perPage)
        .limit(perPage)
        .sort({ [sortField]: getSortDirection(sortOrder) })
        .toArray();

    const totalCount = collection.count(getFilters(filter));

    return {
        items,
        totalCount,
    };
};

export const updateOneById = collection => (id, data) =>
    collection
        .findOneAndUpdate(
            { id },
            { $set: data },
            { returnOriginal: false },
        )
        .then(({ value }) => value);

export default (db) => {
    const collection = db.collection('posts');

    return {
        create: create(collection),
        removeOneById: removeOneById(collection),
        findOneById: findOneById(collection),
        findPage: findPage(collection),
        updateOneById: updateOneById(collection),
    };
};
