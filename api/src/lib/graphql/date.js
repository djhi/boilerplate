import { Kind } from 'graphql/language';

export const dateSchema = `
    scalar Date
`;

export const dateResolver = {
    Date: {
        __parseValue(value) { // value from the client
            return new Date(value);
        },
        __serialize(value) { // value sent to the client
            return value.toISOString();
        },
        __parseLiteral(ast) {
            if (ast.kind === Kind.OBJECT) {
                // ast value is always in string format
                return new Date(ast.value);
            }
            return null;
        },
    },
};
