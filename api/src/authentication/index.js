import config from 'config';
import KoaRouter from 'koa-router';

import authenticate from './authenticate';
import methodFilterMiddleware from '../lib/methodFilter';
import sendAuthenticatedResponse from './sendAuthenticatedResponse';

const router = new KoaRouter();

export const postSignIn = async (ctx) => {
    const { email, password } = ctx.request.body;
    const user = await authenticate(ctx.userRepository)(email, password);

    if (!user) {
        this.body = 'Invalid credentials.';
        this.status = 401;
        return;
    }

    sendAuthenticatedResponse(ctx, user, config.apps.api.security);
};

router.use(methodFilterMiddleware(['POST']));
router.post('/sign-in', postSignIn);

export default router;
