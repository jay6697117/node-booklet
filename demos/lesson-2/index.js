import { a, b, ziyue } from './ziyue.js';
import ziyueDefault from './ziyue.js';// ziyue 或其他任意名字都可以
import * as total from './ziyue.js';

console.log('total', total)
console.log('total.a', total.a)
console.log('total.b', total.b)
console.log('total.ziyue', total.ziyue)
console.log('total.default', total.default)
console.log('a:', a);
console.log('b:', b);
console.log('ziyue:', ziyue);
console.log('ziyueDefault:', ziyueDefault);
console.log(ziyueDefault === ziyue);

const argv = process.argv;
const str1 = argv[2] || '巧言令色，鮮矣仁！';
const str2 = argv[2] || 'hello, world！';
console.log(ziyue(str1));
console.log(ziyueDefault(str2));
