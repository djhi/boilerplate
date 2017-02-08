const { createServer } = require('http');
const { parse } = require('url');
const { resolve } = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
const port = process.env.NODE_PORT || 8080;

const app = next({
    dev,
    dir: resolve(__dirname, './'),
});
const handle = app.getRequestHandler();

const nextServer = app.prepare()
    .then(() => createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }))
    .then((server) => {
        if (!module.parent || module.parent.filename.indexOf('api/index.js') !== -1) {
            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`> Frontend ready on http://localhost:${port}`);
            });
        }

        return server;
    });

export default nextServer;
