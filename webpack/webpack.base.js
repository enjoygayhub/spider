const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')


const { NODE_ENV } = process.env;
console.log('当前环境：', NODE_ENV)
const definePlugin = new webpack.DefinePlugin({
    NODE_ENV:JSON.stringify(NODE_ENV) ,
});

module.exports = {
    entry: path.join(__dirname,'../src/index.tsx'),
    output: {
        filename: '[name]/[name].bundle.js' ,
        path: path.join(__dirname,'../dist'),
        globalObject: 'this',
        publicPath: './' // 打包后文件的公共前缀路径
    },
    module: {
        rules: [
            {
                test: /.(tsx|ts)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[ "@babel/preset-react","@babel/preset-typescript"]
                    }
                },
                exclude:[/node_modules/, /public/]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            inject:true
        }),
        definePlugin
    ],
    resolve: {
        extensions:['.tsx','.ts','.js'],
    }
}