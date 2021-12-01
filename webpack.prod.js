const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name][chunkhash].bundle.js',

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.(ts|tsx)$/,
                use:[
                    {
                        loader:'awesome-typescript-loader',
                        // options:{
                        //     transpileOnly: true,	//只进行语法转换,不进行类型校验,提高构建速度
                        // }
                    }
                ],
                exclude:/node_modules/
            }
        ]
    },
    mode: 'production',
    resolve: {
        alias: {
            '@components': path.join(__dirname, 'src/components')
        },
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            title: 'Webpack Test',
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            name: 'common.js'
        },
      },
}