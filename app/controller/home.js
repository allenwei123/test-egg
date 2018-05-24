'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.redirect('/public/home.html')
  }
  async first() {
    this.ctx.body = 'hello allenwei123';
  }
  async redirect() {
    this.ctx.unsafeRedirect('https://www.baidu.com');
  }
}

module.exports = HomeController;
