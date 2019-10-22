var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var path = require('path');

module.exports = {

    mode: "development",

    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'CoderLab',
            template: './src/index.ejs', 
            // favicon: '../src/assets/img/favicon.png',
            cdns: [],
            metas: [
                {"charset": "utf-8"},
                {"name": "author"},
                {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
                {"name": "viewport", "content": "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}
            ]
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'main.css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        // new BundleAnalyzerPlugin()
    ],

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
