module.exports = {
    db: {
        driver: 'pg',
        host: 'database',
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
