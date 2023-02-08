const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        host: 'localhost',
        open: {
            target: ['/'],
            app: {
                name: 'chrome',
            },
        },
        port:3002,
        compress:false,
        hot:true,
        historyApiFallback:true,
        static:{
            directory: path.join( __dirname,'../dist'),
        },
        proxy:{
            './service':{
                target: 'http://localhost:3000',
            }
        }
    },
    plugins:[new ReactRefreshWebpackPlugin()],
}
module.exports = merge(baseConfig,devConfig)