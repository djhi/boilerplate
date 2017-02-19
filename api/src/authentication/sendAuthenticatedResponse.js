import config from 'config';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export default (ctx, user) => {
    const delay = config.expirationTokenDelay;
    const tokenExpires = (Date.now() / 1000) + delay;
    const tokenData = Object.assign({ exp: tokenExpires }, user);

    const token = jwt.sign(tokenData, config.jwt.privateKey);
    const cookieToken = crypto.createHmac('sha256', config.secret)
        .update(token)
        .digest('hex');

    ctx.cookies.set('token', cookieToken, {
        ...config.cookies,
        expires: new Date(tokenExpires * 1000),
        httpOnly: true,
    });

    ctx.body = {
        token,
    };
};
