const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

commonConfig = {
    entry: {
        app: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
        vendor: [
            "react",
            "react-router-dom",
            "redux",
            "react-dom",
            "react-redux"
        ]
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "./public/[name].[chunkhash:5].js",
        chunkFilename: "./public/[name].[chunkhash:5].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader?limit=8192&name=./public/img/[name].[ext]",
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "./src/index.html")
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        })
    ],
    //resolve配置用来影响webpack模块解析规则。解析规则也可以称之为检索，索引规则。配置索引规则能够缩短webpack的解析时间，提升打包速度
    resolve: {
        alias: {
            pages: path.join(__dirname, "src/pages"),
            components: path.join(__dirname, "src/components"),
            router: path.join(__dirname, "src/router"),
            actions: path.join(__dirname, "src/redux/actions"),
            reducers: path.join(__dirname, "src/redux/reducers")
        }
    }
};

module.exports = commonConfig;
