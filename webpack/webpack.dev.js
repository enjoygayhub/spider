const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        host: 'localhost',
        port:8088,
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
    }
}
module.exports = merge(baseConfig,devConfig)