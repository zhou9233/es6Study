{
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
}
{
    //g y 区别
    //g在exec完后会在之后的中间找
    //y在exec完后会在之后的第一个字符找
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));
    //是否开启y模式
    console.log(a1.sticky,a2.sticky);
}
{
    //u模式
    console.log('')
}