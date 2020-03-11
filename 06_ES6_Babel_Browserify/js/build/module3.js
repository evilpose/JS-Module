'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 可以暴露任意数据类型 暴露什么数据接受到的就是什么数据

exports.default = {
    // console.log('我说默认暴露的箭头函数')
    msg: '默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
    /* foo(data){
        console.log(data)
    } */

};