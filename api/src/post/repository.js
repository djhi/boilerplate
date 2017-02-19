import queries from './queries';

export const findBySlug = postClient =>
    async (slug) => {
        const results = await postClient.findBySlug(slug);
        return results.length ? results[0] : null;
    };

function repository(client) {
    const postClient = client.link(repository.queries);

    return {
        ...postClient,
        findBySlug: findBySlug(postClient),
    };
}

repository.queries = queries;

export default repository;
