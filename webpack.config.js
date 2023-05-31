const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true, //번들 파일이 생성될때 지우고 다시 생성
    },
    devtool: "source-map",
    resolve : {
        extensions : ['.js', '.jsx']
    },
    mode: "development",
    devServer: {
        host: "localhost",
        port: 8082,
        open: true,
        watchFiles: "./src/index.jsx",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "keyboard",
            template: "./src/index.html",
            inject: "body",
            favicon: "./favicon.ico",
        }),
        new MiniCssExtractPlugin({ filename: "style.css" }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.jsx?/, // 대상 설정 정규식
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            }
        ],
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    },
};
