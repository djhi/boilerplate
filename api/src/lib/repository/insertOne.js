import uuid from 'uuid';

export default entityCient =>
    async user =>
        entityCient.insertOne({
            id: uuid(),
            ...user,
        });
