const a = 10;
const b = 'hello';
const ziyue = text => `
                 __._
                / ___)_
               (_/Y ===\\                            __
               |||.==. =).                            |
               |((| o |p|      |  ${text}
            _./| \\(  /=\\ )     |__
          /  |@\\ ||||||||.
         /    \\@\\ ||||||||\\
        /   \\  \\@\\ ||||||//\\
       (     Y  \\@\\|||| // _\\
       |    -\\   \\@\\ \\\\//    \\
       |     -\\__.-./ //\\.---.^__
       | \\    /  |@|__/\\_|@|  |  |
       \\__\\      |@||| |||@|     |
       <@@@|     |@||| |||@|    /
      / ---|     /@||| |||@|   /
     |    /|    /@/ || |||@|  /|
     |   //|   /@/  ||_|||@| / |
     |  // \\ ||@|   /|=|||@| | |
     \\ //   \\||@|  / |/|||@| \\ |
     |//     ||@| /  ,/|||@|   |
     //      ||@|/  /|/||/@/   |
    //|   ,  ||//  /\\|/\\/@/  / /
   //\\   /   \\|/  /H\\|/H\\/  /_/
  // |\\_/     |__/|H\\|/H|\\_/
 |/  |\\        /  |H===H| |
     ||\\      /|  |H|||H| |
     ||______/ |  |H|||H| |
      \\_/ _/  _/  |L|||J| \\_
      _/  ___/   ___\\__/___ '-._
     /__________/===\\__/===\\---'

`;

export { a, b, ziyue };
export default ziyue;

// 可能你觉得export {a, b, c}这样的形式是导出了一个对象，认为可以将export写成如下形式
// export {foo: 'bar'}; // 其实这是错误的语法
// 但实际上这是不对的，我们只能写成：
// const foo = 'bar';
// export {foo};
// 或者我们可以简写成：
// export const foo = 'bar';
// 如果我们需要在 export 的时候重新命名导出的 API 名字，可以这么写：
// const a = 10;
// const b = 'hello';
// const const name = () => {
//   return 'greeting';
// };
// export {
//   a as d,
//   b as e,
//   c as f
// }; // 导出 a、b、c 三个数据，重新命名为 d、e、f
