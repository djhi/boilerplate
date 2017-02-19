import resolver from '../lib/graphql/resolver';

export default resolver('User', ctx => ctx.userRepository);
