import Koa from 'koa';

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 3000;
const app = new Koa();

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
