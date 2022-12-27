const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.tsx', 'ts'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css|.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /.(png|jpg|gif|jpeg|web)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.ttf|ttc$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext]",
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
}