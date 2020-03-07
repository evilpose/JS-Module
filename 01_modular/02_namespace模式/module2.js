/* namespace模式 ：简单的对象封装 */

let obj = {
    msg : 'module2',
    foo(){
        console.log('foo()',this.msg)
    }
}