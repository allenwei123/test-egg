
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    // var array = {a:'夏威夷果1',b: 112 };
    let user = await this.ctx.model.User.find({a:/智慧果/i});
    this.ctx.body = user;
    this.ctx.set('Content-type','application/json;charset=utf-8')
  }
}

module.exports = UserController;
