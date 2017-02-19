import { crudQueries } from 'co-postgres-queries';

const tableName = 'user_account';

const fields = [
    'id',
    'email',
    'password',
];

const userQueries = crudQueries(tableName, fields, ['id'], fields);

const findByEmail = (email) => {
    const sql = `
        SELECT ${fields}
        FROM ${tableName}
        WHERE LOWER(email) = LOWER($email)
        LIMIT 1`;

    return { sql, parameters: { email } };
};

export default Object.assign(userQueries, { findByEmail });
