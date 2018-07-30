class Test{
    constructor(){
        this.a = 'hello world'
    }
}

let test = new Test();

document.body.innerHTML = test.a;
//因为我们的文件入口是index 所以要在这个目录引入lesson1.js
import './class/lesson1';
import './class/lesson2';
import './class/lesson3';