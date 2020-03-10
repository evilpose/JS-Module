// 定义有依赖的模块

define([
    'dataService'
], function(dataService) {
    'use strict';
    let msg = 'alerter.js'
    function showMsg (){
        console.log(msg,dataService.getName())
    }
    // 暴露模块
    return {showMsg}
});