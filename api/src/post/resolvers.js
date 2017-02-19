import resolver from '../lib/graphql/resolver';

export default resolver('Post', ctx => ctx.postRepository);
