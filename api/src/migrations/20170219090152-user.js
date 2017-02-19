exports.up = (db, callback) => {
    db.createTable('user_account', {
        id: { type: 'uuid', primaryKey: true, autoIncrement: true },
        email: { type: 'string' },
        password: { type: 'string' },
    }, callback);
};

exports.down = (db, callback) => {
    db.dropTable('user_account', callback);
};
