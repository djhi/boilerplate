import bcrypt from 'bcryptjs';
import config from 'config';
import baseInsertOne from '../lib/repository/insertOne';

import queries from './queries';

export const hashUserPassword = user => ({
    ...user,
    password: bcrypt.hashSync(user.password, config.security.salt_work_factor),
});

export const insertOne = userClient =>
    async user =>
        baseInsertOne(userClient)(hashUserPassword(user));

export const findByEmail = userClient =>
    async (email) => {
        const results = await userClient.findByEmail(email);
        return results.length ? results[0] : null;
    };

function repository(client) {
    const userClient = client.link(repository.queries);

    return {
        ...userClient,
        insertOne: insertOne(userClient),
        findByEmail: findByEmail(userClient),
    };
}

repository.queries = queries;

export default repository;
