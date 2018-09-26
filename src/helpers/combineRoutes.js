import compose from 'koa-compose';

export function combineRouters(routers) {
  return () => {
    if (!Array.isArray(routers)) {
      routers = [...arguments];
    }

    const middleware = [];

    routers.forEach(router => {
      middleware.push(router.routes());
      middleware.push(router.allowedMethods({ throw: true }));
    });

    return compose(middleware);
  };
}
