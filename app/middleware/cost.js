'use strict';

module.exports = options => {
  const header = options.header || 'X-Response-Time';

  return async function cost(ctx, next) {
    const now = Date.now();
    await next();
    ctx.set(header, `${Date.now() - now}ms`);
  };
};
