const defaultAvailableMethods = ['GET', 'POST', 'PUT', 'DELETE'];

export default (availableMethods = defaultAvailableMethods) =>
    async (ctx, next) => {
        const clean = method => method.toLowerCase().trim();
        const method = clean(ctx.method);
        const isAllowed = availableMethods.map(clean).includes(method);

        if (!isAllowed) {
            ctx.status = 405; // Method Not Allowed
            ctx.body = {};
            return;
        }

        await next();
    };
