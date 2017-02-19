import pluralize from 'pluralize';
import omit from 'lodash.omit';
import getFilters from './getFilters';

export const getOne = (root, { id }, repository) =>
    repository.selectOne(id);

export const getPageOf = async (root, { page, perPage, filter, sortField, sortOrder }, repository) => {
    const items = await repository.selectPage(perPage, page * perPage, getFilters(filter), sortField, sortOrder);

    return {
        items: items.map(i => omit(i, 'totalcount')),
        totalCount: items.length ? items[0].totalcount : 0,
    };
};

export const create = (root, { data }, repository) => {
    const parsedData = JSON.parse(data);
    return repository.insertOne(parsedData);
};

export const update = (root, { data }, repository) => {
    const { id, ...parsedData } = JSON.parse(data);
    return repository.updateOne(id, parsedData);
};

export const remove = (root, { id }, repository) =>
    repository.deleteOne(id);

export default (entityName, getRepository) => ({
    Query: {
        [`get${entityName}`]: (root, params, ctx) => getOne(root, params, getRepository(ctx)),
        [`getPageOf${pluralize(entityName)}`]: (root, params, ctx) => getPageOf(root, params, getRepository(ctx)),
    },

    Mutation: {
        [`create${entityName}`]: (root, params, ctx) => create(root, params, getRepository(ctx)),
        [`update${entityName}`]: (root, params, ctx) => update(root, params, getRepository(ctx)),
        [`remove${entityName}`]: (root, params, ctx) => remove(root, params, getRepository(ctx)),
    },
});
