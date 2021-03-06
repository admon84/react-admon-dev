const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$/,
                use: {loader: 'file-loader?name=[name].[ext]'}
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
