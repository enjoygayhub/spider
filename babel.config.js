// const isDEV = process.env.NODE_ENV === 'dev' // 是否是开发模式

// module.exports = function (api) {
//     api.cache(true);
//     const plugins =  [
//         isDEV && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
        
//       ].filter(Boolean) // 过滤空值;

//     return {
//         // 这个不设置的话，webpack 魔法注释会被删除，魔法注释用于分包
//         comments: true,
//         plugins,
//     };
// };
