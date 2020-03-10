(function (){

    requirejs.config({
        // baseUrl :'js/',  //基本的路径 出发点在根目录
        paths:{    //配置路径
            dataService:'./modules/dataService',        
            //不用加js结尾  因为会默认加。 目录 . 是不能去掉的，表示的是当前目录也就是paths的js的目录
            alerter:'./modules/alerter'
        }
        // 下面这个是暴露一个angular出去，能使外面拿到。但是比如jq本身就支持amd就不需要特意去暴露了
        // shim:{
        //     angular:{
        //         exports:'angular'
        //     }
        // }
    })

    requirejs(['alerter'],function(alerter){
        alerter.showMsg()
    })
})()