export default `
    # A user
    type User {
        id: ID!
        email: String!
    }

    type UserPage {
        items: [User]
        totalCount: Int
    }

    extend type Query {
        getUser(id: ID!): User
        getPageOfUser(
            page: Int
            perPage: Int
            sortField: String
            sortOrder: String
            filter: String
        ): UserPage
    }

    extend type Mutation {
        createUser(data: String): User

        updateUser(data: String): Post

        removeUser(id: ID!): Boolean
    }
`;
