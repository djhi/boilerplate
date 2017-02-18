export const getPost = (root, { id }, { postRepository }) =>
    postRepository.findOneById(id);

export const getPageOfPosts = (root, { page, perPage, field, order, filter }, { postRepository }) =>
    postRepository.findPage({ page, perPage, field, order, filter });

export const createPost = (root, { data }, { postRepository }) => {
    const parsedData = JSON.parse(data);
    return postRepository.create(parsedData);
};

export const updatePost = (root, { data }, { postRepository }) => {
    const { id, ...parsedData } = JSON.parse(data);
    return postRepository.updateOneById(id, parsedData);
};

export const removePost = (root, { id }, { postRepository }) =>
    postRepository.removeOneById(id);

export default {
    Query: {
        getPost,
        getPageOfPosts,
    },

    Mutation: {
        createPost,
        updatePost,
        removePost,
    },
};
