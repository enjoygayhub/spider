const { merge } = require('webpack-merge')
const path = require('path')
const baseConfig = require('.//webpack.base.js')
const CopyPlugin = require('copy-webpack-plugin')

const prodConfig = {
    mode:'production',
    plugins:[
        new CopyPlugin({
            patterns:[{
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
                filter: source => {
                    return !source.includes('index.html') // 忽略index.html
                }
            }]
        })
    ]
}
module.exports = merge(baseConfig,prodConfig);