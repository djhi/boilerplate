exports.up = (db, callback) => {
    db.createTable('post', {
        id: { type: 'uuid', primaryKey: true, autoIncrement: true },
        author: { type: 'string' },
        body: { type: 'string' },
        image_url: { type: 'string' },
        slug: { type: 'string' },
        title: { type: 'string' },
    }, callback);
};

exports.down = (db, callback) => {
    db.dropTable('user_account', callback);
};
