'use strict';

const Controller = require('egg').Controller;

class HomePageController extends Controller {
  async first() {
    this.ctx.body = {name: "allen"};
    this.ctx.set('Content-type','application/json;charset=utf-8')
  }
  async getList() {
    this.ctx.body = [
        {id: 0, name: '商品一'},
        {id: 1, name: '商品二'},
        {id: 2, name: '商品三'},
        {id: 3, name: '商品四'},
    ]
    this.ctx.set('Content-type','application/json;charset=utf-8')
  }
}

module.exports = HomePageController;
