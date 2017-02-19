export default `
    # A post for the blog
    type Post {
        id: ID!
        author: String!
        body: String!
        image_url: String!
        title: String!
        slug: String!
    }

    type PostPage {
        items: [Post]
        totalCount: Int
    }

    extend type Query {
        getPost(id: ID!): Post
        getPageOfPosts(
            page: Int
            perPage: Int
            sortField: String
            sortOrder: String
            filter: String
        ): PostPage
    }

    extend type Mutation {
        createPost(data: String): Post

        updatePost(data: String): Post

        removePost(id: ID!): Boolean
    }
`;
