'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/first', controller.home.first);
  router.get('/redirect', controller.home.redirect);

  //homePage
  router.get('/public/first', controller.homePage.first);
  router.get('/public/getList',controller.homePage.getList);

  //userPage
  router.get('/public/user', controller.user.index);
};
