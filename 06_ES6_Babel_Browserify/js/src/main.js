// 引入其他的模块

// 语法 ： import xx from '路径'

import $ from 'jquery'

import {foo,bar} from './module1'
import {fun, fun2} from './module2'
import module3 from './module3'

$('body').css('background-color','green')

// console.log(module1,module2)
foo()
bar()
fun()
fun2()
module3.foo()
// module3.foo('外面进来的')