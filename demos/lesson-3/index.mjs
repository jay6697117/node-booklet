// const { ziyue1, a1, b1 } = require('./ziyue.js');
// import fs from './ziyue.cjs';
// console.log('fs', fs);
// const { ziyue1, a1, b1 } = fs;
// console.log('ziyue1', ziyue1);
// console.log('a1', a1);
// console.log('b1', b1);

// const str = process.argv[2];
// console.log('str', str);

// console.log(ziyue1(str || '哈哈啊哈哈'));

(async () => {

  // const fs = await import('./ziyue.cjs');
  // console.log('fs', fs);
  // const { ziyue1, a1, b1 } = fs;
  // console.log('ziyue1', ziyue1);
  // console.log('a1', a1);
  // console.log('b1', b1);

  // const str = process.argv[2];
  // console.log('str', str);

  // console.log(ziyue1(str || '巧言令色，鮮矣仁！'));

  console.log('-- 请耐心等待 --');
  setTimeout(async () => {
    const fs = await import('./ziyue.cjs');
    console.log('fs', fs);
    const { ziyue1, a1, b1 } = fs;
    console.log('ziyue1', ziyue1);
    console.log('a1', a1);
    console.log('b1', b1);

    const str = process.argv[2];
    console.log('str', str);

    console.log(ziyue1(str || '巧言令色，鮮矣仁！'));
    console.log('-- 结束啦啦啦 --');
  }, 3000)
})();
