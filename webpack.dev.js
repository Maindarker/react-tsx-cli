const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//js压缩
const TerserPlugin = require("terser-webpack-plugin");
//css压缩
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const webpack = require('webpack');
const webpackConfig =  {
    entry: {
        index: './index.js',
        // another: './another.js'
        // index: {
        //     import: './index.js',
        //     dependOn: 'shared'
        // },
        // another: {
        //     import: './another.js',
        //     dependOn: 'shared',
        // },
        // shared: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    cache: true,
    // {
    //     type: 'filesystem', // 使用文件缓存
    //     allowCollectingMemory: true,
    // },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // 'style-loader', //与MiniCssExtractPlugin有冲突
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test:/\.(ts|tsx)$/,
            //     use:[
            //         {
            //             loader:'awesome-typescript-loader',
            //             // options:{
            //             //     transpileOnly: true,	//只进行语法转换,不进行类型校验,提高构建速度
            //             // }
            //         }
            //     ],
            //     exclude:/node_modules/
            // }
        ]
    },
    mode: 'development', //webpack5里面默认为development,无法通过CLK设置mode
    devtool: 'source-map',
    devServer: {
        port: 5500, // 端口
        hot: true, // 开启热更新
        open: true // 启动开启浏览器
    },
    resolve: {
        alias: {
          "@components": path.resolve(__dirname,'src/components'),
        },
        extensions: [".tsx",".jsx", ".js"], 
    },
    plugins: [
        //https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'head',
            title: 'Just a test',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ProgressBarPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false, //默认值：true。在默认浏览器中自动打开报告。
            generateStatsFile: false, // 是否生成stats.json文件
        }),
        new PurgeCSSPlugin({
            // paths: path.join(__dirname, 'src'),
            paths: glob.sync(`src/**/*`, { nodir: true }),
        }),
        new CleanWebpackPlugin(),
        //使用 react-refresh-webpack-plugin 热更新 react 组件。
        // new ReactRefreshWebpackPlugin(),
        // new FriendlyErrorsWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            name: 'common'
        },
      },
}

module.exports = webpackConfig