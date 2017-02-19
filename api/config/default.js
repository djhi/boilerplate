module.exports = {
    db: {
        driver: 'pg',
        host: 'postgres',
        port: 5432,
        user: 'postgres',
        password: '',
        schema: 'public',
        database: 'database',
    },
    security: {
        salt_work_factor: 10,
    },
};
