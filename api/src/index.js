import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';
import koaCors from 'kcors';
import koaHelmet from 'koa-helmet';

import db from './lib/db';
import graphql from './graphql';
import authentication from './authentication';

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 3000;
const app = new Koa();

// Security headers
app.use(koaHelmet({ directives: { defaultSrc: ["'self'", 'cdn.jsdelivr.net'] } }));
app.use(koaHelmet.contentSecurityPolicy());
app.use(koaHelmet.frameguard('deny'));
app.use(koaCors({
    credentials: true,
    exposeHeaders: [
        'Authorization',
        'Content-Disposition',
        'Content-Type',
        'X-Entities',
    ],
    allowHeaders: [
        'Authorization',
        'Content-Disposition',
        'Content-Type',
        'X-Entities',
    ],
    allowMethods: [
        'DELETE',
        'GET',
        'POST',
        'PUT',
    ],
    origin: (ctx) => {
        const origin = ctx.get('origin');
        return origin;
    },
}));

app.use(koaBodyParser());
app.use(db);
app.use(authentication.routes());
app.use(authentication.allowedMethods());
app.use(graphql.routes());
app.use(graphql.allowedMethods());

app.use((ctx) => {
    ctx.body = 'Up and Running';
    ctx.status = 200;
});

if (!module.parent || module.parent.filename.indexOf('api/index.js') !== -1) {
    app.listen(port);
    console.info(`> API server listening on port ${port} for ${env}`);
    console.info('Press CTRL+C to stop server');
}

export default app;
