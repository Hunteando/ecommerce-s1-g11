const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        publicPath: '/dist/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.tsx', 'ts'],
        alias: {
            '@component': path.resolve(__dirname, 'src/components/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@utils': path.resolve(__dirname, 'src/utils/')
        }
    },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
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
                test: /\.(png|jpg|gif|jpeg|web)$/i,
                type: 'asset/resource',
                use: ['file-loader?name=[name].[ext]'],
                generator: {
                    filename: "public/[hash][ext][query]",
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
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
            template: path.resolve(__dirname, "public", "index.html"),
            filename: './index.html',
            favicon: './public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 64340
    }
}