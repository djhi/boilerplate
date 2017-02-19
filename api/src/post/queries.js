import { crudQueries } from 'co-postgres-queries';

const tableName = 'post';

const fields = [
    'id',
    'author',
    'body',
    'image_url',
    'title',
    'slug',
];

const postQueries = crudQueries(tableName, fields, ['id'], fields);

const findBySlug = (slug) => {
    const sql = `
        SELECT ${fields}
        FROM ${tableName}
        WHERE LOWER(slug) = LOWER($slug)
        LIMIT 1`;

    return { sql, parameters: { slug } };
};

export default Object.assign(postQueries, { findBySlug });
