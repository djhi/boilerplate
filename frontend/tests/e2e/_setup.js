import frontendServer from '../../src';
import driver from '../chromeDriver';

let server;

before(async function beforeTests() {
    this.timeout(10000);
    server = await frontendServer;
    const port = process.env.NODE_PORT || 8100;
    await server.listen(port);
});

after(async () => {
    if (server) {
        server.close();
    }
    await driver.quit();
});
